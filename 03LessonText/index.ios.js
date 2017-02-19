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
  http://reactnative.cn/docs/0.31/text.html#content
  常用特性：
  onPress 手指触摸事件
  numberOfLines 显示多少行

  可以设置字体大小、颜色、对齐方式等等
 */

/*
 界面布局分为两部分：
 Header和新闻信息

 整个界面是一个组件，由两个子组件组成

 如果都写在该文件，代码比较乱
 在单独一个文件中定义子组件，使用Module.exports将组件导出为独立的模块
 可以在其他文件引用
 */

//引入

var Header = require("./header");
var News = require("./news");


var LessonText = React.createClass({
  render:function(){
    // 定义数组的新闻内容
    var news = [
      " 1. 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
      " 2. 啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
      " 3. 啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
      " 4. 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
    ];

    return(
      <View style = {styles.flex}>
        <Header></Header>
        <News news={news}></News>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  flex:{
    flex:1
  }
});

AppRegistry.registerComponent('LessonText', () => LessonText);
