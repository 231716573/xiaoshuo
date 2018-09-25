<template>
  <transition name="slide">
    <div class="type">
      <back :title="title"></back>
      <div class="ranklist-wrap">
        <ul class="list">
          <router-link tag="li"
                       :to="item.url"
                       v-for="(item, index) in list" :key="this"
                       class="ranklist-item">
            <div class="ranklist-media">   
              <img :src="item.thumb">
            </div>
            <div class="ranklist_info">
              <div class="ranklist_cont">
                <h3 class="ranklist_tit"><span class="rank-num">{{index+1}}</span>《{{item.title}}》</h3>
                <div class="author"><span class="ranktype">{{item.type}}</span>{{item.author}}</div>
                <div class="update">更新：<span class="tit">{{item.updateTit}}</span></div>
                <div class="hot"><i></i>热度：<span class="num">{{item.num}}</span></div>
              </div>
              <i class="ranklist_arrow"></i>
            </div>
          </router-link >
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import Back from 'base/back/back'

export default {
  data () {
    return {
      title: this.$route.query.id,
      list: [
        {id: 1, thumb: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_217255676.jpg?max_age=2592000', title: '我在你妈坟山蹦迪1', author: '东派一叔', type: '都市风情', updateTit: '第一章 蹦迪播放的歌曲', num: '111111', url: '/article/11'},
        {id: 2, thumb: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_217255676.jpg?max_age=2592000', title: '我在你妈坟山蹦迪2', author: '南派二叔', type: '武侠', updateTit: '第二章 蹦迪播放的歌曲', num: '222222', url: '/article/22'},
        {id: 3, thumb: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_217255676.jpg?max_age=2592000', title: '我在你妈坟山蹦迪3', author: '中派三叔', type: '科幻', updateTit: '第三章 蹦迪播放的歌曲', num: '333333', url: '/article/33'},
        {id: 4, thumb: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_217255676.jpg?max_age=2592000', title: '我在你妈坟山蹦迪4', author: '西派四叔', type: '科技', updateTit: '第四章 蹦迪播放的歌曲', num: '444444', url: '/article/44'},
        {id: 5, thumb: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_217255676.jpg?max_age=2592000', title: '我在你妈坟山蹦迪5', author: '北派五叔', type: '文学', updateTit: '第五章 蹦迪播放的歌曲', num: '555555', url: '/article/55'},
        {id: 6, thumb: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_217255676.jpg?max_age=2592000', title: '我在你妈坟山蹦迪6', author: '外派六叔', type: '科技', updateTit: '第六章 蹦迪播放的歌曲', num: '666666', url: '/article/66'}
      ]
    }
  },
  components: {
    Back
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.type
  position: fixed
  z-index: 10000
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: #fff
  overflow-y: auto
  .ranklist-wrap
    padding: 10px
    .ranklist-item
      background-color: #fff
      display: -webkit-box
      margin-bottom: 10px
      border-radius: 5px
      &:first-child .rank-num
        color: #fff !important
        background-color: #ed5565
        width: 16px
        height: 16px
        line-height: 16px
        border-radius: 2px
        text-align: center
      &:nth-child(2) .rank-num
        color: #fff !important
        background-color: #e28d29
        width: 16px
        height: 16px
        line-height: 16px
        border-radius: 2px
        text-align: center
      &:nth-child(3) .rank-num
        color: #fff !important
        background-color: #9fc575
        width: 16px
        height: 16px
        line-height: 16px
        border-radius: 2px
        text-align: center
      .ranklist_info
        position: relative
        -webkit-box-flex: 1
        display: -webkit-box
        line-height: 1.7
        .ranklist_cont
          -webkit-box-flex: 1
          margin: 0 10px 0 15px
          .author, .update, .hot
            color: #8f8f8f
            height: 24px
            font-size: 13px
            i
              display: inline-block
              width: 12px
              height: 12px
              background: url('~common/images/hot_red.png') 0 center no-repeat;
              background-size: 12px 12px
              margin-right: 3px
            span.tit
              color: #333
            span.ranktype
              float: right
              color: #8f8f8f
              height: 24px
              font-size: 13px
          .ranklist_tit
            font-size: 16px
            color: #000
            font-weight: normal
            margin-bottom: 5px
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
            span.rank-num
              float: right
              color: #aaa
              font-size: $font-size-14
              display: inline-block
      .ranklist-media
        position: relative
        width: 100px
        height: 100px
        display: block
        color: #fff
        img 
          display: block
          width: 100px
          height: 100px
.slide-enter-active, .slide-leave-active
  transition: all 0.3s

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>