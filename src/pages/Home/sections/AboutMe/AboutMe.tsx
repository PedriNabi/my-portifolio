import { Box, styled, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';



const StyledSection = styled("section")(() => ({
    background: "linear-gradient(315deg, #0d0d0d 0%, #000000 50%, #0a0018 100%)",
    minHeight: "5vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 0",
    position: "relative",
    overflow: "hidden",
    "&::before": {
        content: '""',
        position: "absolute",
        top: "-200px",
        right: "-200px",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, #0a0018 0%, transparent 70%)",
        PointerEvent: "none",

    }
}));

const AboutMe = () => {
    return (
        <StyledSection sx={{textAlign: "center",}}>

            <Typography sx={{color: "white", fontFamily: "monospace", marginBottom: "20px"}}>Entre em Contato!</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 10, width: "100%" }}>
                <GitHubIcon sx={{color: "white", fontSize: "50px"}}/>
                <LinkedInIcon sx={{color: "white", fontSize: "50px"}}/>
                <MailIcon sx={{color: "white", fontSize: "50px"}}/>
            </Box>
        </StyledSection>
    )
}

export default AboutMe