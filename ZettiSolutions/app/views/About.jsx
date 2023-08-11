import { Text, ScrollView, Image, StyleSheet } from "react-native";

const aboutZetti = `On Android the View state is not persisted consistently across Activity restarts, which can lead to crashes in those cases. It is recommended to override the native Android method called on Activity restarts in your main Activity, to avoid these crashes.

For most people using an app built from the react-native template, that means editing MainActivity.java, likely located in android/app/src/main/java/<your package name>/MainActivity.java`

const whatZetti = `On Android the View state is not persisted consistently across Activity restarts, which can lead to crashes in those cases. It is recommended to override the native Android method called on Activity restarts in your main Activity, to avoid these crashes.

For most people using an app built from the react-native template, that means editing MainActivity.java, likely located in android/app/src/main/java/<your package name>/MainActivity.java`

const About = () => {
  return (
    <ScrollView style={styles.container}>
        <Image style={styles.pics} source={require('../../assets/zetti1.jpg')} />
        <Text style={styles.aboutTitle}>Welcome to Favelas dance</Text>
        <Text style={styles.aboutText}>{aboutZetti}</Text>
        <Image style={styles.pics} source={require('../../assets/zetti2.jpg')} resizeMode="cover" />
        <Text style={styles.aboutTitle}>Angels of Love... Mitici!!!</Text>
        <Text style={styles.aboutText}>{whatZetti}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    pics: {
        height: 300,
        width: '100%'
    },
    aboutTitle: {
        paddingTop: 10,
        textAlign: 'center'
    },
    aboutText: {
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default About