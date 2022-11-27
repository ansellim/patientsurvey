import { SentimentAnalyzer, PorterStemmer } from "natural";

var Analyzer = SentimentAnalyzer;
var stemmer = PorterStemmer;
var analyzer = new Analyzer("English",stemmer,"afinn")

export const getSentiment = (text) => {
    const arrayOfStrings = text.split(" ");
    return analyzer.getSentiment(arrayOfStrings);
}