<template>
  <div id="numberQuotesWrapper" class="flex flex-col pb-2">
    <label for="numberOfQuotes" class="text-sm">Number of quotes</label>
    <input
      placeholder="3"
      class="border-2 pl-2 border-gray-500 rounded"
      id="numberOfQuotes"
      name="numberOfQuotes"
      type="number"
      :value="state.numberQuotes"
      @input="actions.numberQuotesChanged($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "GetQuotesButton"
};
</script>
