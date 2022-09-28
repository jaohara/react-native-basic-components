import { useState } from "react";
import { 
  Button,
  FlatList, 
  Text, 
  TextInput, 
  View, 
} from "react-native";

import HeaderText from "../HeaderText";
import InputListItemButton from "../InputListItemButton";
import ScreenView from "../ScreenView";
import SubmitButton from "../SubmitButton";

import { palette, styles } from "../../style/styles";

const defaultList = ["Alright!", "Default List", "Test Items!"];

const InputScreen = ({}) => {
  const [ currentInput, setCurrentInput ] = useState("");
  const [ items, setItems ] = useState([...defaultList]);

  const handleSubmit = () => {
    if (currentInput.trim() !== "") {
      setItems([...items, currentInput.trim()]);
      setCurrentInput("");
    }
  };

  const removeItem = (item) => setItems(items.filter(current => current !== item));

  /*
    TODO: Fix current problems:

      - Clicking the Button while focused on the TextInput just causes 
        the TextInput to lose focus. A second click is required to submit.
        - Does this have something to do with how I'm using state to manage
        the TextInput value?

  */

  const renderInputListItem = ({ item }) => {
    return (
      <View style={styles.inputListItem}>
        <Text>{item}</Text>
        <InputListItemButton
          item={item}
          onPress={removeItem}
        />
      </View>
    );
  };

  return (
    <ScreenView useScrollView={false}>
      <View>
        <HeaderText>String Input</HeaderText>
        <Text>When I'm implemented, I'll be the InputScreen!</Text>
        <TextInput 
          onChangeText={setCurrentInput}
          selectionColor={palette.blue}
          style={styles.textInput}
          value={currentInput}
        />
        {
          // TODO: implement a more generic button a la NavButton
        }
        <SubmitButton
          onPress={handleSubmit}
          title="Submit"
        />
      </View>

      <View>
        <HeaderText>Submitted Strings</HeaderText>
        
        <FlatList
          data={items}
          renderItem={renderInputListItem}
        />
      </View>
    </ScreenView>
  )
};

export default InputScreen;