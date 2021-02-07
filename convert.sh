for i in ogg/crypt-ai/*.ogg; do ffmpeg -i "$i" "${i%.*}.mp3"; done
