import { createApp } from 'vue'

import App from './App.vue'
import TitleComponent from './components/TitleComponent.vue';

const app = createApp(App);

app.component('title-component', TitleComponent);

app.mount('#app');

