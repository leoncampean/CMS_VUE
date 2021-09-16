<template>
        <h1>{{Title}}</h1>
</template>

<script>
export default {
    data() {
        return {
            Title: "CMS APP",
        };
    }
    
};
</script>

<style>
h1 {
    color: red;
    background-color: black;
    text-align: center;
    font-size: 50px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    width: 40%;
    margin-left: 30%;
}
h1:hover {
    color: blue;
}
</style>