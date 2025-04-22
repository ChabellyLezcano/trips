import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                    Travel Diary
                </Typography>

                <Box>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/create">
                        Add Trip
                    </Button>
                </Box>
            </Toolbar>

        </AppBar>
    )
}

export default Navbar;