/*
 实现功能：封装Header，在头部显示标题和返回按钮
 包含组件：
 外部传入：
  navigator 点击返回按钮返回上一级界面
  initObj(backName,barTitle) 返回按钮的名字、标题
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

var Navigation = React.createClass({
  render:function () {
    // 创建route对象，约定格式
    var rootRoute = {
      component:this.props.component,
      passProps:{

      }
    };
    return(
      <Navigator
        initialRoute={rootRoute}
        configureScene={() => {return Navigator.SceneConfigs.PushFromRight}}
        renderScene={(route,navigator) => {
          var Component = route.component;
          return(
            <View style={{flex:1}}>
            <Component
              navigator={navigator}
              route={route}
              {...route.passProps}/>
            </View>
          );
        }}/>
    );
  }
});





















module.exports = Navigation;
