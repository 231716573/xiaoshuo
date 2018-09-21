<template>
  <transition name="slide">
    <div class="wallet">
      <back title="账户中心"></back>
      <nodata ref="nodata"></nodata>
      <div class="list-wrap">
        别看了，没钱，很穷！
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

  },
  components: {
    Back, Nodata
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

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
    padding:10px
    box-sizing:border-box
    background: #fff
.slide-enter-active, .slide-leave-active
  transition: all 0.3s

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>