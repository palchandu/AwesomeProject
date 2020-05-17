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

  class NewsList extends React.Component{
      constructor(props){
          super(props);
          this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }
      
          this.onLayout = this.onLayout.bind(this);
      }
      onLayout(e) {
        this.setState({
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        });
      }
      handleClick = (url) => {
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL(url);
          } else {
            console.log("Don't know how to open URI: " + this.props.url);
          }
        });
      };
      render(){
          let data=this.props.data;
          return(
            <TouchableOpacity onPress={()=>this.handleClick(data.url)}>
            <View onLayout={this.onLayout} style={stylesmy.news_listing}>
                <Image source={{uri:data.urlToImage}} style={{alignSelf: 'auto',width: this.state.width, height: 150,}} />
                <Text style={stylesmy.news_title}>{data.title}</Text>
                <Text>{data.description}</Text>
            </View>
          </TouchableOpacity>

          )
      }
  }
  const win = Dimensions.get('window');
  const stylesmy = StyleSheet.create({
    news_listing:{
      padding:1,
      marginBottom:5
    },
  news_title:{
    fontWeight:'bold',
    marginBottom:5,
    marginTop:5,
  }
  });
  export default NewsList;