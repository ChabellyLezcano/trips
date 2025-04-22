import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import TripCard from '../components/TripCard'

import {Container, Typography, Grid, Box} from '@mui/material'

function Home() {
const [trips, setTrips] = useState([]);

useEffect(() => {
    const fetchTrips = async () => {
        const tripsCollection = collection(db, 'trip');
        const tripsSnapshot = await getDocs(tripsCollection);
        const tripList = tripsSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        console.log(tripList)
        setTrips(tripList);
    };
    fetchTrips();
}, [])

    return (
        <>
        <Container maxWidth="lg" sx={{mt:6, mb:6}}>
        <Typography variant="h3" align="center" gutterBottom>
            My Trips
        </Typography>

        {trips.length === 0 ? (
            <Box textAlign="center" mt={4}>
                <Typography variant="h5" color="text.secondary">
                No Trips yet
                </Typography>
            </Box>
        ):
        (
            <>
            <Grid container spacing={4}>
                {trips.map((trip) => (
                    <Grid item key={trip.id} xs={12} sm={6} md={4}>
                        <TripCard trip={trip}/>
                    </Grid>
                ))

                }

            </Grid>
            </>
        )
        }

        </Container>
        </>
    )
}

export default Home;