import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { getAuth, signInAnonymously } from "firebase/auth";

const Start = ({ navigation }) => {
    const auth = getAuth();
    //State to hold the chosen name input value
    const [name, setName] = useState('');
    // State to hold the chosen background color
    const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Default background color
    const backgroundColorList = ['#090C08', '#474056', '#8A95A5', '#B9C6AE'];

    const signInUser = () => {
        signInAnonymously(auth)
            .then(result => {
                navigation.navigate("Chat", { name: name, backgroundColor: backgroundColor, userID: result.user.uid, });
                Alert.alert("Signed in Successfully!");
            })
            .catch((error) => {
                Alert.alert("Unable to sign in, try later again.");
            });
    };

    return (
        // add background image
        <ImageBackground
            source={require("../image/bg_img.png")}
            resizeMode="cover"
            style={styles.image} >
            <Text style={styles.appTitle}>ChatOnGo</Text>


            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    value={name}
                    onChangeText={setName}
                    placeholder='Your Name'
                />

                <View style={styles.chooseColorBox}>
                    <Text style={styles.chooseColorText}>Choose Background Color:</Text>
                    <View style={styles.colorButtonsContainer}>
                        {backgroundColorList.map((color) => (
                            /*  added accessibility  */
                            <TouchableOpacity
                                accessible={true}
                                accessibilityLabel="Click to choose background color option."
                                accessibilityRole="button"
                                key={color}
                                style={[
                                    styles.chooseColor,
                                    styles.colorOption,
                                    {
                                        backgroundColor: color,
                                    },
                                ]}
                                onPress={() => setBackgroundColor(color)}
                            />
                        ))}
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={signInUser}>
                    <Text>Start chatting</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    container: {
        width: "88%",
        height: "44%",
        backgroundColor: "white",
        alignItems: "center",
        marginBottom: 20,
        justifyContent: "space-evenly",
        borderRadius: 4,
    },
    textInput: {
        width: "84%",
        padding: 10,
        borderWidth: 1,
        fontSize: 16,
        fontWeight: "300",
        color: "#757083",
        opacity: 0.7,
        borderColor: "#757083",
        borderRadius: 4,
    },
    button: {
        width: "84%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#757083",
        padding: 10,
        marginTop: 5,
        borderRadius: 4,
    },
    textButton: {
        fontSize: 16,
        fontWeight: "600",
        color: "#ffffff",
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    appTitle: {
        flex: 1,
        fontSize: 45,
        fontWeight: "600",
        color: "#ffffff",
        justifyContent: "center",
        marginTop: 80,
    },
    chooseColorBox: {
        width: "84%",
        alignItems: "center",
        justifyContent: "space-between",
    },
    colorButtonsContainer: {
        flexDirection: "row",
        alignSelf: "flex-start",
    },
    chooseColor: {
        width: 30,
        height: 30,
        borderRadius: 15,
        border: 3,
        marginRight: 15,
        borderColor: "white",
    },
    selectedColor: {
        borderColor: "#FCD95B",
        borderWidth: 3,
    },

    chooseColorText: {
        fontSize: 16,
        fontWeight: "300",
        color: "#757083",
        textAlign: "left",
        alignSelf: "flex-start",
        marginBottom: 10,
    },
});

export default Start;