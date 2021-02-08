for i in ../dist/media/saint-14/*.ogg; do ffmpeg -i "$i" "${i%.*}.mp3"; done
