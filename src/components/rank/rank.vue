<template>
  <div class="rank">
    <div class="ranklist-wrap">
      <ul>
        <li class="ranklist-item">
          <a href="javascript:;" class="ranklist-media">   
            <img src="https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_217255676.jpg?max_age=2592000">
            <span class="ranklist-count"><i class="icon icon_listen"></i>1930.0万</span>
          </a>
          <div class="ranklist_info">
            <div class="ranklist_cont">
              <h3 class="ranklist_tit">推荐·流行指数</h3>
              <p>1<span class="text_name">我在你妈坟上蹦迪</span>- 尤长靖</p>
              <p>2<span class="text_name">我当算命先生那几年</span>- 王俊凯</p>
              <p>3<span class="text_name">年少有为</span>- 李荣浩</p>
            </div>
            <i class="ranklist_arrow"></i>
          </div>
        </li>

        <li class="ranklist-item">
          <a href="javascript:;" class="ranklist-media">   
            <img src="https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_217255676.jpg?max_age=2592000">
            <span class="ranklist-count"><i class="icon icon_listen"></i>1930.0万</span>
          </a>
          <div class="ranklist_info">
            <div class="ranklist_cont">
              <h3 class="ranklist_tit">关注·围观指数</h3>
              <p>1<span class="text_name">我在你妈坟上蹦迪</span>- 尤长靖</p>
              <p>2<span class="text_name">我当算命先生那几年</span>- 王俊凯</p>
              <p>3<span class="text_name">年少有为</span>- 李荣浩</p>
            </div>
            <i class="ranklist_arrow"></i>
          </div>
        </li>

        <li class="ranklist-item">
          <a href="javascript:;" class="ranklist-media">   
            <img src="https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_217255676.jpg?max_age=2592000">
            <span class="ranklist-count"><i class="icon icon_listen"></i>1930.0万</span>
          </a>
          <div class="ranklist_info">
            <div class="ranklist_cont">
              <h3 class="ranklist_tit">点击·热门指数</h3>
              <p>1<span class="text_name">我在你妈坟上蹦迪</span>- 尤长靖</p>
              <p>2<span class="text_name">我当算命先生那几年</span>- 王俊凯</p>
              <p>3<span class="text_name">年少有为</span>- 李荣浩</p>
            </div>
            <i class="ranklist_arrow"></i>
          </div>
        </li>

        <li class="ranklist-item">
          <a href="javascript:;" class="ranklist-media">   
            <img src="https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_217255676.jpg?max_age=2592000">
            <span class="ranklist-count"><i class="icon icon_listen"></i>1930.0万</span>
          </a>
          <div class="ranklist_info">
            <div class="ranklist_cont">
              <h3 class="ranklist_tit">作家·写作指数</h3>
              <p>1<span class="text_name">我在你妈坟上蹦迪</span>- 尤长靖</p>
              <p>2<span class="text_name">我当算命先生那几年</span>- 王俊凯</p>
              <p>3<span class="text_name">年少有为</span>- 李荣浩</p>
            </div>
            <i class="ranklist_arrow"></i>
          </div>
        </li>

        <li class="ranklist-item">
          <a href="javascript:;" class="ranklist-media">   
            <img src="https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_217255676.jpg?max_age=2592000">
            <span class="ranklist-count"><i class="icon icon_listen"></i>1930.0万</span>
          </a>
          <div class="ranklist_info">
            <div class="ranklist_cont">
              <h3 class="ranklist_tit">更新·观看指数</h3>
              <p>1<span class="text_name">我在你妈坟上蹦迪</span>- 尤长靖</p>
              <p>2<span class="text_name">我当算命先生那几年</span>- 王俊凯</p>
              <p>3<span class="text_name">年少有为</span>- 李荣浩</p>
            </div>
            <i class="ranklist_arrow"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.rank
  background-color: #f4f4f4
  .ranklist-wrap
    padding: 10px
    .ranklist-item
      background-color: #fff
      display: -webkit-box
      margin-bottom: 10px
      border-radius: 5px
      .ranklist_info
        position: relative
        -webkit-box-flex: 1
        display: -webkit-box
        -webkit-box-align: center
        -webkit-box-pack: center
        line-height: 1.5
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
        .ranklist_cont
          -webkit-box-flex: 1
          margin: 0 10px 0 15px
          p 
            font-size: 14px;
            color: rgba(0,0,0,.5)
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
            .text_name
              color: #000
              margin-left: 8px
              margin-right: 5px
          .ranklist_tit
            font-size: 16px
            color: #000
            font-weight: normal
            margin-bottom: 5px
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
      .ranklist-media
        position: relative
        width: 100px
        height: 100px
        display: block
        color: #fff
        .ranklist-count
          position: absolute;
          display: block;
          left: 5px
          bottom: 7px
          line-height: 12px
          color: #fff
          opacity: 0.6
          font-size: 9px
          z-index: 10
          .icon_listen
            background-image: url('~common/images/hot.png')
            background-repeat: no-repeat
            background-size: 12px 12px
            z-index: 10
            display: block
            float: left
            width: 15px
            height: 15px
            background-position: 0 0
        img 
          display: block
          width: 100px
          height: 100px
</style>