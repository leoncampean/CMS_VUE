<template>
<section>
<Text></Text>
<TitleComponent></TitleComponent>
<adaugare-buton></adaugare-buton>


</section>


</template>

<script>
import TitleComponent from './components/TitleComponent.vue'
import Text from './components/Text.vue'
import AdaugareButon from './components/AdaugareButon.vue'


export default {
  name: 'App',
  components: {
    TitleComponent,
    Text,
    AdaugareButon,
  }
}
</script>

<style>

</style>
