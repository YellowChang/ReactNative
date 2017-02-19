import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  TextInput
} from 'react-native';

// 从前一个页面向后一个页面传值
// 定义一个InputPage 输入框、按钮
var InputPage = React.createClass({
  getInitialState:function(){
    return{
      //记录输入框的值
      content:""
    }
  },
  getInputValue:function(inputText){
    //将输入框的值进行记录
    this.setState({
      content:inputText
    });
  },
  pushNextPage:function () {
    //退出下一个页面，并传值
    var route = {
      component:DetailPage,
      passProps:{
        //将输入框的内容传递给下一级页面
        showText:this.state.content
      }
    }
    this.props.navigator.push(route);
  },
  render:function () {
    return(
      <View style={inputStyles.container}>
        <TextInput
         style={inputStyles.input}
         placeholder="请输入内容"
         onChangeText={this.getInputValue}/>
        <TouchableOpacity
          style={inputStyles.btn}
          onPress={this.pushNextPage}>
          <Text>进入下一页</Text>
        </TouchableOpacity>
      </View>
    );
  }
});
var inputStyles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white"
  },
  input:{
    height:45,
    marginLeft:25,
    marginRight:25,
    padding:5,
    borderWidth:1,
    borderColor:"black",
    borderRadius:4
  },
  btn:{
    marginTop:20,
    height:30,
    borderWidth:1,
    borderRadius:4,
    borderColor:"black",
    padding:5,
    justifyContent:"center",
    alignItems:"center"
  }
});
//DetailPage 显示文本、按钮
var DetailPage = React.createClass({
  popFromPage:function(){
    this.props.navigator.pop();
  },
  render:function () {
    return(
      <View style={detailStyles.container}>
        <Text style={detailStyles.text}>{this.props.showText}</Text>
        <TouchableOpacity style={detailStyles.btn} onPress={this.popFromPage}>
        <Text>返回上一页</Text>
        </TouchableOpacity>
      </View>
    );
  }
});
var detailStyles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white"
  },
  text:{
    marginLeft:25,
    marginRight:25,
    padding:25,
    backgroundColor:"cyan",
    fontSize:20,
    textAlign:"center"
  },
  btn:{
    marginTop:20,
    height:30,
    borderWidth:1,
    borderRadius:4,
    borderColor:"black",
    padding:5,
    justifyContent:"center",
    alignItems:"center"
  }
});
var LessonNavigator = React.createClass({
  render:function () {
    var rootRoute = {
      component:InputPage
    }
    return(
      <View style={{flex:1}}>
        <Navigator
          initialRoute={rootRoute}
          configureScene={(route) => {
            return Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(route,navigator) => {
            var Component = route.component;
            return(
              <Component
                navigator={navigator}
                route={route}
                {...route.passProps}/>
            );
          }}/>
      </View>
    );
  }
});

module.exports = LessonNavigator;
