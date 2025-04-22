import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the FoodGPT!</h1>
      <p>AI-powered chatbot designed to provide personalized food recommendations based on user preferences such as location, cuisine, budget, and nutritional requirements</p>
      {/* Example: A button to navigate to the chatbot */}
      <a href="/chat"><button>Start Chatting</button></a> 
    </div>
  );
};

export default Home;
