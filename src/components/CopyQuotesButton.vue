<template>
  <div id="CopyQuotesButtonWrapper" class="h-8 mt-2">
    <button
      id="CopyQuotesButton"
      v-if="!state.fetching && state.quotes.length > 0"
      v-clipboard="state.quotes"
      v-clipboard:success="actions.quoteClipboardHandler"
      :class="[state.quoteCopyBtnClass]"
      class="btn focus:outline-none"
    >
      {{ state.quoteCopyBtnText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CopyQuotesButton"
};
</script>
