from __future__ import print_function
import logging
import boto3
from botocore.exceptions import ClientError
import pandas as pd
import time
import json

from uploading_to_s3 import upload_file
from transcribe import *
from getting_keyword import *

FILE_PATH = "./api_server/input_video/"
input_video = "videoplayback.mp4"


print("-------------uploading file---------------")
# uploding file
upload_file(FILE_PATH + input_video)


print("-------------transcribing file---------------")
# transcibing
# transcribe_result는 script, transcribe_data는 json 파일 자체를 의미합니다.
transcribe_result, transcribe_data = amazon_transcribe(input_video)

print("-------------getting keywords---------------")
# getting keyword with timeline
# 자세한 설명은 keyword.py에 결과값과 함께 나타나져 있습니다.
# results == keywords입니다.(혼동해서 사용됨)
result, times, words = making_times_words_list(transcribe_data)
keywords = gettig_keywords(result)
index_all = indexing_each_words(keywords, words)
is_straight = defining_is_straight(index_all)
json_val = matching_keyword_timeline(is_straight, times, index_all)
print(json_val)
