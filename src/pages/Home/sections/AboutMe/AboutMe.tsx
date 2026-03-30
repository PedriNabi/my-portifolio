import { Backdrop, Box, Fade, Modal, styled, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import React from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 420,
  background: 'linear-gradient(135deg, #0d0d0d 0%, #0a0018 100%)',
  border: '1px solid #6a00ff',
  borderRadius: '8px',
  boxShadow: '0 0 30px rgba(106, 0, 255, 0.4), 0 0 60px rgba(106, 0, 255, 0.15)',
  p: 4,
  outline: 'none',
};

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
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
        <StyledSection sx={{textAlign: "center",}}>

            <Typography sx={{color: "white", fontFamily: "monospace", marginBottom: "20px"}}>Entre em Contato!</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 10, width: "100%" }}>
                <GitHubIcon onClick={() => window.open("https://github.com/PedriNabi")} sx={{color: "white", fontSize: "50px", cursor: "pointer", transition: "color 0.3s, filter 0.3s", "&:hover": { color: "#6a00ff", filter: "drop-shadow(0 0 8px #6a00ff)" }}}/>
                <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/pedro-henrique-a9169934b/")} sx={{color: "white", fontSize: "50px", cursor: "pointer", transition: "color 0.3s, filter 0.3s", "&:hover": { color: "#6a00ff", filter: "drop-shadow(0 0 8px #6a00ff)" }}}/>
                <MailIcon onClick={openModal} sx={{color: "white", fontSize: "50px", cursor: "pointer", transition: "color 0.3s, filter 0.3s", "&:hover": { color: "#6a00ff", filter: "drop-shadow(0 0 8px #6a00ff)" }}}/>
                    
                    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: '#fff',
                fontFamily: 'monospace',
                textShadow: '0 0 8px #6a00ff, 0 0 16px #6a00ff',
                borderBottom: '1px solid rgba(106, 0, 255, 0.4)',
                pb: 1.5,
                mb: 2,
              }}
            >
              Entre em contato comigo pelo E-mail!
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{
                color: 'rgba(255,255,255,0.75)',
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                letterSpacing: '0.03em',
              }}
            >
              pedro.henrique.silva.sjrp2@gmail.com
            </Typography>
          </Box>
        </Fade>
      </Modal>

            </Box>
        </StyledSection>
    )
}

export default AboutMe