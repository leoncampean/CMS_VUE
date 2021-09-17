<template>
<section>
    <div class="search-div">
      <input type="text" class="place" placeholder="Search.." name="search">
      <button class="searchBar" type="submit">{{SearchBtn}}</button>
    </div>
</section>
    
</template>

<script>
export default {
    data() {
        return {
            SearchBtn: "Submit",

        };
    }  
};
</script>

<style>
.search-div {
    margin-left: 44%;
    margin-top: 5rem; 
}

.place {
    width:10rem;
    height: 2rem;
    border-radius: 10px;
}

.searchBar {
    height: 2rem;
    width: 4rem;
    border-radius: 10px;
}

</style>