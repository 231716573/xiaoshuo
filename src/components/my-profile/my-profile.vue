<template>
  <transition name="slide">
    <div class="profile">
      <back title="个人资料"></back>
      <nodata ref="nodata"></nodata>
      <div class="list-wrap">
        <ul>
          <li>
            <p class="meta">昵称</p>
            <p class="con name">
              <input type="text" name="name" placeholder="仅可修改一次" ref='name'>
              <img src="~common/images/ask.png" class="check-img" @click="checkImg">
            </p>
          </li>
          <li>
            <p class="meta">性别</p>
            <p class="con">
              <input type="radio" name="sex" id="boy" value="boy" checked><label for="boy">男</label>
              <input type="radio" name="sex" id="girl" value="girl"><label for="girl">女</label>
            </p>
          </li>
          <li>
            <p class="meta">手机号</p>
            <p class="con">
              <input type="text" name="phone" placeholder="请输入个人手机号码">
            </p>
          </li>
          <li>
            <p class="meta">描述</p>
            <p class="con">
              <textarea name="description" placeholder="简单描述一下自己"></textarea>
            </p>
          </li>
          <li>
            <p class="meta">&nbsp;</p>
            <p class="con button">
              <button>确认修改</button>
            </p>
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
    }
  },
  mounted() {
    this.$refs.nodata.hide()
  },
  methods: {
    checkImg() {
      let name = this.$refs.name;

      console.log(name.value);
    }
  },
  components: {
    Back, Nodata
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.profile
  position: fixed
  z-index: 10000
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: #f2f2f2
  overflow-y: auto
  .list-wrap
    padding:10px
    box-sizing:border-box
    background: #fff
    li
      height: 1.1rem
      line-height: 1.1rem
      .meta
        font-size: 15px
        float: left
        width: 1.4rem
        text-align: right
        margin-right: 0.3rem
        color: #333
      .con
        &.name
          position: relative
          .check-img
            display: inline-block
            width: 0.5rem
            height: auto
            vertical-align: middle
        input[type='text']
          border: 1px solid #ccc
          border-radius: 5px
          height: 0.70rem
          line-height: 0.70rem
          padding-left: 5px
          width: 4rem
          box-sizing:border-box
        input[type='radio']
          vertical-align: middle
          margin-top: -2px
          margin-right: 0.1rem
        label
          margin-right: 0.4rem
        textarea
          width: 4rem
          height: 1rem
          padding: 5px
          border: 1px solid #ccc
          box-sizing:border-box
        button
          color: #333
          font-size: 14px
          text-align: center
          display: inline-block
          border: 1px solid #d8d8d8
          width: 43%
          height: 35px
          line-height: 34px
          border-radius: 5px
          color: #fff
          background-color: #3fd5a9
      .button
        margin-top: 0.4rem
        padding-bottom: 0.4rem
.slide-enter-active, .slide-leave-active
  transition: all 0.3s

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>