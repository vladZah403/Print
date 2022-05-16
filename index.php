<?php
include 'index.html';
$token = "5355453926:AAGPhazapBJqxQds7cOkuMaum2zxj1hAZmg";
$chat_id = "1075053438";

if ($_POST['act'] == 'order') {
    $id = ($_POST['id']);
    $prod = ($_POST['prod']);
    $phone = ($_POST['phone']);
    $name = ($_POST["name"]);
    $email = ($_POST['email']);
    $text = ($_POST['text']);
    $num = ($_POST['num']);

    $arr = array(
        'id-Товару: ' =>$id,
        'Назва товару: ' => $prod,
        'Телефон: ' => $phone,
        "Ім'я:" => $name,
        'E-mail' => $email,
        'Кількість одиниць' => $num,
        'Додатковий текст:' => $text,
       

    
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

   
}

function sendFileTelegram($fileTempName) {
    $token = "5355453926:AAGPhazapBJqxQds7cOkuMaum2zxj1hAZmg";
    $chat_id = "1075053438";

    $urlSite = "https://api.telegram.org/bot{$token}/sendDocument";

    $document = new CURLFile(realpath($fileTempName));
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $urlSite);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, ["chat_id" => $chat_id, "document" => $document]);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type:multipart/form-data"]);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $out = curl_exec($ch);
    curl_close($ch);
}

sendFileTelegram($_FILES["fileImg"]["tmp_name"]);

?>