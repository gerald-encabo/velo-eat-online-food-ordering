## Velo Eat - Online Food Ordering
 
Velo Eat is a TypeScript-based MERN Stack application designed for seamless online food ordering and delivery, offering a diverse selection of cuisine options to cater to various preferences. The platform is built to deliver a robust and user-friendly experience, supported by modern front-end and back-end technologies.

### Front-end: <br/>

The frontend showcases a modern tech stack and is designed to demonstrate the capabilities of Redux Toolkit and React while integrating responsive UI and key features.

Overview:
<ul>
<li>Demonstrates the use of Redux Toolkit and React for state management and UI.</li>
<li>Includes advanced features like pagination, carousels, and hooks.</li>
<li>Responsive design ensures compatibility across devices and browsers.</li>
<li>Global State Management: Redux Toolkit handles authentication, user data, and more.</li>
<li>Responsive Design: Ensures usability on desktops, tablets, and mobile devices using Bootstrap and Sass.</li>
<li>API Integration: Axios simplifies communication with the backend (e.g., fetching data, login requests).</li>
<li>Dynamic Components: Features like pagination, carousels, and icons enhance interactivity.</li>
<li>Date and Time Formatting: Moment.js provides seamless date/time manipulation and display.</li>
<li>Routing: React Router is used for navigation between pages.</li>
</ul>

Technologies Used:
<ul>
<li> <strong>HTML:</strong> Structure of the application. </li>
<li> <strong>CSS/Sass:</strong> Styling with modularity and advanced capabilities (variables, mixins, nesting). </li>
<li> <strong>Bootstrap:</strong> Predefined responsive design framework. </li>
<li> <strong>React:</strong> Frontend library for building user interfaces. </li>
<li> <strong>Redux Toolkit:</strong> Simplifies global state management. </li>
<li> <strong>React Router:</strong> Manages client-side routing. </li>
<li> <strong>TypeScript:</strong> Adds type safety and better maintainability. </li>
<li> <strong>Vite:</strong> Fast bundler and development tool. </li>
<li> <strong>Axios:</strong> Handles HTTP requests for backend communication. </li>
<li> <strong>Moment.js:</strong> Formats dates and times elegantly.</li>
</ul>

Features:  <br/>
<ol>
<li>Redux Toolkit for State Management:</li>
<ul>
<li>Centralized state management for:
    <ul>
        <li>User authentication.</li>
        <li>Food item data (menu items).</li>
        <li>Cart/order functionality.</li>
    </ul>
</li>
<li>Use of slices and asynchronous thunks to handle API interactions.</li>
</ul>
<li>Pagination:</li>
<ul>
<li>Dynamic navigation of paginated data like food items.</li>
<li>Example logic includes displaying a subset of items and providing navigation links for pages.</li>
</ul>
<li>Carousel:</li>
<ul>
<li>Bootstrap carousel for rotating featured content such as promotions or top menu items.</li>
</ul>
<li>Axios for API Calls:</li>
<ul>
<li>Simplifies communication with RESTful APIs.</li>
<li>Example use cases:
<ul>
<li>User authentication (signin, signup).</li>
<li>Fetching menu items.</li>
<li>Submitting orders.</li>
</ul>
</li>
</ul>
<li>Moment.js for Dates:</li>
<ul>
<li>Formats timestamps, order dates, or promotion expiry dates dynamically.</li>
<li>Example: moment(orderDate).format('MMMM Do YYYY, h:mm:ss a').</li>
</ul>
<li>Routing with React Router:</li>
<ul>
<li>Navigation between key pages like:</li>
<ul>
<li>Home: Overview of the app and featured items.</li>
<li>Login/Signup: Authentication forms.</li>
<li>Menu: List of available food items with filtering and sorting.</li>
</ul>
</ul>
<li>Responsive Design:</li>
<ul>
<li>Built using Bootstrap grid system and Sass for custom styles.</li>
<li>Responsive testing ensures the app works across different screen sizes and browsers.</li>
</ul>
</ol>

### Back-end: <br/>
The backend focuses on user registration, login, and authentication using a RESTful API architecture. It establishes a connection to MongoDB for storing user data and generates a JSON Web Token (JWT).

#### Overview: <br/>
<ul>
<li>Handle user registration, login, and logout functionalities.</li>
<li>Manage secure token-based authentication using JSON Web Tokens (JWTs).</li>
<li>Connect and interact with MongoDB for data storage.</li>
<li>User Registration: Save user data (name, email, password) securely in the database.</li>
<li>User Login: Authenticate users and generate a JWT token with a 1-year expiry.</li>
<li>Logout: Invalidate or handle client-side token removal.</li>
<li>API Endpoints:
<ul>
<li>POST /signup: User registration.</li>
<li>POST /signin: User login.</li>
<li>POST /signout: User logout.</li>
<li>(Optional) GET /profile: Retrieve user details (authenticated route).</li>
</ul>
</li>
</ul>

#### Technology used: <br/>
<ul>
<li> <strong>MongoDB:</strong> Database for storing user information (name, email, hashed password) using NoSQL. </li>
<li> <strong>JSON Web Token (JWT):</strong> Used for creating tokens to authenticate users, with an expiry of one year. </li>
<li> <strong>Express.js:</strong> Web framework for building RESTful APIs. </li>
<li> <strong>Node.js:</strong> Runtime environment for executing JavaScript on the server. </li>
<li> <strong>Vercel:</strong> Platform for hosting the backend services with easy deployment and scalability. </li>
<li> <strong>Mongoose:</strong> ODM (Object Data Modeling) library for defining schemas and interacting with MongoDB. </li>
<li> <strong>Validator:</strong> Library for validating user inputs (e.g., email format, password strength). </li>
<li> <strong>CORS:</strong> Middleware to enable cross-origin requests between the backend and frontend. </li>
<li> <strong>DotEnv:</strong> For managing environment variables securely (e.g., JWT secret, database URL). </li>
<li> <strong>bcryptjs:</strong> Library for hashing and verifying user passwords. </li>
</ul>

#### Features:  <br/>
<ol>
<li>Database Connection:</li>
<ul>
<li>MongoDB is used as the database to store user details such as name, email, and password.</li>
<li>Connection to the database is established using libraries like Mongoose, which simplifies schema creation and database operations.</li>
</ul>
<li>User Authentication Flow:</li>
<ul>
<li>User Registration (Signup):
<ul>
<li>When a user registers, their details (name, email, and password) are validated and saved to the MongoDB database.</li>
<li>Passwords are hashed using a library like bcrypt for enhanced security.</li>
</ul>
</li>
<li>User Login (Signin):</li>
<ul>
<li>Credentials are checked against the database.</li>
<li>Upon successful login, a JSON Web Token (JWT) is generated and returned to the client.</li>
<li>The token includes a payload with user details and an expiry time of one year.</li>
</ul>
</li>
</ul>

<li>Session Management:</li>
<ul>
<li>JWT Tokens:
<ul>
<li>Tokens are stored on the client side (e.g., in cookies or localStorage) and used for subsequent API requests to authenticate users.</li>
<li>The token is set to expire after one year for prolonged access.</li>
</ul>
</li>
<li>Signout:
<ul>
<li>The client can explicitly log out by clearing the token from their storage.</li>
</ul>
</li>
</ul>

<li>RESTful API Endpoints:</li>
<ul>
<li>POST /signup: Accepts user data (name, email, password) and creates a new user in the database.</li>
<li>POST /signin: Accepts login credentials, validates them, and returns a JWT on success.</li>
<li>POST /signout: Logs the user out by clearing or invalidating the token (optional backend handling).</li>
</ul>
</ol>

#### Default Login Account: (creating new account is also welcome to be use)
Username: admin@gmail.com<br/>
Password: admin

#### Live Site: 
https://velo-eat-online-food-ordering.vercel.app

#### Main Page Display:
![as](https://github.com/gerald-encabo/velo-eat-online-food-ordering/assets/15988182/6e0b6896-01e8-45b7-8a41-d6faa021f31e)
