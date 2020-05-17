/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class Books extends React.Component {
   
  render(){
  return (
    <View style={styles.book_container}>
        <Text style={styles.book_header}>Books</Text>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  book_container:{
    flex:1,
    color:'white'
  },
  book_header:{
    backgroundColor:'#1C2833',
    height:50,
    color:'white',
    justifyContent:'center',
    fontSize:25,
    alignItems:'center'
  }
});

export default Books;