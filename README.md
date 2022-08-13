# Getting Started with Expo App

This project was bootstrapped with [Expo React Native](https://expo.dev/).

## Setup

### `npm install --location=global expo-cli`
Installs the Expo Cli to run the project

### `npm install`

Installs all the dependencies required to run the project


To run this project correctly you need 3 concurrent terminals

### `expo start`

Runs the project accessible from an emulator or by your personal mobile using the Expo app

### `npx json-server --port 8000 ./db.json --watch -m ./node_modules/json-server-auth`

Initializes the json-server created also uses the json-server-auth dependency

### `npx lt --port 8000 --subdomain application-mock-server`

Uploads the json-server to an online host so it can be accessed by your device


## `Approach`

This project is created using the following main tools : 
json-server,
Redux Toolkit, 
Axios,
React Navigation,
localtunnel,
React Native Vector Icons,
Expo


The data is stored in db.json which is read by the json-server and has 3 different types of data
1. Doctors, 
2. Users, 
3. Appointments.

The endpoints consist of 
/doctors,
/users,
/appointments

and the endpoints created from the json-server-auth,
/login,
/register. 

All api calls are done from the redux toolkit doctorsSlice.js file and are controlled by extra reducers so the call status
can be tracked and controlled.

Also all the data fetched and created are stored in the file.


Once a user is registered or logged in the response data returns the user info and an Access Token which is used to confirm if
a user is logged or not.

Once a user is logged the screen stack changes from Auth Stack to Logged Stack and it redirects to the Home screen. 

The home screen consists of a FlatList that displays the doctors. 

Once pressed it redirects to a doctor profile with the data passed by React Navigation params.

Sliding left opens the drawer navigation which consists of: 
1: User Name,
2: Home Page,
3: User Profile, 
4: About Us,
5: Log Out,

The User profile displays the user information which is stored when the user logs in or registers.

The About Us page consists of a form where the user can schedule an appointment which when submited posts the appointment
information to the db.json file.

The Log Out button sets the user and user token which automatically redirects the user to the Auth Stack.




### `Credits`
Aldi Alinj




