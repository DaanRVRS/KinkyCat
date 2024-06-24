<template> 
marian a cross  
</template>
  
<script>
  import '../assets/createpost.css'
  import '../assets/homepage.css'
  import { useCollection } from 'vuefire'
  import { collection, addDoc } from 'firebase/firestore'
  import { db } from '../firebase'
  
  export default {
    data() {
      return {
        posts: null,
      };
    },
    methods: {
        updatePost: async function() {
            //
        }
       
    },
    created() {
      this.posts = useCollection(collection(db, 'Posts'))
    }
  };
</script>