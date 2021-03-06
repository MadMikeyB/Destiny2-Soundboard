# Contributing 

- Grab the files in ogg format from the [GinsorAudioToolPlus](https://github.com/ElbowBaggins/GinsorAudioTool2Plus)
- Dump in `dist/media/{newcharactername}`
- Run them through `cd utils && ./convert.sh` (changing the path within the file to `dist/media/{newcharactername}`)
- Run through `cd utils && php renamer.php` (changing the path within the file to `dist/media/{newcharactername}`)
- Add new Soundboard Component (`cp src/js/components/Soundboards/CryptAI.vue src/components/Soundboards/NewCharacterName.vue`)
- Ensure you change the `name` and `dirname` params within `data()`
```
    name: 'New Character',
    dirname: 'new-character',
```
- Add new Soundboard Component to array in `src/js/routes.js`
- Add new Soundboard Component to Nav in `src/js/components/Layout/NavMenu.vue`
- Visit the route you set up in `routes.js` and see if it all works!
- Submit a [Pull Request](https://github.com/MadMikeyB/Destiny2-Soundboard/pulls)
