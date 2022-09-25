import { TextInput, View, Text, Image, StyleSheet } from "react-native";

import { styles } from "../../style/styles";

import HeaderText from "../HeaderText";
import ImageView from "../ImageView";
import ScreenView from "../ScreenView";

const remoteWidth = 800;
const remoteHeight = 600;

import localImageSource from '../../../assets/images/BabyGromit.jpg'
const remoteImageSource = `https://picsum.photos/${remoteWidth}/${remoteHeight}`;

const ImageScreen = ({}) => {
  return (
    <ScreenView>
      <ImageView>
        <HeaderText>Local Image</HeaderText>
        <Image 
          source={localImageSource}
          style={styles.image}
          />
        <Text>The above image is from a local source.</Text>
      </ImageView>

      <ImageView>
        <HeaderText>Remote Image</HeaderText>
        <Image 
          source={{
            uri: remoteImageSource,
          }}
          style={styles.image}
        />
        <Text>The above image is from a remote source.</Text>
      </ImageView>
    </ScreenView>
  )
};

export default ImageScreen;