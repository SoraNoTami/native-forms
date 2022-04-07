import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [text, onChangeText] = useState("")
  const [text2, onChangeText2] = useState("")

  let SubmitForms = () =>{
    onChangeText()
    onChangeText2()
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.container} value={text} placeholder="e-mail" onChangeText={onChangeText} maxLength={6}/>
      <TextInput style={styles.container} value={text2} placeholder="Password" onChangeText={onChangeText2} maxLength={6}/>
      <Button
      style={styles.container}
        onPress={SubmitForms}
        title="Submit"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
