import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import Hero from '../components/Hero'
import Menu from '../components/Menu';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Hero />
        <Menu />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        flex: 1
    }
})

export default Home