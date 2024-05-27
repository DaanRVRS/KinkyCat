<template> 
  <strong>{{ window.postsTable.postTitle.stringValue}}</strong>
  <p>{{ window.postsTable.postText.stringValue}}</p>
  <i>{{ window.postsTable.writtenBy.stringValue}}</i>
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