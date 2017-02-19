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
  TouchableOpacity
} from 'react-native';

var Icon = require("./left_Item");

var Header = React.createClass({
  render:function () {
    //获取initObj对象，包括backName、barTitle
    var headerContent = this.props.initObj;

    return(
      <View style={styles.header}>
        <TouchableOpacity style={styles.left_btn} onPress={this._pop}>
          <Icon/>
          <Text style={styles.btn_text}>{headerContent.backName}</Text>
        </TouchableOpacity>
        <View style={styles.title_contanier}>
          <Text style={styles.title} numberOfLines={1}>{headerContent.barTitle}</Text>
        </View>
      </View>
    );
  },
  // 返回按钮事件处理方法
  _pop:function () {
    this.props.navigator.pop();
  }
});
var styles = StyleSheet.create({
  header:{
    height:44,
    backgroundColor:"#3497FF",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  left_btn:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  btn_text:{
    color:"#fff",
    fontSize:17,
    fontWeight:"bold"
  },
  title_contanier:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    color:"#fff",
    fontSize:18,
    fontWeight:"bold",
    lineHeight:18,
    width:200
  }
});



module.exports = Header;
