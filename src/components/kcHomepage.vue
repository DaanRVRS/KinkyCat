<template> 
  <div class="homepage">
    <div class="container">
      <div class="card">
        <strong>
          {{ posts[0].postTitle.stringValue }}
        </strong>
        <p>
          {{ posts[0].postText.stringValue }}
        </p>
        <i>
          {{ posts[0].writtenBy.stringValue }}
        </i>
      </div>
      <div class="card">
        <strong>
          {{ posts[1].postTitle.stringValue }}
        </strong>
        <p>
          {{ posts[1].postText.stringValue }}
        </p>
        <i>
          {{ posts[1].writtenBy.stringValue }}
        </i>
      </div>
      <div class="card">
        <strong>
          {{ posts[2].postTitle.stringValue }}
        </strong>
        <p>
          {{ posts[2].postText.stringValue }}
        </p>
        <i>
          {{ posts[2].writtenBy.stringValue }}
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  methods: {
  },
  created() {
    for (let i = 0; i < window.postsTable.size; i++) {
      this.posts.push(window.postsTable.docs[i]._document.data.value.mapValue.fields);
    }
    console.log(this.posts[0].id.integerValue);
  }
};
</script>