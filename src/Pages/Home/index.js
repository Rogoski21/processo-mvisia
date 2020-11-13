import React from "react";
import {Typography, makeStyles, Grid} from "@material-ui/core";
import UploadButtons from "../../Components/UploadButton";
import Button from "../../Components/Button/index"
import ImgCard from "../../Components/ImgCard";
import img1 from "../../assets/img1.jpg"

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
    },
    primary: {
        //backgroundColor: "whitesmoke",
        display: "flex",
        minHeight: "100vh",
    },
    gridLeft: {
        flex: 1,
        border: "ridge",
        borderRadius: 10,
        padding: 10,
        margin: 5,

    },
    gridCenter: {
        flex: 1,
        border: "ridge",
        borderRadius: 10,
        padding: 10,
        margin: 5,

    },
    gridRight: {
        flex: 1,
        border: "ridge",
        borderRadius: 10,
        padding: 10,
        margin: 5,

    },
    typography: {
        fontFamily: "Andale Mono, monospace",
    }
})



export default function Home() {
    const classes = useStyles();
    /*const fileSelected = event => {
        console.log(event)
    }*/
    return (
        <div className={classes.root}>
            <header style={{justifyContent: "center"}}>
                <Grid container justify="center">
                    <Grid xs={12} align="center">
                        <img
                            src="https://mvisia.com.br/wp-content/themes/g5_helium-child/custom/images/WhatsApp%20Image%202020-10-08%20at%2010.56.05.jpeg"
                            alt="mvisia" width="300" height="100"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h5" component="p" className={classes.typography}>
                            Desafio Técnico de Programação - Processo Seletivo MVISIA 2020 - Vaga Estágio Front-End
                        </Typography>
                    </Grid>
                </Grid>
            </header>

            <Grid xs={12} spacing={1} className={classes.primary}>
                <Grid xs={3} className={classes.gridLeft}>
                    <Typography align="center" className={classes.typography}>
                        Banco de dados
                    </Typography>
                </Grid>

                <Grid xs={6} className={classes.gridCenter}>
                    <Grid>
                        <Typography align="center" className={classes.typography}>
                            Editor de imagem
                        </Typography>
                    </Grid>
                    <Grid container xs={12} alignItems="baseline">
                        <Grid xs={6} align="center">
                            <UploadButtons/>
                        </Grid>
                        <Grid xs={6} align="center">
                            <Button>Baixar</Button>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid xs={3} className={classes.gridRight}>
                    <Grid container
                          justify="center"
                          alignItems="center">
                        <Typography align="center" className={classes.typography}>
                            Banco de imagens
                        </Typography>
                    </Grid>
                    <Grid container
                          direction="column"
                          justify="center"
                          alignItems="center"
                          spacing={4}>
                        <Grid item>
                            <ImgCard img={img1}/>
                        </Grid>
                        <Grid item>
                            <ImgCard img={img1}/>
                        </Grid>
                        <Grid item>
                            <ImgCard img={img1}/>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        justify="center"
                        alignItems="center">
                        <Button>Deletar</Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}