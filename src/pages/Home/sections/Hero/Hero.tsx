
import { Button, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/FotoPerfil.jpeg"
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const  Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImage = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))


  return (
    <>
    <StyledHero>
    <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
            <Grid size={4}>
                <StyledImage src={Avatar}/>
            </Grid>
            <Grid size={8}>
               <Typography color="primary" variant="h1" textAlign="center">Pedro Henrique</Typography>  
               <Typography color="primary" variant="h2" textAlign="center">I'm a Software Enginner</Typography>     

            <Grid container justifyContent="center" spacing={2}>
                <Grid>
                 <Button>
                    <SimCardDownloadIcon/>
                    Download
                </Button>
                </Grid >
                <Grid>
                <Button>
                    <PersonAddIcon/>
                    Contract Me
                </Button>
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
