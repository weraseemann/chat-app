// import the screens
import Start from './components/Start';
import Chat from './components/Chat';
//initialize a connection for Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// prevent warning message from appearing by using LogBox
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

const Stack = createNativeStackNavigator();

// the web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2bMAfJPDEnHSNM4gMe3r3kAAXJZXnr5s",
  authDomain: "chat-app-e7a62.firebaseapp.com",
  projectId: "chat-app-e7a62",
  storageBucket: "chat-app-e7a62.appspot.com",
  messagingSenderId: "112960302945",
  appId: "1:112960302945:web:aaf40e5102feb4518a5f20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Firebase Storage handler
const storage = getStorage(app);
// Create the navigator



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
