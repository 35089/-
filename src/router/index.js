import Vue from "vue"
import VueRouter from "vue-router"
import Msite from "../pages/Msite"
import Order from "../pages/Order"
import Profile from "../pages/Profile"
import Search from "../pages/Search"
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:"/Msite",
      component:Msite
    },
    {
      path:"/Order",
      component:Order
    },
    {
      path:"/Profile",
      component:Profile
    },
    {
      path:"/Search",
      component:Search
    },
    {
      path:"/",
      redirect:"/Msite"
    }
  ]
})
