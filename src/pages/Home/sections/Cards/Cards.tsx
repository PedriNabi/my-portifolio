import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography, keyframes, styled } from "@mui/material"

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 8px #6a00ff, 0 0 20px #6a00ff44; }
  50%       { box-shadow: 0 0 18px #6a00ff, 0 0 40px #6a00ff66; }
`;

const StyledSection = styled("section")(() => ({
    background: "linear-gradient(135deg, #000000 0%, #0a0018 50%, #0d0d0d 100%)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
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
        background: "radial-gradient(circle, #6a00ff22 0%, transparent 70%)",
        pointerEvents: "none",
    },
}));

const Cards = () => {
    return (
        <StyledSection>


        <Typography variant= "h3"sx={{color: "white", fontWeight: 700, marginBottom: "70px"}}>CONQUISTAS!</Typography>


        <Grid display="flex" gap={5}>

          <Card sx={{ maxWidth: 345, animation: `${glowPulse} 2.0s ease-in-out infinite` }}>
              <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center"}}>
                <CardActionArea>
                    <CardMedia component="img" height="140" image="https://media.licdn.com/dms/image/v2/D5622AQFfSaU8yfWYhQ/feedshare-shrink_480/B56ZpmGweFHAAY-/0/1762649644526?e=1776297600&v=beta&t=ZWuBv3GkgLdtpBhs0iSBZeZ8Wg3KJBpQ20Kh1bX2njo" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                1° Lugar Hackathon da Saúde
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Este projeto inovador visa elevar as taxas de vacinação infantil através da integração direta do histórico vacinal no boletim escolar. O sistema conecta os dados de saúde e educação para identificar automaticamente as vacinas pendentes de cada aluno, transformando a imunização em um indicador de desempenho.
                            </Typography>
                        </CardContent>
                </CardActionArea>
               </Box>
            <CardActions>
                <Button size="small" color="primary">
                    Ver Mais
                </Button>
            </CardActions>
          </Card>


          <Card sx={{ maxWidth: 345, animation: `${glowPulse} 2.0s ease-in-out infinite` }}>
              <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center"}}>
                <CardActionArea>
                    <CardMedia component="img" height="140" image="https://media.licdn.com/dms/image/v2/D5622AQFfSaU8yfWYhQ/feedshare-shrink_480/B56ZpmGweFHAAY-/0/1762649644526?e=1776297600&v=beta&t=ZWuBv3GkgLdtpBhs0iSBZeZ8Wg3KJBpQ20Kh1bX2njo" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                1° Lugar Hackathon da Saúde
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Este projeto inovador visa elevar as taxas de vacinação infantil através da integração direta do histórico vacinal no boletim escolar. O sistema conecta os dados de saúde e educação para identificar automaticamente as vacinas pendentes de cada aluno, transformando a imunização em um indicador de desempenho.
                            </Typography>
                        </CardContent>
                </CardActionArea>
               </Box>
            <CardActions>
                <Button size="small" color="primary">
                    Ver Mais
                </Button>
            </CardActions>
          </Card>

          </Grid>


        </StyledSection>
    )

}

export default Cards 