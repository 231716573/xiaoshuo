<template>
	<div class="nodata" v-show="showFlag">
		<img src="~base/nodata/warn_light.png">
		<p class="text">{{text}}</p>
	</div>
</template>


<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		},
		text: {
			type: String,
			default: '没有相关数据'
		}
	},
	data() {
		return {
			showFlag: false
		}
	},
	methods: {
		show() {
			this.showFlag = true
		},
		hide() {
			this.showFlag = false
		}
	}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.nodata
	margin: 50px 10px 30px
	img
		width: 50px
		height: auto
		display: block
		margin: 0 auto 10px
	.text
		color: #333
		text-align: center
</style>