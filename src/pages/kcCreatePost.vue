<template> 
  <div class="modal-container">
    <div class="input-container">
      <strong>New Post</strong>
        <input type="text" placeholder="Title" id="post-title" required>
        <textarea placeholder="Post content" id="post-text" required></textarea>
        <input type="file" id="post-image">
        <select id="exampleSelect" name="exampleSelect" v-model="category" required>
          <option value="any">Any</option>
          <option value="bbc">BBC</option>
          <option value="wet_pussy">Wet pussy</option>
          <option value="bubblegum_pink">Bubblegum pink</option>
        </select>
      <input type="text" placeholder="Username" id="post-author" required>
      <button @click="createPost()">Post</button>
    </div>
  </div>
</template>
  
  <script>
  import '../assets/createpost.css'
  import '../assets/homepage.css'
  import { collection, addDoc } from 'firebase/firestore'
  import { db } from '../firebase'
  import kcLoadingSpinner from '../components/kcLoadingSpinner.vue'

export default {
  components: {
      kcLoadingSpinner: kcLoadingSpinner,
  },
  data() {
    return {
      posts: null,
      category: 'any',
    };
  },
  methods: {
      createPost: async function() {
      let title = document.querySelector('#post-title').value;
      let text = document.querySelector('#post-text').value;
      // let img = document.querySelector('#post-image').value;
      let author = document.querySelector('#post-author').value;
      let category = this.category;

      const uuid41 = () => {
        let d = '';
        while (d.length < 32) d += Math.random().toString(16).substr(2);
        const vr = ((parseInt(d.substr(16, 1), 16) & 0x3) | 0x8).toString(16);
        return `${d.substr(0, 8)}-${d.substr(8, 4)}-4${d.substr(13, 3)}-${vr}${d.substr(17, 3)}-${d.substr(20, 12)}`;
      };
      const uuid = await uuid41();

      this.users = await addDoc(collection(db, "Posts"),{
        created: new Date(),
        title: title,
        text: text,
        img: null,
        author: author,
        uuid: uuid,
        category: category,
      });

      window.location.href = '/';

    },
  },
  created() {
    // this.posts = useCollection(collection(db, 'Posts'))
  }
};
</script>