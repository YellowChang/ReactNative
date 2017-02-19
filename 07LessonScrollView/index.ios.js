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
  View
} from 'react-native';

//练习1：实现ScrollView的基本功能
 // var LessonScrollView = require("./myScrollView");

// 练习2：电影列表

  var LessonScrollView = require("./movieList");

/*
 第四部分
 注册入口组件
 */
AppRegistry.registerComponent('LessonScrollView', () => LessonScrollView);
