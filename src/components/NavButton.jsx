import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "../style/styles";

const NavButton = ({ title, onPress }) => {
  return (
    <View style={styles.navButtonView}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavButton;