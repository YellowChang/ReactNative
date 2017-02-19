/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
  第一部分

  导入ReactNative包，导入ReactNative组件
  AppRegistry：JS运行所有ReactNative应用的入口
  StyleSheet：ReactNative中使用的样式表，类似CSS样式表
  各种开发中使用的组件

  模板中使用的是ES6语法，ES5语法如下：
  let React = require{"react-native"};
  let {
  AppRegistry,
  StyleSheet,
  Text,
  View
  } = React;

require函数，搜索目录加载文件
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/*

  第二部分

  创建ReactNative组件

  模板中使用的是ES6语法
  render() {} 是ES6中的函数简写

  ES5语法如下：
  var HelloWorld = React.createClass({
      render:function{
      return {};
    }
});
 */
// export default class HelloReactNative extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// 定义组件
   var HelloReactNative = React.createClass({
     render:function(){
       return(
         <View style={styles.container}>
           <View style={[styles.top,styles.border]}>
           </View>
           <View style={[styles.bottom,styles.border,{borderWidth:      5}]}>
           </View>
         </View>
       );
     }
   });

/*
  第三部分

  StyleSheet.create创建样式实例
  在应用中只会被创建一次，不用每次在渲染周期中重新创建

 */

//定义样式
var styles = StyleSheet.create({
  //外层View
  container:{
    marginTop:25,
    marginLeft:30,
    backgroundColor:"red",
    width:300,
    height:400
  },
  //上层View
  top:{
    backgroundColor:"green",
    width:280,
    height:250,
    margin:10
  },
  //下层View
  bottom:{
    backgroundColor:"yellow",
    width:280,
    height:110,
    margin:10
  },
  border:{
    borderWidth:3,
    borderColor:"black"
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     //flex-start,flex-end,center,stretch
//     alignItems: 'center',
//     backgroundColor: 'cyan',
//   },
//   welcome: {
//     fontSize: 24,
//     textAlign: 'center',
//     margin: 20,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: 'red',
//     marginBottom: 20,
//   },
// });

/*
 第四部分

 注册入口组件
 AppRegistry：负责注册运行ReactNative应用程序的JavaScript入口
 registerComponent注册应用程序的入口组件。告知ReactNative哪一个组件被注册为应用程序的根容器

 第二个参数使用了ES6语法，箭头函数：
 () => HelloReactNative
 返回的必须是定义组件类的名字

 等价于ES5语法
 function() {return HelloReactNative}

 */
AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
