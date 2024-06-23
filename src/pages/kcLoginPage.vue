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
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Register</button>
      <p class="switch-state">Already have an account? <a href="#" @click="state = false">Login</a></p>
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