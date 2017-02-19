  /*
   图书列表模块：搜索框、图书列表
   图书列表内容：通过调用图书搜索接口获取多条图书数据
   图书列表Item是单独封装的
   */
  import React, { Component } from 'react';
  import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ListView,
    ScrollView
  } from 'react-native';
  var Util = require("./../common/util");
  var SearchBar = require("./../common/searchBar");
  var ServiceUrl = require("./../common/service");
  var BookItem = require("./book_item");
  var BookDetail = require("./book_detail");

  var BookList = React.createClass({
    getInitialState:function () {
      var ds = new ListView.DataSource({
        rowHasChanged:(oldRow,newRow) => oldRow!==newRow
      });
      return{
        // dataSource
        dataSource:ds,
        // 网络请求状态标识
        show:false,
        // 搜索关键字
        // 作用：1.搜索接口需要设置搜索内容。2。点击搜索按钮时，修改关键字内容，重新请求数据、渲染
        keywords:"React"
      }
    },
    getData:function () {
      // 开启loading，每次搜索时需要重新下载显示数据
      this.setState({
        show:false
      });
      // 请求数据
      var that = this;
      var url = ServiceUrl.book_search + "?count=20&q=" + this.state.keywords;
      Util.getRequest(url, function (data){
        // 请求成功回调函数
        /*
         如果没有相关书籍，使用alert提示
         https://api.douban.com/v2/book/search?count=20&q=react
         {"count":0,"start":0,"total":0,"books":[]}
         */
        if (!data.books || data.books.length == 0) {
          return alert("未查询到相关书籍");
        }
        // 设置下载状态和数据源
        var ds = new ListView.DataSource({
          rowHasChanged:(oldRow,newRow) => oldRow!==newRow
        });
        that.setState({
          show:true,
          dataSource:ds.cloneWithRows(data.books)
        })
      },function (error) {
        // 请求失败回调函数
        return alert(error);
      })
    },
    _changeText:function (text) {
      this.setState({
        keywords:text
      });
    },
    _searchPress:function () {
      console.log("_searchPress");
      this.getData();
    },
    _showDetail:function (bookID) {
      var detailRoute = {
        component:BookDetail,
        passProps:{
          bookID:bookID
        }
      }
      this.props.navigator.push(detailRoute);
    },
    render:function () {
      return(
        <ScrollView>
          <SearchBar
            placeholder="请输入图书的名称"
            onPress={this._searchPress}
            onChangeText={this._changeText}/>
          {
            // 请求数据时显示loading，数据请求成功后显示ListView
            this.state.show ?
            <ListView
              dataSource={this.state.dataSource}
              initialListSize={10}
              renderRow={this._renderRow}
              renderSeparator={this._renderSeparator}/>
            : Util.loading
          }
        </ScrollView>
      );
    },
    componentDidMount:function () {
      // 请求数据
      console.log("ComponentDidMount");
      this.getData();
    },
    _renderRow:function (book) {
      return <BookItem book={book} onPress={this._showDetail.bind(this,book.id)}/>
    },
    _renderSeparator:function (sectionID:number,rowID:number) {
      var style = {
        height:1,
        backgroundColor:"#CCCCCC"
      }
      return <View style={style} key={sectionID+rowID}/>
    }
  });























  module.exports = BookList;
