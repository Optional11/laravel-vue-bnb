import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";
import Bookables from "./bookables/Bookables"

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home",
    },
];

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: "history",
});

export default router;
