import React from 'react';

const About = () => {
  return (
    <div className="about-container"> {/* Add a class for styling */}
      <h1>About Us</h1>
      <br></br>
      <p>This ChatBot leverages the power of cutting-edge AI, including GPT-4 for natural language understanding and a specialized data retrieval model for efficient access to restaurant information. We use the Google Maps API to find restaurants near you, and our recommendation engine takes into account your specific dietary restrictions, budget, and cuisine preferences to generate personalized meal suggestions.  We are committed to using the latest technology to provide you with the most accurate and relevant food recommendations</p>
    </div>
  );
};

export default About;
