<template>
  <div class="h-8 pb-2">
    <button
      :disabled="state.fetching"
      @click="actions.getText()"
      class="btn bg-green-900 focus:outline-none"
    >
      {{ state.getTextButtonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "GetTextButton"
};
</script>
