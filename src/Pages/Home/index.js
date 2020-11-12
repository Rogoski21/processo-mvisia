import React from "react";
import {Typography, makeStyles, Grid} from "@material-ui/core";
import UploadButtons from "../../Components/UploadButton";
import Button from "../../Components/Button/index"

const useStyles = makeStyles({
    root : {
        minHeight: "100vh",
    },
    primary: {
        backgroundColor: "whitesmoke",
        display: "flex",
        minHeight: "100vh",
    },
    gridLeft: {
        flex: 1,
        border: "solid",
        borderRadius: 10,
        backgroundColor: 'green',
    },
    gridCenter: {
        flex: 1,

        backgroundColor: "red",
    },
    gridRight: {
        flex: 1,
        border: "solid",
        borderRadius: 10,
        backgroundColor: "orange",
    },
})

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <header style={{justifyContent: "center"}}>
                <img
                    src="https://mvisia.com.br/wp-content/themes/g5_helium-child/custom/images/WhatsApp%20Image%202020-10-08%20at%2010.56.05.jpeg"
                    alt="mvisia" width="300" height="100"/>

            </header>

            <Grid xs={12} spacing={1} className={classes.primary}>
                <Grid xs={3} className={classes.gridLeft}>
                    <h1>funcionando</h1>
                </Grid>

                <Grid xs={6} className={classes.primary}>
                        <UploadButtons/>
                    <Button>Baixar</Button>
                </Grid>

                <Grid xs={3} className={classes.gridRight}>
                    <h1>funcionando</h1>
                </Grid>
            </Grid>
        </div>
    )
}