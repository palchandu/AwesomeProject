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
  Image,
  Dimensions,
  TouchableOpacity,
  Linking
} from 'react-native';
import Service from '../../service/service';
import { cos } from 'react-native-reanimated';
import NewsList from '../News/NewsList';
class News extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state={
      news_list:[]
    }
  }
  getNewsList(){
    Service.newsList().then((response)=>{
      //console.log(response);
      if(response.data.status=='ok'){
        this.setState({news_list:response.data.articles});
      }
      //console.log('======',this.state.news_list);
    }).catch((error)=>{
      console.log(error)
    })
  }

  componentDidMount(){
  this.getNewsList();
  }
  render(){
    console.log('9999999999999',this.state.news_list)
  return (
    
    <View style={styles.new_container}>
        <Text style={styles.news_header}>Breaking News</Text>
         {/* <ScrollView data={this.state.news_list} 
        renderItem={({item}) => <Text> {item.title}</Text>}/>  */}
        <ScrollView>
          {this.state.news_list.map((items,id)=>(
            <NewsList key={id} data={items} />
          ))}
        </ScrollView>
       
    </View>
  );
  }
};

const styles = StyleSheet.create({
  new_container:{
    flex:1,
    color:'white'
  },
  news_header:{
    backgroundColor:'#1C2833',
    height:50,
    color:'white',
    justifyContent:'center',
    fontSize:25,
    alignItems:'center'
  }
});

export default News;