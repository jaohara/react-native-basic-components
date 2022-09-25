import { StyleSheet } from "react-native";

const darkMode = false;

export const palette = {
  darkGray: "#21252b",
  blue: "#1592ff",
  white: "#fff",
}

export const darkModeColors = {
  background: darkMode ? palette.darkGray : palette.white
}

export const styles = StyleSheet.create({
  button: {
    // alignItems: "center",
    backgroundColor: palette.blue,
    borderRadius: 24,
    flex: 1,
    justifyContent: "center",
    marginBottom: 48,
    minHeight: 48,
  },
  buttonText: {
    color: palette.white,
    fontSize: 16, 
    // fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  }, 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: palette.blue,
    marginBottom: 8,
    marginTop: 8,
  },
  image: {
    flex: 1,
    height: 256,
    marginBottom: 12,
    width: null,
  },
  imageView: {
    marginBottom: 16,
  },
  navButtonView: {
    width: "66%",
    marginBottom: 16,
  }, 
  text: {
    fontSize: 16,
    marginBottom: 12,
  },
  screen: {
    // TODO: assign this dynamically based on darkmode
    backgroundColor: palette.white,
    marginBottom: 200,
    minHeight: "100%",
    padding: 24,
    // paddingBottom: 48,
  }
});

// export default styles;