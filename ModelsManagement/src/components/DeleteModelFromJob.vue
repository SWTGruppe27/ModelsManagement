<template>
    <div id="deletemodelfromjob">
        <h1>Remove Model From Job</h1>

        <div v-for="(job,index) in jobs" v-bind:key="index">
            <p><b>Id: </b>{{job.efJobId}}</p>
            <p><b>Customer: </b> {{job.customer}}</p>
            <br />
        </div>

        <form>
            <div class="form-group">
                <label for="jobId">JobId: </label>
                <input type="number" v-model="jobId" required />
            </div>
            <div class="form-group">
                <button type="button" class="button" v-on:click="findModels()">Find model for jobs</button>
            </div>
        </form>

        <!--<div v-for="(model,index) in modelsAndJobs.models" v-bind:key="index">
            <p><b>Firstname: </b>{{model.firstname}}</p>
            <br />
        </div>-->


        <form>
            <div class="form-group">
                <button type="button" class="button" v-on:click="deleteModelFromJobFunction()">Load</button>
            </div><br />
            <div class="form-group">
                <button class="button"><router-link to="/Menu">Back to menu</router-link></button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'DeleteModelFromJob',
        data: () => ({
            jobId: "",
            modelsAndJobs: [],
            jobs: []
        }),
        methods: {
            deleteModelFromJobFunction() {
                this.getData1("https://localhost:44368/api/Jobs");
            },

            getData1(url) {
                fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                }).then(responseJson => responseJson.json()
                ).then(data => { this.jobs = data })
                    .catch(error => alert('Something bad happened: ' + error));
            },
            findModels() {
                var url = "https://localhost:44368/api/Job/" + this.jobId;
                this.getData2(url);
            },

            getData2(url) {
                fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                }).then(responseJson => responseJson.json()
                ).then(data => { this.modelsAndJobs = data; })
                    .catch(error => alert('Something bad happened: ' + error));
            },
        }
    };
</script>

<style scoped>
    #deletemodelfromjob{
        text-align: center;
    }
</style>