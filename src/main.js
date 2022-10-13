import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBeer, faCoffee, faCubesStacked, faLemon, faUserSecret, faWineGlass } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faBeer, faLemon, faWineGlass, faCoffee, faCubesStacked)
import App from './App.vue'
import router from './router'


createApp(App).component('fa', FontAwesomeIcon).use(router).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'