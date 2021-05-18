<template>
    <div id="Menu">
        <h1>Welcome to ModelManagement!</h1>

        <button><router-link to="/AddModel">Add New Model</router-link></button><br /><br />
        <button><router-link to="/AddManager">Add New Manager</router-link></button><br /><br />
        <button><router-link to="/AddModelJob">Add New Job</router-link></button><br /><br />
        <button><router-link to="/AddModelToJob">Add Model To Job</router-link></button><br /><br />
        <button><router-link to="/DeleteModelFromJob">Remove Model From Job</router-link></button><br /><br />
        <button><router-link to="/SeeJobs">Overview Over Jobs</router-link></button><br /><br />
        <button><router-link to="/AddExpenseToJob">Add Expense To A Job</router-link></button>
    </div>
</template>

<script>
</script>

<style scoped>
    #Menu{
        text-align: center;
    }
</style>