import { View } from "react-native";

import styles from "../style/styles";

const ImageView = ({ children }) => {
  return (
    <View
      style={styles.imageView}
    >
      {children}
    </View>
  );
};

export default ImageView;