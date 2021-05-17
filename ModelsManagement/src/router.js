import Vue from "vue";
import Router from "vue-router";
import UserLogin from "./components/UserLogin.vue";
import AddModel from "./components/AddModel.vue";
import AddManager from "./components/AddManager.vue";
import AddModelJob from "./components/AddModelJob.vue";
import AddModelToJob from "./components/AddModelToJob.vue";
import DeleteModelFromJob from "./components/DeleteModelFromJob.vue";
import SeeJobs from "./components/SeeJobs.vue";
import AddExpenseToJob from "./components/AddExpenseToJob.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/UserLogin",
            name: "UserLogin",
            component: UserLogin
        },
        {
            path: "/AddModel",
            name: "AddModel",
            component: AddModel
        },
        {
            path: "/AddManager",
            name: "AddManager",
            component: AddManager
        }, {
            path: "/AddModelJob",
            name: "AddModelJob",
            component: AddModelJob
        }, {
            path: "/AddModelToJob",
            name: "AddModelToJob",
            component: AddModelToJob
        }, {
            path: "/DeleteModelFromJob",
            name: "DeleteModelFromJob",
            component: DeleteModelFromJob
        }, {
            path: "/SeeJobs",
            name: "SeeJobs",
            component: SeeJobs
        }, {
            path: "/AddExpenseToJob",
            name: "AddExpenseToJob",
            component: AddExpenseToJob
        }
    ]
});