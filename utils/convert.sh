for i in ../dist/media/riven/*.ogg; do ffmpeg -i "$i" "${i%.*}.mp3"; done
