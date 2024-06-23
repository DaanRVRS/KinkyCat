<template> 
  <div class="loginpage" v-if="state === false">
    <RouterLink to="/">
      <strong class="back-to-home">< Back to homepage</strong>
    </RouterLink>
    <img src="/kat.jpg">
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
          or
        </p>
        <div class="line"></div>
      </div>
      <div class="register">
      <button @click=" state = true">Create account</button>
      </div>
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
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Register</button>
    </div>
  </div>
</template>

<script>
import '../assets/loginpage.css'

export default {
  data() {
    return {
      state: false,
    };
  },
  methods: {
  },
  created() {
  }
};
</script>