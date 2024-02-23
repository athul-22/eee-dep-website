import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const cardsData = [
  {
    id: 1,
    title: 'Card 1 Title',
    description: 'Description for Card 1.',
    imageUrl: 'https://png.pngtree.com/background/20230520/original/pngtree-electric-car-3d-rendering-picture-image_2680463.jpg',
  },
  {
    id: 2,
    title: 'Card 2 Title',
    description: 'Description for Card 2.',
    imageUrl: 'https://discover.therookies.co/content/images/2022/10/3d-robot-challenge-cover.jpg',
  },
  {
    id: 3,
    title: 'Card 3 Title',
    description: 'Description for Card 3.',
    imageUrl: 'https://discover.therookies.co/content/images/2022/10/3d-robot-challenge-cover.jpg',
  },
  {
    id: 4,
    title: 'Card 4 Title',
    description: 'Description for Card 4.',
    imageUrl: 'https://discover.therookies.co/content/images/2022/10/3d-robot-challenge-cover.jpg',
  },
  {
    id: 5,
    title: 'Card 5 Title',
    description: 'Description for Card 5.',
    imageUrl: 'https://discover.therookies.co/content/images/2022/10/3d-robot-challenge-cover.jpg',
  },
  {
    id: 6,
    title: 'Card 6 Title',
    description: 'Description for Card 6.',
    imageUrl: 'https://discover.therookies.co/content/images/2022/10/3d-robot-challenge-cover.jpg',
  },
];

const Projects = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleViewMoreClick = (card) => {
    setSelectedCard(card);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedCard({});
    setOpenDialog(false);
  };

  return (
    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', position: 'relative' }}>
      <div style={{ display: 'flex', gap: '16px', backgroundColor: '#e7e4dd', padding: '16px' }}>
        {cardsData.map((card) => (
          <Card
            key={card.id}
            sx={{
              borderRadius: '1.4rem',
              backgroundColor: 'white',
              minWidth: 250,
              maxWidth: 300,
              overflow: 'auto',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '5px',
            }}
          >
            <CardMedia
              component="img"
              alt={card.title}
              image={card.imageUrl}
              sx={{ borderRadius: '1.4rem' }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {card.title}
              </Typography>
              <Button onClick={() => handleViewMoreClick(card)} variant="contained" color="primary">
                View More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md">
        <DialogTitle>
          {selectedCard.title}
          <IconButton
            aria-label="close"
            style={{ position: 'absolute', right: '8px', top: '8px' }}
            onClick={handleCloseDialog}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            alt={selectedCard.title}
            image={selectedCard.imageUrl}
            sx={{ borderRadius: '1.4rem', maxWidth: '100%', height: 'auto' }}
          />
          <Typography>{selectedCard.description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {openDialog && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.6)',
            zIndex: 999,
          }}
          onClick={handleCloseDialog}
        />
      )}
    </div>
  );
};

export default Projects;
