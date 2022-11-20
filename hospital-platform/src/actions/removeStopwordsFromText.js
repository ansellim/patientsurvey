
import {removeStopwords} from 'stopword'

export const removeStopwordsFromText = (text) => {
    const oldText = text.split(' ');
    const newText = removeStopwords(oldText);
    return newText.join(' ')
}