import { createRouter,createWebHistory } from "vue-router";

import Home from "./components/Home/main.vue";
import Product from "./components/page/product.vue";
import Cart from "./components/page/cart.vue";
import Profile from "./components/page/profile.vue";
import Interest from "./components/page/interest.vue";


const routes=[
    {path : '/' , component : Home , name : 'Home'},
    {path : '/product/:id' , component : Product , name : 'Product'},
    {path : '/my-cart' , component : Cart , name : 'Cart'},
    {path : '/profile' , component : Profile , name : 'Profile'},
    {path : '/interest' , component : Interest , name : 'Interest'},
]
const router = createRouter({
    history : createWebHistory(),
    routes: routes
})

export default router;