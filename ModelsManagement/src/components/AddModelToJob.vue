<template>
    <div id="addmodeltojob">
        <h1>Add Model To Job</h1>


        <div id="jobsList" v-for="(job,index) in jobs" v-bind:key="index">
            <p><b>Id: </b>{{job.efJobId}} <b>Customer: </b> {{job.customer}}</p>
            <p><b>Location:</b> {{job.location}}</p>
            <br />
        </div>

        <div id="modelList" v-for="(model,index) in models" v-bind:key="'a'+index">
            <p><b>Model Id:</b> {{model.efModelId}}</p>
            <p><b>Name: </b>{{model.firstName}} {{model.lastName}}</p>
            <br />
        </div>


        <div class="form-group">
            <button type="button" class="button"><a v-on:click="loadJobs()">Load Jobs</a></button>
        </div>
        <br />


        <div class="form-group">
            <button type="button" class="button"><a v-on:click="loadModels()">Load Models</a></button>
        </div>
        <br />

        <form>
            <div class="form-group">
                <label for="modelId">Model Id: </label>
                <input type="number" v-model="modelId" required />
            </div>
            <br />
            <div class="form-group">
                <label for="jobId">Job Id: </label>
                <input type="number" v-model="jobId" required />
            </div>
            <br />
            <div class="form-group">
                <button type="button" class="button"><a v-on:click="addModelToJobFunction()">Add Model To Job</a></button>
            </div>
            <br />
        </form>

        <div class="form-group">
            <button type="button" class="button"><router-link to="/Menu">Back to menu</router-link></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AddModelToJob',
        props: {
            msg: String
        },
        data: () => ({
            jobs: [],
            models: [],
            modelId: "",
            jobId: ""
        }),
        methods: {
            loadJobs() {
                var url = "https://localhost:44368/api/Jobs";
                fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }).then(responseJson => responseJson.json()
                ).then(data => { this.jobs = data }).catch(error => alert('Something bad happened: ' + error));
            },

            loadModels() {
                var url = "https://localhost:44368/api/Models";
                fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }).then(responseJson => responseJson.json()
                ).then(data => { this.models = data }).catch(error => alert('Something bad happened: ' + error));
            },
            addModelToJobFunction() {
                var url = "https://localhost:44368/api/Jobs/" + this.jobId + "/model/" + this.modelId;

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
    #addmodeltojob {
        text-align: center;
    }
</style>