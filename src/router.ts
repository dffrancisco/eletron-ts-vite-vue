import { createRouter, createWebHashHistory } from "vue-router";
// import auth from "./ts/auth";
// import storeLogin from "./pages/login/login";

//@ts-ignore
import routes from "virtual:generated-pages";


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   auth();
//   if (to.name !== "login" && storeLogin.state.auth == false)
//     next({ path: "login" });
//   else if (to.name == "login" && storeLogin.state.auth == true)
//     next({ path: "home" });
//   else next();
// });

console.log(router);

export default router;
