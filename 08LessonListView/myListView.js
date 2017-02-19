/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

/*
 ListView  数据列表
 ListView最重要的是设置每行显示的组件
 section,header

 使用ListView.DataSource，给他传递一个普通的数组，再使用dataSource对象实例化一个ListView组件

 ListView的实现：row/section组件定义，设置数据

 设置ListView数据源：
 将dataSource对象设置为state属性,ListView会根据数据源进行渲染

 查看官网
 */

// 原始数据：数组（字符串）
var contents = [
  "Unity课程",
  "H5课程",
  "Android课程",
  "iOS课程",
  "react-native课程",
  "UI课程",
  "大数据课程",
  "产品经理课程"
];

var MyListView = React.createClass({
  getInitialState: function() {
    //创建dataSource对象
    var ds = new ListView.DataSource({
      // 通过判断决定渲染哪些行组件，避免全部渲染，提供渲染效率
      rowHasChanged:(oldRow, newRow) => oldRow!==newRow
    });

    return{
      // 设置dataSource时，不直接使用提供的原始数据，使用cloneWithRows对数据源进行复制
      // 使用复制后的数据源实例化ListView。优势：当原始数据发生变化时，ListView组件的dataSource不会改变
      dataSource: ds.cloneWithRows(contents)
    };
  },
  _renderRow:function(rowData:string){
    return (
      <View style={styles.row}>
        <Text style={styles.content}>{rowData}</Text>
      </View>
    );
  },
  render: function(){
    return(
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}/>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:25
  },
  row:{
    justifyContent:"center",
    alignItems:"center",
    padding:5,
    height:100,
    borderBottomWidth:1,
    borderColor:"#CCCCCC"
  },
  content:{
    flex:1,
    fontSize:20,
    color:"blue",
    lineHeight:100
  }
});

module.exports = MyListView;
