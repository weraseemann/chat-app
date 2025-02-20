# Project description
This is a mobile chat application built with React Native. The app will provide users with a chat interface and options to share images and their location. Key Features: A start page where users can enter their name and choose a background color for the chat screen before joining the chat. A page displaying the conversation, as well as an input field and submit button. The chat provides users with two additional communication features: sending images and location data. Data gets stored online and offline.

# Features and Requirements
## User Stories
- As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my
friends and family.
- As a user, I want to be able to send messages to my friends and family members to exchange
the latest news.
- As a user, I want to send images to my friends to show them what I’m currently doing.
- As a user, I want to share my location with my friends to show them where I am.
- As a user, I want to be able to read my messages offline so I can reread conversations at any
time.
- As a user with a visual impairment, I want to use a chat app that is compatible with a screen
reader so that I can engage with a chat interface.

## Key Features
- A start page where users can enter their name and choose a background color for the chat screen
before joining the chat.
- A page displaying the conversation, as well as an input field and submit button.
- The chat provides users with two additional communication features: sending images
and location data.
- Data gets stored online and offline.


# Technical Requirements
- The app is written in React Native.
- The app is developed using Expo.
- The app is styled according to the given screen design.
- Chat conversations are stored in Google Firestore Database.
- The app authenticates users anonymously via Google Firebase authentication.
- Chat conversations are stored locally.
- The app allows users pick and send images from the phone’s image library.
- The app allows users take pictures with the device’s camera app, and send them.
- The app allows store images in Firebase Cloud Storage.
- The app allows to be able to read the user’s location data.
- Location data can be sent via the chat in a map view.
- The chat interface and functionality is created using the Gifted Chat library.
- The app’s codebase contains comments.

### Prerequisites

- Install Node.js: Before installing Expo, ensure you have a suitable version of Node installed. At the moment, Expo only supports Node 16. Node.js: Download and install Node.js. You can use the nvm tool https://github.com/nvm-sh/nvm

nvm install 16.19.0
nvm use 16.19.0
nvm alias default 16.19.0

Navigate to the chat-app directory and install all dependencies:

npm install

- Create a Firebase account.

### Installation

1. Clone the repository.
2. Navigate to the project directory in the terminal.
3. Run npm install to install the necessary dependencies.
4. Create a Firebase project in your Firebase console.
5. Copy the configuration object and replace the firebaseConfig object in the code.
6. Enable Firestore and Storage services in the Firebase console.
7. Run npx expo install
8. Run npx expo start
9. Install Expo Go app on your mobile device from the app store on your mobile device (iOS or Android), in order to test the app on your own mobile device. Create an Expo account.

### Packages to install:

- npm install --save @react-navigation/native @react-navigation/native-stack
- expo install react-native-screens react-native-safe-area-context
- npm install react-native-gifted-chat --save
- npm install firebase@9.13.0 --save
- expo install @react-native-async-storage/async-storage
- expo install @react-native-community/netinfo
- expo install expo-image-picker
- expo install expo-location
- expo install react-native-maps

 ### Technologies: 

- React Native
- Expo and Expo Go App
- Google Firestore Database
- Android Studio
- Node.js

### Libraries

- Gifted Chat library
- Expo ImagePicker
- Expo MediaLibrary
- Expo Location
