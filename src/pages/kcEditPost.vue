<template> 
    <div v-if="post !== null">
        <input type="text" placeholder="titel" id="postTitle">
        <textarea placeholder="text" id="postText"></textarea>
        <button @click="updatePost()">UPDATE!</button>
    </div>
    <div v-else class="loading-text">
        loading...
    </div>
</template>

<script>
import '../assets/editpost.css'
import '../assets/homepage.css'
import { useCollection } from 'vuefire'
import { collection, getFirestore, query, where, getDocs, updateDoc} from 'firebase/firestore'
import { db } from '../firebase'

export default {
    data() {
        return {
        post: null,
        uuid: null,
        };
    },
    methods: {
        updatePost: async function () {
            // collection(db, "Posts").where("uuid", "==", this.uuid).get().then((querySnapshot) => {
            //     querySnapshot.forEach((doc) => {
            //         let postRef = doc.ref;
            //         postRef.update({
            //             title: title,
            //             text: text
            //         });
            //     });
            // });

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
                    text: text
                });
            });

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

            console.log(this.post);
        },
    },
    async created() {
        await this.getData();
        document.querySelector('#postTitle').value = this.post.title;
        document.querySelector('#postText').value = this.post.text;
    }
};
</script>