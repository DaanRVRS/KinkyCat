<template> 
  <div class="homepage">
    <div class="container">
      <h2><strong>Latest posts</strong></h2>
      <div class="posts-container" v-if="previewablePosts !== undefined && previewablePosts.length >= 3">
        <div class="card" v-for="(post, index) in previewablePosts" :key="post.id">
          <div class="card-options">
            <i class="fas fa-pencil" @click="$router.push('/edit-post/' + post.uuid)"></i>
            <i class="fas fa-trash" @click="deletePost(post.uuid)"></i>
          </div>
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
            <i style="font-weight: 300;">
              {{ post.created ? new Date(post.created.seconds * 1000).toLocaleDateString('em-EN', {weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',}) : 'No date' }}
            </i>
          </div>
        </div>
      </div>
      <div v-else>
        <kcLoadingSpinner />
      </div>
    </div>

    <div class="horizontal-line-container">
      <div class="horizontal-line"></div>
    </div>

    <div class="post-now-container">
      <div class="post-now-text">
        <strong>Want to post something?</strong>
        <p>Click the button and start your <span>Kinky</span> adventure!</p>
      </div>
      <div class="cta-button-container">
        <RouterLink to="/new-post">
          <button class="cta-button"><p>Post now!</p></button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/homepage.css'
import { useCollection } from 'vuefire'
import { collection, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../firebase'
import kcLoadingSpinner from '../components/kcLoadingSpinner.vue'

export default {
  components: {
    kcLoadingSpinner: kcLoadingSpinner,
  },
  data() {
    return {
      posts: [],
      previewablePosts: undefined,
    };
  },
  methods: {
    deletePost: async function(uuid) {
      const docRef = doc(db, 'Posts', uuid);
      await deleteDoc(docRef);
    },
  },
  async created() {
    this.posts = await useCollection(collection(db, 'Posts'))
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    await delay(1000);
    this.previewablePosts = this.posts.slice(0, 5)
    console.log(this.previewablePosts);
  }
};
</script>