<template>
  <div class="cate">
    <div class="cate-left" ref="cateLeft">
      <ul ref="cateItem">
        <li :class="{'active': item.active == 1}" 
            v-for="(item, index) in LeftLi"
            @click="_cateItemClick(index)">{{item.title}}</li>
      </ul>
    </div>
    <div class="cate-right" ref="cateRight">
     <div class="classify-image">
        <img src="https://m.360buyimg.com/mobilecms/s1125x549_jfs/t18151/220/820694231/171992/19984c09/5aa6409eN6a1f0195.jpg!q70.jpg">  
      </div>
      <section>
        <h3 class="classify-title">大牌推荐</h3>
        <div class="classify-contain">
          <div class="classify-view">
            <a href="javascript: void(0)">
              <img src="http://p.qpic.cn/qqjifen_pic/0/upload_0b1426b8253a28b42889ca3e59956f16/0">
              <p>英雄联盟英</p>
            </a>
          </div>
          <div class="classify-view">
            <a href="javascript: void(0)">
              <img src="http://p.qpic.cn/qqjifen_pic/0/upload_0b1426b8253a28b42889ca3e59956f16/0">
              <p>英雄联盟</p>
            </a>
          </div>
          <div class="classify-view">
            <a href="javascript: void(0)">
              <img src="http://p.qpic.cn/qqjifen_pic/0/upload_0b1426b8253a28b42889ca3e59956f16/0">
              <p>英雄联盟</p>
            </a>
          </div>
          <div class="classify-view">
            <a href="javascript: void(0)">
              <img src="http://p.qpic.cn/qqjifen_pic/0/upload_0b1426b8253a28b42889ca3e59956f16/0">
              <p>英雄联盟</p>
            </a>
          </div>
        </div>
      </section>
      <section>
        <h3 class="classify-title">大牌推荐</h3>
        <div class="classify-contain">
          <div class="classify-view">
            <a href="javascript: void(0)">
              <img src="http://p.qpic.cn/qqjifen_pic/0/upload_0b1426b8253a28b42889ca3e59956f16/0">
              <p>英雄联盟</p>
            </a>
          </div>
          <div class="classify-view">
            <a href="javascript: void(0)">
              <img src="http://p.qpic.cn/qqjifen_pic/0/upload_0b1426b8253a28b42889ca3e59956f16/0">
              <p>英雄联盟</p>
            </a>
          </div>
          <div class="classify-view">
            <a href="javascript: void(0)">
              <img src="http://p.qpic.cn/qqjifen_pic/0/upload_0b1426b8253a28b42889ca3e59956f16/0">
              <p>英雄联盟</p>
            </a>
          </div>
          <div class="classify-view">
            <a href="javascript: void(0)">
              <img src="http://p.qpic.cn/qqjifen_pic/0/upload_0b1426b8253a28b42889ca3e59956f16/0">
              <p>英雄联盟</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {addClass, removeClass, hasClass} from 'common/js/dom.js'

export default {
  name: '',
  data () {
    return {
      msg: '',
      LeftLi: [
        {id: 1, title: '推荐分类', cid: 0},
        {id: 2, title: '京东超市', cid: 1},
        {id: 3, title: '国际名牌', cid: 2},
        {id: 4, title: '奢侈品', cid: 3},
        {id: 5, title: '全球购', cid: 4},
        {id: 6, title: '男装', cid: 5},
        {id: 7, title: '女装', cid: 6},
        {id: 9, title: '其他分类', cid: 7},
        {id: 10, title: '男装', cid: 8},
        {id: 11, title: '女装', cid: 9},
        {id: 12, title: '其他分类', cid: 10},
        {id: 13, title: '男装', cid: 11},
        {id: 14, title: '女装', cid: 12},
        {id: 15, title: '其他分类', cid: 13}
      ]
    }
  },
  mounted() {
    var clientHeight = document.documentElement.clientHeight || window.innerHeight;
    this.$refs.cateLeft.style.height = clientHeight - 65 + 'px';
    this.$refs.cateRight.style.height = clientHeight - 65 + 'px';

    // 默认第一个加上 active 的 class
    addClass(this.$refs.cateItem.children[0], 'active')
  },
  methods: {
    _cateItemClick(index) {
      let cateItemLi = this.$refs.cateItem.children;

      for (let i = 0; i < cateItemLi.length; i++) {
        removeClass(cateItemLi[i], 'active')
      }
      addClass(cateItemLi[index], 'active')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.cate
  height: 100%
  width: 100%
  box-sizing: border-box
  display: flex
  .cate-right
    padding: 10px
    box-sizing: border-box
    width: 100%
    overflow-y: auto
    flex: 1
    &::-webkit-scrollbar 
      display: none
    .classify-title 
      font-size: 14px
      color: #333
      font-weight: 700
      margin:20px 0 10px
    .classify-contain 
      box-sizing: border-box
      width: 100%
      &:after 
        content: ""
        display:block
        height: 2px
        clear: both
      .classify-view 
        float: left
        width: 33.33333%
        padding: 12px
        font-size: 14px
        text-align: center
        box-sizing: border-box
        a 
          color: #000
        p 
          font-size: 12px
          margin-top: 5px
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
        img 
          width: 100%
          height: auto
    .classify-image
      width: 100%
      img 
        width: 100%
        height: auto
  .cate-left
    flex: 0 0 90px
    position: relative
    height: 100%
    overflow-y: auto
    ul
      position: absolute
      z-index: 9
      width: 100%
      height: 100%
      overflow-y: auto
      background: #f8f8f8
      font-size: $font-size-14
      &::-webkit-scrollbar 
        display: none;
      li
        height: 50px
        line-height: 50px
        text-align: center
        color: #333
        &.active
          color: #22bc99
          background: #fff
</style>