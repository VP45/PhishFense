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
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message,
            }),
        });
        console.log(response);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        // const data = response.body;
        // if (!data) {
        //     return;
        // }

        // console.log(data);

        const text = await response.text(); // Read the response as text
        const data = JSON.parse(text);

        if (data.message && Array.isArray(data.message)) {
            data.message.forEach((messageData) => {
                const message = this.createChatBotMessage(messageData);
                this.setChatbotMessage(message);
            });
        } else {
            console.error("Invalid data structure in API response");
        }

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
