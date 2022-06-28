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
  const [userDocument, setUserDocument] = useState({});
  const getUser = async () => {
    const userDocuments = await firestore()
      .collection('users')
      .doc('TUr8hAdC51oxS8qZGTdi')
      .get();
    setUserDocument(userDocuments);
    console.log(userDocument);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <View>
      <Text>FirebaseApp</Text>
    </View>
  );
};

export default App;
