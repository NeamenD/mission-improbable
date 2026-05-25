import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import catLoveGif from "../src/assets/Cats Aww GIF by Yêu Lu.gif";
import happycatLoveGif from "../src/assets/giphy (1).gif";
import loadingcatLoveGif from "../src/assets/Lemme Think GIF.gif";
import giphycatLoveGif from "../src/assets/Cat Waiting GIF.gif";

export default function App() {
  const [screen, setScreen] = useState("question"); // question, response, datetime, food, final
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedFood, setSelectedFood] = useState("");
  const noButtonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (screen !== "question" || !noButtonRef.current) return;

    const button = noButtonRef.current;
    const rect = button.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(e.clientX - buttonCenterX, 2) +
        Math.pow(e.clientY - buttonCenterY, 2),
    );

    // If mouse is within 150px, move the button away
    if (distance < 150) {
      const angle = Math.atan2(
        buttonCenterY - e.clientY,
        buttonCenterX - e.clientX,
      );
      const moveDistance = 700;

      const newX = Math.cos(angle) * moveDistance;
      const newY = Math.sin(angle) * moveDistance;

      // Keep button within viewport bounds
      const maxX = window.innerWidth - rect.width - 150;
      const maxY = window.innerHeight - rect.height - 150;

      setNoButtonPos({
        x: Math.max(-600, Math.min(maxX - buttonCenterX, newX)),
        y: Math.max(-600, Math.min(maxY - buttonCenterY, newY)),
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [screen]);

  const handleYes = () => {
    setScreen("response");
    setTimeout(() => setScreen("datetime"), 5500);
  };

  const handleDateTimeSubmit = () => {
    if (selectedDay && selectedTime) {
      setScreen("food");
    }
  };

  const handleFoodSelect = (food) => {
    setSelectedFood(food);
    setScreen("final");
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const times = [
    "Morning ☀️",
    "Lunch 🌤️",
    "Afternoon 🌅",
    "Evening 🌙",
    "Night ✨",
  ];
  const foods = [
    { name: "Sushi", emoji: "🍣" },
    { name: "Pizza", emoji: "🍕" },
    { name: "Pasta", emoji: "🍝" },
    { name: "Steak", emoji: "🥩" },
    { name: "Ramen", emoji: "🍜" },
    { name: "Korean BBQ", emoji: "🥓" },
  ];

  return (
    <div className="app">
      <div className="container">
        {screen === "question" && (
          <div className="screen fade-in">
            {/* <div className="heart-emoji">💘</div> */}
            <div className="heart-emoji">
              <img
                src={catLoveGif}
                className="cat-love-gif"
                alt="Cats Aww GIF by Yêu Lu"
              />
            </div>

            <h1 className="question">
              Hi Kal, Will you go on a "date" with me?
            </h1>
            <div className="buttons">
              <button className="btn yes-btn" onClick={handleYes}>
                Yes! 💖
              </button>
              <button
                ref={noButtonRef}
                className="btn no-btn"
                style={{
                  transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                  transition: "transform 1.30s ease-out",
                }}
              >
                No 😢
              </button>
            </div>
          </div>
        )}

        {screen === "response" && (
          <div className="screen fade-in">
            <div className="surprise-emoji">
              <img
                src={giphycatLoveGif}
                className="cat-love-gif"
                alt="Cats Aww GIF by Yêu Lu"
              />
            </div>

            <h1 className="response-text">Wait... you actually said YES?!</h1>
            <div className="loading-dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
        )}

        {screen === "datetime" && (
          <div className="screen fade-in">
            <div className="calendar-emoji">
              <img
                src={loadingcatLoveGif}
                className="cat-love-gif"
                alt="Cats Aww GIF by Yêu Lu"
              />
            </div>
            <h2 className="subtitle">When are you free?</h2>

            <div className="picker-section">
              <h3>Pick a day:</h3>
              <div className="options-grid">
                {days.map((day) => (
                  <button
                    key={day}
                    className={`option-btn ${selectedDay === day ? "selected" : ""}`}
                    onClick={() => setSelectedDay(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="picker-section">
              <h3>Pick a time:</h3>
              <div className="options-grid">
                {times.map((time) => (
                  <button
                    key={time}
                    className={`option-btn ${selectedTime === time ? "selected" : ""}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {selectedDay && selectedTime && (
              <button
                className="btn continue-btn"
                onClick={handleDateTimeSubmit}
              >
                Continue ➜
              </button>
            )}
          </div>
        )}

        {screen === "food" && (
          <div className="screen fade-in">
            <h2 className="subtitle">What are you feeling?</h2>
            <div className="food-grid">
              {foods.map((food) => (
                <button
                  key={food.name}
                  className="food-btn"
                  onClick={() => handleFoodSelect(food.name)}
                >
                  <div className="food-emoji">{food.emoji}</div>
                  <div className="food-name">{food.name}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {screen === "final" && (
          <div className="screen fade-in">
            <div className="celebration">
              <img
                src={happycatLoveGif}
                className="cat-love-gif"
                alt="Cats Aww GIF by Yêu Lu"
              />
            </div>
            <h1 className="final-title">It's a date!</h1>
            <div className="date-details">
              <p>
                📅 <strong>{selectedDay}</strong>
              </p>
              <p>
                ⏰ <strong>{selectedTime}</strong>
              </p>
              <p>
                🍽️ <strong>{selectedFood}</strong>
              </p>
            </div>
            <div className="hearts">
              <span>💕</span>
              <span>✨</span>
              <span>💕</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
