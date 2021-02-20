import json
import boto3
import os
import sys
import uuid
import logging
import time
from urllib.request import urlopen


def create_uri(bucket_name, file_name):
    return "s3://"+bucket_name+"/"+file_name


def lambda_handler(event, context):

    # 새로운 객체가 들어오는지 체크되는 s3 버킷은 aws lambda의 트리거를 통해서 지정해줘야 합니다.
    # 결과값이 저장되는 s3 버킷입니다.
    output_s3 = "kpmg-output-text"

    logger = logging.getLogger()
    logger.setLevel(logging.INFO)

    transcribe_client = boto3.client('transcribe')

    logger.info('Found event{}'.format(event))

    for record in event['Records']:
        # Read the value of the eventSource attribute.
        #
        # You can use this to conditionally handle events
        # from different triggers in the same lambda function.
        event_source = record['eventSource']
        logger.info(event_source)

        # read S3 bucket and object key
        bucket = str(record['s3']['bucket']['name'])
        key = str(record['s3']['object']['key'])
        s3_uri = create_uri(bucket, key)
        file_type = "mp4"
        job_name = context.aws_request_id

        transcribe_client.start_transcription_job(TranscriptionJobName=job_name,
                                                  OutputBucketName=output_s3,
                                                  Media={
                                                      "MediaFileUri": s3_uri},
                                                  MediaFormat=file_type,
                                                  LanguageCode="en-US"
                                                  )

        while True:
            status = transcribe_client.get_transcription_job(
                TranscriptionJobName=job_name)
            if status["TranscriptionJob"]["TranscriptionJobStatus"] in ["COMPLETED", "FAILED"]:
                break
            print("It's inprogress")
            time.sleep(5)

        # print(status)
        # load_url = urlopen(status['TranscriptionJob']['Transcript']['TranscriptFileUri'])/
        # print(load_url)
        # data = json.dumps(json.load(load_url))

        # # #write results of entity analysis
        # # output_bucket = 'kpmg-output-text'
        # # output_key = 'transcribe-' + key
        # # output_obj = boto3.resource('s3').Object(output_bucket,output_key)
        # # output_obj.put(Body=data)

        # s3.put_object(Bucket = "kpmg-output-text", Key = "transcribeFile/{}.json".format(job_name), Body = load_json)

        # return the entities that were detected.
        return {
            'statusCode': 200,
            'body': json.dumps("Hello from Lambda!")
        }
