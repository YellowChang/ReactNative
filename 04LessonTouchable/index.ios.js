/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
  第一部分
  导入ReactNative包，导入ReactNative组件
 */
 /*
   ReactNative 提供3个组件用于给其他没有触摸事件的组件绑定触摸事件
   TouchableOpacity 透明触摸，点击时，组件会出现透明过渡效果
   TouchableHighlight 高亮触摸，点击时，会出现高亮效果
   TouchableWithoutFeedback 无反馈触摸，点击时，组件无视觉变化
   需要导入组件
  */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

/*
  第二部分
  创建ReactNative组件
 */
 var LessonTouchable = React.createClass({
     clickBtn: function(){
       alert("点击搜索按钮");
     },
     render:function(){
       return(
         <View style={styles.container}>
           <View style={styles.flex}>
             <View style={styles.input}>
             </View>
           </View>
           <TouchableOpacity style={styles.btn} onPress={this.clickBtn}>
             <Text style={styles.search}>搜索</Text>
           </TouchableOpacity>
         </View>
       );
     }
   });

/*
  第三部分
  StyleSheet.create创建样式实例
 */
 //定义样式
 var styles = StyleSheet.create({
   container:{
     flexDirection: "row",
     height: 45,
     marginTop: 25
   },
   flex: {
     flex : 1
   },
   input: {
     height: 45,
     borderWidth: 1,
     marginLeft: 5,
     paddingLeft: 5,
     borderColor: "#ccc",
     borderRadius: 4
   },
   btn: {
     width: 55,
     marginLeft: 5,
     marginRight: 5,
     backgroundColor: "#23BEFF",
     height: 45,
     justifyContent: "center",
     alignItems:"center"
   },
   search: {
     color: "#FFF",
     fontSize: 15,
     fontWeight: "bold"
   }
 });








/*
 第四部分
 注册入口组件
 */
AppRegistry.registerComponent('LessonTouchable', () => LessonTouchable);
