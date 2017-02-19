  import React, { Component } from 'react';
  import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    RefreshControl
  } from 'react-native';

  /*
    ScrollView 的简单实现
    实现监测拖拽、滑动相关的方法
    添加几个子组件

    //查看官网-支持iOS的
   */

  var MyScrollView = React.createClass({
    _onScrollBeginDrag: function(){
      console.log("开始拖拽");
    },
    _onScrollEndDrag: function(){
      console.log("结束拖拽");
    },
    _onMomentumScrollBegin: function(){
      console.log("开始滑动");
    },
    _onMomentumScrollEnd: function(){
      console.log("结束滑动");
    },
    _onRefresh: function(){
      console.log("刷新");
    },
    render:function(){
      return(
        <View style={styles.container}>
          <ScrollView style={styles.scrollView}
            showsVerticalScrollIndicator={true}
            onScrollBeginDrag={this._onScrollBeginDrag}
            onScrollEndDrag={this._onScrollEndDrag}
            onMomentumScrollBegin={this._onMomentumScrollBegin}
            onMomentumScrollEnd={this._onMomentumScrollEnd}
            refreshControl={<RefreshControl refreshing={false}
            tintColor="red" title="正在刷新...." onRefresh={this._onRefresh}/>}>
            <View style={styles.view_1}></View>
            <View style={styles.view_2}></View>
            <View style={styles.view_3}></View>
          </ScrollView>
        </View>
      );
    }
  });

  var styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"cyan"
    },
    scrollView:{
      marginTop:25,
      marginLeft:10,
      marginRight:10,
      backgroundColor:"#cccccc"
    },
    view_1:{
      margin:15,
      flex:1,
      height:300,
      backgroundColor:"yellow"
    },
    view_2:{
      margin:15,
      flex:1,
      height:300,
      backgroundColor:"blue"
    },
    view_3:{
      margin:15,
      flex:1,
      height:300,
      backgroundColor:"green"
    }
  });

  module.exports =  MyScrollView;
