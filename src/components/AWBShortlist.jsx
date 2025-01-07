import { Box, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const AWBShortlist = ({ awbShortlist, handleRemoveAWB }) => {
    return (
        <Box >
            <h2>AWB Shortlist</h2>
            <h3>Number of AWBs in Shortlist: {awbShortlist.length}</h3>
            {!awbShortlist.length ? (
                <h3>Shortlist Empty!</h3>
            ) : (
                <ul>
                    {awbShortlist.map((awb) => (
                        <Box 
                            key={awb.id} 
                            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                            <Link to={'/awbShortlist'}>
                                <li>{awb?.fields["HAWB/HBL"]}</li>
                            </Link>
                            <Stack 
                                sx={{ marginLeft: '20%' }}>
                                <Button 
                                    onClick={(e) => handleRemoveAWB(e, awb)} 
                                    variant="contained"
                                >
                                    Remove from shortlist
                                </Button>
                            </Stack>
                        </Box>
                    ))}
                </ul>
            )}
            <Button sx={{backgroundColor:'pink'}}>future development</Button>
        </Box>
    );
}

export default AWBShortlist;