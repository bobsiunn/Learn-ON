import json
import boto3
import os
import sys
import uuid
import logging
import json
from getting_keyword import *


def lambda_handler(event, context):

    # 새로운 객체가 들어오는지 체크되는 s3 버킷은 aws lambda의 트리거를 통해서 지정해줘야 합니다. kpmg_transcribe의 output s3입니다.
    # 결과값이 저장되는 s3 버킷입니다.
    output_s3 = 'kpmg-keyword'

    logger = logging.getLogger()
    logger.setLevel(logging.INFO)

    comprehend_client = boto3.client('comprehend')

    logger.info('Found event{}'.format(event))

    for record in event['Records']:
        # Read the value of the eventSource attribute.
        #
        # You can use this to conditionally handle events
        # from different triggers in the same lambda function.
        event_source = record['eventSource']
        logger.info(event_source)

        # read S3 bucket and object key
        bucket = record['s3']['bucket']['name']
        key = record['s3']['object']['key']

        # read the contents of the document uploaded to S3
        obj = boto3.resource('s3').Object(bucket, key)
        data = obj.get()['Body'].read().decode('utf-8')
        data = json.loads(data)
        transcript = data['results']["transcripts"][0]['transcript']
        print(transcript)

        result, times, words = making_times_words_list(data)
        keywords = gettig_keywords(result)
        index_all = indexing_each_words(keywords, words)
        is_straight = defining_is_straight(index_all)
        json_val = matching_keyword_timeline(is_straight, times, index_all)
        # use Amazon comprehend to detect key_phrases in the text
        #key_phrases = comprehend_client.detect_key_phrases(Text=transcript, LanguageCode='en')

        # write results of entity analysis
        output_bucket = output_s3
        output_key = 'entityanalysis-' + key
        output_obj = boto3.resource('s3').Object(output_bucket, output_key)
        output_obj.put(Body=json_val)

    # return the entities that were detected.
    return {
        'statusCode': 200,
        'transcript': transcript,
        "key_phrases": json_val
    }
