from __future__ import print_function
import time
import boto3

transcribe = boto3.client('transcribe')
job_uri = "https://kpmg-gobongbob.s3.us-east-2.amazonaws.com/input_video/example.mp4"
job_name = job_uri[62:].rstrip(".mp4")


transcribe.start_transcription_job(
    TranscriptionJobName=job_name,
    Media={'MediaFileUri': job_uri},
    MediaFormat='mp4',
    LanguageCode='en-US'
)

while True:
    status = transcribe.get_transcription_job(TranscriptionJobName=job_name)
    if status['TranscriptionJob']['TranscriptionJobStatus'] in ['COMPLETED', 'FAILED']:
        break
    print("Not ready yet...")
    time.sleep(5)

print(
    f"transcript URL is {status['TranscriptionJob']['Transcript']['TranscriptFileUri']}")
