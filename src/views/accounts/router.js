export default [
  {
    path: "/signin",
    name: "signin",
    component: () => import("@/views/accounts/SignIn")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/accounts/SignUp")
  },
  {
    path: "/signout",
    name: "signout",
    redirect: { name: 'home' }
  }
];
