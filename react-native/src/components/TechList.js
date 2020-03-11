import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, FlatList} from 'react-native';

// import { Container } from './styles';

export default function TechList() {
  const [newTech, setNewTech] = useState('');
  const [techs, setTechs] = useState([]);

  function handleChangeInput() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <View>
      <FlatList
        data={techs}
        keyExtractor={tech => tech}
        renderItem={({item}) => <Text>{item}</Text>}
      />

      <TextInput
        testID={'tech-input'}
        onChangeText={setNewTech}
        value={newTech}
      />

      <TouchableOpacity onPress={handleChangeInput}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
