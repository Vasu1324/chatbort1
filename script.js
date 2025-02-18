const sendButton = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

// Function to display the user's message
function displayUserMessage(message) {
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = `You: ${message}`;
    chatBox.appendChild(userMessage);
}

// Function to display the chatbot's message
function displayBotMessage(message) {
    const botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.textContent = `Bot: ${message}`;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
}

// Function to get a simple bot response
function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (lowerCaseMessage.includes("how are you")) {
        return "I'm doing well, thank you!";
    } else if (lowerCaseMessage.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else {
        return "Sorry, I didn't quite understand that.";
    }
}

// Handle sending a message
sendButton.addEventListener("click", function() {
    const message = userInput.value;
    if (message.trim() !== "") {
        displayUserMessage(message);
        const botResponse = getBotResponse(message);
        displayBotMessage(botResponse);
        userInput.value = ""; // Clear the input after sending
    }
});

// Handle pressing Enter key to send the message
userInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendButton.click();
    }
});
