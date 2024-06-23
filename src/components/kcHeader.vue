<template> 
  <header>
    <div class="header-image">
      <img src="/KinkyCat_Logo_NoText.png" alt="logo" class="logo" />
      <img src="/header_image.png" alt="logo" class="background-image" />
    </div>

    <div class="header-content">
      <RouterLink to="/">
        <img src="/KinkyCat_Logo.png" alt="logo" class="logo" />
      </RouterLink>
      <div class="dropdown">
        <i class="fa-solid fa-bars fa-3x"></i>
        <i class="fa-solid fa-magnifying-glass fa-2x"></i>
      </div>
      <nav>
        <ul>
          <li><RouterLink to="/trending">Trending</RouterLink></li>
          <li><RouterLink to="/about-us">Over Ons</RouterLink></li>
          <li><RouterLink to="/privacy-policy">Privacy Policy</RouterLink></li>
        </ul>
      </nav>
      <div class="user-container">
        <RouterLink to="/login">
          <i class="fa-solid fa-user fa-2x"></i>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  created() {

  }
};
</script>