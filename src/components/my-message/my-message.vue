<template>
  <transition name="slide">
    <div class="message">
      <back title="我的消息"></back>
      <nodata ref="nodata"></nodata>
      <div class="list-wrap">
        <ul>
          <li class="msg-item" v-for="(item, index) in msgList">
            <p class="title">
              <span class="time">{{item.time}}</span>
              <span>{{item.title}}</span>
            </p>
            <hr />
            <p class="content">{{item.content}}</p>
          </li>
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
      msgList: [
        { id: 0, title: '系统消息', time: '2017-08-19', content: '活动报名待付款：您报名参加的"广州医科大学（经济与管理学院）"活动未付款，名额有限，请及时付款！' },
        { id: 1, title: '警告消息', time: '2017-08-23', content: '活动报名待付款：您报名参加的"广州医科大学（经济与管理学院）"活动未付款，名额有限，请及时付款！' }
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

.message
  position: fixed
  z-index: 10000
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: #f2f2f2
  overflow-y: auto
  .list-wrap
    margin: 0.2rem
    margin-top: 0
    .msg-item
      box-sizing: border-box
      padding: 0.2rem
      background-color: #fff
      border-radius: 5px
      margin-bottom: 0.2rem
      line-height: 27px
      hr
        background-color: #eee
        height: 1px
        border: none
      .content
        color: #666
        font-size: 14px
      .title
        color: #333
        font-size: 15px
        .time
          float: right
          color: #999
          font-size: 12px
.slide-enter-active, .slide-leave-active
  transition: all 0.3s

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>