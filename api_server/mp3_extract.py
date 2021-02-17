# 모듈 로딩 후 오디오 추출
import moviepy.editor as mp
#(로컬 기준) 같은 프로젝트 파일 내에 있는 mp4 영상을 clip에 저장
clip = mp.VideoFileClip("고봉밥_팀 소개 영상.mp4")
#audio를 사용해서 mp4 파일(clip)을 mp3 파일로 다시 저장
clip.audio.write_audiofile("고봉밥_팀 소개 음성.mp3")