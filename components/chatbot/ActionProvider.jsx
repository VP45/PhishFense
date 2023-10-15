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

    ResponseHandler = async (message) => {
        // const prompt = `Generate a list of 5 website links that replace the domain of this example link with similar domains. Example input: ${message}`;
        // const response = await fetch(
        //     "https://deploy-hoga-pls.gigamoksh.repl.co/generate?prompt=" +
        //         prompt,
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     }
        // );
        // console.log(response);
        // const data = await response.json();
        // console.log(data);
        // const messageData = this.createChatBotMessage(data);
        // console.log(messageData.message.response);
        // this.setChatbotMessage(messageData.message.response.toString());

        const messageData = this.createChatBotMessage(
            "\n\nhttps://gitlab.com/login\nhttps://bitbucket.org/account/signin/?next=/\nhttps://app.asana.com/-/login\nhttps://trello.com/login\nhttps://www.wrike.com/login/"
        );
        this.setChatbotMessage(messageData);

        // const reader = data.getReader();
        // const decoder = new TextDecoder();
        // let done = false;

        // while (!done) {
        //     const { value, done: doneReading } = await reader.read();
        //     done = doneReading;
        //     const chunkValue = decoder.decode(value);
        //     // setResponse((prev) => prev + chunkValue);
        //     const messageData = this.createChatBotMessage(data);
        //     console.log(messageData);
        //     this.setChatbotMessage(messageData);
        // }

        // const messageData = this.createChatBotMessage(data);
        // console.log(messageData);
        // this.setChatbotMessage(messageData);

        // data.forEach((messageData) => {
        //     const message = this.createChatBotMessage(messageData);
        //     this.setChatbotMessage(message);
        // });

        // .then((response) => {
        //     console.log(response.body);
        //     return response.body;
        // })
        // .then((data) => {
        //     console.log(data);
        //     return data;
        // })
        // .then((data) => {
        //     console.log(data);
        //     this.setChatbotMessage(
        //         this.createChatBotMessage(JSON.stringify(data.body))
        //     );
        //     // data = data.json();
        //     // console.log(data.json());

        //     // data.forEach((messageData) => {
        //     //     const message = this.createChatBotMessage(messageData);
        //     //     this.setChatbotMessage(message);
        //     // });
        // });
    };
    setChatbotMessage = (message) => {
        this.setState((state) => ({
            ...state,
            messages: [...state.messages, message],
        }));
    };
}

export default ActionProvider;
