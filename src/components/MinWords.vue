<template>
  <div id="minWordsWrapper" class="flex flex-col pb-2">
    <label for="minWords" class="text-sm">Min word count</label>
    <input
      @input="actions.minWordsChanged($event.target.value)"
      :value="state.minWords"
      placeholder="20"
      min="1"
      max="200"
      class="border-2 border-gray-500 rounded pl-2"
      id="minWords"
      name="minWords"
      type="number"
    />
  </div>
</template>

<script>
export default {
  name: "MinWords"
};
</script>
