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
          <li><RouterLink to="/">Home</RouterLink></li>
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
          <li><a href="">Wet Pussy</a></li>
          <li><a href="">Bubblegum pink pussies</a></li>
          <!-- <li><a href="">Schattige poezen</a></li> -->
          <!-- <li><a href="">Harige poezen</a></li> -->
          <!-- <li><a href="">Naakte poezen</a></li> -->
          <li><a href="">BBC</a></li>
          <li><a href="">Any</a></li>
          <!-- <li><a href="">Rode poezen</a></li> -->
          <!-- <li><a href="">Petite poezen</a></li> -->
          <!-- <li><a href="">Eindhovense poezen</a></li> -->
          <!-- <li><a href="">Catiestyle</a></li> -->
          <!-- <li><a href="">Rawr</a></li> -->
          <!-- <li><a href="">Triple poes</a></li> -->
          <!-- <li><a href="">Gepiercste poes</a></li> -->
          <!-- <li><a href="">Moslim poes</a></li> -->
          <!-- <li><a href="">Kitten poes</a></li> -->
          <!-- <li><a href="">Tompouce</a></li> -->
          <!-- <li><a href="">Jonge poezen</a></li> -->
          <!-- <li><a href="">StepCat</a></li> -->
          <!-- <li><a href="">Duo poes</a></li> -->
          <!-- <li><a href="">Turkse poes</a></li> -->
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

  },
};
</script>