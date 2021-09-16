<template>
<section>
<button class="Adaugare" type="submit"><span>{{Adaugare}}</span></button>
<div class="hide">{{Hide1Message}}</div>
<button class="Sortare" type="submit"><span>{{Sortare}}</span></button>
</section>
</template>

<script>
export default {
    data() {
        return {
            Adaugare: "Adaugare membru",
            Hide1Message: "Adauga rapid un nou membru in tabelul de mai jos.Urmeaza cu atentie pasii!",
            Sortare: "Sorteaza membrii"

        };
    }
    
};
</script>

<style>
.Adaugare {
  font-size: large;
  background: rgba(2,0,36,1);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 5rem;
  cursor: pointer;
  font-family: monospace;
  border-radius: 20px;
  box-shadow: 0 9px rgba(2,0,36,1);
  outline: none;
  color: white;
}

.Adaugare:hover {
  box-shadow: whitesmoke;
  background-color: rgba(147,12,12,1);
}

.Adaugare span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.Adaugare span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.Adaugare:hover span {
  padding-right: 25px;
}

.Adaugare:hover span:after {
  opacity: 1;
  right: 0;
}

.Adaugare:active {
  box-shadow: 0 5px rgba(2,0,36,1);
  transform: translateY(4px);
}

.hide {
  display: none;
  font-size: 15px;
  cursor: pointer;
  border-style: double;
  border-radius: 14px;
  border-width: 5px;
  border-color:#001E6C;
}

</style>