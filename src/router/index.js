import Vue from 'vue'
import VueRouter from 'vue-router'

const ExploreMusic=()=>import('../views/subViews/exploreMusic/ExploreMusic')
const NewMusic=()=>import('../views/subViews/newMusic/NewMusic')
const NewMV=()=>import('../views/subViews/newMV/NewMV')
const SongList=()=>import('../views/subViews/songList/SongList')


// 避免点击同一位置的location重复报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/explore'
    },
    {
        path:'/explore',
        component:ExploreMusic
    },
    {
        path:'/newMusic',
        component:NewMusic
    },
    {
        path:'/newMV',
        component:NewMV
    },
    {
        path:'/songList',
        component:SongList
    },
]

const router = new VueRouter({
  routes
})

export default router
