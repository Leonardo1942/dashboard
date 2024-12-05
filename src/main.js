import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importar os componentes de página
import LoginComponent from './pages/Login/LoginComponent.vue';
import HomeComponent from './pages/Home/HomeComponent.vue';
import ProductsComponent from './pages/Products/ProductsComponent.vue';

// Definir as rotas
const routes = [
  { path: '/', name:'login', component: LoginComponent },
  { path: '/home', name:'home', component: HomeComponent },
  { path: '/servicos/produtos', name:'products', component: ProductsComponent },
];

// Criar o Vue Router
const router = createRouter({
  history: createWebHistory(),  // Usando o histórico de navegação baseado em URL
  routes,
});

// Criar a instância do Vue e usar o router
const app = createApp(App);
app.use(router);  // Usando o Vue Router
app.mount('#app');  // Montando a aplicação no elemento com id="app"
