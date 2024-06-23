<template> 
  <div class="loginpage" v-if="state === false">
    <RouterLink to="/">
      <strong class="back-to-home">< Back to homepage</strong>
    </RouterLink>
    <div class="login-card">
      <RouterLink to="/">
        <img src="/KinkyCat_Logo.png">
      </RouterLink>
      <h1>Login</h1>
      <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
      <button>Login</button>
      <p class="switch-state">Don't have an account? <a href="#" @click="state = true">Register</a></p>
    </div>
  </div>
  <div class="registerpage" v-else>
    <RouterLink to="/">
      <strong class="back-to-home">< Back to homepage</strong>
    </RouterLink>
    <div class="register-card">
      <RouterLink to="/">
        <img src="/KinkyCat_Logo.png">
      </RouterLink>
      <h1>Register</h1>
      <input type="text" id="reg-email" placeholder="email" />
      <input type="text" id="reg-name" placeholder="username" />
      <input type="password" id="reg-pass" placeholder="password" />
      <button @click="registerUser()">Register</button>
      <p class="switch-state">Already have an account? <a href="#" @click="state = false">Login</a></p>
    </div>
  </div>
</template>

<script>
import '../assets/loginpage.css'
import '../assets/homepage.css'
import { useCollection } from 'vuefire'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default {
  data() {
    return {
      state: false,
      users: null,
    };
  },
  methods: {
    registerUser: async function() {
      let email = document.querySelector('#reg-email').value;
      let name = document.querySelector('#reg-name').value;
      let password = document.querySelector('#reg-pass').value;

      const uuid41 = () => {
        let d = '';
        while (d.length < 32) d += Math.random().toString(16).substr(2);
        const vr = ((parseInt(d.substr(16, 1), 16) & 0x3) | 0x8).toString(16);
        return `${d.substr(0, 8)}-${d.substr(8, 4)}-4${d.substr(13, 3)}-${vr}${d.substr(17, 3)}-${d.substr(20, 12)}`;
      };
      const uuid = uuid41();

      this.users = await addDoc(collection(db, "users"),{
        created: new Date(),
        email: email,
        uuid: uuid,
        likes: 0,
        name: name,
        password: password,
        posts: 0,
      });

    },
  },
  created() {
    this.users = useCollection(collection(db, 'users'))
  }
};
</script>