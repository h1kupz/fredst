<template>
  <div class="h-screen w-screen">
    <div class="grid justify-items-center content-end m-auto h-1/2">
      <div class="flex">
        <div class="fsBox bg-primary animate-pulse-1" />
        <div class="fsBox bg-secondary animate-pulse-2" />
        <div class="fsBox bg-tertiary animate-pulse-3" />
      </div>
      <h1 class="ml-[285px]">holding pattern...</h1>
    </div>

    <div class="grid justify-items-center content-center h-1/2">
      <div>
        <h2>
          email us if you want to<br />get in touch<br />
          <a href="mailto:info@fredst.com">info@fredst.com</a>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "Fred St.",
          name: "Fred St.",
          content:
            "Fred St offers a fresh and exciting landscape architectural design alternative for  businesses operating in the Urban Development and Infrastructure sectors across Australia and who might be seeking a more personalized, creative and cost effective landscape architectural design service.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "~/assets/favicon.ico" },
      ],
    };
  },
};
</script>
