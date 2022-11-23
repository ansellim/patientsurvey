import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

import { AggressiveTokenizer } from "natural";

import { getWordCounts } from "../../actions/getWordCounts";

import { removeStopwordsFromText } from "../../actions/removeStopwordsFromText";



const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

function WordcloudCard(props) {
  return (
    <div>
      <Card>
        <Typography>Wordcloud</Typography>
        <Typography>{props.words}</Typography>
      </Card>
    </div>
  );
}

export const WordcloudChart = () => {

  const data = [
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000 },
    { text: 'duck', value: 10 },
  ];

  const feedbackWords = useSelector((state) => {
    const feedbacks = state.feedbackItems;

    var concatText = "";

    var tokenizer = new AggressiveTokenizer();

    for (let i = 0; i < feedbacks.length; i++) {
      const feedbackObject = feedbacks[i];

      try {
        const feedbackText = feedbackObject.survey.specificsurvey.specificIncident;
        concatText = concatText + " " + feedbackText;
      } catch {
        continue;
      }
    }

    const textWithoutStopwords = removeStopwordsFromText(concatText);

    const tokens = tokenizer.tokenize(textWithoutStopwords);

    // const uniqueWords = [... new Set(words)];

    var addedWords = new Set();
    var wordCountMapping = new Map();

    for(let i = 0; i < tokens.length; i++){
      const token = tokens[i];
      if(!addedWords.has(token)){
        wordCountMapping.set(token,1);
        addedWords.add(token);
      } else {
        const count = wordCountMapping.get(token);
        wordCountMapping.set(token,count + 1);
      }
    }

    const wordCountArray = Array.from(wordCountMapping, ([key,value]) => {
      return [key,value]
    })

    const sortedWordCountArray = wordCountArray.sort((a,b) => {
      if (a[1] < b[1]){
        return 1;
      } else if (a[1] > b[1]) {
        return -1;
      } else {
        return 0;
      }
    })

    const topWords = sortedWordCountArray.slice(0,50)

    const topWordsAsObjects = topWords.map(([a,b]) => {return {text: a, value: parseInt(b)}} )

    //console.log(topWordsAsObjects)

    return { data: topWordsAsObjects };
  });

  return (
    <> <Card>
      {/* <WordcloudCard words={feedbackWords.data}></WordcloudCard> */}
      <WordCloud data={feedbackWords.data}
        // width={1000}
        // height={1000}
        font="Verdana"
        fontStyle="regular"
        fontWeight="bold"
        fontSize={(word) => Math.log(word.value )* 10}
        rotate={(word) => word.value % 360}
        padding={20}
        random={Math.random}
        spiral="rectangular"
        fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
      >
      </WordCloud>

      </Card>
    </>

  );
};
