# Basic Application Form using PHP
Basic Application Form to accept PDF/Word Document with less than 10MB in Size

## Steps to Install(Windows)
1) Install XAMPP Server for Windows - [steps](https://www.wikihow.com/Install-XAMPP-for-Windows)
2) Then Dowload this Folder and Extract it in htdocs folder
3) Now Start the **Apache** and **MySQL** Module's from XAMPP Control Panel
4) Open [localhost/phpmyadmin](http://localhost/phpmyadmin/) and create a new database named **db**
5) Import the Databsase using **db.sql** file in this folder - [for reference](https://stackoverflow.com/a/13956153)
6) Now go To [localhost](http://localhost) to view the Application
7) You can View Your Submissions in **submissions.php** page
8) All the Documents will be stored in **uploads** folder with the name of the document as the EmailId of the Applicant


### Note
* If you are deploying on Linux Server change the File paths in **uploader.php** page
* Also **PLEASE PROTECT *submissions.php* page WITH PASSWORD TO PREVENT ANY DATA LEAK**

#### Tech Stack Used - HTML, CSS, JS, PHP, MYSQL
