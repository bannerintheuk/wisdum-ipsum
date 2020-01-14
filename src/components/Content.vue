<template>
  <div
    class="content w-full ml-4 p-4 h-full flex flex-col justify-center items-center bgOpaque rounded"
  >
    <img
      id="fetchingGif"
      alt="Thinking related Gif"
      class="w-full"
      :src="state.imageUrl"
      v-if="state.fetching"
    />
    <img
      id="contentGif"
      alt="Game of Thrones wisdom Gif"
      class="w-full"
      src="/images/wisdom.webp"
      v-if="
        !state.fetching && state.text.length === 0 && state.quotes.length === 0
      "
    />
    <textarea
      v-if="!state.fetching && state.quotes.length > 0"
      class="bgTransparent rounded text-sm flex-1 w-full h-full p-4 overflow-y-scroll resize-none"
      :value="state.quotes"
    />
    <textarea
      id="noWrapText"
      v-if="!state.fetching && !state.wrap && state.text.length > 0"
      class="bgTransparent rounded text-sm flex-1 w-full h-full p-4 overflow-y-scroll resize-none"
      :value="state.text"
    />
    <div
      id="wrappedText"
      v-html="state.text"
      v-if="!state.fetching && state.wrap && state.text.length > 0"
      class="text-wrapper rounded bgTransparent text-sm flex-1 w-full h-full p-4 overflow-y-scroll resize-none"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style>
.content {
  min-width: 300px;
}
.bgOpaque {
  background-color: rgba(255, 255, 255, 0.7);
}
.text-wrapper > p,
div {
  margin: 0.5rem 0;
}
</style>
