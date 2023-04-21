// import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { auth } from '../firebase'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
    {/* <Text>Email: {auth.currentUser?.email}</Text> */}
    <Text>HomeScreen</Text>
    <TouchableOpacity
      style={styles.button}
    >
      <Text style={styles.buttonText}>Sign out</Text>
    </TouchableOpacity>
  </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})