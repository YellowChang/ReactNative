/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
  第一部分
  导入ReactNative包，导入ReactNative组件
 */
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

var LessonImage = require("./loadImage");












/*
 第四部分
 注册入口组件
 */
AppRegistry.registerComponent('LessonImage', () => LessonImage);
