# kkkt-church-blog-web-application
This is a web application built using Node.js, Express, EJS, and MongoDB for a church blog. Users can create, view, and read posts.
Features
-Home page displays all blog posts.
-Create new posts on the "Compose" page.
-View individual posts on their own pages.
Technologies Used
-Backend: Node.js, Express
-Frontend: EJS for templating
-Database: MongoDB (local or cloud-based with MongoDB Atlas)
-Other: Body-parser for handling form data
![1](https://github.com/user-attachments/assets/7971d6d7-8053-4a3c-8c91-4515cbdf5b84)
![2](https://github.com/user-attachments/assets/48c2a81b-6d1d-4853-ade3-d86f4fe5a3d7)
![3](https://github.com/user-attachments/assets/2ceed0a1-badc-4f8d-8076-c964f11e6aac)
Getting Started
Prerequisites
-Node.js
-MongoDB (You can use either a local MongoDB instance or MongoDB Atlas for a cloud-based solution.)
Installation
1.Clone this repository:

2.Navigate to the project folder:
cd kkkt-church-blog-web-application-main

3.Install the required dependencies:
npm install

4.Set up MongoDB:
-For local MongoDB, ensure it is running on mongodb://localhost:27017/kkktblogDB.
-For cloud MongoDB (e.g., MongoDB Atlas), update the connection string in app.js:
mongoose.connect("your-mongodb-connection-string");

Running the Application
1.Start the server:
node app.js
2.Open your browser and navigate to:
http://localhost:3000

Usage
-Visit the home page to see all blog posts.
-Navigate to /compose to create a new post.
-View individual posts by clicking on them.

License
This project is licensed under the MIT License
