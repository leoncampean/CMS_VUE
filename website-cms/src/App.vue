<template>
<section>
<Text></Text>
<TitleComponent></TitleComponent>
<AdaugareButon></AdaugareButon>
<SearchBarComponent></SearchBarComponent>
<TabelComponent></TabelComponent>



</section>


</template>

<script>
import TitleComponent from './components/TitleComponent.vue'
import Text from './components/TestComponent.vue'
import AdaugareButon from './components/ButoaneComponent.vue'
import TabelComponent from './components/TabelComponent.vue'
import SearchBarComponent from './components/SearchBarComponent.vue'




export default {
  name: 'App',
  components: {
    TitleComponent,
    Text,
    AdaugareButon,
    TabelComponent,
    SearchBarComponent,
  }
}
</script>

<style>

</style>
