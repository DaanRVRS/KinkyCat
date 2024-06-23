<template> 
  <div class="homepage">
    <div class="container">
      <h2><strong>Latest posts</strong></h2>
      <div class="posts-container">
        <div class="card" v-for="post in posts" :key="post.id">
          <div>
            <strong>
              {{ post.postTitle ? post.postTitle : 'No posts yet' }}
            </strong>
          </div>
          <div>
            <p>
              {{ post.postText ? post.postText : 'No content yet' }}
            </p>
          </div>
          <div>            
            <i>
              {{ post.writtenBy ? "Written by: " + post.writtenBy : 'No author' }}
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/homepage.css'
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { db } from '../firebase'

export default {
  data() {
    return {
      posts: []
    };
  },
  methods: {
  },
  created() {
    this.posts = useCollection(collection(db, 'Posts'))
  }
};
</script>