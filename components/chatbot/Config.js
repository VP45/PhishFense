import { createChatBotMessage } from "react-chatbot-kit";
import { BsRobot } from 'react-icons/bs';

const config = {
    initialMessages: [createChatBotMessage(`Welcome to Phish Bot 🐱‍💻! I'm here to help you learn about phishing attacks and how to prevent them. Ask me anything!`)],
    botName: "PhishBot",
    botAvatar: <BsRobot />,

}

export default config