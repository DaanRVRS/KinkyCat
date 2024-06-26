<template> 
    <div v-if="post !== null">
        <input type="text" placeholder="titel" id="postTitle">
        <textarea placeholder="text" id="postText"></textarea>
        <select id="exampleSelect" name="exampleSelect" v-model="category">
            <option value="any">Any</option>
            <option value="bbc">BBC</option>
            <option value="wet_pussy">Wet pussy</option>
            <option value="bubblegum_pink">Bubblegum pink</option>
        </select>
        <button @click="updatePost()">UPDATE!</button>
    </div>
    <div v-else>
        <kcLoadingSpinner />
    </div>
</template>

<script>
import '../assets/editpost.css'
import '../assets/homepage.css'
import { useCollection } from 'vuefire'
import { collection, getFirestore, query, where, getDocs, updateDoc} from 'firebase/firestore'
import { db } from '../firebase'
import kcLoadingSpinner from '../components/kcLoadingSpinner.vue'

export default {
    components: {
        kcLoadingSpinner: kcLoadingSpinner,
    },
    data() {
        return {
        post: null,
        uuid: null,
        category: 'any',
        };
    },
    methods: {
        updatePost: async function () {
            const db = getFirestore();

            // Functie om een document te updaten
            const title = document.querySelector('#postTitle').value;
            const text = document.querySelector('#postText').value;
            // Verwijst naar de collectie "Posts"
            const postsRef = collection(db, "Posts");
            
            // Maakt een query die zoekt naar documenten met de specifieke uuid
            const q = query(postsRef, where("uuid", "==", this.uuid));
            
            // Voert de query uit en krijgt de querySnapshot
            const querySnapshot = await getDocs(q);
            
            // Loopt door alle gevonden documenten heen
            querySnapshot.forEach(async (doc) => {
                // Referentie naar het document dat je wilt updaten
                const postRef = doc.ref;
                
                // Update het document
                await updateDoc(postRef, {
                    title: title,
                    text: text,
                    category: this.category
                });
            });

            function delay(time) {
                return new Promise(resolve => setTimeout(resolve, time));
            }
            await delay(400);

            window.location.href = '/';

        },
        getData: async function () {
            let posts = await useCollection(collection(db, 'Posts'));

            function delay(time) {
                return new Promise(resolve => setTimeout(resolve, time));
            }
            await delay(1000);

            this.uuid = window.location.href.slice(32);
            posts = posts.value;
            for (let p in posts) {
                if (posts[p].uuid === this.uuid) {
                    this.post = posts[p];
                    break;
                }
            }

            // console.log(this.post);
        },
    },
    async created() {
        await this.getData();
        document.querySelector('#postTitle').value = this.post.title;
        document.querySelector('#postText').value = this.post.text;
        this.category = this.post.category;
    }
};
</script>