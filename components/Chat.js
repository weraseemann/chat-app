import { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Bubble, GiftedChat, InputToolbar } from "react-native-gifted-chat";
import { collection, orderBy, addDoc, onSnapshot, query } from "firebase/firestore";

import AsyncStorage from "@react-native-async-storage/async-storage";

// Destructure name, background and UserId from route.params
const Chat = ({ db, route, navigation, isConnected }) => {
    const { name, backgroundColor, userID } = route.params;
    const [messages, setMessages] = useState([]);
    const onSend = (newMessages) => {
        addDoc(collection(db, "messages"), newMessages[0]);
    };

    //you can unsubscribe and disable the old onSnapshot() listener before you lose any reference to it
    let unsubMessages;
    // useEffect hook to set messages options
    // Create a query to get the "messages" collection from the Firestore database
    useEffect(() => {

        if (isConnected === true) {
            // unregister current onSnapshot() listener to avoid registering multiple listeners when
            // useEffect code is re-executed.
            if (unsubMessages) unsubMessages();
            unsubMessages = null;
            navigation.setOptions({ title: name });
            // Create a query to get the "messages" collection from the Firestore database
            const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));

            unsubMessages = onSnapshot(q, (docs) => {
                let newMessages = [];
                docs.forEach(doc => {
                    newMessages.push({
                        id: doc.id,
                        ...doc.data(),
                        createdAt: new Date(doc.data().createdAt.toMillis())
                    })
                });
                cacheMessages(newMessages);
                setMessages(newMessages);
            });
        } else loadCachedMessages();

        // Clean up code
        return () => {
            if (unsubMessages) unsubMessages();
        }
    }, [isConnected]);

    const cacheMessages = async (messagesToCache) => {
        try {
            await AsyncStorage.setItem("messages", JSON.stringify(messagesToCache));
        } catch (error) {
            console.log(error.message);
        }
    };

    // Call this function if the isConnected prop turns out to be false in useEffect()
    const loadCachedMessages = async () => {
        // The empty array is for cachedMessages in case AsyncStorage() fails when the messages item hasn’t been set yet in AsyncStorage.
        const cachedMessages = (await AsyncStorage.getItem("messages")) || [];
        setMessages(JSON.parse(cachedMessages));
    };



    const renderBubble = (props) => {
        return <Bubble
            {...props}
            wrapperStyle={{
                right: {
                    background: "#000"
                },
                left: {
                    background: "#FFF"
                },
            }}
        />
    };
    //prevent Gifted Chat from rendering the InputToolbar so users can’t compose new messages. InputTool
    const renderInputToolbar = (props) => {
        if (isConnected) return <InputToolbar {...props} />;
        else return null;
    };

    /* Render a View component with dynamic background color */
    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <GiftedChat
                messages={messages}
                renderInputToolbar={renderInputToolbar}
                renderBubble={renderBubble}
                onSend={(messages) => onSend(messages)}
                user={{
                    _id: userID,
                    name: name,
                }}
            />
            {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
            {Platform.OS === "ios" ? <KeyboardAvoidingView behavior="padding" /> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});

export default Chat;