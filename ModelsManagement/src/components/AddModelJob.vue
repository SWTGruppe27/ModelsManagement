<template>
    <div id="addjob">
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
                <button type="button" class="button"><a v-on:click="addJobFunction"><router-link to="/Menu">Add Job</router-link></a></button>
            </div><br />
            <div class="form-group">
                <button class="button"><router-link to="/Menu">Back to menu</router-link></button>
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
            },
        }),
        methods: {
            addJobFunction() {
                var url = "https://localhost:44368/api/Jobs";
                var dataForm = this.addjobform;

                dataForm.days = Number.parseInt(this.addjobform.days);

                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(dataForm),
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
    #addjob{
        text-align: center;
    }
</style>