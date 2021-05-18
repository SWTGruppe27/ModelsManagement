<template>
    <div>
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
                <button type="button" class="button" v-on:click="addNewManager()"><a><router-link to="/Menu">Add new manager</router-link></a></button>
            </div><br />
            <div class="form-group">
                <button class="button"><router-link to="/Menu">Back to menu</router-link></button>
            </div>
        </form>
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

            }
        }
    };
</script>

<style scoped>
</style>