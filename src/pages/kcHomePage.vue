<template> 
  <div class="homepage">
    <div class="container">
      <h2><strong>Latest posts</strong></h2>
      <div class="posts-container">
        <div class="card" v-for="(post, index) in previewablePosts" :key="post.id">
          <div >
            <strong>
              {{ post.title ? post.title : 'No posts yet' }}
            </strong>
          </div>
          <div>
            <p>
              {{ post.text ? post.text : 'No content yet' }}
            </p>
          </div>
          <div>            
            <i>
              {{ post.author ? "Written by: " + post.author : 'No author' }}
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
      posts: [],
      previewablePosts: [],
    };
  },
  methods: {
  },
  async created() {
    this.posts = await useCollection(collection(db, 'Posts'))
    this.previewablePosts = this.posts.slice(0, 5)
  }
};
</script>