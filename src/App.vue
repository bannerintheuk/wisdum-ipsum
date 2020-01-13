<template>
  <div
    class="bgImage w-screen h-screen bg-blue-400 flex flex-col overflow-x-scroll"
  >
    <div class="text-5xl text-white w-screen text-center">Wisdom Ipsum</div>
    <div class="flex flex-1 pb-4 md:w-4/5 lg:w-3/4 container mx-auto">
      <Sidebar />
      <Content />
    </div>
  </div>
</template>

<script>
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
export default {
  name: "app",
  components: { Content, Sidebar }
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
.bgImage {
  margin: 0;
  background-image: url("/images/lightbulbs.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
