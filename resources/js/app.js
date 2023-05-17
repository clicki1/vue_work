import './bootstrap';
import { createApp } from 'vue';
import router from "./router.js";
import store from "./store/index.js";


const app = createApp({});

//import ExampleComponent from './components/ExampleComponent.vue';
import Index from "./components/Index.vue";
app.component('Index', Index);

app.use(router);
app.use(store);
app.mount('#app');
