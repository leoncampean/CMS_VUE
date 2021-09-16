<template>
<section>
<Text></Text>
<TitleComponent></TitleComponent>
<AdaugareButon></AdaugareButon>


</section>


</template>

<script>
import TitleComponent from './components/TitleComponent.vue'
import Text from './components/Text.vue'
import AdaugareButon from './components/Butoane.vue'


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
