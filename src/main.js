import { createApp } from 'vue-demi'
import App from './App.vue'
import router from './router'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp, db } from './firebase'

import './assets/main.css'

const app = createApp(App)


app.use(router, VueFire, { firebaseApp, db })

app.mount('#app')   