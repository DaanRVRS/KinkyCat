<template> 
    <div class="modal-container">
        <strong>New Post</strong>
        <input type="text" placeholder="Title" id="post-title">
        <textarea placeholder="post content" id="post-text"></textarea>
        <input type="file" id="post-image">
        <select id="exampleSelect" name="exampleSelect" v-model="category">
          <option value="any">Any</option>
          <option value="BBC">BBC</option>
          <option value="wet_pussy">Wet pussy</option>
          <option value="bubblegum_pink">Bubblegum pink</option>
      </select>
        <input type="text" placeholder="username" id="post-author">
        <button @click="createPost()">Post</button>
    </div>
  </template>
  
  <script>
  import '../assets/createpost.css'
  import '../assets/homepage.css'
  import { collection, addDoc } from 'firebase/firestore'
  import { db } from '../firebase'
  
  export default {
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