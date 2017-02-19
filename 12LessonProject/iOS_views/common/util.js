/*
 实现功能：定义多个属性，在项目中会使用的一些功能，包括：获取屏幕尺寸、loading组件、GET请求方法
 包含组件：
 外部传入：
  GET请求需要从外部传入URL、请求成功的回调方法、请求失败的回调方法
 */
 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Dimensions, //用于获取屏幕的宽与高
   ActivityIndicator
 } from 'react-native';

var Util = {
  //屏幕尺寸
  windowSize:{
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height
  },
  // 基于Fetch的get方法，只负责下载数据，下载后的数据处理操作在回调方法中实现
  // successCallback 数据下载成功后的回调方法，在组件中实现
  // failCallback 数据下载失败后的回调方法，在组件中实现
  getRequest:function (url,successCallback,failCallback) {
    fetch(url)
    .then((response) => response.json())
    .then((responseData) => successCallback(responseData))
    .then((error) => failCallback(error))
  },

  //loading 效果
  loading:<ActivityIndicator style={{marginTop:200}}/>


}
module.exports = Util;
