1. Installation.

MacOS : If you are MACOS user you can use your terminal for the installation.
Windows 10 (or newer) : If you are Windows user you can install WSL in Microsoft Store it is a subsystem for Linux utils.
Linux (any distribution) : If you are Linux user you can use your terminal for the installation.

After you downloaded the sources :

Modules : Download modules with npm i (jsonwebtoken, express, sequelize, dotenv, cookie-parser, bcrypt, ts-node, nodemon, mariadb-server)

1.a : npm i jsonwebtoken
1.b : npm i express
1.c : npm i sequelize
1.d : npm i dotenv
1.e : npm i cookie-parser
1.f : npm i bcrypt
1.g : npm i ts-node
1.h : npm i nodemon

Install Postman at : https://www.postman.com/
Compatible with Windows, MacOS and Linux

2. How to Setup

Node Setup.

MacOS : 
2.a : brew install node
2.b : sudo npm install -g typescript
You may have to use sudo if you don't have permissions.

Database Setup.
2.c : brew install mariadb
2.d : brew services start mariadb (to start database)
2.e : mysql_secure_installation (to setup the database)
You can setup a new password for the root (as you wish)
2.f : mariadb -u root -p (connection to the database)
2.g : CREATE DATABASE IF NOT EXISTS turbodb;
This command will create a database with name 'turbodb'

Windows (WSL): 
2.a : sudo apt install nodejs
2.b : sudo npm install -g typescript
You may have to use sudo if you don't have permissions.

Database Setup.
2.c : sudo apt install mariadb-server
2.d : sudo /etc/init.d/mysql start (to start database)
2.e : mysql_secure_installation (to setup the database)
You can setup a new password for the root (as you wish)
2.f : mariadb -u root -p (connection to the database)
2.g : CREATE DATABASE IF NOT EXISTS turbodb;
This command will create a database with name 'turbodb'

Linux : 
2.a : sudo apt install nodejs
2.b : sudo npm install -g typescript
You may have to use sudo if you don't have permissions.

Database Setup.
2.c : sudo apt install mariadb-server
2.d : sudo /etc/init.d/mysql start (to start database)
2.e : mysql_secure_installation (to setup the database)
You can setup a new password for the root (as you wish)
2.f : mariadb -u root -p (connection to the database)
2.g : CREATE DATABASE IF NOT EXISTS turbodb;
This command will create a database with name 'turbodb'

3. Database Migration.

For this step it is the same for Windows, MacOS and Linux users.

Now as you see there is a directory : "src"

3.a : ts-node src/database/migrate.ts OR tsc src/database/migrate.ts && node src/database/migrate.js
Use the tsc command only if you didn't installed ts-node

This command will create automatically the tables on the database and sync all the data on : 'turbodb'

4. Start the API.

Finally, after all these installations that have surely tired you we move on to the serious stuff.

Run the script API.
4.a : npm run dev
4.b : open Postman Application

With Postman you can use GET, POST, PUT, PATCH, DELETE request.
Test the queries as you wish, the code is commented for your understand.

If you have any errors or questions send me an email at ouabbo_o@etna-alternance.net.