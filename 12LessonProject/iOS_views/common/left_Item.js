/*
 实现功能：封装返回按钮，不使用图片
 包含组件：
 外部传入：
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
var Icon = React.createClass({
  render:function () {
    return(
      <View>
        <View style={styles.go}></View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  go:{
    width:15,
    height:15,
    borderLeftWidth:2,
    borderBottomWidth:2,
    borderColor:"#fff",
    marginLeft:10,
    transform:[{rotate:"45deg"}] //将一个矩形旋转45度
  }
});


module.exports = Icon;
