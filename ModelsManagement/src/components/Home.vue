<template>
    <div>
        <img src="@/Images/windingroad.jpg" alt="Winding road" align="right" />

        <ul>
            <li>Specialty Coffe and Tea</li>
            <li>Bagels,Muffins and Organic snacks</li>
            <li>Music and Poetry</li>
            <li>Open Mic Night</li>
        </ul>

        <P>
            12312 Main street
            <br />
            Mountain Home, CA 93923
            <br />
            1-888-555-55555
        </P>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

