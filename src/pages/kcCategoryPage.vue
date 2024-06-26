<template> 
    <div class="modal-container">
        
    </div>
</template>

<script>
// import '../assets/categoryPage.css'
import '../assets/homepage.css'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default {
    data() {
        return {
        posts: null,
        category: null,
        };
    },
    methods: {
    },
    created() {
        // this.posts = useCollection(collection(db, 'Posts'))
    }
};
</script>