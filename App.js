import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

// nav stuff
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { routes } from './src/routes';

import { darkModeColors } from './src/style/styles';

export default function App() {
  // stack navigator component
  const StackNav = createNativeStackNavigator();

  

  
  /*
    REMEMBER:  Once you've finished up with the basic nav stuff (buttons successfully 
      navigate to screens), merge the features back in to main and start a new branch
      for a new feature!
  */



  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={darkModeColors.background}
      />
      {
        //TODO: Confirm initialRouteName works via this method
      }
      <StackNav.Navigator initialRouteName={routes[0].name}>
        {
          //TODO: Confirm the routes are able to be reached
          //TODO: Confirm route props are destructured properly from "route" parameter
        }
        {
          routes.map(route => (
            <StackNav.Screen {...route} key={`screen-${route.name}`}/>
          ))
        }
      </StackNav.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 16,
  }
});
