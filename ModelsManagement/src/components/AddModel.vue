<template>
    <div>
        <h1>Add model</h1>
        <form>
            <div class="form-group">
                <label for="firstName">First name: </label>
                <input type="text" v-model="modelform.firstName" />
            </div><br />
            <div class="form-group">
                <label for="lastName">Last name: </label>
                <input type="text" v-model="modelform.lastName" />
            </div><br />
            <div class="form-group">
                <label for="email">Email: </label>
                <input type="email" v-model="modelform.email" required/>
            </div><br />
            <div class="form-group">
                <label for="phoneNumber">Phonenumber: </label>
                <input type="text" v-model="modelform.phoneNumber" />
            </div><br />
            <div class="form-group">
                <label for="adressLine1">AdressLine1: </label>
                <input type="text" v-model="modelform.adressLine1" />
            </div><br />
            <div class="form-group">
                <label for="adressLine2">AdressLine2: </label>
                <input type="text" v-model="modelform.adressLine2" />
            </div><br />
            <div class="form-group">
                <label for="zip">Zip: </label>
                <input type="text" v-model="modelform.zip" />
            </div><br />
            <div class="form-group">
                <label for="City">City: </label>
                <input type="text" v-model="modelform.City" />
            </div><br />
            <div class="form-group">
                <label for="country">Country: </label>
                <input type="text" v-model="modelform.country" />
            </div><br />
            <div class="form-group">
                <label for="birthdate">Birthdate: </label>
                <input type="datetime" v-model="modelform.birthdate" />
            </div><br />
            <div class="form-group">
                <label for="nationality">Nationality: </label>
                <input type="text" v-model="modelform.nationality" />
            </div><br />
            <div class="form-group">
                <label for="height">Height: </label>
                <input type="number" v-model="modelform.height" />
            </div><br />
            <div class="form-group">
                <label for="shoeSize">Shoe Size: </label>
                <input type="number" v-model="modelform.shoeSize" />
            </div><br />
            <div class="form-group">
                <label for="hairColor">Hair Color: </label>
                <input type="text" v-model="modelform.hairColor" />
            </div><br />
            <div class="form-group">
                <label for="eyeColor">Eye Color: </label>
                <input type="text" v-model="modelform.eyeColor" />
            </div><br />
            <div class="form-group">
                <label for="comments">Comments: </label>
                <input type="text" v-model="modelform.comments" />
            </div><br />
            <div class="form-group">
                <label for="password">Password: </label>
                <input type="password" v-model="modelform.password" required/>
            </div><br />
            <div class="form-group">
                <button type="button" class="button" v-on:click="addModelFunction"><a><router-link to="/Menu">Add Model</router-link></a></button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'AddModel',
        data: () => ({
            modelform: {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                adressLine1: "",
                adressLine2: "",
                zip: "",
                city: "",
                country: "",
                birthdate: "",
                nationality: "",
                height: "",
                shoeSize: "",
                hairColor: "",
                eyeColor: "",
                comments: "",
                password: "",
            },
        }),
        methods: {
            addModelFunction() {
                var url = "https://localhost:44368/api/Models";
                console.log(this.modelform);
                //console.log(localStorage.getItem("token"));
                fetch(url, {
                    method: 'POST',  // Or PUT
                    body: JSON.stringify(this.modelform),  // assumes your data is in a
                    // form object on your instance.
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
</style>