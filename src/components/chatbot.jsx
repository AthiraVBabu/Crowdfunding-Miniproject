import React, { useState } from 'react';
import dummyPic from "../assets/pg1.jpg";

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: "Hello! Say 'hi' fellows" }
  ]);

  const sendMessage = () => {
    if (userInput.trim() !== "") {
      const newUserMessage = { type: 'user', message: userInput };
      setChatMessages(prevMessages => [...prevMessages, newUserMessage]);

      const botMessage = { type: 'bot', message: generateBotResponse(userInput) };
      setChatMessages(prevMessages => [...prevMessages, botMessage]);

      setUserInput('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const generateBotResponse = (userMessage) => {
    let response = "";

    if (/hello|hi|hey|Hello|Hai|HAI|HELLO|HI/i.test(userMessage)) {
      const options = [
        "1. What is GiveNow",
        "2. Start a Campaign",
        "3. Back a Project",
        "4. Payment and Pledge Assistance",
        "5. Refund policy"
      ];

      response = (
        <div>
          Welcome to our crowdfunding platform! Please select an option that aligns with your needs:<br /><br />
          {options.map(option => <div key={option}>{option}</div>)}
        </div>
      );
    } else if (userMessage.includes("1")) {
      response = (
        <div>
          <strong>GiveNow</strong> is a digital platform that connects individuals or organizations looking to raise funds for a specific project or cause with a large number of potential contributors. It provides a space where project creators can present their ideas, set funding goals, and solicit financial support from the public.<br />

Here are some common features and functionalities of a crowdfunding platform:<br />

<strong>Project Creation:</strong> Users can create project pages that provide details about your venture, including the purpose, goals, and funding target. They can upload images and descriptions to showcase your project effectively.<br /><br/>

<strong>Fundraising:</strong>  Enable project creators to raise funds by accepting contributions from individuals or groups of people. Contributors can make financial pledges to support projects they find interesting or worthwhile.<br /><br/>

<strong>Payment Processing:</strong> It facilitate secure payment processing to ensure that transactions between project creators and backers are smooth and protected. <br /><br/>

<strong>Refund and Dispute Handling:</strong>  In some cases, if a project fails to meet its funding goal or encounters unexpected challenges, crowdfunding platform may facilitate refund processes to ensure backers receive their contributions back. They also handle dispute resolution between project creators and backers when necessary by displaying commplete transaction statement which is transparent.<br /><br/>

<strong>Crowdfunding Categories:</strong> This platform categorize projects into different areas such as technology, arts, charity, education, or social causes. This categorization helps users discover projects aligned with their interests and preferences.<br /><br/>

<strong>Chatbot:</strong> This platform provides a chatbot facility that helps to make users interaction smooth. 
        </div>
        
      );
    } else if (userMessage.includes("2")) {
      response = (
        <div>
            Create avalanche account ➡️ connect to metamask ➡️ click start a project 
        </div>
      );
    } else if (userMessage.includes("3")) {
      response = (
        <div>
            Connect to metamask ➡️ Discovery ➡️ select the project ➡️ Donate fund
        </div>
      );
    } else if (userMessage.includes("4")) {
      response =(
        <div>
            <strong>Payment Options:</strong><br />

📌 Crowdfunding projects often accept payments in cryptocurrencies like AVAX, which are         native to the blockchain platform being used (in this case, Avalanche).<br />
📌 You may need to have AVAX tokens in your wallet to make a pledge. If you don't have any, you can acquire them through cryptocurrency exchanges or other means.<br />

<strong>Pledge Confirmation:</strong><br />

📌 After making a payment, the blockchain will record your pledge as a transaction on the network.<br/>
📌 You should receive a confirmation of your pledge, which may include a transaction ID or receipt.
        </div>
      );
    } else if (userMessage.includes("5")) {
      response = (
        <div>
           The refund policy in a crowdfunding blockchain project determines the conditions under which contributors can request a refund for their pledged funds. Here are a few common refund policy options:<br />

📌<strong>Non-refundable:</strong><br />

In this policy, the contributions made to the project are considered final and non-refundable.<br />
Once you make a pledge and the payment is processed, you cannot request a refund, regardless of the project's outcome.<br />

📌<strong>Refundable:</strong><br />

A refundable policy allows contributors to request a full refund of their pledged funds if the project does not meet its funding goal.<br />
If the project fails to reach the funding goal within the specified duration or if it is unable to deliver the expected results, contributors can initiate a refund request.
        </div>
      );
    } 
    else {
      response = "Hope you are familiar with our platform 😊.";
    }

    return response;
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatbot}>
        <div style={styles.chatbotHeader}>
          <h2>Chatbot</h2>
        </div>
        <div style={styles.chatbotBody}>
          {chatMessages.map((message, index) => (
            <div className="chat-container" key={index}>
              {message.type === 'bot' ? (
                <div style={styles.botMessage} className="chat-message bot-message">
                  {message.message}
                </div>
              ) : (
                <div style={styles.userMessage} className="chat-message user-message">
                  {message.message}
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={styles.chatbotFooter}>
          <input
            type="text"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            placeholder="Type your message"
            onKeyPress={handleKeyPress}
            style={styles.textInput}
          />
          <button style={styles.sendButton} onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: {dummyPic},
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  chatbot: {
    width: '100%',
    maxWidth: '600px',
    border: '1px solid #d6d2d2',
    borderRadius: '20px',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
  },
  chatbotHeader: {
    backgroundColor: '#eeffe6',
    padding: '10px',
  },
  chatbotBody: {
    height: '500px',
    padding: '20px',
    overflowY: 'scroll',
  },
  chatMessage: {
    padding: '10px',
    borderRadius: '4px',
  },
  botMessage: {
    backgroundColor: '#dcffcc',
    textAlign: 'left',
    fontWeight: '',
  },
  userMessage: {
    backgroundColor: '#f2ffe6',
    textAlign: 'right',
  },
  chatbotFooter: {
    padding: '5px',
    backgroundColor: '#f2f2f2',
  },
  textInput: {
    width: '80%',
    padding: '5px',
  },
  sendButton: {
    padding: '6px 12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Chatbot;
