from __future__ import print_function
import pandas as pd
import time
import boto3

transcribe = boto3.client('transcribe')

def check_job_name(job_name):
    job_verification = True
    # all the transcriptions
    existed_jobs = transcribe.list_transcription_jobs()
    for job in existed_jobs['TranscriptionJobSummaries']:
        if job_name == job['TranscriptionJobName']:
            job_verification = False
            break
    if job_verification == False:
        command = input(job_name + " has existed. \n Do you want to override the existed job (Y/N): ")    
    
        if command.lower() == "y" or command.lower() == "yes":                
            transcribe.delete_transcription_job(TranscriptionJobName=job_name)
        elif command.lower() == "n" or command.lower() == "no":      
            ob_name = input("Insert new job name? ")      
            check_job_name(job_name)
        else:
            print("Input can only be (Y/N)")
            command = input(job_name + " has existed. \nDo you want to override the existed job (Y/N): ")
            check_job_name(job_name)

    return job_name


def amazon_transcribe(audio_file_name):
    job_uri = "https://kpmg-gobongbob.s3.us-east-2.amazonaws.com/input_video/example.mp4"
    job_name = (audio_file_name.split('.')[0]).replace(" ", "")
    file_format = audio_file_name.split('.')[1]

    job_name = check_job_name(job_name)

    transcribe.start_transcription_job(
        TranscriptionJobName=job_name,
        Media={'MediaFileUri': job_uri},
        MediaFormat = file_format,
        LanguageCode='en-US'
    )
  
    while True:
        result = transcribe.get_transcription_job(TranscriptionJobName=job_name)
        if result['TranscriptionJob']['TranscriptionJobStatus'] in ['COMPLETED', 'FAILED']:
            break
        print("Not ready yet...")
        time.sleep(5)

    #print(result)

    if result['TranscriptionJob']['TranscriptionJobStatus'] == "COMPLETED":
        data = pd.read_json(result['TranscriptionJob']['Transcript']['TranscriptFileUri'])
    #print(data['results'][1][0]['transcript'])
    #time_tag = []
    #for i in range(len(data['results'][0])):
        #if('start_time' in data['results'][0][i] and 'end_time' in data['results'][0][i]):
            #time_tag.append([data['results'][0][i]['start_time'], data['results'][0][i]['end_time']])
    #print(time_tag)
    #print(data['results'][0])
    return([data['results'][1][0]['transcript'], data['results'][0]])
    #print(data['results'][1][0]['transcript'])

transcribe_result = amazon_transcribe("kpmg_transcript12.mp4")