import { Link } from "react-router-dom";
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from "@mui/material";

function TripCard({trip}) {
    return(
        <Card sx={{maxWidth:345}}>
            <CardActionArea component={Link} to={`/trip/${trip.id}`}>
            <CardMedia component="img" height="140" image={trip.photoUrl} alt={trip.destination}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{trip.destination}</Typography>
                <Typography variant="body2" color="text.secondary"></Typography>
                <Box mt={1}>
                    {Array.from({ length: trip.rating}, (_,i) => (
                        <span key={i}>★</span>
                    ))}
                </Box>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default TripCard;