<template> 
  <div class="homepage">
    <div class="container">
      <div class="card" v-for="post in posts" :key="post.id">
        <strong>
          {{ post.postTitle ? post.postTitle : 'No posts yet' }}
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
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
    console.log(collection(db, 'Posts'));
    this.posts = useCollection(collection(db, 'Posts'))
    console.log(this.posts)
  }
};
</script>