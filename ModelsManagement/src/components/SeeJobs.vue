<template>
    <div id="elements">
        <h1>See Job</h1>

        <div v-for="(job,index) in jobs" v-bind:key="index">
            <p>Customer: {{job.customer}}</p>
            <p>Start Date: {{dateToString(job.startDate)}}</p>
            <p>Days: {{job.days}}</p>
            <p>Location: {{job.location}}</p>
            <p>Comments: {{job.comments}}</p>
            <br />
        </div>

        <div class="form-group">
            <button v-on:click="getJobsFunction" class="button">Load</button>
        </div>

        <br/>

        <div class="form-group">
            <button class="button"><router-link to="/Menu">Back to menu</router-link></button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'SeeJobs',
        data: () => ({
            jobs: []
        }),
        methods: {
            getJobsFunction() {
                
                var url = "https://localhost:44368/api/Jobs";
                fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }).then(responseJson => responseJson.json()
                ).then(data => { this.jobs = data })
                .catch(error => alert('Something bad happened: ' + error));
            },
            dateToString(date) {

                let dateSpit = date.split("T");
                let dateSpit2 = dateSpit[1].split("+");

                return dateSpit[0] + " " + dateSpit2[0];
            }
        },
    };
</script>

<style scoped>
    #elements{
        text-align: center;
    }
</style>