<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts">
export default {
  head() {
    return {
      title: "Fred St.",
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
