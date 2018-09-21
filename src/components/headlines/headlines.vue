<template>
  <div class="index">
    <!-- 顶部搜索 -->
    <div class="head" ref="header">
      <div class="right">
        <i class="write"></i> 
        <i class="mine"></i> 
      </div>
    	<div class="logo">
        <i></i> 
      </div>
      <div class="search">
        <i></i>
        <input type="text" class="search-input">
        <div class="style">
          <select name="" id="">
            <option value="1">小说</option>
            <option value="2">论文</option>
          </select>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="swiper-wrapper-mine">
      <div class="swiper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in slides" :key="index"><img :src="item"></swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <p class="crevice"></p>
    <div class="new_active">
      <h3 style="margin-bottom:0;"><a href="">查看更多></a>全站力荐</h3>
      <ul class="recom-list">
        <li>
          <div class="recom-img">
            <img src="https://bookcover.yuewen.com/qdbimg/349573/1011705052/150" class="">
          </div>
          <div class="recom-con">
            <div class="title">
              <span>科幻</span>
              <h4>斗破苍穹gogogo</h4>
            </div>
            <div class="content">我威风威风了我浪费我fwfkl打开理发店非常大蛮乐的V领吗我忘了分完了flewfmw发我威锋网分为非问问他任天野热天</div>
            <div class="meta">
              <span>人气：9999+</span>
              <span>推荐：9999+</span>
            </div>
            <div class="meta">
              <span class="person">小小大直播</span>
            </div>
          </div>
        </li>
        <li>
          <div class="recom-img">
            <img src="https://bookcover.yuewen.com/qdbimg/349573/1011705052/150" class="">
          </div>
          <div class="recom-con">
            <div class="title">
              <span>科幻</span>
              <h4>斗破苍穹gogogo</h4>
            </div>
            <div class="content">我威风威风了我浪费我fwfkl打开理发店非常大蛮乐的V领吗我忘了分完了flewfmw发我威锋网分为非问问他任天野热天</div>
            <div class="meta">
              <span>人气：9999+</span>
              <span>推荐：9999+</span>
            </div>
            <div class="meta">
              <span class="person">小小大直播</span>
            </div>
          </div>
        </li>
        <li>
          <div class="recom-img">
            <img src="https://bookcover.yuewen.com/qdbimg/349573/1011705052/150" class="">
          </div>
          <div class="recom-con">
            <div class="title">
              <span>科幻</span>
              <h4>斗破苍穹gogogo</h4>
            </div>
            <div class="content">我威风威风了我浪费我fwfkl打开理发店非常大蛮乐的V领吗我忘了分完了flewfmw发我威锋网分为非问问他任天野热天</div>
            <div class="meta">
              <span>人气：9999+</span>
              <span>推荐：9999+</span>
            </div>
            <div class="meta">
              <span class="person">小小大直播</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <p class="crevice"></p>
    <div class="new_active">
      <h3 style="margin-bottom:0;"><a href="">查看更多></a>排行榜</h3>
      <ul class="rank-title" ref="rankTitle">
        <li :key="index" 
            v-for="(item, index) in rankTitle"
            @click="rankTitleColor(index, item.name)">{{item.name}}</li>
      </ul>
      <div class="rank-list-wrap">
        <ul class="rank-list" ref="rankList">
          <li :key="index"
              v-for="(item, index) in rankList">
            <img :src="item.thumb">
            <p class="title">{{item.title}}</p>
            <p class="author">{{item.author}}</p>
          </li>
        </ul>
      </div>
    </div>
    <p class="crevice"></p>
    <div class="new_active">
      <h3 style="margin-bottom:0;"><a href="">查看更多></a>猜你喜欢</h3>
      <ul class="recom-list">
        <li>
          <div class="recom-img">
            <img src="https://bookcover.yuewen.com/qdbimg/349573/1011705052/150" class="">
          </div>
          <div class="recom-con">
            <div class="title">
              <span>科幻</span>
              <h4>斗破苍穹gogogo</h4>
            </div>
            <div class="content">我威风威风了我浪费我fwfkl打开理发店非常大蛮乐的V领吗我忘了分完了flewfmw发我威锋网分为非问问他任天野热天</div>
            <div class="meta">
              <span>人气：9999+</span>
              <span>推荐：9999+</span>
            </div>
            <div class="meta">
              <span class="person">小小大直播</span>
            </div>
          </div>
        </li>
        <li>
          <div class="recom-img">
            <img src="https://bookcover.yuewen.com/qdbimg/349573/1011705052/150" class="">
          </div>
          <div class="recom-con">
            <div class="title">
              <span>科幻</span>
              <h4>斗破苍穹gogogo</h4>
            </div>
            <div class="content">我威风威风了我浪费我fwfkl打开理发店非常大蛮乐的V领吗我忘了分完了flewfmw发我威锋网分为非问问他任天野热天</div>
            <div class="meta">
              <span>人气：9999+</span>
              <span>推荐：9999+</span>
            </div>
            <div class="meta">
              <span class="person">小小大直播</span>
            </div>
          </div>
        </li>
        <li>
          <div class="recom-img">
            <img src="https://bookcover.yuewen.com/qdbimg/349573/1011705052/150" class="">
          </div>
          <div class="recom-con">
            <div class="title">
              <span>科幻</span>
              <h4>斗破苍穹gogogo</h4>
            </div>
            <div class="content">我威风威风了我浪费我fwfkl打开理发店非常大蛮乐的V领吗我忘了分完了flewfmw发我威锋网分为非问问他任天野热天</div>
            <div class="meta">
              <span>人气：9999+</span>
              <span>推荐：9999+</span>
            </div>
            <div class="meta">
              <span class="person">小小大直播</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <p class="crevice"></p>
    <div class="new_active">
      <h3 style="margin-bottom:0;"><a href="" style="display: none;">查看更多></a>精选专题</h3>
      <ul class="special">
        <li>
          <img src="/static/images/a.jpg">
        </li>
        <li>
          <img src="/static/images/b.jpg">
        </li>
        <li>
          <img src="/static/images/c.jpg">
        </li>
        <li>
          <img src="/static/images/d.jpg">
        </li>
      </ul>
    </div>
    <p class="clear"></p>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import {addClass, removeClass, hasClass} from 'common/js/dom.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      rankTitle: [
        {id: 1, name: '武侠', xid: '1'},
        {id: 2, name: '言情', xid: '2'},
        {id: 3, name: '惊悚', xid: '3'}
      ],
      rankIem: '',
      rankList: [],
      rankListAll: [
        {
          id: 1,
          type: '武侠',
          list: [
            {id: 1, title: '斗破苍穹11111', author: '兜兜痘痘aaa', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011705052/150'},
            {id: 2, title: '斗破苍穹11111', author: '兜兜痘痘aaa', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011705052/150'},
            {id: 3, title: '斗破苍穹11111', author: '兜兜痘痘aaa', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011705052/150'},
            {id: 4, title: '斗破苍穹11111', author: '兜兜痘痘aaa', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011705052/150'}
          ]
        },
        {
          id: 2,
          type: '言情',
          list: [
            {id: 1, title: '斗破苍穹22222', author: '兜兜痘痘bbb', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011705052/150'},
            {id: 2, title: '斗破苍穹22222', author: '兜兜痘痘bbb', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011705052/150'},
            {id: 3, title: '斗破苍穹22222', author: '兜兜痘痘bbb', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011705052/150'},
            {id: 4, title: '斗破苍穹22222', author: '兜兜痘痘bbb', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011705052/150'},
            {id: 5, title: '斗破苍穹22222', author: '兜兜痘痘bbb', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011705052/150'},
            {id: 6, title: '斗破苍穹22222', author: '兜兜痘痘bbb', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011705052/150'}
          ]
        },
        {
          id: 3,
          type: '惊悚',
          list: [
            {id: 1, title: '斗破苍穹33333', author: '兜兜痘痘ccc', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011705052/150'},
            {id: 2, title: '斗破苍穹33333', author: '兜兜痘痘ccc', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011705052/150'},
            {id: 3, title: '斗破苍穹33333', author: '兜兜痘痘ccc', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011705052/150'}
          ]
        }
      ],
      slides: [
        'http://www.7wanl.com/data/attachment/portal/201711/24/171352el6wg4vlo3rozxwb.jpg',
        'http://www.7wanl.com/data/attachment/portal/201712/26/164536giup9qw2gw2bkq1z.jpg',
        'http://www.7wanl.com/data/attachment/portal/201809/18/110250lqsqqz9qqvv4siqs.jpg.max.jpg'
      ],
      //轮播config
      swiperOption: {
        debugger: true,  
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        speed: 500,
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true
      }
    }
  },
  mounted() {
    this._initRankTitle()
  },
  methods: {
    _initRankTitle() {
      let rankList = this.$refs.rankTitle.getElementsByTagName('li');
      let liWidth = 1;
      let width = rankList.length * liWidth;

      this.$refs.rankTitle.style.width = width + 'rem';
    },
    rankTitleColor(index, title) {
      let rankTitleItem = this.$refs.rankTitle.children;
      for(let i = 0; i < rankTitleItem.length; i++) {
        removeClass(rankTitleItem[i], 'active');
      }

      addClass(rankTitleItem[index], 'active')
      this.rankListWidth(title)
    },
    rankListWidth(title) {
      let rankListAll = this.rankListAll;
      for(let i = 0; i < rankListAll.length; i++) {
        if (rankListAll[i].type == title) {
          this.rankList = rankListAll[i].list

          let width = rankListAll[i].list.length * 2.2 - 0.2;

          this.$refs.rankList.style.width = width + 'rem';
        }
      }

    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import "~common/stylus/variable"

.head
  width: 100%
  height: 0.88rem
  background-color: #14a6a3
  text-align:center
  .right
    float: right
    margin-top: 0.14rem
    margin-right: 0.2rem
    i
      display: inline-block
      width: 0.6rem 
      height: 0.6rem
      line-height: 0.6rem
    i.write
      background: url('~common/images/write.png') no-repeat
      background-size: 100% 100%
    i.mine
      margin-left: 0.1rem
      background: url('~common/images/mine.png') no-repeat
      background-size: 100% 100%
  .logo 
    float: left
    text-align: center
    margin-top: 0.14rem
    margin-left: 0.2rem
    i 
      display: inline-block
      width: 0.6rem 
      height: 0.6rem
      line-height: 0.6rem
      background: url('~common/images/logo.png') no-repeat
      background-size: 100% 100%
  .search 
    width: 4rem
    height: 0.6rem
    margin-left: 0.3rem
    margin-top: 0.14rem
    float: left
    position: relative
    background-size: 0.02rem
    i 
      position: absolute
      left: 0.1rem
      top: 50%
      display: inline-block
      width: 0.4rem 
      height: 0.4rem
      margin-top: -0.2rem
      background: url('~common/images/search.png') no-repeat
      background-size: 100% 100%
    .search-input 
      width: 100%
      height: 100%
      padding-left: 0.6rem
      background: #0d9a97
      border-radius: 0.2rem
      box-sizing: border-box
      color: #f0f0f0
    .style
      position: absolute
      right: 0
      top: 0
      width: 0.5rem
      height: 0.6rem
      select
        width: 1rem
        height: 100%
        overflow: hidden
        border: none
        border-radius: 0.1rem
        background-color: #0d9a97
        color: #f0f0f0
// 轮播图
.swiper-wrapper-mine
  width: 100%
  height: 3.75rem
  margin:0 auto
  overflow: hidden
  position: relative
  .swiper-slide
    height 3.75rem
    &.swiper-slide-active
      img
        width: 100%
        height: 100%
    img
      display: block
      margin: 0 auto
      width: 100%
      height: 100%
      vertical-align: middle
  .swiper-pagination
    width: 100%
    bottom: 0.4rem
    text-align: center
    .swiper-pagination-bullet-active
      background-color: #0d9a97
    span
      margin: 0 4px !important
.new_active 
  padding: 0px 0.22rem
  margin: 0.12rem 0 0.14rem
  .rank-list-wrap
    width: 100%
    height: 4rem
    overflow-x: auto
    overflow-y: hidden
    clear: both
    .rank-list
      margin: 10px 0
      width: 10rem
      height: 4rem
      li
        height: 4rem
        width: 2rem
        overflow: hidden
        float: left
        margin-right: 0.2rem
        &:last-child
          margin-right: 0
        img
          width: 100%
        p
          font-size: 13px
          color: #333
          height: 22px
          line-height: 22px
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          &.author
            color: #666
            font-size: 12px
  .rank-title
    height: 0.6rem
    text-align: center
    margin: 0 auto
    border-radius: 100px
    border: 1px solid red
    overflow: hidden
    li
      width: 1rem
      font-size: $font-size-12
      height: 0.6rem
      line-height: 0.6rem
      background-color: #fff
      float: left
      text-align: center
      color: red
      border-right: 1px solid red
      box-sizing: border-box
      &:last-child 
        border-right: none
      &.active 
        background-color: red
        color: #fff
  .special 
    clear: both
    margin: 10px 0
    li
      width: 50%
      height: 1.825rem
      float: left
      margin: 5px 0
      overflow: hidden
      &:nth-child(2n)
        padding-left: 5px
        box-sizing: border-box
      img
        width: 100%
  a 
    float: right
  h3
    padding-top: 3px
    width: 100%
    box-sizing: border-box
    font-weight: normal
    font-size: 14px
    color: #333
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    &:before
      content: " "
      display: inline-block
      width: 2px
      background: #14a6a3
      height: 0.24rem
      margin-right: 5px
  .recom-list
    margin: 10px 0
    li
      margin: 20px 0
      display: flex
      justify-content: space-around
      &:last-child
        margin-bottom: 0
      .recom-img
        flex: 0 0 100px
        img
          width: 100%
          height: auto
      .recom-con
        flex: 1
        padding-left: 10px
        .title
          margin-top: 5px
          font-size: $font-size-18
          span
            float: right
            font-size: $font-size-12
            display: inline-block
            padding: 2px 3px
            border: 1px solid #999
            color: #999
            border-radius:5px
        .content
          line-height: 21px
          margin: 12px 0
          color: #999
          display: -webkit-box
          height: 0.8rem
          overflow: hidden
          -webkit-box-orient: vertical
          -webkit-line-clamp: 2
        .meta
          font-size: $font-size-12
          color: #666
          span
            margin-right: 20px
          .person
            font-size: $font-size-14
            display: inline-block
            padding-left: 14px
            margin-top: 12px
            background: url('~common/images/author.png') no-repeat
            background-size: 14px 14px
</style>