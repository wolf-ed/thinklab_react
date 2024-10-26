import { APP_ENVS_ENUM, getEnv } from '../../envConsts';
import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = getEnv(APP_ENVS_ENUM.VITE_GEMINI_API_KEY) as string;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export const useGemini = () => {
  const sendMessageAndGetResponse = async (
    messages: string
  ): Promise<string> => {
    let response: string = '';

    try {
      const result = await model.generateContent(messages);
      const text = result.response.text();
      response = text;
    } catch (e) {
      console.log('error getting response', e);
    }
    return response;
  };

  return sendMessageAndGetResponse;
};
