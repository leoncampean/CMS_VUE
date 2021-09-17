<template>
<section>
    <table class="tabel"> 
        <thead>
            <th>{{Nume}}</th>
            <th>{{Prenume}}</th>
            <th>{{Email}}</th>
            <th>{{Sex}}</th>
            <th>{{DataNasterii}}</th>
            <th>{{Actiuni}}</th>

        </thead>
    </table>

</section>
    
</template>

<script>
export default {
    data() {
        return {
            Nume: "Nume",
            Prenume: "Prenume",
            Email: "Email",
            Sex: "Sex",
            DataNasterii: "Data Nasterii",
            Actiuni: "Actiuni"
        };
    }
    
};
</script>

<style>

.tabel {
    color: whitesmoke;
    margin-top: 3rem;
    align-self: center;
    justify-self: center;
    width: 80%;
    margin-left: 10%;
    text-align: center;
    
}

</style>