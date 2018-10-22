import Vue from 'vue'
import Router from 'vue-router'
import Headlines from 'components/headlines/headlines'
import Cate from 'components/cate/cate'
import Rank from 'components/rank/rank'
import Mine from 'components/mine/mine'
import myRead from 'components/my-read/my-read'
import myProfile from 'components/my-profile/my-profile'
import myMessage from 'components/my-message/my-message'
import myComment from 'components/my-comment/my-comment'
import myCollection from 'components/my-collection/my-collection'
import myWallet from 'components/my-wallet/my-wallet'
import Helper from 'components/helper/helper'
import Ranktype from 'components/rank-type/rank-type'
import Article from 'components/article/article'
import ArticleNew from 'components/article-new/article-new'

Vue.use(Router)


const router = new Router({
  routes: [
  	{
  		path: '/',
  		redirect: '/headlines'
  	},
    {
      path: '/headlines',
      component: Headlines
    },
    {
      path: '/cate',
      component: Cate
    },
    {
      path: '/rank',
      component: Rank,
      meta: {
      	title: '热门小说排行榜'
      },
      children: [
      	{
      		path: 'type',
      		component: Ranktype
      	}
      ]
    },
    {
      path: '/article/new',
      component: ArticleNew,
      meta: {
        title: '发表新文章'
      }
    },
    {
    	path: '/article/:id',
    	component: Article,
    	meta: {
    		title: '文章详情'
    	}
    },
    {
      path: '/mine',
      component: Mine,
      meta: {
      	title: '个人中心'
      },
      children: [
      	{
      		path: 'myRead',
      		component: myRead,
      		meta: {
      			title: '阅读记录'
      		}
      	},
      	{
      		path: 'myProfile',
      		component: myProfile,
      		meta: {
      			title: '个人资料'
      		}
      	},
      	{
      		path: 'myMessage',
      		component: myMessage,
      		meta: {
      			title: '我的消息'
      		}
      	},
      	{
      		path: 'myComment',
      		component: myComment,
      		meta: {
      			title: '我的评论'
      		}
      	},
      	{
      		path: 'myCollection',
      		component: myCollection,
      		meta: {
      			title: '我的收藏'
      		}
      	},
      	{
      		path: 'myWallet',
      		component: myWallet,
      		meta: {
      			title: '账户中心'
      		}
      	},
      	{
      		path: 'helper',
      		component: Helper,
      		meta: {
      			title: '帮助中心'
      		}
      	}
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {//如果设置标题，拦截后设置标题
    document.title = to.meta.title
  } else {
    document.title = '测试内容'
  }
  next()
})

export default router