/*
  第一部分
  导入ReactNative包，导入ReactNative组件
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
/*
  第二部分
  创建ReactNative组件
 */
/*
 用于显示图片的组件，包括网络图片、静态资源等等
 常用性能：
  resizeMode: 图片适应模式：cover、contain、stretch
  source 图片引用地址
  iOS支持属性:onLoad、onLoadEnd、onLoadStart、onProgress

  http://img3.imgtn.bdimg.com/it/u=3260980509,340386180&fm=11&gp=0.jpg
 */
// 练习：显示两张图片，一张网络图片，一张是静态资源

 var LessonImage = React.createClass({
     render:function(){
       return(
         <View style={styles.container}>
           <View style={styles.net}>
             <Image
               style={styles.netImage}
                   source={{url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1485573953&di=7a353c99b4cbf32d7771d29d47ca1704&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.hb.aicdn.com%2F6f2e352868d7c0d402bfa096efd95fb88eb04e381e03c-1wYAGj_fw580"}}
             />
           </View>
           <View style={styles.local}>
             <Image
               style={styles.localImage}
              //ReactNative项目中的图片
              source={require("./img/Me.png")}
              //  image!是固定不变的,Xcode项目中的图片-不知道为什么不成功
                // source={require("image!Me.png")}

               />
           </View>
         </View>
       );
     }
   });

/*
  第三部分
  StyleSheet.create创建样式实例
 */
 //定义样式
 var styles = StyleSheet.create({
    container: {
      flex:1,
      margin:25,
      alignItems:"center"
    },
    net:{
      marginTop:30,
      width:300,
      height:240,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"cyan"
    },
    netImage:{
      width:200,
      height:200,
      backgroundColor:"gray"
    },
    local:{
      marginTop:30,
      width:300,
      height:200,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"yellow"
    },
    localImage:{
      width:100,
      height:100,
      backgroundColor:"gray"
    }
 });

 module.exports = LessonImage;
