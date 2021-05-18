<template>
    <div>
        <h1>Add Expense To Job</h1>
        <form>
            <!--Drop down w jobs-->
            <div class="form-group">
                <label for="date">Date: </label>
                <input type="text" v-model="addexpenseform.date" />
            </div><br />
            <div class="form-group">
                <label for="text">Text: </label>
                <input type="text" v-model="addexpenseform.text" />
            </div><br />
            <div class="form-group">
                <label for="amount">Amount: </label>
                <input type="number" v-model="addexpenseform.amount" />
            </div><br />
            <div class="form-group">
                <button type="button" class="button" v-on:click="addExpenseToJobFunction()"><a><router-link to="/Menu">Add Expense To Job</router-link></a></button>
            </div><br />
            <div class="form-group">
                <button class="button"><router-link to="/Menu">Back to menu</router-link></button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'AddExpenseToJob',
        props: {
            msg: String
        },
        data: () => ({
            addexpenseform: {
                date: "",
                text: "",
                amount: ""
                //List of jobs to pick from
            },
        }),
        methods: {
            addExpenseToJobFunction() {

            }
        }
    };
</script>

<style scoped>
</style>