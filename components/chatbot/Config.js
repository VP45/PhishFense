import { createChatBotMessage } from "react-chatbot-kit";
import { BsRobot } from 'react-icons/bs';

const config = {
    initialMessages: [createChatBotMessage(`Welcome to Phish Bot 🐱‍💻! I'm here to give youo recommendations on any url or domain you want to make you aware of transquatters. Ask me anything!`)],
    botName: "PhishBot",
    botAvatar: <BsRobot />,

}

export default config