<template>
  <div class="sidebar h-full bgOpaque p-4 rounded">
    <div class="my-4"></div>
    <div id="paragraphsSectionHeader" class="text-xl">Paragraphs</div>
    <MinWords />
    <NumberParagraphs />
    <Wrap />
    <div class="my-2"></div>
    <GetTextButton />
    <CopyTextButton />
    <div class="h-4 border-b-2 border-gray-500"></div>
    <div id="quotesSectionHeader" class="text-xl">Quotes</div>
    <NumberQuotes />
    <GetQuotesButton />
    <CopyQuotesButton />
  </div>
</template>

<script>
import MinWords from "./MinWords";
import NumberParagraphs from "./NumberParagraphs";
import Wrap from "./Wrap";
import GetTextButton from "./GetTextButton";
import CopyTextButton from "./CopyTextButton";
import NumberQuotes from "./NumberQuotes";
import GetQuotesButton from "./GetQuotesButton";
import CopyQuotesButton from "./CopyQuotesButton";
export default {
  name: "Sidebar",
  components: {
    MinWords,
    NumberParagraphs,
    Wrap,
    GetTextButton,
    CopyTextButton,
    NumberQuotes,
    GetQuotesButton,
    CopyQuotesButton
  }
};
</script>

<style lang="postcss">
.btn {
  @apply h-8  rounded w-full p-1 text-white cursor-pointer;
}
.sidebar {
  min-width: 230px;
}
.bgOpaque {
  background-color: rgba(255, 255, 255, 0.7);
}
</style>
