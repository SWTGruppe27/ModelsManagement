<template>
    <div>
        <h1>Remove Model From Job</h1>
        <form>
            <!--Drop down w jobs-->
            <!--Drop down w models-->
            <div class="form-group">
                <button type="button" class="button" v-on:click="deleteModelFromJobFunction()"><a><router-link to="/Menu">Remove Model From Job</router-link></a></button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'DeleteModelFromJob',
        props: {
            msg: String
        },
        data: () => ({
            deletemodelfromjobform: {
                //List of jobs to pick from
                //List of models to add??
            },
        }),
        methods: {
            deleteModelFromJobFunction() {

            }
        }
    };
</script>

<style scoped>
</style>