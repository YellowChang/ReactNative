/*
 实现功能：封装WebView，根据传入的URL显示网页
 包含组件：Header、WebView
 外部传入：
  给Header 设置navigator、initObj(backName,barTitle)
  给WebView 设置source
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

var Header = require("./header");
var CustomWebView = React.createClass({
  render:function () {
    return(
      <View style={{backgroundColor:"white",flex:1}}>
        <Header
          navigator={this.props.navigator}
          initObj={{
            backName:this.props.backName,
            barTitle:this.props.barTitle
          }}/>
        <WebView
          startInLoadingState={true}
          contentInset={{top:0,bottom:49}}
          source={{url:this.props.url}}/>
      </View>
    );
  }
});
var styles = StyleSheet.create({

});




















module.exports = CustomWebView;
