# 모듈 로딩(version 1.0.3) 후 오디오 추출
import moviepy.editor as mp

# 추후에 쉽게 변경할 수 있도록 파일명 상대경로로 저장
INPUT_VIDEO = "./api_server/input_video/example.MP4"
OUTPUT_AUDIO = "./api_server/output_audio/example.mp3"

# (로컬 기준) 같은 프로젝트 파일 내에 있는 mp4 영상을 clip에 저장
clip = mp.VideoFileClip(INPUT_VIDEO)
# audio를 사용해서 mp4 파일(clip)을 mp3 파일로 다시 저장
clip.audio.write_audiofile(OUTPUT_AUDIO)
clip.close()
