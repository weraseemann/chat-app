# Project description
This is a mobile chat application built with React Native. The app will provide users with a chat interface and options to share images and their location.

# Features and Requirements
## User Stories
● As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my
friends and family.
● As a user, I want to be able to send messages to my friends and family members to exchange
the latest news.
● As a user, I want to send images to my friends to show them what I’m currently doing.
● As a user, I want to share my location with my friends to show them where I am.
● As a user, I want to be able to read my messages offline so I can reread conversations at any
time.
● As a user with a visual impairment, I want to use a chat app that is compatible with a screen
reader so that I can engage with a chat interface.

## Key Features
● A start page where users can enter their name and choose a background color for the chat screen
before joining the chat.
● A page displaying the conversation, as well as an input field and submit button.
● The chat provides users with two additional communication features: sending images
and location data.
● Data gets stored online and offline.


# Technical Requirements
● The app is written in React Native.
● The app is developed using Expo.
● The app is styled according to the given screen design.
● Chat conversations are stored in Google Firestore Database.
● The app authenticates users anonymously via Google Firebase authentication.
● Chat conversations are stored locally.
● The app allows users pick and send images from the phone’s image library.
● The app allows users take pictures with the device’s camera app, and send them.
● The app allows store images in Firebase Cloud Storage.
● The app allows to be able to read the user’s location data.
● Location data can be sent via the chat in a map view.
● The chat interface and functionality is created using the Gifted Chat library.
● The app’s codebase contains comments.


## Getting Started

### Technologies: 

-React Native
-Expo and Expo Go App
-Google Firestore Database

### Libraries

-Gifted Chat library
-Expo ImagePicker
-Expo MediaLibrary
-Expo Location

### Steps to run the app locally

Clone this repository.

Install Expo and Expo CLI, as this is the platform you’ll use to build your app. Set up Expo in your development environment: 

npm install -g expo-cli

Install Expo Go app on your mobile device from the app store on your mobile device (iOS or Android), in order to test your app on your own mobile device;

Create an Expo account.

### Prerequisites

#### Node.js
Before installing Expo, ensure you have a suitable version of Node installed. At the moment, Expo only supports Node 16.

Node.js: Download and install Node.js. You can use the nvm tool https://github.com/nvm-sh/nvm

nvm install 16.19.0
nvm use 16.19.0
nvm alias default 16.19.0

Navigate to the chat-app directory and install all dependencies:

npm install

####  Setting the Firestore Database

Sign up into Google Firebase

On the main page, choose the option to "Create a project" or "Add new project" if this is not your first project.

Give your project a name, for example, "chat-app".
Enable or disable Google Analytics for this project according to your needs. (For this project I disabled Analytics)
First create Database to store the messages for your chat app.
Head to the menu on the left-hand side of the page and click on Build than on Firestore Database and Create Database:
Build > Firestore Database > Create Database Button
A modal will appear, prompting you to select the location for storing Cloud Firestore data.
Database ID is set to Default.
From the dropdown menu, select the location where your Users are located.
Select Start in production mode, click Next.
Under Data Tab click on Start Collection and give the name, for example, "messages".

Next for the Document Id click on Auto ID to auto-generate a document ID. Click Save . The new messages will be now saved in this collection and the Fields are defined in code > Chat.js

Click the Rules tab on the Firestore dashboard. With its default configuration, the database doesn’t allow read-and-write queries from a mobile or web app to be performed. We need to change this piece of code. Change false to true in the following line:

allow read, write: if false;
to:

 allow read, write: if true;

Click Publish to save the changes.

Next, navigate to Project Setting on the left-hand side of the page. Under the General tab, find the Your Apps option. Choose a platform to start your app. For this project I selected Web.

Project Settings > General Tab > Your Apps > Web ( </> ).
Give your App a nickname and click Register.

Here you will find your web app's Firebase configuration and you need to copy them in App.js:

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-authdomain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  };

Implement an authentication process into your app
Head to your Firestore dashbord and under Build click Authentication and Get Started button. By default, you should be taken to the Sign-in method tab.

Build > Authentication > Get Started button > Sign-in method tab
From the wide range of authentication methods provided by Firestore Google, I opted for the Anonymous option for this project.

Enable Anonymous and click Save . With anonymous authentication, you receive a user object with an ID in it, which you can then store in your database for that particular user. The authentication code resides in Start.js component.
To be able to store and send images or videos in your native chat app, you’ll need to set up Firebase Storage
Head to your Firestore dashbord and under Build click Storage and Get Started button. A popup will open that asks you to set your cloud storage. Keep everything on default and press Next, then Done.

You need to allow uploading and downloading files to and from the storage, from whichever device connects to your Firebase Storage.

Go to the Rules tab, change false to true in the following line:

  allow read, write: if false;
to:

   allow read, write: if true;
Click Publish

You don’t need to configure anything else because everything you need to work with Firebase Cloud Storage is already built into the Firestore library.

Now your Firestore Database is set up and you can now start the App.
Initialize the app in your terminal:

npx expo start

Use the Expo Go App on your mobile device to test the App on your mobile device for the UI.