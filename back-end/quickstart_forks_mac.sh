#!/bin/bash

ffmpeg -f avfoundation -framerate 30 -video_size 1280x720 -pixel_format 0rgb -i 0: -filter_complex "mpdecimate,setpts=N/FRAME_RATE/TB [output1];[output1]eq=brightness=0.25:saturation=2 [output3];[output3] format=rgb24" -f caca -antialias prefilter -color fullgray -driver raw - | cacaserver &

ffmpeg -f avfoundation -i :0 -c:a libmp3lame -b:a 32k -q 9 -f rtp rtp://10.19.130.172:1234 &

ffplay rtp://10.19.128.13:1234 &

sleep infinity

