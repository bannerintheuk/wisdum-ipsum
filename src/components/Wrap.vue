<template>
  <div class="flex flex-col pb-2">
    <label for="wrap" class="text-sm">Wrap with?</label>
    <div class="flex items-center py-1">
      <input
        class="ml-4 mr-2"
        id="paragraph"
        name="paragraph"
        type="checkbox"
        @change="actions.checked(null)"
        :checked="state.tag === null"
      />
      <label for="paragraph" class="text-sm flex">nothing</label>
    </div>
    <div class="flex items-center py-1">
      <input
        class="ml-4 mr-2"
        id="wrapInPTag"
        name="wrapInPTag"
        type="checkbox"
        @change="actions.checked('p')"
        :checked="state.tag === 'p'"
      />
      <label for="wrapInPTag" class="text-sm flex">paragraph</label>
    </div>
    <div class="flex items-center py-1">
      <input
        class="ml-4 mr-2"
        id="wrapInDivTag"
        name="wrapInDivTag"
        @change="actions.checked('div')"
        :checked="state.tag === 'div'"
        type="checkbox"
      />
      <label for="wrapInDivTag" class="text-sm flex">div</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wrap"
};
</script>

<style></style>
