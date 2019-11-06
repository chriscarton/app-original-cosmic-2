<?php 

header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$response = [];
$errors = [];

if(!empty($_POST)){
  if(
    isset($_POST['nom']) 
    && isset($_POST['prenom'])
    && isset($_POST['sujet'])
    && isset($_POST['message'])
    && isset($_POST['email'])
  ){

   if(strlen($_POST['nom']) ===0){
      $errors[] = [
        "field"=>"nom",
        "message"=>"Votre prénom est manquant."
      ];
    }
    if(strlen($_POST['prenom']) ===0){
      $errors[] = [
        "field"=>"prenom",
        "message"=>"Votre nom est manquant."
      ];
    }
    if(strlen($_POST['sujet']) ===0){
      $errors[] = [
        "field"=>"sujet",
        "message"=>"L'objet de votre message est manquant."
      ];
    }
    if(strlen($_POST['message']) <10){
      $errors[] = [
        "field"=>"message",
        "message"=>"Veuillez développer."
      ];
    }
    if(strlen($_POST['email']) ===0){
      $errors[] = [
        "field"=>"email",
        "message"=>"Votre email est manquant."
      ];
    }

    $prenom = filter_var($_POST['nom'],FILTER_SANITIZE_STRING);
    $nom = filter_var($_POST['prenom'],FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST['phone'],FILTER_SANITIZE_STRING);
    $sujet = filter_var($_POST['sujet'],FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'],FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'],FILTER_SANITIZE_EMAIL);

    if(!empty($_POST['email'])){
      if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) === false){
        //L'adresse email est incorrecte... 
        $errors[] = [
          "field"=>"email",
          "message"=>"L'adresse email est incorrecte."
        ];
      }
    }

    $from = 'sangoku@originalcosmic.fr';
    $to = 'contact@originalcosmic.fr';
    $headers = "From: $from\r\nReply-to: $email";

    if(empty($errors)){

      
      $send = mail($to, $sujet, $message,$headers);
      if($send){
      
        $response = [
          'type'=>'success',
          'message'=>'Message envoyé !'
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

  }

  

}
?>