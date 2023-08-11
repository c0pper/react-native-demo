import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Menu = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.buttonStyles}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>
                        Lessons
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyles}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>
                        Quiz
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.buttonRow, styles.border]}>
                <TouchableOpacity
                    style={styles.buttonStyles}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>
                        Blog
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyles}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>
                        Videos
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomRow}>
                <TouchableOpacity
                    style={styles.bottomButtonStyles}
                    onPress={() => navigation.navigate('About')}
                >
                    <Text style={styles.buttonText}>
                        About
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#35605a',
    },
    bottomRow: {
        alignSelf: 'flex-end',
        flex: 1,
        justifyContent: 'center',
    },
    bottomButtonStyles: {
        backgroundColor: '#35605a',
        width: '100%',
        height: '50%',
        paddingRight: 40,
        justifyContent: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonStyles: {
        backgroundColor: '#35605a',
        width: '50%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    border: {
        borderColor: '#ffffff',
        borderBottomWidth: 1
    }
});

export default Menu