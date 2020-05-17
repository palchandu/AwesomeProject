/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Books from './component/Books/Books';
import Movies from './component/Movies/Movies';
import News from './component/News/News';
class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
        
    </View>
  );
  }
};

const TabNavigator = createBottomTabNavigator({  
    News: {
      screen:News,
      navigationOptions:{
        tabBarLabel:'News',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="newspaper-o" color={tintColor} size={25}/>  
          )  
      }
    },
    Books: {
      screen:Books,
      navigationOptions:{
        tabBarLabel:'Books',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="book" color={tintColor} size={25}/>  
          )  
      }
    }, 
    Movies: {
      screen:Movies,
      navigationOptions:{
        tabBarLabel:'Movies',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="file-movie-o" color={tintColor} size={25}/>  
          )  
      }
    } 
},
{
  tabBarOptions:{
    style:{
      backgroundColor:'#1C2833',
      color:'white'
    }
  }
},  
{  
    initialRouteName: "News"  
} );  

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'aqua',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'stretch'
  }
});

export default createAppContainer(TabNavigator);  