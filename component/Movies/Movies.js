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

class Movies extends React.Component {
    static navigationOptions = {  
        title: 'Movies',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };
  render(){
  return (
    <View style={styles.movie_container}>
        <Text style={styles.movie_header}>Movies</Text>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  movie_container:{
    flex:1,
    color:'white'
  },
  movie_header:{
    backgroundColor:'#1C2833',
    height:50,
    color:'white',
    justifyContent:'center',
    fontSize:25,
    alignItems:'center'
  }
});

export default Movies;