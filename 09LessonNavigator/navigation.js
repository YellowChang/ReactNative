
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';
/*
  导航器通过路由对象（route）来分辨不同的场景，每个路由对应一个页面组件，开发者设置什么，
  导航器显示什么，所以route是导航器中重要的一个对象。

  三步操作实现导航功能：
  1、设置路由对象（告诉导航器我要显示那个页面）
     创建路由对象，对象的内容自定义，但是必须包含该场景需要展示的页面组件
  2、场景渲染配置（告诉导航器我要什么样的页面跳转效果）
  3、渲染场景（告诉导航器如何渲染页面）
     利用第一步设置的路由对象进行渲染场景
 */
// 定义第一个页面
// FirstPage 一个button，点击进入下一级页面
var FirstPage = React.createClass({
  //按钮onPress事件处理方法
  pressPush:function(){
    //路由对象
    var nextRoute = {
      component:SecondPage
    };
    this.props.navigator.push(nextRoute);
  },
  render:function(){
    return(
      <View style={[styles.flex,{backgroundColor:"yellow"}]}>
        <TouchableOpacity style={styles.btn} onPress={this.pressPush}>
          <Text>点击进入下一个界面</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

// 定义第二个页面
// SecondPage 一个Button，点击返回上一级界面
var SecondPage = React.createClass({
  pressPop:function(){
    //如果直接返回上一级界面不用给参数
    this.props.navigator.pop();
  },
  render:function(){
    return(
      <View style={[styles.flex,{backgroundColor:"cyan"}]}>
        <TouchableOpacity style={styles.btn} onPress={this.pressPop}>
          <Text>点击返回上一级界面</Text>
        </TouchableOpacity>
      </View>
    );
  }
});
var LessonNavigator = React.createClass({
  render:function () {
    var rootRoute = {
      component:FirstPage
    };
    return(
      <Navigator
       /*
        第一步：
        initialRoute
        这个指定默认的页面，即启动APP之后看到界面的第一屏。
        对象的属性是自定义的，这个对象中的内容会在renderScene方法中处理

        备注：必须包含的属性，即component，表现需要渲染的组件
        */
       initialRoute={rootRoute}
       /*
        第二步:
        configureScene
        场景渲染配置
        */
       configureScene={(route) => {
         return Navigator.SceneConfigs.PushFromRight;
       }}
       /*
         第三步：
         renderScene
         渲染场景
         参数：route（第一步创建并设置给导航器的路由对象）,Navigator(导航器对象)
         实现：给需要显示的组件设置属性
        */
       renderScene={(route,navigator) => {
         //从route对象中获取页面组件
         var Component = route.component;
         return(
           <Component
             navigator={navigator}
             route={route}
           />
         );
       }}
      />
    );
  }
});


var styles = StyleSheet.create({
    flex:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    btn:{
      width:150,
      height:30,
      borderColor:"#0089FF",
      borderWidth:1,
      borderRadius:3,
      justifyContent:"center",
      alignItems:"center"
    }
});














module.exports = LessonNavigator;
