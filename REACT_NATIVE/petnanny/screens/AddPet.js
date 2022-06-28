import React from 'react';
import {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import {Button} from '../components/Button';
import {AppImagePicker} from '../components/AppImagePicker';
import {Logo} from '../components/Logo';
import {Title} from '../components/Title';
import {Colors} from '../constants/colors';
import {launchImageLibrary} from 'react-native-image-picker';

export const AddPet = () => {
  const [form, setForm] = useState({
    name: '',
    breed: '',
    dateOfBirth: '',
    description: '',
  });

  const onChangeHandler = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onPressHandler = () => {
    console.log(form);
    setForm({
      name: '',
      breed: '',
      dateOfBirth: '',
      description: '',
    });
  };
  const [pickedImage, setPickedImage] = useState();

  const getImage = async () => {
    const image = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 150,
      maxHeight: 150,
    });
    setPickedImage(image.uri);
  };

  return (
    <View style={styles.mainContainer}>
      <Logo />
      <View>
        <Title>Add a pet!</Title>
      </View>
      <View style={styles.form}>
        <AppImagePicker getImage={getImage} pickedImage={pickedImage} />
        <TextInput
          style={styles.inputs}
          placeholder="Name"
          autoCorrect={false}
          spellCheck={false}
          value={form.name}
          onChangeText={text => onChangeHandler('name', text)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Breed"
          autoCorrect={false}
          spellCheck={false}
          value={form.breed}
          onChangeText={text => onChangeHandler('breed', text)}
        />
        <TextInput
          keyboardType="number-pad"
          style={styles.inputs}
          placeholder="Date of birth"
          autoCorrect={false}
          spellCheck={false}
          value={form.dateOfBirth}
          onChangeText={text => onChangeHandler('dateOfBirth', text)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Description"
          autoCorrect={false}
          spellCheck={false}
          value={form.description}
          onChangeText={text => onChangeHandler('description', text)}
          autoCapitalize="sentences"
          maxLength={140}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressHandler}>Submit</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  inputs: {
    backgroundColor: Colors.secondary.light,
    marginTop: 10,
    padding: 8,
    borderRadius: 25,
  },
  form: {
    width: '100%',
    alignItems: 'stretch',
  },
  buttonContainer: {
    width: '100%',
  },
});
