# s3 버킷에 영상을 올리는 코드

import logging
import boto3
from botocore.exceptions import ClientError

file_name = "./api_server/input_video/videoplayback.mp4"


def upload_file(file_name):
    s3 = boto3.client('s3')
    with open(file_name, "rb") as f:
        s3.upload_fileobj(f, "kpmg-gobongbob", file_name[13:])


def main():
    upload_file(file_name)


if __name__ == "__main__":
    main()
