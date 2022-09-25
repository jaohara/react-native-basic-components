import { Text } from "react-native"

import { styles } from "../style/styles";

const StyledText = ({ children }) => {
  return (
    <Text style={styles.text}>
      {children}
    </Text>
  );
};

export default StyledText;
