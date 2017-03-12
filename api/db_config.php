<?php
  $host     = "localhost";
  $port     = 3306;
  $socket   = "";
  $user     = "root";
  $password = "123456";
  $dbname   = "h_blog";

  $mysqli = new mysqli($host, $user, $password, $dbname, $port, $socket)
      or die ('Could not connect to the database server' . mysqli_connect_error());
?>