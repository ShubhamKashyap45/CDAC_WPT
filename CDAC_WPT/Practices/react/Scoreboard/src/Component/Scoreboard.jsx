import React, { useState } from 'react';

const Scoreboard = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const incrementTeamA = () => {
    setTeamAScore(teamAScore + 1);
  };

  const incrementTeamB = () => {
    setTeamBScore(teamBScore + 1);
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Scoreboard</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-2xl font-semibold">Team A: {teamAScore}</h2>
        <button
          onClick={incrementTeamA}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Increment Team A
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-2xl font-semibold">Team B: {teamBScore}</h2>
        <button
          onClick={incrementTeamB}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Increment Team B
        </button>
      </div>
      <button
        onClick={resetScores}
        className="mt-8 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Reset Scores
      </button>
    </div>
  );
};

export default Scoreboard;