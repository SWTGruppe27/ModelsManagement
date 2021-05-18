<template>
    <div id="elements">
        <h1>Overviews Over Jobs</h1>

        <div v-for="(job,index) in jobs" v-bind:key="index">
            <p><b>Customer: </b>{{job.customer}}</p>
            <p><b>Start Date: </b>{{dateToString(job.startDate)}}</p>
            <p><b>Days: </b>{{job.days}}</p>
            <p><b>Location: </b>{{job.location}}</p>
            <p v-if="job.comments.length!=0"><b>Comments: </b>{{job.comments}}</p>
            <br />
        </div>

        <div class="form-group">
            <button v-on:click="getJobsFunction" class="button"><a>Load</a></button>
        </div>

        <br />

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
    #elements {
        text-align: center;
    }

    h1 {
        padding: 60px;
        text-align: center;
        background: #808080;
        color: white;
        font-size: 30px;
        font-family: 'Cooper Black';
    }
</style>