import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import("./components/Page/MyForm.vue"),
        name: "page.form",

    },
    {
        path: '/list',
        component: () => import("./components/Page/MyList.vue"),
        name: "page.list",

    },

]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;

