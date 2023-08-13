'use client';
import { useState } from 'react';
import { HeaderChat } from '../HeaderChat';
import { MessageBox } from '../MesageBox';
import './index.css';
import { useMessageConnection } from '@/app/hook/useMessageConnection';

export function Chatwindow() {
    const [message, setMessage] = useState('');
    const [messageFlow, setMessageFlow] = useState<JSX.Element[]>([]);

    async function handleSendMessage() {
        const keyUserMessage = new Date().getTime();
        setMessageFlow((state) => [...state, <MessageBox key={keyUserMessage} originMessage='user-message' message={message} />]);
        setMessage('');

        const { sendMessage } = useMessageConnection();

        const answerBot = await sendMessage(message);
        const keyBotMessage = new Date().getTime();

        setMessageFlow((state) => [...state, <MessageBox key={keyBotMessage} originMessage='bot-message' message={answerBot} />]);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="chat-container">
                <HeaderChat clientName='Marcio' />

                <div className="message-container">

                    {messageFlow}

                </div>
                <div className="message-input">
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Digite sua mensagem..."
                        onChange={event => setMessage(event.target.value)}
                        value={message}
                        onKeyDown={(e) => {
                            if (e.code === 'Enter') {
                                handleSendMessage();
                            }
                        }}
                    />
                    <button className="send-button" onClick={handleSendMessage}>Enviar</button>
                </div>
            </div>
        </main>
    )
}