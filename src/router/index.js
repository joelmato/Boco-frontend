import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/Account.vue'
import NotFound from '../views/NotFoundPage.vue'
import Login from '../views/Login'
import RegisterForm from "@/components/LogIn/RegisterForm";
import DeleteUser from "@/components/UserProfile/DeleteUser";
import ListingDetails from "@/components/Listing/ListingDetails";
import Listing from "@/components/Listing/Listing";
import Contact from "@/components/Misc/Contact";
import {getApiClient} from "@/service/ApiService";
import Landing from "@/views/Landing";
import Lessor from "@/views/Lessor";
import FAQ from "@/components/Misc/FAQ";
import RequestPasswordReset from "@/components/LogIn/RequestPasswordReset";
import ResetPassword from "@/components/LogIn/ResetPassword";

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/home',
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
    path: "/listing/:itemId",
    name: "ListingDetails",
    component: ListingDetails,
    props: true
  },
  {
    path: "/listing/edit/:itemId?",
    name: "Listing",
    component: Listing,
    props: true,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/lessor/:userId",
    name: "Lessor",
    component: Lessor,
    props: true,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ
  },
  {
    path: "/password/reset/request",
    name: "RequestPasswordReset",
    component: RequestPasswordReset
  },
  {
    path: "/password/reset",
    name: "ResetPassword",
    component: ResetPassword
  },
  // Redirect any none-existing path to 404 page
  {
    path: '/:catchAll(.*)?',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

getApiClient.interceptors.response.use(null, error => {
  let path = '/error';
  switch (error.response.status) {
    case 403: 
      path = router.push('/login');  
      return Promise.reject(error);
  }
  return Promise.reject(error);
})

export { routes };
export default router
