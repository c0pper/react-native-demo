import React, {useState, useEffect } from 'react'
import { 
    Text,
    StyleSheet,
    View,
    Image,
    Alert
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedUser, setLoggedUser] = useState('');
    const navigation = useNavigation();

    const toggleUser = () => {
        if (isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                setIsLoggedIn(false);
                setLoggedUser('');
                Alert.alert('Logged out');
            }) 
        } else {
            navigation.navigate('Login');
        }
    };

    useEffect(() => {
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if (result==='none') {
                console.log('NONE')
            }
            else if (result===null) {
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('set user to none');
                })
            } else {
                setIsLoggedIn(true);
                setLoggedUser(result)
            }
        })
    })

    let display = isLoggedIn ? 'Log out' : 'Tap to login';

    return (
        <View style={styles.headStyle}>
            <Image style={styles.imageStyle} source={require('../../assets/logo.png')} />
            <Text style={styles.headText} onPress={toggleUser}>
                {display}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headStyle: {
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        height: '40%'
    },
    imageStyle: {
        alignSelf: 'flex-start',
        flex: 1,
        marginLeft: 25,
        height: 'auto'
    },
    headText: {
        textAlign: 'right',
        textAlignVertical: 'center',
        color: 'black',
        flex: 2,
        paddingRight: 25,
    }
});


export default Header