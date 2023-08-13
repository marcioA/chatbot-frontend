import './index.css';
import { useState } from 'react';

interface HeaderChatProps {
    clientName: string;
}

export function HeaderChat({ clientName = "Insira seu nome" }: HeaderChatProps) {
    const [newName, setNewName] = useState('');
    function handleEditName() {
        const typedName = prompt('Digite um nome')
        setNewName(typedName ? typedName : '');
    }

    return (
        <div className="chat-header">
            {newName || clientName}
            <button onClick={handleEditName}>
                <i>✎</i>
            </button>
        </div>
    )
}