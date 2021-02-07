<?php

$basePath = "../dist/media/crypt-ai";
foreach (new DirectoryIterator($basePath) as $fileInfo) {
    if($fileInfo->isDot()) continue;
    $arr = explode('_', $fileInfo->getFilename());
    exec("mv ". $basePath ."/". $fileInfo->getFileName() ." ". $basePath ."/". $arr[0] . ".mp3");
    echo "Changed ". $fileInfo->getFileName() . " to ". $arr[0] . ".mp3\r\n";
}
