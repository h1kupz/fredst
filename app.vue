<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script>
export default {
  head() {
    return {
      pwa: {
        icon: {
          filename: "favicon.png?v1",
        },
      },
      title: "Fres St.",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "Fred St.",
          name: "Fred St.",
          content:
            "Fred St offers a fresh and exciting landscape architectural design alternative for businesses operating in the Urban Development and Infrastructure sectors across Australia and who might be seeking a more personalized, creative and cost effective landscape architectural design service.",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    };
  },
};
</script>
