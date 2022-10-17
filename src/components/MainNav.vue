<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-mine-gray-1"
      >
        <a
          href="/"
          class="flex items-center justify-center text-2xl h-full text-mine-green-1"
        >
          {{ company }}
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Vue",
    };
  },
};
</script>

<style lang="scss" scoped></style>
