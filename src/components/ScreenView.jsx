import { ScrollView, View } from "react-native";

import { styles } from "../style/styles";

const ScreenView = ({ children, useScrollView = true }) => {
  const renderView = () => {
    return useScrollView ? 
      (<ScrollView style={styles.screen}>{children}</ScrollView>) : 
      (<View style={styles.screen}>{children}</View>); 
  }

  return (renderView());
};

export default ScreenView;