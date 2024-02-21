// aboutus.jsx
import React from "react";
import OutlinedCard from "../components/cards";
import Grid from "@mui/material/Grid";
import { FamilyRestroom } from "@mui/icons-material";
import { fontFamily } from "@mui/system";

const Aboutus = () => {
  const gradientStyle = {
    background: "linear-gradient(144deg, #4065f6, #00d7a3)",
    WebkitBackgroundClip: "text", // For Webkit browsers (Safari, Chrome)
    color: "transparent", // Hide the text color
    display: "inline-block", // Ensures the gradient is applied to the text content
  };

  const cardData = [
    {
      leftTitle: <h3 style={gradientStyle}>Lorem</h3>,
      leftDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non, reiciendis necessitatibus aspernatur molestias mollitia ducimus perferendis unde dicta ea expedita? Temporibus numquam deleniti autem consequatur eaque corrupti, ratione dicta.",
      //,
      rightTopContent: (
        <img
          src="C:\Users\tiger\OneDrive\Documents\EEE\eee-dep-website\src\img"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ),
      rightBottomContent:
        "Years of experience project Challenge Positive reviews Trusted Student",
    },
    // Add more items with different content
  ];

  return (
    <div>
      <Grid
        container
        spacing={2}
        style={{ backgroundColor: "#f4f2eb", padding: "5px" }}
      >
        <Grid item xs={12}>
          <h1
            style={{
              backgroundColor: "#f4f2eb",
              padding: "10px",
              //fontFamily: "poppins",
            }}
          >
            About Us
          </h1>
        </Grid>
        {/* Add other grid items or components here */}
      </Grid>
      {cardData.map((data, index) => (
        <OutlinedCard key={index} {...data} />
      ))}
    </div>
  );
};

export default Aboutus;
