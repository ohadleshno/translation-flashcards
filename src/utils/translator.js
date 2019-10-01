import axios from 'axios';

export async function translateText(text) {
  const {data} = await axios.get(`https://www.googleapis.com/language/translate/v2?key=${process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY}&source=en&target=he&q=${text}`);
  return data.data.translations;
}