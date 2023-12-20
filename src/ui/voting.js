// Import necessary dependencies
import React, { useState } from 'react';

// Define a functional component for the voting homepage
const VotingHomePage = () => {
  // State to store the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Function to handle submitting the vote
  const handleSubmitVote = () => {
    // TODO: Implement logic to submit the vote, e.g., send a request to a server

    // Display a message to the user
    alert(`Vote submitted for option: ${selectedOption}`);
  };

  return (
    <div>
      <h1>Voting Homepage</h1>

      <p>Select an option and submit your vote:</p>

      {/* Options for voting */}
      <div>
        <label>
          <input
            type="radio"
            name="votingOption"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={() => handleOptionSelect('option1')}
          />
          Option 1
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="votingOption"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={() => handleOptionSelect('option2')}
          />
          Option 2
        </label>
      </div>

      {/* Submit button */}
      <button onClick={handleSubmitVote} disabled={!selectedOption}>
        Submit Vote
      </button>
    </div>
  );
};

export default VotingHomePage;
