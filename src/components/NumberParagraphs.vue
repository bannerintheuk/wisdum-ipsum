<template>
  <div class="flex flex-col pb-2">
    <label for="numberParagraphs" class="text-sm">Number of Paragraphs</label>
    <input
      @input="actions.numberParagraphsChanged($event.target.value)"
      :value="state.numberParagraphs"
      placeholder="1"
      min="1"
      max="10"
      class="border-2 pl-2 border-gray-500 rounded"
      id="numberParagraphs"
      name="numberParagraphs"
      type="number"
    /></div
></template>

<script>
export default {
  name: "NumberParagraps"
};
</script>

<style></style>
