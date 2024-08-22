### Divisor Calculation and Prime Number Detector Applet (Bridge Challenge 2020.1)
The application takes a numerical input from the user, which is used by the backend to generate a response with the respective divisors and information on whether the number is prime or not. It displays the data in a table on the screen. It also stores each of the values submitted by the user during the current execution of the system.

### Technologies Used
Node.js (Backend Engine)
Express (For passing data to the backend and mainly for generating the Express server)
React.js (Main DOM used to generate views according to the data model)
PrimeReact Library (Ready-to-use React components with predefined CSS styles)
Webpack (Bundler)
Eslint / Babel (Linter and transpiler respectively)
Nodemon (As the name suggests, monitors changes in Node)
Axios (For handling requests / responses)
npm (Couldn’t miss it hahahahahah)
Heroku (Link to the application on the Heroku Environment -> https://aqueous-everglades-18633.herokuapp.com/)
Instructions for Installing Necessary Packages
Once you download/clone the repository, navigate to the "client" directory via terminal / CMD (in this case, you may need to install the latest version of Node.js first) and type

npm install

to install the packages used on the client side.

Then access the "server" directory via terminal / CMD and type

npm install

to install the packages used on the server side.

## Running Locally on the Client Side
To start the client-side system locally in development mode, go to the "client" directory and type

npm start

Every time a client-side file is changed, Webpack will be triggered to generate a new version of the necessary client-side files. These files are stored in the "public" directory within the "server" directory.

## Running Locally on the Server Side
To start the server-side system locally in development mode, go to the "server" directory and type

npm start

Check the console for the line "Server online on port number XXXX". If it appears, to access the application, go to your browser and type the address https://localhost:3000 (It is important to use https as the application comes with pre-configured certificates. If a security warning appears from your browser, just accept it by clicking the 'Advanced' button and proceed).

## Generating Production Build
Client Side
To generate the production version on the client side, go to the "client" directory and type

npm run build

## Server Side
To generate the production version on the server side, go to the "server" directory and type

npm run build

## Running the Application in Production Mode
To run the application in production mode, go to the "server" directory and type

node build/app.js
