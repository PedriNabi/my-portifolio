
import { Box, colors, Container, Grid, ListItem, Stack, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/Amostra1.png"
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StyledButton from "../../../../components/styledButton/styledButton";
import { AnimatedBackground } from "../../../../components/animatedBackGround/animatedBackGround";



const  Hero = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        background: "linear-gradient(135deg, #000000 0%, #2f2e2e 100%)",
        // ou: background: theme.gradients.secondary,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        color: "white",
        
    }));


       const StyledImage = styled("img")(({theme}) => ({
        width: "100%",
        border: `2px solid ${theme.palette.primary.contrastText}`,

    }))

  return (
    <>
    <StyledAbout>
    <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
            
           <Grid container spacing={2}>
            <Grid size={4}>
                <Stack spacing={2}>
                <ListItem >Amostra do Site Catholic</ListItem>
                <ListItem>Técnologias Usadas</ListItem>
                <ListItem>Column 1 - Row 3</ListItem>
                </Stack>
            </Grid>
            <Grid size={8}>
                <ListItem sx={{ height: '100%', boxSizing: 'border-box' }}>

                    <Box>
                      <StyledImage src={Avatar}/>  
                    </Box>

                </ListItem>
            </Grid>
        </Grid>

        </Grid>
    </Container>
     
    </StyledAbout>
     
    </>
  )
}

export default Hero
