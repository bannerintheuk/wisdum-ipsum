<template>
  <div id="GetQuotesButtonWrapper" class="h-8 mt-2">
    <button
      id="GetQuotesButton"
      :disabled="state.fetching"
      @click="actions.getQuotes()"
      class="btn bg-green-900 focus:outline-none"
    >
      {{ state.getQuotesButtonText }}
    </button>
  </div>
</template>

<script>
export default { name: "GetQuotesButton" };
</script>

<style></style>
