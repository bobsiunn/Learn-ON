# s3 버킷에 영상을 올리는 코드

import logging
import boto3
from botocore.exceptions import ClientError

file_name = "./api_server/input_video/videoplayback.mp4"


def upload_file(file_name, bucket, object_name=None):
    # If S3 object_name was not specified, use file_name
    if object_name is None:
        object_name = file_name

    # Upload the file
    s3_client = boto3.client('s3')
    try:
        response = s3_client.upload_file(file_name, bucket, object_name)
    except ClientError as e:
        logging.error(e)
        return False
    return True


def main():
    s3 = boto3.client('s3')
    with open(file_name, "rb") as f:
        s3.upload_fileobj(f, "kpmg-gobongbob", file_name[13:])


if __name__ == "__main__":
    main()
