<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts">
export default {
  head() {
    return {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: `favicon.png`,
        },
      ],
    };
  },
};
</script>
