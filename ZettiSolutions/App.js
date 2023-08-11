import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/views/Home';
import About from './app/views/About';
import Register from './app/views/Register';
import Login from './app/views/Login';
import Header from './app/components/Header';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{header: () => <Header />}}
        />
        <Stack.Screen 
          name='About'
          component={About}
          options={{title: 'About Zetti'}}
        />
        <Stack.Screen 
          name='Login'
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='Register'
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

