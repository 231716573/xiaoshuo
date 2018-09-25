<template>
	<div class="back">
		<div class="header-fixed">
			<span>{{title}}</span>
			<a @click="goBack" ref="goback"></a>
		</div>
		<p class="header-bg"></p>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		}
	},
	methods: {
		goBack() {
			this.$router.back()
		},
		hidegoBack() {
			this.$refs.goback.style.display = 'none'
		}
	}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.header-fixed
  font-size: 16px
  height: 46px
  line-height: 46px
  width: 100%
  border-bottom: 1px solid #d5d5d5
  position: fixed
  top: 0
  left: 0
  z-index: 999
  background-color: #fff
  text-align: center
  a
    display: inline-block
    height: 45px
    width: 40px
    line-height: 45px
    z-index: 1000
    text-align: center
    position: fixed
    top: 0
    left: 0
    cursor: pointer
    &:after
      background: url('tuanleft.png') center center no-repeat
      -webkit-background-size: 10px 20px
      background-size: 10px 20px
      content: " "
      display: inline-block
      width: 40px
      height: 45px

.header-bg
  width: 100%
  height: 10px
  margin-top: 47px
  background-color: #eee
</style>