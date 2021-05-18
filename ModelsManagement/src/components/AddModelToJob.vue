<template>
    <div id="addmodeltojob">
        <h1>Add Model To Job</h1>
        <form>
            <!--Drop down w jobs-->
            <!--Drop down w models-->
            <div class="form-group">
                <button type="button" class="button" v-on:click="addModelToJobFunction()"><a><router-link to="/Menu">Add Model To Job</router-link></a></button>
            </div><br />
            <div class="form-group">
                <button class="button"><router-link to="/Menu">Back to menu</router-link></button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'AddModelToJob',
        props: {
            msg: String
        },
        data: () => ({
            addmodeltojobform: {
                //List of jobs to pick from
                //List of models to add??
            },
        }),
        methods: {
            addModelToJobFunction() {

            }
        }
    };
</script>

<style scoped>
    #addmodeltojob{
        text-align: center;
    }
</style>