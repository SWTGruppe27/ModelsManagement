<template>

    <div id="wrapper">
        <header>
            <div id="hader">
                <img src="@/Images/javalogo.gif" alt="Company Logo" />
            </div>
        </header>

        <div id="nav">
            <ul>
                <li><a><router-link to="/Home">Home</router-link></a></li>
            </ul>
        </div>

        <div id="content">
            <router-view></router-view>
        </div>

        <footer>
            <div id="footer">
                <p>
                    <i>Copyright &copy; 2013 JavaJam Coffee House </i> <br />
                    <a href="mailto:simon.schou@hotmail.dk"><i>simon.schou@hotmail.dk</i></a>
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
    import Home from './components/Home.vue';

    export default {
        name: 'app',
        components: {
            Home,
        }
    };
</script>

<style>
    body {
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
        }
</style>


