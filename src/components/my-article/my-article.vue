<template>
  <transition name="slide">
    <div class="wallet">
      <router-link to="/article/new" class="write"><i></i>发表新文章</router-link>
      <back title="我的文章"></back>
      <nodata ref="nodata"></nodata>
      <div class="list-wrap">
        <ul>
          <li>
            <span class="time">2018-05-11 12:12</span>
            <h2 class="praise"><i>54545</i> 赞</h2>
            <div class="title">我的大大的小标题我的大大的小标题我的大大的小标题</div>
            <span class="click">点击：<i>123456</i>次</span>
            <div class="type">情感沟通</div>
          </li>
          <li>
            <span class="time">2018-05-11 12:12</span>
            <h2 class="praise"><i>54545</i> 赞</h2>
            <div class="title">我的大大的小标题</div>
            <span class="click">点击：<i>123456</i>次</span>
            <div class="type">情感沟通</div>
          </li>
          <li>
            <span class="time">2018-05-11 12:12</span>
            <h2 class="praise"><i>54545</i> 赞</h2>
            <div class="title">我的大大的小标题</div>
            <span class="click">点击：<i>123456</i>次</span>
            <div class="type">情感沟通</div>
          </li>
        </ul>
      </div>
      <router-view></router-view>
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
    }
  },
  mounted() {
    this.$refs.nodata.hide()
  },
  methods: {

  },
  components: {
    Back, Nodata
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.write
  position: fixed;
  z-index: 10001
  bottom: 0.2rem
  left: 25%
  width: 50%
  height: 0.7rem
  line-height: 0.7rem
  border-radius: 0.35rem
  text-align: center
  color: #22bc99
  background-color: #fff
  i
    display: inline-block
    vertical-align: middle
    margin-right: 0.1rem
    width: 20px
    height: 20px
    background: url('~common/images/edit.png') no-repeat
    background-size: 20px 20px
.wallet
  position: fixed
  z-index: 10000
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: #f2f2f2
  overflow-y: auto
  .list-wrap
    margin:10px
    box-sizing:border-box
    ul
      li
        padding: 0.2rem
        border-radius: 5px
        background: #fff
        margin-bottom: 0.2rem
        .type
          font-size: 12px
          color: #aaa
        .title
          font-size: 15px
          margin: 0.2rem 0
          color: #333
          line-height: 21px
        .praise
          color: #666
          padding-bottom: 0.2rem
          border-bottom: 1px solid #ddd
        .time, .click
          float: right
          font-size: 12px
          color: #999
.slide-enter-active, .slide-leave-active
  transition: all 0.3s

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>