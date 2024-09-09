# kkkt-church-blog-web-application
This is a web application built using Node.js, Express, EJS, and MongoDB for a church blog. Users can create, view, and read posts.<br/><br />
Features<br />
-Home page displays all blog posts. <br />
-Create new posts on the "Compose" page. <br />
-View individual posts on their own pages.<br /><br />
Technologies Used<br />
-Backend: Node.js, Express<br />
-Frontend: EJS for templating<br />
-Database: MongoDB (local or cloud-based with MongoDB Atlas)<br />
-Other: Body-parser for handling form data
![1](https://github.com/user-attachments/assets/7971d6d7-8053-4a3c-8c91-4515cbdf5b84)
![2](https://github.com/user-attachments/assets/48c2a81b-6d1d-4853-ade3-d86f4fe5a3d7)
![3](https://github.com/user-attachments/assets/2ceed0a1-badc-4f8d-8076-c964f11e6aac)
Getting Started<br />
Prerequisites<br />
-Node.js<br />
-MongoDB (You can use either a local MongoDB instance or MongoDB Atlas for a cloud-based solution.)<br /><br />
Installation<br />
1.Clone this repository:<br />
git clone https://github.com/Atupakisyestephen/kkkt-church-blog-web-application.git<br />

2.Navigate to the project folder: <br />
cd kkkt-church-blog-web-application-main <br />

3.Install the required dependencies:<br />
npm install<br />

4.Set up MongoDB:<br />
-For local MongoDB, ensure it is running on mongodb://localhost:27017/kkktblogDB.<br />
-For cloud MongoDB (e.g., MongoDB Atlas), update the connection string in app.js:<br />
mongoose.connect("your-mongodb-connection-string");<br />

Running the Application<br />
1.Start the server:<br />
node app.js<br />
2.Open your browser and navigate to:<br />
http://localhost:3000<br />

Usage<br />
-Visit the home page to see all blog posts.<br />
-Navigate to /compose to create a new post.<br />
-View individual posts by clicking on them.<br />

License<br />
This project is licensed under the MIT License<br />
