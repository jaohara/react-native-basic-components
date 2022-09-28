import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "../style/styles";

const InputListItemButton = ({ item, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => onPress(item)}
        style={styles.inputListItemButton}
      >
        <Text style={styles.inputListItemButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputListItemButton;