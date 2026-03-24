
import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/FotoPerfil.jpeg"
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StyledButton from "../../../../components/styledButton/styledButton";
import { AnimatedBackground } from "../../../../components/animatedBackGround/animatedBackGround";



const  Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }))

    const StyledImage = styled("img")(({theme}) => ({
        width: "100%",
        borderRadius: "50%",
        border: `2px solid ${theme.palette.primary.contrastText}`,

    }))


  return (
    <>
    <StyledHero>
    <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
            
            <Grid size={4}>
                <Box position="relative">
                    <Box position="absolute" width={"160%"} top={-100} right={0}>
                        <AnimatedBackground/>
                    </Box>
                    <Box position="relative" textAlign="center">
                        <StyledImage src={Avatar}/>
                    </Box>
                </Box>
                
            </Grid>

            <Grid size={8}>
               <Typography color="primary.contrastText" variant="h1" textAlign="center">Pedro Henrique</Typography>  
               <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Software Enginner</Typography>     

            <Grid container justifyContent="center" spacing={2} rowSpacing={3}>
                
            <Grid size={4}>
                <StyledButton>
                    <SimCardDownloadIcon/>
                    <Typography>Download</Typography>
                </StyledButton>
            </Grid>

            <Grid size={4}>
                   <StyledButton>
                    <PersonAddIcon/>
                  <Typography>Contract Me</Typography>
                </StyledButton>
            </Grid>
             

            </Grid>

            </Grid>
        </Grid>
    </Container>
     
    </StyledHero>
     
    </>
  )
}

export default Hero
