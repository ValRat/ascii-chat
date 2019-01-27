#/usr/bin/python3

from enum import Enum
import requests as req
import subprocess

from flask import Flask
app = Flask(__name__)

class Status(Enum):
    IN_CALL = 0
    RECV_CALL = 1
    SEND_CALL = 2
    NO_CALL = 3

_status = Status.NO_CALL

other_server = 'localhost:5769'

@app.route('/do_call')
def do_call():
    r = req.get(other_server + '/call')
    _status = Status.SEND_CALL

@app.route('/call')
def call():
    _status = Status.RECV_CALL

@app.route('/status')
def status():
    return str(_status)

@app.route('/decline')
def decline():
    _status = Status.NO_CALL
    r = req.get(other_server + '/terminate')

@app.route('/accept')
def accept():
    start_call()
    r = req.get(other_server + '/start_call')

@app.route('/start_call')
def start_call():
    _status = Status.IN_CALL
    # Start hacking in bash
    subprocess.Popen('ffmpeg -i /dev/video0 -video_size 1280x720 -c:v rawvideo -pix_fmt rgb24 -filter_complex "mpdecimate,setpts=N/FRAME_RATE/TB [in]; [in] eq=brightness=0.25:saturation=2:contrast=1"  -f caca -color fullgray  -algorithm fstein  -antialias prefilter -charset ascii  -driver raw - | cacaserver')

    subprocess.Popen('ffmpeg -f alsa -i hw:1 -c:a libmp3lame -b:a 32k -q 9 -f rtp rtp://10.19.128.13:1234')

    subprocess.Popen('ffplay rtp://10.19.130.172:1234')
    return 'Test'



@app.route('/terminate')
def terminate():
    subprocess.run(['pkill', 'ffmpeg'])
    subprocess.run(['pkill', 'ffplay'])
    return 'Test'