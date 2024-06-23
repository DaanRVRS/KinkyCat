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
        <i class="fa-solid fa-bars fa-3x" @click="toggleSidebar()"></i>
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
    <div class="sidebar">
      <i class="fa-solid fa-times fa-2x close-sidebar" @click="toggleSidebar()"></i>
      <nav>
        <ul>
          <li>natte poezen</li>
          <li>bubblegum pink poezen</li>
          <li>schattige poezen</li>
          <li>harige poezen</li>
          <li>naakte poezen</li>
          <li>BBC</li>
          <li>Rode poezen</li>
          <li>petite poezen</li>
          <li>Eindhovense poezen</li>
          <li>Catiestyle</li>
          <li>rawr</li>
          <li>Triple poes</li>
          <li>Gepiercste poes</li>
          <li>Moslim poes</li>
          <li>Kitten poes</li>
          <li>Tompouce</li>
          <li>Jonge poezen</li>
          <li>StepCat</li>
          <li>duo poes</li>
          <li>Turkse poes</li>
        </ul>
      </nav>
    </div>
  </header>

</template>

<script>
export default {
  data() {
    return {
      sidebarToggled: false,
    };
  },
  methods: {
    toggleSidebar: async function () {
      function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }

      if (this.sidebarToggled === true) {
        this.sidebarToggled = false;
        document.querySelector('.sidebar').classList.add('sidebar-slide-out');
        await delay(500);
        document.querySelector('.sidebar').classList.remove('sidebar-slide-out');
        document.querySelector('.sidebar').style.display = 'none';
      } else {
        this.sidebarToggled = true;
        document.querySelector('.sidebar').style.display = 'flex';
        document.querySelector('.sidebar').classList.add('sidebar-slide-in');
        await delay(500);
        document.querySelector('.sidebar').classList.remove('sidebar-slide-in');

      }
    },
  },
  created() {

  }
};
</script>