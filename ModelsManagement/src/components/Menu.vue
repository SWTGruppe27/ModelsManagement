<template>
    <h1>Welcome to ModelManagement!</h1>
    <div>
        <button><a><router-link to="/AddModel">Add New Model</router-link></a></button>
        <button><a><router-link to="/AddManager">Add New Manager</router-link></a></button>
        <button><a><router-link to="/AddModelJob">Add New Job</router-link></a></button>
        <button><a><router-link to="/AddModelToJob">Add Model To Job</router-link></a></button>
        <button><a><router-link to="/DeleteModelFromJob">Remove Model From Job</router-link></a></button>
        <button><a><router-link to="/SeeJobs">Overview Over Jobs</router-link></a></button>
        <button><a><router-link to="/AddExpenseToJob">Add Expense To A Job</router-link></a></button>
    </div>
</template>

<script>
</script>

<style scoped>
</style>