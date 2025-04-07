import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Javascript", "Typescript", "React", "Python", "Git e CI/CD", "HTML", "CSS", "Django", "Doker", "PHP", "Zabbix", "Prometheus", "Grafana","Zimbra", "Mikrotik", "Linux Server",
        "Microsoft Server", "Mysql", "PostgreSQL", "RPAs", "ETLs", "Microsoft Office"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre mim</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiencia</Typography>
                                <Typography textAlign="center">1+ ano</Typography>
                                <Typography textAlign="center">Backend e Frontend Development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Educação</Typography>
                                <Typography textAlign="center">Cursando Ciencia de Dados</Typography>
                                <Typography textAlign="center">MTCNA - Mikrotik Certified Network Associate</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1} textAlign="center">
                    <Typography>
                        Automação de processos com Python.<br/> 
                        Criação de RPA's(Robotic Process Automation),  ETL's(Extract, Transformation, Load).<br/>
                        Criação de Sites, Landing Pages, Sistemas Web.<br/>
                        Instalaçao e configuração de Ambiente de monitoramento Zabbix, Prometheus e Grafana.<br/>
                        Instalação e Configuração de Firewall(Mikrotik)                  
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection
