<template>
    <div>
        <h1>See Job</h1>

        <div v-bind="job in jobs">
            <p>{{job.customer}}</p>
        </div>

        <button type="button"  class="button" v-on:click:="getJobsFunction()">Load</button>
    </div>


</template>

<script>
    export default {
        name: 'seeJobs',
        data: () => ({
            job: {
                Customer: "",
                StartDate: "",
                Days: "",
                Location: "",
                Comments: ""
            },
            jobs: []
        }),
        methods: {
            getJobsFunction() {
                alert("hej");
                var url = "https://localhost:44368/api/Jobs";
                fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }).then(responseJson => { this.response = responseJson }).catch(error => alert('Something bad happened: ' + error));

                this.jobs = this.response;
            },
            beforeMount() {
                this.getJobsFunction();
            }
        },
    };
</script>

<style scoped>
</style>