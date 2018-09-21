<template>
  <div class="mine">
    <div class="headernav">
      <div class="headerimg"><img src="http://www.7wanl.com/uc_server/avatar.php?uid=72701&amp;size=middle"></div>
      <div class="nick">
        <div>
          <span class="nickname">xiaobo111</span>
          <span class="am-badge am-badge-warning am-radius">铜牌会员</span>
        </div>
      </div>
      <div class="nick_ul">
        <ul>
          <li class="floatl"><em></em><span>丸子<br><i>1368</i></span></li>
          <li class="floatl"><em></em><span>经验值<br><i>1368</i></span></li>
          <li class="floatl"><span>账户余额(元)<br><i>0</i></span></li>
        </ul>
      </div>
      <div class="headernavbg"></div>
    </div>
    <div class="homebody">
      <router-link v-for="(item, index) in link1" :key="this" 
                   :class="item.className" 
                   :to="item.url">
        <i>{{item.title}}<em></em></i>
      </router-link>
      <p></p>
      <router-link v-for="(item, index) in link2" :key="this" 
                   :class="item.className" 
                   :to="item.url">
        <i>{{item.title}}<em></em></i>
      </router-link>
      <p></p>
      <router-link v-for="(item, index) in link3" :key="this" 
                   :class="item.className" 
                   :to="item.url">
        <i>{{item.title}}<em></em></i>
      </router-link>
      <p></p>
      <div class="logout">退出登录</div>
    </div>
    <router-view :user="username"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: {
        name: 'xiaobo111'
      },
      link1: [
        {
          id: 0,
          className: 'c1',
          title: '阅读记录',
          url: '/mine/myRead'
        },
        {
          id: 1,
          className: 'c5',
          title: '个人资料',
          url: '/mine/myProfile'
        }
      ],
      link2: [
        {
          id: 0,
          className: 'c3',
          title: '我的消息',
          url: '/mine/myMessage'
        },
        {
          id: 1,
          className: 'c4',
          title: '我的收藏',
          url: '/mine/myCollection'
        },
        {
          id: 2,
          className: 'c6',
          title: '我的评论',
          url: '/mine/myComment'
        },
        // {
        //   id: 3,
        //   className: 'c7',
        //   title: '我的关注',
        //   url: '/'
        // }
      ],
      link3: [
        {
          id: 0,
          className: 'c2',
          title: '账户中心',
          url: '/mine/myWallet'
        },
        {
          id: 1,
          className: 'c8',
          title: '帮助中心',
          url: '/mine/helper'
        }
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.homebody
  width: 100%
  clear: both
  margin-top: 14px
  background: #fff
  border-top: 1px solid #e8e8e8
  .logout
    width: 100%
    height: 44px
    line-height: 44px
    text-align: center
    color: red
    font-size: $font-size-14
  .c1 
    background: url(11.png) 0px center no-repeat
    background-size: 16px 20px
  .c2
    background: url(22.png) 0px center no-repeat
    background-size: 14px 18px
  .c3 
    background: url(33.png) 0px center no-repeat
    background-size: 17px 19px
  .c4 
    background: url(44.png) 0px center no-repeat
    background-size: 18px 17px
  .c5 
    background: url(55.png) 0px center no-repeat
    background-size: 15px 18px
  .c6 
    background: url(66.png) 0px center no-repeat
    background-size: 20px 18px
  .c7 
    background: url(77.png) 5px center no-repeat
    background-size: 9px 18px
  .c8
    background: url(88.png) 0px center no-repeat
    background-size: 18px 15px
  p 
    width: 100%
    height: 15px
    border-top: 1px solid #e5e5e5
    border-bottom: 1px solid #e5e5e5
  a
    display: block
    width: 96%
    height: 44px
    font-size: 14px
    line-height: 44px
    margin-left: 2%
    margin-right: 2%
    color: #4C4C4C
    i 
      display: inline-block
      width: 90%
      margin-left: 27px
      height: auto
      border-bottom: 1px solid #e3e3e3
      color: #666
      em 
        display: block
        float: right
        width: 9px
        height: 9px
        margin-top: 17px
        border-right: 2px solid #c3c3c3
        border-bottom: 2px solid #c3c3c3
        transform: rotate(-45deg)
.headernav
  height: 162px
  position: relative
  font-size: 10px
  background: #0aadae url('headernavBG.jpg') no-repeat
  ul
    width: 100%
    height: 35px
    position: absolute
    bottom: 5px
    color: #a2e2e1
    font-size: $font-size-12
    li 
      position: relative
      text-align: center
      width: 33.33333%
      line-height: 150%;
      &.floatl
        float: left
      em 
        display: inline-block
        width: 1px
        height: 13px
        background: #a2e2e1
        position: absolute
        right: 0px
        top: 13px
  .headernavbg
    background-color: white
    width: 100%
    height: 44px
    position: absolute
    bottom: 0px
    opacity: 0.1
    z-index: 10
  .nick 
    width: 100%
    height: 70px
    position: absolute
    top: 85px
    div
      width: 100%
      color: white
      text-align: center
      .nickname 
        text-transform: capitalize
        font-size: 15px
        margin-right: 10px
      .am-badge
        min-width: 10px
        padding: 3px 5px
        font-size: $font-size-12
        font-weight: 700
        color: #fff
        line-height: 1
        vertical-align: baseline
        white-space: nowrap
        text-align: center
        background-color: #f37b1d
        border-radius: 2px
  .headerimg
    text-align: center
    position: absolute
    left: 50%
    top: 30px
    margin-left: -23px
    width: 45px
    height: 45px
    img 
      border-radius: 50%
      border: 1px solid #22bebb
      width: 45px
      height: 45px
      display: block
</style>