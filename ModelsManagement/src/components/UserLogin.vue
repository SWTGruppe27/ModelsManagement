<template>
    <div>
        <div v-if="!loginSucceded">
            <h1>Login</h1>
            <form>
                <div class="form-group">
                    <label for="email">Email: </label>
                    <input type="email" v-model="form.email" placeholder="Enter your email here" />
                </div>
                <div class="form-group">
                    <label for="password">Password: </label>
                    <input type="text" v-model="form.password" placeholder="Enter your password here" />
                </div>
                <div class="form-group">
                    <button type="button" class="button" v-on:click="loginFunction"><a><router-link to="/Menu">Login</router-link></a></button>
                </div>
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
                        localStorage.setItem("token", token.jwt);
                        // Change view to some other component
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
</style>

