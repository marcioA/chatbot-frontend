
import './index.css';

interface MessageBoxProps {
    originMessage: string;
    message: string;
}

export function MessageBox({ originMessage, message }: MessageBoxProps) {
    return (
        <div className={originMessage} >
            {message}
        </div>
    )
}