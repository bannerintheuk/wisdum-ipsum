import { getParagraphs as paragraphs, getQuotes as quotes } from "../quotes";

export const getParagraphs = async (numberParagraphs, minWords, wrap, tag) => {
  return await paragraphs(numberParagraphs, minWords, wrap, tag);
};
export const getQuotes = async number => {
  return await quotes(number);
};
