import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var LessonText = React.createClass({
  render:function(){
    return(
      <View style = {styles.flex}>
        <Header/>
        <News></News>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  flex:{
    flex:1
  }
});

//新闻内容
var News = React.createClass({
  show: function(title){
    alert(title);
  },
  render: function() {
    // 定义数组，用于存储设置好的Text组件
    var newsComponents = [];
    // 定义数组的新闻内容
    var news_text = [
      " 1. 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
      " 2. 啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
      " 3. 啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
      " 4. 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
    ];
    // 遍历存储信息的数组，从外部传入的
    for (var i in news_text) {
      // 不加（）也可以
      var text = (
        <Text
         onPress={this.show.bind(this,news_text[i])}
         style={newsStyles.news_item}
         numberOfLines={2}
         key={i}>
         {news_text[i]}
        </Text>
      );
      // 将设置好的Text存入数组
      newsComponents.push(text);
    }
    return (
      <View style={newsStyles.flex}>
        <Text style={newsStyles.news_title}>今日要闻</Text>
        {newsComponents}
      </View>
    );
  }
});

// 样式
var newsStyles = StyleSheet.create({
  flex:{
    flex: 1,
  },
// 今日要闻标题
news_title: {
  fontSize: 20,
  fontWeight: "bold",
  color: "#CD1D1C",
  marginLeft: 10,
  marginTop: 25
},
// 每条新闻
news_item: {
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  fontSize: 15,
  lineHeight: 30
}
});

//新闻头部
var Header = React.createClass({
  render:function(){
    return(
      <View style={headerStyles.flex}>
        <Text style={headerStyles.font}>
          <Text style={headerStyles.font_1}>网易</Text>
          <Text style={headerStyles.font_2}>新闻</Text>
          <Text>有态度</Text>
        </Text>
      </View>
    );
  }
});


//样式
var headerStyles = StyleSheet.create({
  flex:{
    marginTop:25,
    height:40,
    borderBottomWidth:1,
    borderBottomColor:"#EF2D36",
    alignItems:"center"
  },
  //字体设置的公共部分
  font:{
    fontSize:25,
    fontWeight:"bold",
    textAlign:"center"
  },
  font_1:{
    color:"#CD1D1C"
  },
  font_2:{
    color:"#FFF",
    backgroundColor:"#CD1D1C"
  }
});

//导出模块
module.exports = LessonText;
