# burger

The Buzz About Burgers is a restaurant application that allows users to input the name of burgers they would like to eat. 
![Burger Graphic](/public/assets/fullSiteRender.png)

## Installation
The software used to create this generator include: Javascript, Node.js, MySQL2, ENV, Express Handlebars and Express.

**Please use 'npm init -y' to install the NPM dependencies. Upon installation, confirm that all the packages were installed and appear in your package.json file.**
<br>
<br> 
If the dependencies listed above did not appear in your package.json file after running npm init-y, please run the following commands:
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MYSQL: npm i mysql2
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ENV: npm i dotenv
<br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXPRESS HANDLEBARS: npm i express-handlebars
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXPRESS: npm i express
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXPRESS HANDLEBARS: npm i express-handlebars

## Usage
The Buzz About Burgers is a restaurant application that allows users to input the name of burgers they would like to eat. When a user submits a burger it will display on the left side of the screen, waiting to be devoured. When the user clicks the "Devour" button; the burger moves to the other side of the page. Each burger submitted is stored in a MYSQL database.

## Links
The full application can be viewed on this heroku link: https://guides.github.com/features/mastering-markdown/
<br>
<br>
<br>

#### NOTES ABOUT THE PROCESS
It a great practice in setting up a full directory structure and linking various parts of the application. (Learning the Handelbars structure and how it relates to the public folder was a learning experience in GoogleFu.)

It felt rewarding each time a different route rendered and the server.js was still running. My 'add burger' button does render burgers that add to the page with a 'devour' button. However, the process was not without its challenges. The 'devour' button has an event listener. But, I was unable to solve making the burger jump to the other side of the page. Per the instructions, I did pseudoscode the possible solution. 