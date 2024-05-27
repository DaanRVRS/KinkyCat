import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueFire } from 'vuefire'
import { doc, getDocs } from "firebase/firestore";

import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCgObuuUVKgytm8ozKAdV_HXmySJjE1YA8",
  authDomain: "kinkycat-216e8.firebaseapp.com",
  projectId: "kinkycat-216e8",
  storageBucket: "kinkycat-216e8.appspot.com",
  messagingSenderId: "949576085738",
  appId: "1:949576085738:web:bcf18586cb4c9c75902793",
  measurementId: "G-9THQPTQRQE"
})

// used for the firestore refs
const db = getFirestore(firebaseApp);

// here we can export reusable database references
export const postsRef = await getDocs(collection(db, 'Posts'));

// {
//   author: {
//     firstname: 'Jakob',
//     lastname: 'de Bruijn',
//     email: 'placeholdermail@gmail.com'
//   },
//   post: {
//     title: 'My first post',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices, velit sit amet suscipit dictum, tellus magna maximus nunc, a suscipit est lacus ut nulla. Praesent aliquet bibendum magna non fermentum. Nam vel elit tempus, volutpat sapien sed, laoreet ex. Curabitur cursus urna nec sem facilisis convallis. Mauris eu tellus vitae sem iaculis dapibus. Fusce dictum consectetur dolor sed tincidunt. Pellentesque sodales, arcu vitae commodo gravida, dolor eros molestie orci, nec sodales arcu lacus a elit. Phasellus lobortis nisl vitae egestas sagittis. Proin fringilla fermentum lectus lacinia lobortis. Quisque eget dolor et quam gravida mollis.',
//     images: [],
//     timestamp: new Date().getDay() + '-' + new Date().getMonth() + '-' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
//   }
// }

const app = createApp(App)

// make global vars
app.config.globalProperties.window = window;
window.postsTable = postsRef.docs[0]._document.data.value.mapValue.fields;
console.log(postsRef.docs[0]._document.data.value.mapValue.fields);


app.use(router, VueFire)

app.mount('#app')


export default postsRef;