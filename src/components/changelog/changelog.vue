<template>
  <div class="changelog">
    <vue-markdown :source="mdFile" />
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  components: {
    VueMarkdown,
  },
  data() {
    return {
      mdFile: '',
    };
  },
  created() {
    const client = new XMLHttpRequest();
    client.open('GET', '/CHANGELOG.md');
    const self = this;
    client.onreadystatechange = () => {
      self.mdFile = client.responseText;
    };
    client.send();
  },
};
</script>
