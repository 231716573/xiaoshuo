<template>
  <transition name="slide">
    <div class="collection">
      <back title="阅读记录"></back>
      <nodata ref="nodata"></nodata>
      <div class="list-wrap">
        <ul>
          <router-link tag="li" class="book-item"
                       v-for="(item, index) in collectBooks" :key="this"
                       :to="item.url">
            <div class="book-media">
              <img :src="item.thumb">
            </div>
            <div class="book-info">
              <h3 class="title">《{{item.title}}》</h3>
              <p class="author">作者：{{item.author}}</p>
              <p class="time"><span>剩余：{{item.remain}}%</span>阅读时间：{{item.read_time}}</p>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import Back from 'base/back/back'
import Nodata from 'base/nodata/nodata'

export default {
  name: '',
  data () {
    return {
      collectBooks: [
        {id: 0, title: '1我当算命先生的那几年1', author: '东派一叔', read_time: '2018-03-10', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011729882/150', remain: '21', url: '/books/1'},
        {id: 1, title: '2我当算命先生的那几年2', author: '南派二叔', read_time: '2018-04-23', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011729882/150',remain: '83', url: '/books/2'},
        {id: 2, title: '3我当算命先生的那几年3', author: '中派三叔', read_time: '2018-06-01', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011729882/150',remain: '12', url: '/books/3'},
        {id: 3, title: '4我当算命先生的那几年4', author: '西派四叔', read_time: '2018-07-19', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011729882/150',remain: '0' , url: '/books/4'},
        {id: 4, title: '5我当算命先生的那几年5', author: '北派五叔', read_time: '2018-08-27', thumb: 'https://bookcover.yuewen.com/qdbimg/349573/1011729882/150',remain: '90', url: '/books/5'}
      ]
    }
  },
  mounted() {
    this.$refs.nodata.hide()
  },
  components: {
    Back, Nodata
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.collection
  position: fixed
  z-index: 10000
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: #f2f2f2
  overflow-y: auto
  .list-wrap
    margin: 10px
    margin-top: 0
    .book-item
      background-color: #fff
      display: -webkit-box
      margin-bottom: 10px
      border-radius: 5px
      .book-info
        position: relative
        -webkit-box-flex: 1
        -webkit-box-align: center
        -webkit-box-pack: center
        line-height: 1.5
        .title
          font-size: 16px
          color: #333
          font-weight: normal
          margin-bottom: 5px
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
          margin:10px 0 0 10px
        .author
          margin:5px 0 0 10px
          color: #666
        .time
          margin:10px 0 0 10px
          color: #999
          font-size: 12px
          span
            float: right
            margin-right: 10px
        &:after
          position: absolute
          display: inline-block
          top: 50%
          right: 10px
          margin-top: -4px
          content: ''
          width: 8px
          height: 8px
          border-right: 1px solid #c3c3c3
          border-bottom: 1px solid #c3c3c3
          transform: rotate(-45deg)
      .book-media
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