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

// 在ReactNative中，使用Fetch实现网络请求

//练习一：使用get和post方式获取数据
// var LessonFetch = require("./getData");
// 练习二：电影列表（网络请求数据）
var LessonFetch = require("./movieList");










AppRegistry.registerComponent('LessonFetch', () => LessonFetch);
