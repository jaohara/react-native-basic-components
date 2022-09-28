import { StyleSheet } from "react-native";

const commonBorderRadius = 24;
// const commonFontSize = 16;
const darkMode = false;

export const palette = {
  darkGray: "#21252b",
  blue: "#1592ff",
  lightGray: "#efefef",
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
  inputListItem: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: commonBorderRadius,
    backgroundColor: palette.lightGray,
    marginBottom: 12,
    padding: 8,
    paddingLeft: 16,
  },
  inputListItemButton: {
    alignItems: "center",
    backgroundColor: palette.blue,
    flex: 1,
    justifyContent: "center",
    borderRadius: 48,
    height: 36,
    width: 36,
  },
  inputListItemButtonText: {
    alignItems: "center",
    color: palette.white,
  },
  navButtonView: {
    width: "66%",
    marginBottom: 16,
  }, 
  text: {
    fontSize: 16,
    marginBottom: 12,
  },
  textInput: {
    backgroundColor: palette.lightGray,
    fontSize: 16,
    borderRadius: commonBorderRadius,
    height: 48,
    marginTop: 12,
    marginBottom: 12,
    padding: 12,
    paddingTop: 2,
    paddingBottom:2,
  },  
  screen: {
    // TODO: assign this dynamically based on darkmode
    backgroundColor: palette.white,
    marginBottom: 200,
    minHeight: "100%",
    padding: 24,
    // paddingBottom: 48,
  },
  submitButtonView: {
    width: "100%",
    marginBottom: 16,
  }
});

// export default styles;