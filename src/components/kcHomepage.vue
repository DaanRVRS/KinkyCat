<template> 
  <div class="container">
    <strong>{{ window.postsTable.postTitle.stringValue}}</strong>
    <p>{{ window.postsTable.postText.stringValue}}</p>
    <i>{{ window.postsTable.writtenBy.stringValue}}</i>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  created() {

  }
};
</script>