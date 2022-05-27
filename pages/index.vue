<template>
  <div class="h-screen w-screen">
    <div class="grid justify-items-center content-end m-auto h-1/2">
      <div class="flex saving">
        <span class="fsBox bg-primary" />
        <span class="fsBox bg-secondary" />
        <span class="fsBox bg-tertiary" />
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

<style>
@keyframes blink {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}

.saving span {
  animation-name: blink;
  animation-duration: 2.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

.saving span:nth-child(2) {
  animation-delay: 0.2s;
}

.saving span:nth-child(3) {
  animation-delay: 0.4s;
}
</style>
