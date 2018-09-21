<template>
  <transition name="slide">
    <div class="helper">
      <back title="帮助中心"></back>
      <nodata ref="nodata"></nodata>
      <div class="list-wrap">
        <ul>
          <li class="msg-item" v-for="(item, index) in msgList" @click="showCon(index)">
            <p class="title">{{index+1}}. {{item.title}}</p>
          </li>
        </ul>
      </div>
      <div class="alert-msg" v-show="alertMsgBool">
        <div class="alert-msg-bg"></div>
        <div class="alert-msg-wrap">
          <p class="title"><i @click="hideCon()"></i>{{msgTitle}}</p>
          <div class="content" v-html="msgContent"></div>
        </div>
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
        { id: 0, title: '怎么蹦迪', content: '1、在使用vue一个多礼拜后，感觉现在还停留在初级阶段，虽然知道怎么和后端做数据交互，但是对于mounted这个挂载还不是很清楚的。放大之，对vue的生命周期不甚了解。只知道简单的使用，而不知道为什么，这对后面的踩坑是相当不利的。2、因为我们有时候会在几个钩子函数里做一些事情，什么时候做，在哪个函数里做，我们不清楚。于是我开始先去搜索，发现vue2.0的生命周期没啥文章。大多是1.0的版本介绍。3、最后还是找到一篇不错的（会放在最后）4、在使用vue一个多礼拜后，感觉现在还停留在初级阶段，虽然知道怎么和后端做数据交互，但是对于mounted这个挂载还不是很清楚的。放大之，对vue的生命周期不甚了解。只知道简单的使用，而不知道为什么，这对后面的踩坑是相当不利的。5、因为我们有时候会在几个钩子函数里做一些事情，什么时候做，在哪个函数里做，我们不清楚。于是我开始先去搜索，发现vue2.0的生命周期没啥文章。大多是1.0的版本介绍。6、最后还是找到一篇不错的（会放在最后）' },
        { id: 1, title: '网站老大的名字？', content: '挺好看的？？？' },
        { id: 2, title: '逃学威龙', content: 'good，good，good' },
        { id: 3, title: '如何联系官方人员？', content: '请发邮件到：598744393@qq.com' }
      ],
      msgTitle: '',
      msgContent: '',
      alertMsgBool: false
    }
  },
  mounted() {
    this.$refs.nodata.hide()
  },
  methods: {
    showCon(index) {
      this.msgTitle = this.msgList[index].title
      this.msgContent = this.msgList[index].content
      this.msgContent = this.msgContent.replace(/(\d+\、)/g, '<br>$1').replace(/<br>/, '')

      this.alertMsgBool = true
    },
    hideCon() {
      this.msgTitle = '';
      this.msgContent = '';

      this.alertMsgBool = false
    }
  },
  computed: {

  },
  components: {
    Back, Nodata
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.helper
  position: fixed
  z-index: 10000
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: #fff
  .alert-msg-wrap
    position: fixed
    z-index: 10002
    top: 10%
    left: 10%
    width: 80%
    height: 80%
    background-color: #fff
    border-radius: 10px
    overflow-y: auto
    .content
      font-size: 14px
      line-height: 23px
      padding:10px
    .title
      padding:0 10px
      height: 1rem
      line-height: 1rem
      font-size: 16px
      border-bottom: 1px solid #ccc
      position: relative
      i
        width: 0.5rem
        height: 0.5rem
        background: url('~common/images/close_light.png') no-repeat
        background-size:100% 100%
        position: absolute
        right: 0.25rem
        top: 50%
        margin-top: -0.25rem
        display: inline-block
  .alert-msg-bg
    position: fixed
    z-index: 10001
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.5)
  .list-wrap 
    margin: 10px
    margin-top: 0
    li
      width: 100%
      height: 0.8rem
      line-height: 0.8rem
      font-size: 15px
      color: #4395ff
.slide-enter-active, .slide-leave-active
  transition: all 0.3s

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>