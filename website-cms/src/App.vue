<template>
<section>
<Text></Text>
<TitleComponent></TitleComponent>
<AdaugareButon></AdaugareButon>
<TabelComponent></TabelComponent>


</section>


</template>

<script>
import TitleComponent from './components/TitleComponent.vue'
import Text from './components/TextComponent.vue'
import AdaugareButon from './components/ButoaneComponent.vue'
import TabelComponent from './components/TabelComponent.vue'



export default {
  name: 'App',
  components: {
    TitleComponent,
    Text,
    AdaugareButon,
    TabelComponent,
  }
}
</script>

<style>

</style>
