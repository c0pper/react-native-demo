import React, {useState} from 'react'
import { 
    Text,
    StyleSheet,
    TextInput,
    View,
    TouchableHighlight,
    Alert
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';



const Login = ({ navigation }) => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const cancelLogin = () => {
        Alert.alert('Login canceled');
        navigation.navigate('Home');
    };

    const createAccount = () => {
        navigation.navigate('Register');
    };

    const loginUser = () => {
        if (!userName) {
            Alert.alert('Enter username')
        }
        else if (!password) {
            Alert.alert('Enter a password')
        } else {
            AsyncStorage.getItem('userLoggedIn', (err, result) => {
                if (result !== 'none') {
                    Alert.alert('Another user already logged in');
                    navigation.navigate('Home');
                } else {
                    AsyncStorage.getItem(userName, (err, result) => {
                        if (result !== null) {
                            if (result !== password) {
                                Alert.alert('Wrong password');
                            } else {
                                AsyncStorage.setItem('userLoggedIn', userName, (err, result) => {
                                    Alert.alert(`Welcome ${userName}`);
                                    navigation.navigate('Home');
                                })
                            } 
                        } else {
                            Alert.alert(`No account for ${userName}`);
                        }
                    })
                }
            })
        }
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
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

            <TouchableHighlight onPress={loginUser} underlayColor='#000000'>
                <Text style={styles.buttons}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={createAccount} underlayColor='#000000'>
                <Text style={styles.buttons}>Create Account</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={cancelLogin} underlayColor='#000000'>
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

export default Login