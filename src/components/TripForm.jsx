import { useState, useEffect } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";

function TripForm({
  initialData = null,
  onSubmit,
  title = "Add a new trip",
  submitLabel = "Add trip",
}) {
  const [trip, setTrip] = useState({
    destination: "",
    date: "",
    experience: "",
    rating: 0,
    photoUrl: "",
    location: { lat: "", lng: "" },
  });

  useEffect(() => {
    if (initialData) {
      setTrip(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  const handleLocationChange = (e) => {
    setTrip({
      ...trip,
      location: {
        ...trip.location,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(trip);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" align="center" gutterBottom>
          {title}
        </Typography>
        <Stack spacing={3}>
        <TextField label="Destination" name="destination" value={trip.destination} onChange={handleChange} required fullWidth></TextField>
        <TextField label="Date" type="date" name="date" value={trip.date} onChange={handleChange} required fullWidth></TextField>
        <TextField label="Experience" name="experience" value={trip.experience} onChange={handleChange} required fullWidth></TextField>
        <TextField label="Rating (1-5)" type="number" name="rating" value={trip.rating} onChange={handleChange} required fullWidth></TextField>
        <TextField label="Photo Url" name="photoUrl" value={trip.photoUrl} onChange={handleChange} required fullWidth></TextField>
        <TextField label="Latitude" type="number" name="lat" value={trip.location.lat} onChange={handleLocationChange} required fullWidth></TextField>
        <TextField label="Longitude" type="number" name="lng" value={trip.location.lng} onChange={handleLocationChange} required fullWidth></TextField>

        <Button type="submit" variant="contained" color="primary" size="large" fullWidth>{submitLabel}</Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default TripForm;