<?php 

//C'est un peu brut de décoffrage mais ça marche : 
//https://stackoverflow.com/questions/25727306/request-header-field-access-control-allow-headers-is-not-allowed-by-access-contr

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$response = [];
$errors = [];

if(!empty($_POST['contact'])){
  if(
    isset($_POST['contact']['nom']) 
    && isset($_POST['contact']['prenom'])
    && isset($_POST['contact']['sujet'])
    && isset($_POST['contact']['message'])
    && isset($_POST['contact']['email'])
  ){

    $prenom = filter_var($_POST['contact']['nom'],FILTER_SANITIZE_STRING);
    $nom = filter_var($_POST['contact']['prenom'],FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST['contact']['phone'],FILTER_SANITIZE_STRING);
    $sujet = filter_var($_POST['contact']['sujet'],FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['contact']['message'],FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['contact']['email'],FILTER_SANITIZE_EMAIL);

    $from = 'sangoku@originalcosmic.fr';
    $to = 'contact@originalcosmic.fr';
    $headers = "From: $from\r\nReply-to: $email";

    if(empty($errors)){

      $send = mail($to, $sujet, $message,$headers);
      if($send){
      
        $response = [
          'type'=>'success',
          'message'=>'Message envoyé.'
        ];
        die(json_encode($response));

      }else{
        $response = [
          'type'=>'success',
          'message'=>'Message validé (mais pas envoyé).'
        ];
        die(json_encode($response));
      }

    }else{

      $response = [
        'type'=>'error',
        'errors'=>$errors
      ];
      die(json_encode($response));

    }

  }else{

    die(json_encode([
      'type'=>'error',
      'value'=>'Il manque un champ.'
    ]));

  }

  

}
?>