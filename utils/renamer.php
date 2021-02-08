<?php
/** ========= EDIT PATH HERE =========== **/
$basePath = "../dist/media/saint-14";
/** ========= STOP EDITING ============= **/
@exec("mkdir ". $basePath . "/renamed");
foreach (new DirectoryIterator($basePath) as $fileInfo) {
    if($fileInfo->isDot()) continue;
    $arr = explode('_', $fileInfo->getFilename());
    if ($fileInfo->getExtension() == 'mp3') {
        exec("mv ". $basePath ."/". $fileInfo->getFileName() ." ". $basePath ."/renamed/". $arr[0] . "." . $fileInfo->getExtension());
        echo "Changed ". $fileInfo->getFileName() . " to ". $arr[0] . "." . $fileInfo->getExtension() ."\r\n";
    }
}
@exec("mv ". $basePath ."/renamed/** ". $basePath);
@exec("rm -rf ". $basePath ."/renamed");
@exec("rm ". $basePath . "/*.ogg");
