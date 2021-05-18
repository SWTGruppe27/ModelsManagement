<template>
    <div>
        <div v-if="homepage" id="homepage">
            <img src="./Images/NewLogo.png" /><br /><br />
            <button v-on:click="changeState()"><a><router-link to="/UserLogin">Login</router-link></a></button>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Menu from './components/Menu.vue';
    import UserLogin from './components/UserLogin.vue';
    import AddModel from './components/AddModel.vue';
    import AddManager from "./components/AddManager.vue";
    import AddModelJob from "./components/AddModelJob.vue";
    import AddModelToJob from "./components/AddModelToJob.vue";
    import DeleteModelFromJob from "./components/DeleteModelFromJob.vue";
    import SeeJobs from "./components/SeeJobs.vue";
    import AddExpenseToJob from "./components/AddExpenseToJob.vue";

    export default {
        name: 'app',
        components: {
            Menu,
            UserLogin,
            AddModel,
            AddManager,
            AddModelJob,
            AddModelToJob,
            DeleteModelFromJob,
            SeeJobs,
            AddExpenseToJob
        },
        data: () => ({
            homepage: true
        }),
        methods: {
            changeState() {
                this.homepage = false;
            }
        }
    };
</script>

<style>
    #homepage {
        text-align: center;
    }

    button {
        background-color: #000000;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

    /* unvisited link */
    a:link {
        color: white;
        text-decoration: none;
    }

    /* visited link */
    a:visited {
        color: white;
        text-decoration: none;
    }

    /* mouse over link */
    a:hover {
        color: hotpink;
        text-decoration: none;
    }

    /* selected link */
    a:active {
        color: white;
        text-decoration: none;
    }
    /*    body {
        background: #ffffcc;
        font-family: Verdana,Arial, sans-serif;
    }

    #tableCenter {
        text-align: center;
    }

    td {
        text-align: left;
    }

    thead {
        background: #ccaa66;
    }

    tbody {
        background: #ffffcc;
    }

    tfoot {
        background: #ccaa66;
    }

    #wrapper {
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        box-shadow: 5px 5px 5px 5px #828282;
    }

    #hader {
        background: #ccaa66;
        text-align: center;
    }

    #footer {
        background: #ccaa66;
        text-align: center;
        border-style: none;
        margin: 0;
    }

    img {
        border-style: none;
        margin: 0;
    }

    #jobTable {
        background: #f2eab7;
    }

        #jobTable tr {
            background: #f2eab7;
        }

    #content {
        padding: 10px 20px 30px;
        margin-left: 150px;
        background-color: #f2eab7;
        color: #000000;
    }

    #nav {
        text-align: center;
        float: left;
        width: 100px;
        padding-top: 10px;
    }

        #nav a {
            text-decoration: none;
            padding-right: 10px;
        }

        #nav ul {
            list-style-type: none;
        }*/
</style>


