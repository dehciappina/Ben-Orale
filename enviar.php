<?php

$para = "ciappina_andre@hotmail.com";
$assunto = "Formulário de Contato";
$mensagem = "<strong>Nome: </strong>".$_POST['nome'];
$mensagem .= "<br><strong>E-mail: </strong>".$_POST['email'];
$mensagem .= "<br><strong>Telefone: </strong>".$_POST['tel'];
$mensagem .= "<br><strong>Mensagem: </strong>".$_POST['mensagem'];
$cabecalho =  "Content-Type:text/html; charset=UTF-8\n";
$cabecalho .= "From:  Contato pelo Site <ciappina_andre@hotmail.com>\n";
$cabecalho .= "X-Sender:  <ciappina_andre@hotmail.com>\n";
$cabecalho .= "X-Mailer: PHP  v".phpversion()."\n";
$cabecalho .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
$cabecalho .= "Return-Path:  <ciappina_andre@hotmail.com>\n";
$cabecalho .= "MIME-Version: 1.0\n";
if(mail($para, $assunto, $mensagem, $cabecalho)) { 
     echo "<script type=\"text/javascript\">".
          "alert('Voce recebera um contato o mais breve possivel.');".
          "window.location = 'index.html';".
          "</script>";
} else { 
     echo "Ocorreu um problema para enviar seu e-mail. Tente novamente.";
}

?>