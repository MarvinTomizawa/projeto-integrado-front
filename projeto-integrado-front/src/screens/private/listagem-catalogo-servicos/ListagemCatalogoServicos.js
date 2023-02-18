import * as React from "react";
import {ButtonBase, Grid, Paper, Typography} from "@mui/material";

const Listagem = ({items}) => {
    return (
        <div>
            {items.map(item => (
                <Paper
                    sx={{
                        p: 2,
                        margin: 2,
                        maxWidth: 500,
                        flexGrow: 1,
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                                <img alt="complex" src={item.url} style={{maxWidth: "100%", maxHeight: '100%'}}/>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {item.text}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {item.categoria}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Seg - Sex
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" component="div">
                                    {item.avaliacao} Stars
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </div>
    );
}

export default Listagem;