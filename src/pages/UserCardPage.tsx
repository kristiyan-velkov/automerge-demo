import React from "react";
import { Button, Container, Typography } from "@material-ui/core";

// Assuming you have a way to pass or store selected products
const selectedProducts = [
  // This would be populated with the user's selected products
];

const UserCardPage: React.FC = () => {
  const handleBuySelected = () => {};

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Selected Products
      </Typography>
      {/* Render selected products here */}
      <Button variant="contained" color="primary" onClick={handleBuySelected}>
        Buy Selected
      </Button>
    </Container>
  );
};

export default UserCardPage;
