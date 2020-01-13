import { map, mutate, pipe, wait } from "overmind";
function getImageUrl() {
  const number = Math.floor(Math.random() * 5);
  return `/images/thinking-${number}.gif`;
}

export const checked = async ({ state }, value) => {
  state.text = "";
  state.tag = value;
  value === null ? (state.wrap = false) : (state.wrap = true);
};
export const numberQuotesChanged = async ({ state }, value) =>
  (state.numberQuotes = value);
export const minWordsChanged = async ({ state }, value) =>
  (state.minWords = value);
export const numberParagraphsChanged = async ({ state }, value) =>
  (state.numberParagraphs = value);

export const getText = pipe(
  mutate(async function getText({ state }) {
    state.quotes = "";
    state.getTextButtonText = "Thinking.....";
    state.fetching = true;
    state.imageUrl = getImageUrl();
  }),
  map(async function getText({ state, effects }) {
    const { minWords, numberParagraphs, wrap, tag } = state;
    const text = await effects.getParagraphs(
      numberParagraphs,
      minWords,
      wrap,
      tag
    );
    return text;
  }),
  mutate(async function setText({ state }, text) {
    state.text = text;
  }),
  wait(3000),
  mutate(async function reset({ state }) {
    state.fetching = false;
    state.getTextButtonText = "Get Me Some Wisdom";
  })
);

export const getQuotes = pipe(
  mutate(async function getText({ state }) {
    state.imageUrl = getImageUrl();
    state.fetching = true;
    state.getQuotesButtonText = "Thinking.....";
  }),
  mutate(async function getQuotes({ state, effects }) {
    state.text = "";
    state.quotes = effects.quotes(state.numberQuotes);
  }),
  wait(3000),
  mutate(async function reset({ state }) {
    state.fetching = false;
    state.getQuotesButtonText = "Get Me Some Quotes";
  })
);

export const textClipboardHandler = pipe(
  mutate(async function changeTextCopyBtnTextAndClass({ state }) {
    state.textCopyBtnText = "Copied to Clipboard!";
    state.textCopyBtnClass = "bg-orange-600";
    return;
  }),
  wait(1500),
  mutate(async function changeTextCopyBtnTextAndClass({ state }) {
    state.textCopyBtnText = "Copy to Clipboard";
    state.textCopyBtnClass = "bg-blue-600";
    return;
  })
);

export const quoteClipboardHandler = ({ state }) => {
  state.quoteCopyBtnText = "Copied to Clipboard!";
  state.quoteCopyBtnClass = "bg-orange-600";

  setTimeout(() => {
    state.quoteCopyBtnText = "Copy to Clipboard";
    state.quoteCopyBtnClass = "bg-blue-600";
  }, 1500);
};
