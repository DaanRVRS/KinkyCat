<template> 
<nav>
  <div class="upper-header-container">
    <div class="searchbar">
      <input type="text" placeholder="Zoeken" />
    </div>
    <div class="close-icon">
      <i class="fa-solid fa-times fa-3x" v-on:click="toggleMenuClose()"></i>
    </div>
  </div>
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
<div class="image">
  <img src="/KinkyCat_Logo_NoText.png" alt="logo" />
  <img src="/borabillen.png" alt="logo" />
</div>
    <header>
      <div class="dropdown">
        <i class="fa-solid fa-bars" v-on:click="toggleMenu()"></i>
      </div>
      <div class="logo">
        <img src="/KinkyCat_Logo.png" alt="logo" />
      </div>
      <ul>
        <li><a href="#">Trending</a></li>
        <li><a href="#">Over Ons</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
      <div class="user-container">
        <div class="user  ">
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </header>
</template>

<script>
import { doc } from 'firebase/firestore';

export default {
  data() {
    return {
    };
  },
  methods: {
    toggleMenu: function () {
      console.log('toggleMenu');
      document.querySelector('nav').style.display = 'flex'; 
    },
    toggleMenuClose: function () {
      console.log('toggleMenuClose');
      document.querySelector('nav').style.display = 'none'; 
    }
  },
  created() {

  },
};
</script>