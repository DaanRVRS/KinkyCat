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
import { collection, addDoc, where, query } from 'firebase/firestore'
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
            let title = document.querySelector('#postTitle').value;
            let text = document.querySelector('#postText').value;

            collection(db, "Posts").where("uuid", "==", this.uuid).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let postRef = doc.ref;
                    postRef.update({
                        title: title,
                        text: text
                    });
                });
            });

        },
        getData: async function () {
            let posts = await useCollection(collection(db, 'Posts'));

            function delay(time) {
                return new Promise(resolve => setTimeout(resolve, time));
            }
            await delay(750);

            this.uuid = window.location.href.slice(32);
            posts = posts.value;
            for (let p in posts) {
                if (posts[p].uuid === this.uuid) {
                    this.post = posts[p];
                    break;
                }
            }
        },
    },
    async created() {
        await this.getData();
        document.querySelector('#postTitle').value = this.post.title;
        document.querySelector('#postText').value = this.post.text;
    }
};
</script>