<template>
    <div id="login">
        <div v-if="!loginSucceded">
            <h1>Login</h1>
            <form>
                <table class="center">
                    <tr>
                        <td>
                            <label for="email"><b>Email: </b></label>
                        </td>
                        <td>
                            <input type="email" v-model="form.email" placeholder="Enter your email here" required />
                        </td>
                    </tr>
                    <br />  
                    <tr>
                        <td>
                            <label for="password"><b>Password: </b></label>
                        </td>
                        <td>
                            <input type="password" v-model="form.password" placeholder="Enter your password here" required />
                        </td>
                    </tr>
                </table>
                <br />
                <button type="button" class="button"><a v-on:click="loginFunction()">Login</a></button>
            </form>

        </div>
        <div v-if="loginSucceded">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserLogin',
        data: () => ({
            form: {
                email: "",
                password: ""
            },
            loginSucceded: false,
        }),
        methods: {
            async loginFunction() {
                let url = "https://localhost:44368/api/Account/login";
                try {
                    let response = await fetch(url, {
                        method: "POST",
                        body: JSON.stringify(this.form), // Assumes data is in an object called form
                        headers: new Headers({
                            "Content-Type": "application/json"
                        })
                    });
                    if (response.ok) {
                        let token = await response.json();
                        localStorage.clear();

                        localStorage.setItem("token", token.jwt);

                        localStorage.setItem("isManager", token.isManager);

                        this.$router.push('/Menu');

                        this.loginSucceded = true;
                    } else {
                        alert("Server returned: " + response.statusText);
                    }
                } catch (err) {
                    alert("Error: " + err);
                }
                return;
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #login {
        text-align: center;
        
    }

    .center{
        margin-left: auto;
        margin-right: auto;
    }

    table td  {
        text-align: center;
    }
    table tr {
        text-align: center;
    }
    
</style>

