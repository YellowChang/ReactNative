import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

/*
  在ReactNative中，使用Fetch实现网络请求。fetch同XMLHttpRequest非常类似，是一个封装成都更高
  的网络API，使用起来很简洁，因为使用了promise。

  Promise是异步编程的一种解决方案，比传统的解决方案-回调函数和事件-更合理更强大。ES6将其写进了语言标准
  ，统一了用法，原生提供了Promise对象，简单说就是一个容器，里面保存着未来才会结束的事件
  （通常是一个异步操作）的结果。

  Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成）、Rejected
  （已失败）。
  Promise实例生成以后，可以分别指定“完成”和“失败”状态的回调函数，实现方式：链式调用方法。
  fetch中使用的就是该特性

  语法：
  fetch（参数）
  .then(完成的回调函数)
  .catch(失败的回调函数)

  一、开启、调用（网址、网络请求配置）
  fetch(url,opts)
  二、
  .then((response) => {
  // 网络请求成功执行该回调函数，得到响应对象，通过response可以获取请求的数据
  // 例如：json、text等等
  // return response.text();
  return response.json();
})
三、
.then((responseData) => {
// 处理请求得到的数据

})
四、
.catch((error) => {
// 网络请求失败执行该回调函数，得到错误信息
})
 */

function getRequest(url){
  var opts = {
    method:"GET"
  }
  fetch(url,opts)
  .then((response) => {
    return response.text(); //返回一个带文本的对象
  })//这里不可以加;
  .then((responseText) => {
    alert(responseText);
  })//这里不可以加;
  .catch((error) => {
    alert(error);
  });
}
/*
 FormData:
 Web应用中频繁使用的一项功能就是表单数据的序列化，XMLHttpRequest2级定义了FormData类型。
 FormData主要用于实现序列化表单以及创建与表单格式相同的数据。

 var data = new FormData();
 data.append("name","huangchang");
 append方法接收两个参数：键和值。分别对应表单字段的名字和字段中包含的值，添加多个键值对。

 在jquery中，"key1=value1&key2=value2"作为参数传入对象框架会自动封装成FormData形式。
 在Fetch中进行Post请求时，需要自动创建FormData对象传给body
 */
function postRequest(url){
  // 将"key1=value1&key2=value2"封装成FormData形式
  let formData = new FormData();
  formData.append("username","huangchang");
  formData.append("password","123");

  var opts = {
    method:"POST",
    body:formData
  }
  fetch(url,opts)
  .then((response) => {
    return response.text(); //返回一个带文本的对象
  })//这里不可以加;
  .then((responseText) => {
    alert(responseText);
  })//这里不可以加;
  .catch((error) => {
    alert(error);
  });
}

var GetData = React.createClass({
  render:function () {
    return(
      <View style={styles.container}>
        <TouchableOpacity
         style={styles.btn}
         onPress={getRequest.bind(this,"http://project.lanou3g.com/projects/bj/reactnative/login.php?username=lanou&password=123")}>
        <Text>GET</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.btn}
         onPress={postRequest.bind(this,"http://project.lanou3g.com/projects/bj/reactnative/login.php")}>
        <Text>POST</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:25,
    backgroundColor:"cyan",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  btn:{
    width:60,
    height:30,
    borderWidth:1,
    borderRadius:3,
    borderColor:"black",
    backgroundColor:"yellow",
    justifyContent:"center",
    alignItems:"center"
  }
});



module.exports = GetData;
