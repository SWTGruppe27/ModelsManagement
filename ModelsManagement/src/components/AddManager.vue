<template>
    <div id="addmanager">
        <h1>Add News Manager</h1>
        <form>
            <div class="form-group">
                <label for="firstName">First name: </label>
                <input type="text" v-model="managerform.firstName" />
            </div><br />
            <div class="form-group">
                <label for="lastName">Last name: </label>
                <input type="text" v-model="managerform.lastName" />
            </div><br />
            <div class="form-group">
                <label for="email">Email: </label>
                <input type="email" v-model="managerform.email" required />
            </div><br />
            <div class="form-group">
                <label for="password">Password: </label>
                <input type="password" v-model="managerform.password" required />
            </div><br />
            <div class="form-group">
                <button type="button" class="button"><a v-on:click="addNewManager()">Add new manager</a></button>
            </div><br />
        </form>
        <div class="form-group">
            <button class="button"><router-link to="/Menu">Back to menu</router-link></button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'AddNewManager',
        data: () => ({
            managerform: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        }),
        methods: {
            addNewManager() {
                var url = "https://localhost:44368/api/Managers";

                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(this.managerform),
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
                }).then(responseJson => { this.response = responseJson }).catch(error => alert('Something bad happened: ' + error));
            }
        }
    };
</script>

<style scoped>
    #addmanager {
        text-align: center;
    }
    
    label {
        font-weight: bold;
    }
</style>