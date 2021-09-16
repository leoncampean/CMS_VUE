<template>
<section>
<Text></Text>
<TitleComponent></TitleComponent>
<AdaugareButon></AdaugareButon>


</section>


</template>

<script>
import TitleComponent from './components/TitleComponent.vue'
import Text from './components/TextComponent.vue'
import AdaugareButon from './components/ButoaneComponent.vue'


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
