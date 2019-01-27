#!/bin/bash

ffmpeg -i /dev/video0 -video_size 1280x720 -c:v rawvideo -pix_fmt rgb24 -filter_complex "mpdecimate,setpts=N/FRAME_RATE/TB [in]; [in] eq=brightness=0.1:saturation=2:contrast=1"  -f caca -color fullgray  -algorithm fstein  -antialias prefilter -charset ascii  -driver raw - | cacaserver & 

ffmpeg -f alsa -i hw:1 -c:a libmp3lame -b:a 32k -q 9 -f rtp rtp://10.19.128.13:1234 &

ffplay rtp://10.19.130.172:1234 &

~/Downloads/ttyd_linux.x86_64 -p 8001 nc 10.19.130.172 51914 &

~/Downloads/ttyd_linux.x86_64 -p 8002 nc 10.19.128.13 51914 &

sleep infinity

