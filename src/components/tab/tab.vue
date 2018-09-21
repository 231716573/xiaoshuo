<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/headlines" exact>
      <i class="tab-img index"></i>
      <span class="tab-link">首页</span>
    </router-link> 
    <router-link tag="div" class="tab-item" to="/cate" exact>
      <i class="tab-img cate"></i>
      <span class="tab-link">分类</span>
    </router-link> 
    <router-link tag="div" class="tab-item" to="/rank" exact>
      <i class="tab-img rank"></i>
      <span class="tab-link">排行榜</span>
    </router-link> 
    <router-link tag="div" class="tab-item" to="/mine" exact>
      <i class="tab-img mine"></i>
      <span class="tab-link">我的</span>
    </router-link> 
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.tab
  position: fixed
  width: 100%;
  z-index: 999
  bottom: 0
  background-color: #fff
  display: flex
  padding-bottom: 5px
  font-size: $color-text-03
  border-top: 1px solid #eee
  .tab-item
    flex: 1
    text-align: center
    &.router-link-active
      .tab-link
        color: #22bc99
      .index
        background-image: url('tab1_s.png') !important
      .cate
        background-image: url('tab2_s.png') !important
      .xuexiao
        background-image: url('tab3_s.png') !important
      .rank
        background-image: url('tab4_s.png') !important
      .mine
        background-image: url('tab5_s.png') !important
    .tab-link
      color: $color-text-08
      font-size: $font-size-12

    .tab-img
      display: block
      background-size: contain
      width: .62rem
      height: .62rem
      margin: .18rem auto .1rem
      &.index
        background-image: url('tab1.png')
      &.cate
        background-image: url('tab2.png')
      &.xuexiao
        background-image: url('tab3.png')
      &.rank
        background-image: url('tab4.png')
      &.mine
        background-image: url('tab5.png')
</style>