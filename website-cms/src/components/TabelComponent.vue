<template>
<section>
    <table> 
        <thead>
            <th>{{Nume}}</th>
            <th>{{Prenume}}</th>
            <th>{{Email}}</th>
            <th>{{Sex}}</th>
            <th>{{DataNasterii}}</th>
            <th>{{Actiuni}}</th>
        </thead>
        <tbody>
            <td>{{Leon.nume}}</td>
            <td>{{Leon.prenume}}</td>
            <td>{{Leon.email}}</td>
            <td>{{Leon.sex}}</td>
            <td>{{Leon.DataNasterii}}</td>
            <td>Delete</td>
        </tbody>

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
            Actiuni: "Actiuni",
            Leon: {
                nume: "Campean",
                prenume: "Leon",
                email: "leoncampean90@gmail.com",
                sex: "Barbat",
                DataNasterii: "17/03/2000",
            },
        };
    }
    
};
</script>

<style>

table {
    color: whitesmoke;
    margin-top: 5rem;
    align-self: center;
    justify-self: center;
    width: 80%;
    margin-left: 10%;
    text-align: center;
    border-collapse: collapse;  
}

th, td {
    border-style: double;
    border-color: whitesmoke;
    width: 10rem;
    height: 5rem;
    background-color: rgba(2,0,36,1);
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

th {
    font-size: 20px;
}

th:hover {
    background-color: rgba(2,0,36,0);
}


</style>