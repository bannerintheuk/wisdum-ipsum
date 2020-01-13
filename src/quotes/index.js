/* eslint-disable no-useless-escape */

import Markov from "markov-strings";
import quotesJSON from "./quotes";

const data = JSON.parse(quotesJSON).map(quote => quote.text);
const quotes = JSON.parse(quotesJSON);
const markov = new Markov(data, { stateSize: 2 });

markov.buildCorpusAsync();
//number of tries
const L1 = 250;
const L2 = 100;
const L3 = 50;
const punctuationRegex = /[\.,!\?;]$/;
const generate = async () => {
  const options = {
    maxTries: L1 + L2 + L3 + 100,
    filter: result => {
      if (result.tries < L1) {
        return (
          result.string.split(" ").length >= 5 &&
          (result.string.match(punctuationRegex) ? true : false) &&
          result.refs.length > 1 &&
          result.score > 3
        );
      } else if (result.tries < L1 + L2) {
        return (
          result.string.split(" ").length >= 5 &&
          (result.string.match(punctuationRegex) ? true : false) &&
          result.refs.length > 1 &&
          result.score > 2
        );
      } else if (result.tries < L1 + L2 + L3) {
        return (
          result.string.split(" ").length >= 5 &&
          (result.string.match(punctuationRegex) ? true : false) &&
          result.refs.length > 1
        );
      } else {
        return true;
      }
    }
  };
  const { string } = await markov.generateAsync(options);
  return string;
};

const upperCaseFirstChar = text => text.charAt(0).toUpperCase() + text.slice(1);

const correctEnding = text => {
  if (text.match(/[\.\?\!]$/)) {
    return text;
  } else {
    return text.slice(0, text.length - 1) + ".";
  }
};

const getSingleSentence = async () => {
  return await correctEnding(upperCaseFirstChar(await generate()));
};

const getParagraphByWordCount = async minWordCount => {
  let wordCount = 0;
  let fullSentence = "";

  while (wordCount < minWordCount) {
    const sentence = await getSingleSentence();
    fullSentence += " " + sentence.replace("�", "");
    wordCount += sentence.split(" ").length;
  }
  return fullSentence.trim().replace(".", ". ");
};

const randomNumber = () => {
  const available = quotes.length;
  return Math.floor(Math.random() * available);
};

export const getParagraphs = async (number, length, wrap, tag) => {
  const paragraphs = [];
  for (let index = 0; index < number; index++) {
    const paragraph = await getParagraphByWordCount(length);
    paragraphs.push(paragraph);
  }
  if (wrap) {
    return paragraphs.map(p => `<${tag}>` + p + `</${tag}>`).join("");
  } else {
    return paragraphs.join("\n\n");
  }
};

export const getQuotes = (num = 3) => {
  const indexes = new Set();

  while (indexes.size < num) {
    const index = randomNumber();
    indexes.add(index);
  }

  let textString = "";

  indexes.forEach(index => {
    const { text } = quotes[index];
    let { author } = quotes[index];

    if (author.length === 0) {
      author = "Unknown";
    }
    const newString = `${text}\n${author}\n\n`;
    textString = textString + newString;
  });
  return textString.replace("�", "");
};
