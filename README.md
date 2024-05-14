# Dev Gab
![License](https://img.shields.io/badge/License-MIT-9cf.svg)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Technologies Used](#technologies-used)
* [License](#license)


## Description
The Dev Gab app is a content-management-style (CMS) blog site where developers in the tech industry can post articles in areas relating to the tech industry. The Express.js API, Sequelize, and a MySQL database allow users to add, edit, and delete their comments and posts.

Future development for this app could include a function for users to save posts to read at a later date or the function to allower users to repond to other user comments.


## Installation
* [Inquirer v8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4) must be installed to operate this app.
* [MySQL2](https://www.npmjs.com/package/mysql2) must be installed to operate this app.
* [Sequelize](https://www.npmjs.com/package/sequelize) must be installed to operate this app.
* [dotenv](https://www.npmjs.com/package/dotenv) must be installed to operate this app.
* [Insomnia](https://docs.insomnia.rest/insomnia/install)  must be installed to operate this app.


## Usage
[Clone the repository](https://github.com/eepitsporsche/dev_gab) to your machine and open the application in VS Code.

<p align="center"><img src="./assets/images/cyber_store_services_github_repo.png" alt="Dev Gab GitHub Repo"></p>

* To initiate the Dev Gab App, enter the <code>node server.js</code> command into the server.js terminal.

> [!IMPORTANT]
 Ensure you have installed all dependencies listed under [Installation](#installation) before initiating the program.

* WIthin the .env file, enter the MySQL authentication information in the <code>DB_USER</code> and <code>DB_PASS</code> fields.

* Initiate the MySQL shell using the <code>mysql -u root -p</code> command and enter your MySQL password when prompted.

* Source your database file using the command <code>source db/schema.sql;</code> and exit MySQL with the command <code>exit</code>.

* Apply seed data to the database using the command <code>npm run seed</code>.

* Start the program using the command <code>npm start</code>.

* Use the Insomnia app to test route functionality.

<p align="center"><img src="./assets/images/cyber_store_services_insomnia_ get_demo.png" alt="Cyber Store Services Insomnia GET Demo"></p>

<p align="center"><img src="./assets/images/cyber_store_services_insomnia_put_demo.png" alt="Cyber Store Services Insomnia PUT Demo"></p>


## Credits
* [mdn web docs_](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) for information on cookie attributes.


## Technologies Used
* VS Code
* JavaScript
* Node.js
* MySQL2
* Sequelize
* dotenv
* Insomnia


## License
<a href="https://opensource.org/licenses/MIT">MIT License</a>

Copyright© 2024 Porsche Herskorn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### <p align="center">[Back to Top](#dev-gab)</p>