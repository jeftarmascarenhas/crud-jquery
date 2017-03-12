<?php
  define(DB_USER, 'root');
  define(DB_PASSWORD, '123456');
  define(DB_DATABASE, 'h_blog');
  define(DB_HOST, 'localhost');
  $mysqli= new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
?>