<template>
  <transition name="slide">
    <div class="article">
      <div class="back"><p></p>百年修得同船渡</div>
      <hr class="for-newArt">
      <div class="book-info">
        <div class="book-thumb">
          <img src="https://bookcover.yuewen.com/qdbimg/349573/1010964303/300">
        </div>
        <div class="book-item">
          <h2 class="title">百年修得同船渡</h2>
          <div class="author">作者：南派三叔</div>
          <div class="star"><star class="star-detail" :size="24" :score="3.5"></star>3.5分/81人评论</div>
          <div class="type">武侠科幻</div>
          <div class="words">54532字</div>
          <div class="hot"><i></i>热度：<span class="num">123456</span></div>
        </div>
      </div>
      <div class="book-group">
        <div class="book-ceil">
          <div>立刻阅读</div>
        </div>
        <div class="book-ceil">
          <div>放入书架</div>
        </div>
        <div class="book-ceil">
          <div>点评一下</div>
        </div>
      </div>
      <div class="newArt">
        <span class="time">5天前</span>
        <span class="new">最新</span>
        <span class="title">第六章 为了联盟！</span>
      </div>
      <hr class="for-newArt">
      <div class="description">
        <h3>作品简介</h3>
        <div class="detail">婚后的林嘉歌，没多久就被时瑶逐出家门了，他为了回家，用尽所有的方法都没能成功，最后将目光小包子听完林嘉歌的提议，和他勾了勾手指，软萌萌的回小包子收到机器人的当晚，把时瑶骗到餐厅，偷小包子收到奥特曼的当晚，把时瑶骗到游泳馆，偷偷对林嘉歌说：“爹地，妈咪陪小包子收到小火车的当晚，把时瑶骗到酒店套房，给了林嘉歌一把避孕套，偷偷的凑到林嘉歌耳边说：“爹地，妈咪给你睡。”</div>
      </div>
      <hr class="for-newArt">
      <div class="comment">
        <h3>书评区<span class="com-num">(381人评论)</span></h3>
        <ul class="list">
          <li class="item">
            <div class="thumb">
              <img src="https://facepic.qidian.com/qd_face/349573/5725170/50">
            </div>
            <div class="detail">
              <p class="title">我与成分1111</p>
              <p class="content">我去你打野的垃圾文章，我去你打野的垃圾文章，我去你打野的垃圾文章</p>
              <p class="time">10分钟前</p>
            </div>
          </li>
          <li class="item">
            <div class="thumb">
              <img src="https://facepic.qidian.com/qd_face/349573/5725170/50">
            </div>
            <div class="detail">
              <p class="title">我与成分2222</p>
              <p class="content">我去你打野的垃圾文章，我去你打野的垃圾文章，我去你打野的垃圾文章</p>
              <p class="time">10分钟前</p>
            </div>
          </li>
          <li class="item">
            <div class="thumb">
              <img src="https://facepic.qidian.com/qd_face/349573/5725170/50">
            </div>
            <div class="detail">
              <p class="title">我与成分3333</p>
              <p class="content">我去你打野的垃圾文章，我去你打野的垃圾文章，我去你打野的垃圾文章</p>
              <p class="time">10分钟前</p>
            </div>
          </li>
          <li class="item">
            <div class="thumb">
              <img src="https://facepic.qidian.com/qd_face/349573/5725170/50">
            </div>
            <div class="detail">
              <p class="title">我与成分4444</p>
              <p class="content">我去你打野的垃圾文章，我去你打野的垃圾文章，我去你打野的垃圾文章</p>
              <p class="time">10分钟前</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="more-com">更多评论</div>
      <p class="crevice"></p>
    </div>
  </transition>
</template>

<script>
import Star from 'base/star/star'

export default {
  name: '',
  data () {
    return {
      artId: ''
    }
  },
  mounted() {
  },
  activated() {
    this.artId = this.$route.params.id
  },
  components: {
    Star
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.article
  position: fixed
  z-index: 10000
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: #fff
  overflow-y: auto
  .book-info
    display: flex
    width: 100%
    padding:0 0.2rem 0.2rem
    box-sizing: border-box
    .book-thumb
      flex: 0 0 2rem
      img
        width: 100%
        height: auto
    .book-item
      flex: 1
      margin-left: 0.2rem
      line-height: 1.7
      font-size: 13px
      color: #33373d
      .hot
        height: 24px
        font-size: 13px
        i
          display: inline-block
          width: 12px
          height: 12px
          background: url('~common/images/hot_red.png') 0 center no-repeat;
          background-size: 12px 12px
          margin-right: 3px
      .title
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
        font-size: $font-size-16
        font-weight: bold
      .star
        color: #969ba3
        font-size: 12px
        .star-detail
          margin-right: 0.1rem
          float: left
  .book-group
    display: flex
    margin:0 0.2rem 0.2rem
    .book-ceil
      flex: 1
      box-sizing: border-box
      text-align: center
      height: 0.6rem
      line-height: 0.6rem
      margin-left: 0.3rem
      border-radius: 5px
      div
        border: 1px solid #e3e4e6
        border-radius: 5px
        font-size: 14px
        color: #333
      &:first-child
        margin: 0
        background-color: #22bc99
        border-color: #22bc99
        div
          color: #fff
  .newArt
    height: 0.6rem
    line-height: 0.6rem
    margin:0 0.2rem
    color: #333
    .time
      float: right
      font-size: 12px
      color: #999
    .new
      font-size: 12px
      color: #22bc99
      border: 1px solid #22bc99
      border-radius: 2px
      display: inline-block
      height: 0.4rem
      line-height: 0.4rem
      padding: 0 0.06rem
  .for-newArt
    width: 100%
    height: 1px
    border: none
    background-color: #eee
  .more-com
    height: 0.8rem
    line-height: 0.8rem
    border-top: 1px solid #eee
    border-bottom: 1px solid #eee
    text-align: center
    color: #22bc99
  .comment
    .list 
      margin-top: 0.3rem
      .item
        border-bottom: 1px solid #eee
        margin-bottom: 0.2rem
        &:last-child
          border: none
        .detail
          margin-left: 1.2rem
          p
            &.title
              font-size: 14px
              font-weight: 700
            &.content
              font-size: 13px
              color: #666
            &.time
              font-size: 12px
              color: #999
        .thumb
          float: left
          width: 1rem
          height: 1rem
          overflow: hidden
          img
            width: 100%
            height: auto
            border-radius: 50%
            box-shadow: 0 0 1px rgba(0,0,0,.1)
  .com-num
    font-size: 14px
    color: #999
    margin-left: 5px
  .description, .comment
    padding-top: 3px
    margin: 0 0.2rem
    box-sizing: border-box
    font-weight: normal
    font-size: 14px
    color: #333
    h3  
      color: #000
      font-size: 16px
      display: inline-block
    &:before 
      vertical-align: middle
      content: " "
      display: inline-block
      width: 2px
      background: #14a6a3
      height: 0.32rem
      margin-right: 5px
    .detail
      margin: 0.1rem 0
      line-height: 2
  .back 
    float: left
    width: 100%
    height: 0.8rem
    line-height: 0.8rem
    padding:0 0.2rem
    color: #33373d
    font-size $font-size-14
    p
      vertical-align: middle
      display:inline-block
      position: relative
      text-align: center
      width: 0.4rem
      height: 0.4rem
      margin-right: 0.1rem
      &:after
        position: absolute
        display: inline-block
        top: 50%
        left: 50%
        margin-top: -5px
        margin-left: -5px
        content: ''
        width: 10px
        height: 10px
        border-top: 1px solid #33373d
        border-left: 1px solid #33373d
        transform: rotate(-45deg)
.slide-enter-active, .slide-leave-active
  transition: all 0.3s

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>