export const getBotResponse = async (clientText) => {
    try {
        const response = await fetch('http://localhost:3333/response-bot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "userText": clientText }),
        })

        const data = await response.json()

        return data;
    } catch (e) {
        return e;
    }
}