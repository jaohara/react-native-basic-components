import { Text } from "react-native"

import { styles } from "../style/styles";

const HeaderText = ({ children }) => {
  return (
    <Text style={styles.headerText}>
      {children}
    </Text>
  );
};

export default HeaderText;