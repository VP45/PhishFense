class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }

    ResponseHandler = (message) => {
        fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: message,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setChatbotMessage(this.createChatBotMessage(data.message));
            });
    };
    setChatbotMessage = (message) => {
        this.setState((state) => ({
            ...state,
            messages: [...state.messages, message],
        }));
    };
}

export default ActionProvider;
