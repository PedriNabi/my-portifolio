import {Box, Chip, Container, Grid, keyframes, styled, Typography} from "@mui/material"
import ProjectImage from "../../../../assets/images/Amostra2.png"
import StyledButton from "../../../../components/styledButton/styledButton";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const fadeInRight = keyframes`
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 8px #6a00ff, 0 0 20px #6a00ff44; }
  50%       { box-shadow: 0 0 18px #6a00ff, 0 0 40px #6a00ff66; }
`;

const GlowDivider = styled(Box)(() => ({
    width: "50px",
    height: "3px",
    background: "linear-gradient(90deg, #6a00ff, #b366ff)",
    borderRadius: "2px",
    boxShadow: "0 0 10px #6a00ff",
    marginBottom: "24px",
}))

const StyledSection = styled("section")(() => ({
    background: "linear-gradient(315deg, #0d0d0d 0%, #060010 50%, #0a0018 100%)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
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

const TechChip = styled(Chip)(() => ({
    background: "transparent",
    border: "1px solid #6a00ff88",
    color: "#b366ff",
    fontSize: "12px",
    fontFamily: "monospace",
    "&:hover": {
        background: "#6a00ff22",
        border: "1px solid #6a00ff",
    },
}));

const MockupColumn = styled(Box)(() => ({
    animation: `${fadeInRight} 0.8s ease 0.2s forwards`,
    opacity: 0,
}));

const technologies = [
        "React", "Material UI", "TypeScript", "Node JS"
]

const BrowserFrame = styled(Box)(() => ({
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #6a00ff55",
    animation: `${glowPulse} 3s ease-in-out infinite`,
    background: "#1a1a1a",
}));

const BrowserBar = styled(Box)(() => ({
    background: "#1e1e1e",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    borderBottom: "1px solid #333",
}));

const BrowserDot = styled(Box)<{ color: string }>(({ color }) => ({
    width: "11px",
    height: "11px",
    borderRadius: "50%",
    background: color,
    flexShrink: 0,
}));

const AddressBar = styled(Box)(() => ({
    flex: 1,
    background: "#111",
    borderRadius: "4px",
    padding: "3px 10px",
    marginLeft: "8px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
}));

const ProjectScreenshot = styled("img")(() => ({
    width: "100%",
    display: "block",
    objectFit: "cover",
}));

const About = () => {

    return(

        <StyledSection>
            <Container>
                <Grid container spacing={6} alignItems="center">

                 <Grid size={{ xs: 12, md: 7 }}>
                    <MockupColumn>
                        <BrowserFrame>
                            <BrowserBar>
                            <BrowserDot color="#ff5f57" />
                                <BrowserDot color="#febc2e" />
                                <BrowserDot color="#28c840" />
                                <AddressBar>
                                    <Typography
                                        sx={{
                                            color: "#555",
                                            fontSize: "11px",
                                            fontFamily: "monospace",
                                            userSelect: "none",
                                        }}
                                    >
                                        🔒 catholic-project.com
                                    </Typography>
                                </AddressBar>
                            </BrowserBar>
                            <Box sx={{position: "relative"}}>
                                <ProjectScreenshot src={ProjectImage}></ProjectScreenshot>
                                 <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: "60px",
                                            background: "linear-gradient(to top, #00000088, transparent)",
                                            pointerEvents: "none",
                                        }}
                                    />
                            </Box>
                        </BrowserFrame>
                    </MockupColumn>
                     <Typography 
                        sx={{
                            color: "#444",
                            fontSize: "11px",
                            textAlign: "center",
                            mt: 1.5,
                            fontFamily: "monospace",
                            letterSpacing: 1,
                        }}
                        >
                        preview — portfolio-project
                    </Typography>
                </Grid>


                <Grid size={{ xs: 12, md: 5 }}>

                    <Box>

                        <Typography variant="overline" sx={{ color: "#6a00ff", letterSpacing: 4, fontSize: "20px" }}>
                            PROJETOS EM DESTAQUE
                        </Typography>

                        <GlowDivider />

                        <Typography variant="h3" sx={{color: "#fff",  fontWeight: 700,lineHeight: 1.2,mb: 1,textShadow: "0 0 30px #6a00ff44",}}>
                            Portfolio
                        </Typography>

                        <Typography variant="h6" sx={{color: "#b366ff"}}>
                            Plataforma para Apresentação Profissional
                        </Typography>
                    </Box>

                        <Typography sx={{color: "#fff", lineHeight: 1.8, fontSize: "20px"}}>Desenvolvimento de uma 
                            plataforma web completa com foco em exibir minhas habilidades e aplicações.</Typography>

                    <Box>
                        <Typography sx={{color: "#555", fontSize: "15px", letterSpacing: 2, mb: 1.5}}>
                            TECNOLOGIAS UTILIZADAS
                        </Typography>

                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                            {technologies.map((tech) => (
                                <TechChip key={tech} label={tech} size="small" />
                            ))}

                            <StyledButton onClick={() => window.open("https://github.com/PedriNabi/my-portifolio")}>
                                 <OpenInNewIcon sx={{ fontSize: 16 }} />
                                 Ver Projeto
                                 </StyledButton>

                        </Box>

                    </Box> 
                </Grid>

             </Grid>
            </Container>
        </StyledSection >

    )

}

export default About;