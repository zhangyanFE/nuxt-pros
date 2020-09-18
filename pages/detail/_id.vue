<template>
  <nuxt-link to="/">回到首页</nuxt-link>
</template>
<script>
import axios from "~/plugins/lib/axios";

export default {
  data() {
    return {
      name: "详情页"
    };
  },
  async asyncData({ params }) {}
};
</script>
