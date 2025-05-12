import React, { useState } from "react";

const EMPTY_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
const FULL_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";

function App() {
  return <StarRating />;
}

const StarRating = () => {
  const [hoveredStar, setHoveredStar] = useState(0); // Star currently hovered
  const [selectedStar, setSelectedStar] = useState(0); // Star clicked

  const handleMouseEnter = (index) => {
    setHoveredStar(index);
  };

  const handleMouseLeave = () => {
    setHoveredStar(0);
  };

  const handleClick = (index) => {
    setSelectedStar(index);
  };

  return (
    <div style={{ display: "flex", gap: "10px", cursor: "pointer", padding: "20px" }}>
      {[1, 2, 3, 4, 5].map((index) => {
        let isFilled = false;

        if (hoveredStar > 0) {
          isFilled = index <= hoveredStar;
        } else {
          isFilled = index <= selectedStar;
        }

        return (
          <img
            key={index}
            src={isFilled ? FULL_STAR : EMPTY_STAR}
            alt="star"
            width="40"
            height="40"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
};

export default App;
