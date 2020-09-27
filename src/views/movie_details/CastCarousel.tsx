import React from "react";
import {useHistory} from "react-router-dom";
import {CastOrCrew} from "../../services/the_movie_db/MovieService";
import Carousel from "react-multi-carousel";
import {Card, CardHeader, CardMedia, Grid, IconButton, Tooltip, Typography} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

interface Props {
    cast?: CastOrCrew[]
}

function CastCarousel(props: Props) {
    const history = useHistory();
    const imageBasePath = 'https://image.tmdb.org/t/p/w780';
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    return (
        <>
            <Carousel responsive={responsive}>
                {props.cast !== undefined ? props.cast.map(cast => {
                    return <Grid container={true} justify={'center'}>
                        <Grid item={true} xs={12} md={11}>
                            <Card className={'mt-2 landingPageSmallCard'}
                                  elevation={10}
                                  style={{maxHeight: 380, minHeight: 380}}>
                                <CardHeader
                                    titleTypographyProps={{variant: 'h6'}}
                                    title={cast.name}
                                    subheader={`Playing as: ${cast.character}`}
                                    action={
                                        <IconButton aria-label="settings">
                                            <Tooltip title={"Click to add to favorites"}
                                                     placement={'top'}
                                                     arrow={true}>
                                                <AddIcon/>
                                            </Tooltip>
                                        </IconButton>
                                    }
                                />
                                <Tooltip title={"Double Click to see details"}>
                                    {cast.profile_path !== null ? <CardMedia className={'landingPageSmallImage'}
                                                                             id={`${cast.id}`}
                                            // onDoubleClick={redirect}
                                                                             style={{height: 300}}
                                                                             image={imageBasePath + cast.profile_path}
                                        /> :
                                        <>
                                            <Typography variant={'h5'} align={'center'}>
                                                No image available <br/> <HighlightOffIcon fontSize={'large'}/>
                                            </Typography>
                                        </>
                                    }
                                </Tooltip>
                            </Card>
                        </Grid>
                    </Grid>
                }) : ''}
            </Carousel>
        </>
    )
}

export {CastCarousel}
