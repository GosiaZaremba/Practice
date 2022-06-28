/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

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
      <Text>FirebaseApp</Text>
    </View>
  );
};

export default App;
