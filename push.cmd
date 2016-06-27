@echo off
if "%1"=="mydb" goto db
goto git
:db
mysqldump -uroot -proot -hlocalhost mydb >D:\web\MyProjects\mydb.sql
goto git
:git
git add .
git commit -am "haha"
git push
