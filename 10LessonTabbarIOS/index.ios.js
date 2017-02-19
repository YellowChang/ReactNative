/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

/*
  在ReactNative中，实现页面切换，提供两个组件：TabBarIOS和TabBarIOS.Item
  常用性能：
  selected：是否选中某个Tab，如果为true则选中并显示组件
  title：组件
  barTintColor：Tab栏的背景颜色
  icon：图标
  onPress：点击事件。当某个Tab选中时，需要改变组件的selected={true}设置

  实现原理：点击tab时候触发onPress方法，记录被点击的title，再通过title设置tab是否被选中
  (通过比较设置selected的值，true/false)
 */

//导入：news.js
//导入loadImage.js、添加图片，配置Http请求
//导入movieList.js、data.json
var News = require("./news");
var Image = require("./loadImage");
var MovieList = require("./movieList");

var LessonTabbarIOS = React.createClass({
  getInitialState:function(){
    return{
      // 用于记录显示页面组件对应的title
      tab:"news"
    };
  },
  // TabBarIOS.Item的onPress处理方法
  select: function(tabName){
    this.setState({
      tab:tabName
    });
  },
  render:function () {
    return(
      <TabBarIOS style={{flex:1}}>
        <TabBarIOS.Item
         title="news"
         icon={require("./img/news.png")}
         onPress={this.select.bind(this,"news")}
         selected={this.state.tab==="news"}>
         <News/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
         title="image"
         systemIcon="bookmarks"
         onPress={this.select.bind(this,"image")}
         selected={this.state.tab==="image"}>
         <Image></Image>
        </TabBarIOS.Item>

        <TabBarIOS.Item
         title="moviewList"
         icon={require("./img/movieList.png")}
         onPress={this.select.bind(this,"moviewList")}
         selected={this.state.tab==="moviewList"}>
         <MovieList></MovieList>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});




AppRegistry.registerComponent('LessonTabbarIOS', () => LessonTabbarIOS);
