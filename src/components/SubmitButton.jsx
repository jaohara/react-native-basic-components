import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "../style/styles";

const SubmitButton = ({ title, onPress }) => {
  return (
    <View style={styles.submitButtonView}>
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

export default SubmitButton;