import React, { useState, VFC } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type InputProps = {
  addEet: (text: string) => void;
};

const Input: VFC<InputProps> = ({ addEet }) => {
  const [text, setText] = useState('');
  const onPress = () => {
    addEet(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(_text) => setText(_text)}
        value={text}
        multiline
      />
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}
        disabled={!text}
      >
        <Text style={styles.buttonText}>保存</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 200,
    borderColor: '#D3D3D3',
    borderWidth: 2,
    marginBottom: 16,
    borderRadius: 10,
    color: '#111827',
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FFBB0C',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Input;
