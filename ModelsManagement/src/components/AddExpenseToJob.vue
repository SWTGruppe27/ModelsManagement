<template>
    <div id="addexpenses">
        <h1>Add Expense To Job</h1>
        <form>
            <!--Drop down w jobs-->
            <div class="form-group">
                <label for="modelId">Model Id: </label>
                <input type="number" v-model="addexpenseform.modelId" required />
            </div><br />
            <div class="form-group">
                <label for="jobId">Job Id: </label>
                <input type="number" v-model="addexpenseform.jobId" required />
            </div><br />
            <div class="form-group">
                <label for="date">Date: </label>
                <input type="text" v-model="addexpenseform.date" placeholder="yyyy-mm-dd" />
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
                <button type="button" class="button"><a v-on:click="addExpenseToJobFunction()">Add Expense To Job</a></button>
            </div><br />

        </form>

        <div class="form-group">
            <button class="button"><router-link to="/Menu">Back to menu</router-link></button>
        </div>

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
                amount: 0,
                modelId: "",
                jobId: ""
            },
        }),
        methods: {
            addExpenseToJobFunction() {
                var url = "https://localhost:44368/api/Expenses";
                var dataForm = this.addexpenseform;

                dataForm.jobId = Number.parseInt(this.addexpenseform.jobId);
                dataForm.modelId = Number.parseInt(this.addexpenseform.modelId);
                dataForm.amount = Number.parseFloat(this.addexpenseform.amount);

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
    #addexpenses {
        text-align: center;
    }
</style>