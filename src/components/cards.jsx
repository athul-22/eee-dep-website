import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Import Grid

const OutlinedCard = ({
  leftTitle,
  leftDescription,
  leftButtonText,
  rightTopContent,
  rightBottomContent,
}) => {
  const leftCardContent = (
    <React.Fragment>
      <CardContent style={{ backgroundColor: "#FDFEFF" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {leftTitle}
        </Typography>
        <Typography variant="h5" component="div">
          {leftDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{leftButtonText}</Button>
      </CardActions>
    </React.Fragment>
  );

  const rightTopCardContent = <CardContent>{rightTopContent}</CardContent>;

  const rightBottomCardContent = (
    <CardContent
      sx={{ backgroundColor: "", textAlign: "center", height: "100%" }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Grid item xs={3}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: "3rem",
              mb: 1,
              color: "#294B29",
            }}
          >
            9+
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1rem" }}>
            Years of Experience
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: "3rem",
              mb: 1,
              color: "#294B29",
            }}
          >
            34
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1rem" }}>
            Project Challenge
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: "3rem",
              mb: 1,
              color: "#294B29",
            }}
          >
            23
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1rem" }}>
            Positive Reviews
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: "3rem",
              mb: 1,
              color: "#294B29",
            }}
          >
            1
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1rem" }}>
            Trusted Student
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        height: "100vh",
        padding: 2,
        backgroundColor: "#f4f2eb",
        padding: 8,
      }}
    >
      <Card
        variant="outlined"
        sx={{ flex: 1, borderRadius: "1.6rem", overflow: "hidden" }}
      >
        {leftCardContent}
      </Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flex: 1,
          overflow: "hidden",
        }}
      >
        <Card variant="outlined" sx={{ flex: 1, borderRadius: "1.6rem" }}>
          {rightTopCardContent}
        </Card>
        <Card
          variant="outlined"
          sx={{ flex: 1, borderRadius: "1.6rem", overflow: "hidden" }}
        >
          {rightBottomCardContent}
        </Card>
      </Box>
    </Box>
  );
};

export default OutlinedCard;
