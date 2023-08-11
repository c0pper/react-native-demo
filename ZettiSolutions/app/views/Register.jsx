import React, { useState } from "react";
import { 
    Text,
    StyleSheet,
    TextInput,
    View,
    TouchableHighlight,
    Alert
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }) => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const cancelRegister = () => {
        Alert.alert('Registration canceled');
        navigation.navigate('Home');
    };

    const registerAccount = () => {
        if (!userName) {
            Alert.alert('Enter username')
        }
        else if (!password) {
            Alert.alert('Enter a password')
        }
        else if (password !== passwordConfirm) {
            Alert.alert('Passwords must match')
        }
        else {
            AsyncStorage.getItem(userName, (err, result) => {
                if (result !== null) {
                    Alert.alert('User already exists');
                } else {
                    AsyncStorage.setItem(userName, password, (err, result) => {
                        Alert.alert(`${userName} account created`);
                        navigation.navigate('Home');
                    })
                }
            })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Register Account</Text>
            <TextInput 
                style={styles.inputs}
                onChange={(e) => setUsername(e.nativeEvent.text)}
                value={userName}
            />
            <Text style={styles.labels}>Enter username</Text>
            <TextInput 
                style={styles.inputs}
                onChange={(e) => setPassword(e.nativeEvent.text)}
                value={password}
                secureTextEntry={true}
            />
            <Text style={styles.labels}>Enter password</Text>
            <TextInput 
                style={styles.inputs}
                onChange={(e) => setPasswordConfirm(e.nativeEvent.text)}
                value={passwordConfirm}
                secureTextEntry={true}
            />
            <Text style={styles.labels}>Confirm password</Text>

            <TouchableHighlight onPress={registerAccount} underlayColor='#000000'>
                <Text style={styles.buttons}>Register</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={cancelRegister} underlayColor='#000000'>
                <Text style={styles.buttons}>Cancel</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '5%'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputs: {
        marginTop: 12,
        width: '80%',
        borderWidth: 1,
        height: 45,
        fontSize: 16,
        color: 'black'
    },
    labels: {
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttons: {
        padding: 15,
        margin: 5,
        fontSize: 16,
        backgroundColor: '#DDDDDD',
        width: 150,
        height: 50,
        textAlign: 'center'
    }
});

export default Register