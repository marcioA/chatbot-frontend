import { getBotResponse } from '../api';

export function useMessageConnection() {
    const sendMessage = async (messageData: string) => {
        const responseBot = await getBotResponse(messageData);

        return responseBot.message;
    }

    return { sendMessage };

}