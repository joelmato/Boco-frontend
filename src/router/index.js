import { createRouter, createWebHistory } from 'vue-router'
//import Landing from '../views/Landing.vue'
import Home from '../views/Home.vue'
import Account from '../views/Account.vue'
import NotFound from '../views/notFound.vue'
import Login from '../views/Login'
import RegisterForm from "@/components/RegisterForm";
import DeleteUser from "@/components/DeleteUser";
import DeleteUserComp from "@/components/DeleteComponent";
import ListingDetails from "@/components/Listing/ListingDetails";
import Listing from "@/components/Listing";

const routes = [
  /*{
    path: '/',
    name: 'Landing',
    component: Landing
  },
*/
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: "/register",
    name: "RegisterForm",
    component: RegisterForm
  },
  {
    path: "/deleteUser",
    name: "DeleteUser",
    component: DeleteUser
  },
  {
    path: "/listing/:id",
    name: "ListingDetails",
    component: ListingDetails
  },
  {
    path: "/listing",
    name: "Listing",
    component: Listing
  },
  // Redirect any none-existing path to 404 page
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
