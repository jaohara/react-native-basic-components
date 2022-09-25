import { View, Button, StatusBar } from "react-native";

import { routeNames } from "../../routes";

import NavButton from "../NavButton";

import { styles } from "../../style/styles";

const HomeScreen = ({ navigation }) => {
  // TODO: Confirm these are firing properly via onPress on the buttons
  const routeHandlers = {
    text: () => navigation.navigate(routeNames.text),
    input: () => navigation.navigate(routeNames.input),
    image: () => navigation.navigate(routeNames.image),
  }


  /*
    I could probably make this smarter, but I shouldn't overthink it too much now.

    I could programatically generate these from routes in 'src/routes.js'
  */
  return (
    <View style={styles.container}>
      {
        // Note: these Buttons should maybe be their own components
      }
      <NavButton
        key="text-screen-route"
        onPress={routeHandlers.text}
        style={styles.button}
        title="TextScreen!"
        />
      <NavButton 
        key="image-screen-route"
        onPress={routeHandlers.image}
        style={styles.button}
        title="ImageScreen!"
        />
      <NavButton 
        key="input-screen-route"
        onPress={routeHandlers.input}
        style={styles.button}
        title="InputScreen!"
      />

      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;