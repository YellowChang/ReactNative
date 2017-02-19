  /*
   图书详情

   实现功能：展示图书详情，包括：图书信息、图书简介、作者简介
   包含组件：基本组件、BookItem(图书信息实现BookItem展示)
   外部传入：
   需要使用的字段：
       image 图书缩略图
       title 图书名称
       publisher 出版社
       author 作者
       price 价格
       summary 图书简介
       author_intro 作者简介
   */
  import React, { Component } from 'react';
  import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
  } from 'react-native';

  var Util = require("./../common/util");
  var Header = require("./../common/header");
  var ServiceUrl = require("./../common/service");
  var BookItem = require("./book_item");

  var BookDetail = React.createClass({
    getInitialState:function () {
      return{
        bookData:null //图书对象详情信息
      };
    },
    getData:function () {
      var that = this;
      var url = ServiceUrl.book_detail_id + this.props.bookID;
      console.log("url:"+url);
      Util.getRequest(url,function (data) {
        that.setState({
          bookData:data
        });
        console.log("data:"+data);
      },function (error) {
        alert(error);
      })
    },
    render:function () {
      return(
        <ScrollView style={styles.container}>
          {
            this.state.bookData ?
              <View>
                <Header
                  initObj={{backName:"图书",barTitle:this.state.bookData.title}}
                  navigator={this.props.navigator}/>
                <BookItem book={this.state.bookData}/>
                <View>
                  <Text style={styles.title}>图书简介</Text>
                  <Text style={styles.text}>{this.state.bookData.summary}</Text>
                </View>
                <View style={{marginTop:10}}>
                  <Text style={styles.title}>作者简介</Text>
                  <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
                </View>
                <View style={{height:55}}></View>
              </View>
              :Util.loading
          }
        </ScrollView>
      );
    },
    componentDidMount:function () {
      // 请求图书详情
      this.getData();
      console.log("----componentDidMount");
    }
  });

  var styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"white"
    },
    title:{
      fontSize:16,
      marginTop:10,
      marginLeft:10,
      marginBottom:10,
      fontWeight:"bold"
    },
    text:{
      marginLeft:10,
      marginRight:10,
      color:"#000D22"
    }
  });

  module.exports = BookDetail;
