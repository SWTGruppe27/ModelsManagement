<template>
    <div>
        <h1>Add New Job</h1>
        <form>
            <div class="form-group">
                <label for="customer">Customer: </label>
                <input type="text" v-model="addjobform.customer" />
            </div><br />
            <div class="form-group">
                <label for="startDay">Start Day: </label>
                <input type="text" v-model="addjobform.startDay" />
            </div><br />
            <div class="form-group">
                <label for="days">Days: </label>
                <input type="number" v-model="addjobform.days" />
            </div><br />
            <div class="form-group">
                <label for="location">Location: </label>
                <input type="text" v-model="addjobform.location" />
            </div><br />
            <div class="form-group">
                <label for="comments">Comments: </label>
                <input type="text" v-model="addjobform.comments" />
            </div><br />
            <div class="form-group">
                <button type="button" class="button" v-on:click="addJobFunction"><a><router-link to="/Menu">Add Job</router-link></a></button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'AddJob',
        props: {
            msg: String
        },
        data: () => ({
            addjobform: {
                customer: "",
                startDay: "",
                days: "",
                location: "",
                comments: ""
                //List of models to add??
            },
        }),
        methods: {
            addJobFunction() {

            }
        }
    };
</script>

<style scoped>
</style>