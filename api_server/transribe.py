from __future__ import print_function
import time
import boto3
import pandas as pd

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
    result = transcribe.get_transcription_job(TranscriptionJobName=job_name)
    if result['TranscriptionJob']['TranscriptionJobStatus'] in ['COMPLETED', 'FAILED']:
        break
    print("Not ready yet...")
    time.sleep(5)

if result['TranscriptionJob']['TranscriptionJobStatus'] == "COMPLETED":
    data = pd.read_json(result['TranscriptionJob']
                        ['Transcript']['TranscriptFileUri'])

print(data['results'][1][0]['transcript'])
>>>>>> > upstream/main
