<template>
  <transition name="slide">
    <div class="article">
      <back title="发表新文章"></back>
      <button class="submit-art" @click="submitArt(this)" :disabled="isDisabled">发表</button>
      <div class="wrapper">
        <h2 class="title">标题：<input placeholder="请输入标题" /></h2>
        <div class="type">类别：<div class="select-type"><select><option>请选择类别</option></select></div></div>
        <div class="content">
          <div class="num"><span>字数：{{word}}</span>内容：</div>
          <quill-editor ref="myTextEditor" 
                      :content="content"
                      :options="editorOption"
                      @focus="onEditorFocus($event)"
                      @change="onEditorChange($event)">
          </quill-editor>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Back from 'base/back/back'
import {hasClass, removeClass, addClass} from 'common/js/dom.js'
import { quillEditor } from 'vue-quill-editor'

export default {
  name: '',
  data () {
    return {
      isDisabled: false,
      word: 0,
      content: '',
      editorOption: {
        placeholder: '请填写内容',
        modules:{
          toolbar:[
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            ['image'],
          ]
        }
      }
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    submitArt(obj) {
      this.isDisabled = true;
      console.log('submitArt')
    },
    onEditorFocus(){//获得焦点事件
    },
    onEditorChange({ editor, html, text }) {
      // console.log('editor change!', editor, html, text)
      this.content = html
      this.word = html.length
    }
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quillEditor
    }
  },
  mounted() {
    // you can use current editor object to do something(editor methods)
    console.log('this is my editor', this.editor)
    // this.editor to do something...
  },
  components: {
    Back, quillEditor
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.ql-editor
  font-size: 14px
.article
  position: fixed
  z-index: 10000
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: #fff
  overflow-y: auto
  .submit-art
    position: fixed
    z-index: 10001
    top: 0
    right: 0
    width: 1rem
    height: 46px
    line-height: 46px
    text-align: center
    background-color: #22bc99
    color: #fff
    border: none
  .wrapper
    .title,.type
      font-size: 15px
      height: 0.88rem
      line-height: 0.88rem
      padding:0 0.2rem
      border-bottom: 1px solid #ddd
      color: #777
      input 
        height: 100%
        width: 6rem
        color: #333
      .select-type
        height: 60%
        line-height: 60%
        width: 3rem
        position: relative  
        display: inline-block
        color: #333
        select
          width: 100%
          height: 100%
          border-radius: 3px
          padding-left: 3px
        &:before
          content: ''
          display: inline-block
          position: absolute
          right: 0.2rem
          top: 50%
          margin-top: -0.16rem
          width: 0.16rem
          height: 0.16rem
          border-left: 1px solid #555
          border-bottom: 1px solid #555

          transform: rotate(-45deg)
    .content
      .num
        margin: 0.2rem 0
        font-size: 15px
        padding: 0 0.2rem
        span
          float: right
          font-size: 12px
          color: #999
.slide-enter-active, .slide-leave-active
  transition: all 0.3s

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>