/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {AddPet} from './screens/AddPet';

const App = () => {
  const user = async () => {
    const userDocs = await firestore()
      .collection('Users')
      .doc('TUr8hAdC51oxS8qZGTdi')
      .get();
    console.log(userDocs);
  };
  user();

  return (
    <View>
      <AddPet></AddPet>
    </View>
  );
};

export default App;
