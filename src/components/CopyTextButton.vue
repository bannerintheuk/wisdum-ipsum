<template>
  <div id="CopyTextButtonWrapper" class="h-8 pb-2">
    <button
      id="CopyTextButton"
      v-if="!state.fetching && state.text.length > 0"
      v-clipboard="state.text"
      v-clipboard:success="actions.textClipboardHandler"
      :class="[state.textCopyBtnClass]"
      class="btn focus:outline-none"
    >
      {{ state.textCopyBtnText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CopyTextButton"
};
</script>
