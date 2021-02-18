# 모듈 로딩(version 1.0.3) 후 오디오 추출
from moviepy.editor import *
import os


def file_detection(input_video):
    output_name = input_video.rstrip(".MP4")
    # 추후에 쉽게 변경할 수 있도록 파일명 상대경로로 저장
    INPUT_VIDEO = "./api_server/input_video/" + input_video
    if os.path.exists(INPUT_VIDEO):
        return INPUT_VIDEO, output_name
    else:
        print("NO SUCH FILE")


def create_folder(directory):
    try:
        if not os.path.exists(directory):
            os.makedirs(directory)
    except OSError:
        print('Error: Creating directory. ' + directory)


def video_spliting(INPUT_VIDEO, output_name):
    # 영상길이를 기반으로 하여 시간대별로 잘라내는 코드

    # OUTPUT_PATH 생성
    OUTPUT_AUDIO_FOLDER = "./api_server/output_audio/" + output_name
    create_folder(OUTPUT_AUDIO_FOLDER)

    # (로컬 기준) 같은 프로젝트 파일 내에 있는 mp4 영상을 clip에 저장
    clip = VideoFileClip(INPUT_VIDEO)
    duration = int(clip.duration)

    # 영상을 자를 단위: s 단위
    step = 60
    time = 0

    while duration-time > step:
        clip_t = clip.subclip(time, time+60)
        clip_t.audio.write_audiofile(
            f"{OUTPUT_AUDIO_FOLDER}/{output_name}({int(time/step)}).mp3")
        time += step

    clip_t = VideoFileClip(INPUT_VIDEO).subclip(time, duration)
    clip_t.audio.write_audiofile(
        f"{OUTPUT_AUDIO_FOLDER}/{output_name}({int(time/step)}).mp3")

    clip.close()


def main():
    input_video = "example.MP4"
    INPUT_VIDEO, output_name = file_detection(input_video)
    video_spliting(INPUT_VIDEO, output_name)


if __name__ == "__main__":
    main()
