<template> 
  <div class="loginpage" v-if="state === false">
    <RouterLink to="/">
      <strong class="back-to-home">< Back to homepage</strong>
    </RouterLink>
    <img src="/header_image.png">
    <div class="login-card">
      <RouterLink to="/">
        <img src="/KinkyCat_Logo.png">
      </RouterLink>
      <h1>Kinkycat</h1>
      <h2>Login</h2>
      <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
      <button>Login</button>
      <div class="or">
        <div class="line"></div>
        <p>
          of
        </p>
        <div class="line"></div>
      </div>
      <div class="register">
      <button @click=" state = true">Creëer account</button>
      <button id="googlebutton"  @click="signInWithGoogle"><img src="/google.png">Ga verder met Google </button>  
      </div>
    </div>
  </div>
  <div class="registerpage" v-else>
    <RouterLink to="/">
      <strong class="back-to-home">< Back to homepage</strong>
    </RouterLink>
    <img src="/header_image.png">
    <div class="register-card">
      <RouterLink to="/">
        <img src="/KinkyCat_Logo.png">
      </RouterLink>
      <h1>Kinkycat</h1>
      <h2>Registreren</h2>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Creëer account</button>
      <div class="or">
        <div class="line"></div>
        <p>
          of
        </p>
        <div class="line"></div>
      </div>
      <div class="login">
      <button @click=" state = false">Login</button>
      <button id="googlebutton"  @click="signInWithGoogle"><img src="/google.png">Ga verder met Google </button>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/loginpage.css'
import '../assets/homepage.css'
import { useCollection } from 'vuefire'
import { collection, addDoc } from 'firebase/firestore'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { db, auth,} from '../firebase'

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
      const uuid = await uuid41();

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
    signInWithGoogle: async function(){
      try{
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user);
      }catch (error){
        console.log(error.message);
      }
    }
  },
  created() {
    this.users = useCollection(collection(db, 'users'))
  }
};
</script>