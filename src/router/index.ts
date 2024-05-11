// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "init",
    component: () => import("@/layouts/default/Default.vue"),
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/evaluated",
        name: "EvaluatedPage",
        component: () => import("@/views/Evalueted.vue"),
      },
      {
        path: "/reviews",
        name: "ReviewsPage",
        component: () => import("@/views/Reviews.vue"),
      },
      {
        path: '/register-evaluated',
        name: 'RegisterEvaluated',
        component: () => import("@/views/RegisterEvaluated.vue"),
      },
      {
        path: '/register-reviews',
        name: 'RegisterReviews',
        component: () => import("@/views/RegisterReviews.vue"),
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
