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
  http://www.runoob.com/css3/css3-flexbox.html
 */
var LessonFlex = React.createClass({
  render:function(){
    return(
      <View style={styles.container}>
        <View style={styles.child1}>
        </View>
        <View style={styles.child2}>
        </View>
      </View>
    );
  }
});

// var styles = StyleSheet.create({
//   container:{
//     margin:30,
//     width:300,
//     height:500,
//     backgroundColor:"yellow",
//     //在ReactNative里面默认主轴方向是column
//     //设置横向排列
//     // flexDirection:"row",
//     //设置主轴
//     justifyContent:"center",
//     //交叉轴
//     // alignItems:"center",
//   },
//   child1:{
//     width:100,
//     height:100,
//     backgroundColor:"green"
//   },
//   child2:{
//     width:100,
//     height:100,
//     backgroundColor:"blue"
//   }
// });

/*
 flex
 可以给组件指定flex，flex的值是数字，flex：1表示，组件可以撑满父组件所有的剩余空间
 同时存在多个并列的子组件，flex：1，均分
 如果这些并列的子组件的flex值不一样，则谁的值大，谁占据剩余空间的比例越大
 （即占据剩余空间的比例等于并列子组件flex的值的比）
 */
var styles = StyleSheet.create({
  container:{
    //本练习中父组件最外层还有个窗口
    marginTop:30,
    flex:1,
    backgroundColor:"cyan",
  },
  child1:{
    flex:1,
    backgroundColor:"yellow",
  },
  child2:{
    flex:2,
    backgroundColor:"green",
  }
});


AppRegistry.registerComponent('LessonFlex', () => LessonFlex);
