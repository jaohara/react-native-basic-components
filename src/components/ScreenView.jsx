import { ScrollView } from "react-native";

import { styles } from "../style/styles";

const ScreenView = ({ children, useScrollView = true }) => {
  return (
    <ScrollView style={styles.screen}>
      {children}
    </ScrollView>
  );
};

export default ScreenView;