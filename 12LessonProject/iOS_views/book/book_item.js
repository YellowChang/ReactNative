/*
 实现功能：显示图书信息，点击进入图书详情界面
 包含组件：基本组件
 外部传入：
 book        图书对象
 onPress     通过...this.props绑定，需要设置参数-图书id

 需要使用的字段：
     image 图书缩略图
     title 图书名称
     publisher 出版社
     author 作者
     price 价格
     pages 图书总页数
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var BookItem = React.createClass({
  render:function () {
    var book = this.props.book;
    return(
      <TouchableOpacity style={styles.item} {...this.props}>
        <View style={styles.imageContainer}>
          <Image source={{url:book.image}} style={styles.image}/>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer1}>
            <Text numberOfLines={1}>{book.title}</Text>
          </View>
          <View style={styles.textContainer1}>
            <Text style={styles.publisher_author} numberOfLines={1}>{book.publisher}</Text>
          </View>
          <View style={styles.textContainer1}>
            <Text style={styles.publisher_author} numberOfLines={1}>{book.author}</Text>
          </View>
          <View style={styles.textContainer2}>
            <Text style={styles.price}>{book.price}</Text>
            <Text style={styles.pages}>{book.pages}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
});

var styles = StyleSheet.create({
  item:{
    flexDirection:"row",
    height:120,
    padding:10
  },
  imageContainer:{
    justifyContent:"center",
    alignItems:"center"
  },
  image:{
    width:80,
    height:100
  },
  contentContainer:{
    flex:1,
    marginLeft:15
  },
  textContainer1:{
    flex:1,
    justifyContent:"center",
  },
  textContainer2:{
    flex:1,
    flexDirection:"row",
    alignItems:"center"
  },
  publisher_author:{
    color:"#A3A3A3",
    fontSize:13
  },
  price:{
    color:"#2BB2A3",
    fontSize:16
  },
  pages:{
    marginLeft:10,
    color:"#A7A0A0"
  }
});


module.exports = BookItem;
