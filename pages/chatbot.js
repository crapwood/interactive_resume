import React, { useState } from "react";
import ReactDOM from "react-dom";

import {
    Container,
    TextField,
    Button,
    Paper,
    Typography,
    Box
} from "@mui/material";

const Chatbot = () => {
    const [messages, setMessages] = useState([ {
        sender: "John James Benitez",
        text: `it's me it's not a bot....trust me`,
    }]);
    const [input, setInput] = useState("");

    async function fetchLangflowResponse(input) {
        const req = await fetch(`/api/langflow`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            cache: "no-cache",
            body: JSON.stringify({
              input: input
            })
        });
        const response = await req.json();
        return response;
    }


     const  handleSend = async () => {
        if (input.trim()) {
            const userMessage = { sender: "You", text: input };
            setMessages([...messages, userMessage]);
           const response = await fetchLangflowResponse(input);

            const botMessage = {
                sender: "John James Benitez",
                text: `${response}`,
            };

            setMessages([...messages, userMessage, botMessage]);
            setInput("");
        }
    };

    return (
        <Container style={{ marginTop: "40px" }}>
            <Paper style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
                <Typography variant="h4" gutterBottom>
                    Ask me anything!!!
                </Typography>
                <Box
                    style={{
                        maxHeight: "300px",
                        overflowY: "auto",
                        marginBottom: "20px",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        backgroundColor: "#ffffff",
                    }}
                >
                    {messages.map((message, index) => (
                        <Box
                            key={index}
                            style={{
                                textAlign: message.sender === "You" ? "right" : "left",
                                margin: "10px 0",
                            }}
                        >
                            <Typography
                                variant="body1"
                                style={{
                                    backgroundColor: message.sender === "You" ? "#d1c4e9" : "#bbdefb",
                                    display: "inline-block",
                                    padding: "10px 15px",
                                    borderRadius: "15px",
                                    maxWidth: "75%",
                                }}
                            >
                                <strong>{message.sender}:</strong> {message.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                <Box display="flex" gap="10px">
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") handleSend();
                        }}
                    />
                    <Button variant="contained" color="primary" onClick={handleSend}>
                        Send
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};
export default Chatbot;
