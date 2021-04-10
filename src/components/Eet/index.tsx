import React, { VFC, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export type Eet = {
  id: string;
  price: number;
  text: string;
  like: boolean;
  date: string;
};

type EetBoxProps = Eet & {
  onLike: () => void;
  onDelete: () => void;
  editEet: (id: string, text: string) => void;
};

const EetBox: VFC<EetBoxProps> = ({
  id,
  price,
  text,
  like,
  date,
  onLike,
  onDelete,
  editEet,
}) => {
  const [editText, setEditText] = useState(text);
  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => {
    if (isEdit) {
      editEet(id, editText);
    }
    setIsEdit(!isEdit);
  };

  return (
    <View style={eetStyles.container}>
      <View style={eetStyles.header}>
        <Text style={eetStyles.user}>{`￥${price}` || 'unknown'}</Text>
        <Text style={eetStyles.date}>{date}</Text>
      </View>
      {!isEdit ? (
        <Text style={eetStyles.text}>{text}</Text>
      ) : (
        <TextInput
          style={eetStyles.input}
          value={editText}
          onChangeText={(_text) => setEditText(_text)}
        />
      )}
      <View style={eetStyles.actionContainer}>
        <TouchableOpacity onPress={onLike}>
          {like ? (
            <Ionicons
              name="heart-circle-sharp"
              size={22}
              color="rgb(252,108,133)"
            />
          ) : (
            <Ionicons name="heart-circle-outline" size={22} color="#aaa" />
          )}
        </TouchableOpacity>
        <View style={eetStyles.userAction}>
          <TouchableOpacity style={eetStyles.edit} onPress={toggleEdit}>
            <Ionicons name="ios-pencil" size={22} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <Ionicons name="trash-outline" size={22} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const eetStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#D3D3D3',
    marginBottom: 10,
    borderRadius: 5,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  user: {
    color: '#111827',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 8,
  },
  date: {
    color: 'white',
    marginLeft: 'auto',
  },
  text: {
    color: '#111827',
    fontSize: 16,
  },
  input: {
    flex: 1,
    borderColor: '#FFDA79',
    borderWidth: 2,
    marginRight: 10,
    borderRadius: 10,
    color: '#111827',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  actionContainer: {
    borderTopWidth: 1,
    borderTopColor: '#aaa',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    paddingTop: 5,
    marginTop: 20,
    flexDirection: 'row',
  },
  userAction: {
    marginLeft: 'auto',
    flexDirection: 'row',
  },
  edit: {
    marginRight: 20,
  },
});

export default EetBox;
