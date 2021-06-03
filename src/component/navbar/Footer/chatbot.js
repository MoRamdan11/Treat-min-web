import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Chatbot = () => {
    return (
        <div style = {{position: "fixed", bottom: "40px", right: "40px"}}>
            <MessengerCustomerChat
                pageId="105983478314658"
                appId="423865358655348"
            />
        </div>
    );
}
export default Chatbot;