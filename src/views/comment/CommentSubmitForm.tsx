import React from "react";
import {useLocation} from 'react-router-dom';
import {Button, Card, CardContent, CardHeader, Grid, TextField} from "@material-ui/core";
import {Controller, useForm} from "react-hook-form";
import DescriptionIcon from '@material-ui/icons/Description';
import TitleIcon from '@material-ui/icons/Title';

interface Props {
    submitComment: Function
}

function CommentSubmitForm(props: Props) {
    const {control, handleSubmit, errors} = useForm();
    return (
        <Grid container={true} justify={'flex-start'} className={'ml-4'}>
            <Grid item={true} xs={11} md={6}>
                <Card elevation={10}>
                    <CardContent>
                        <CardHeader
                            title="Submit a new comment"
                        />
                        <form onSubmit={handleSubmit(data => props.submitComment(data))} style={{width: '100%'}}>
                            <Controller control={control}
                                        name={'title'}
                                        rules={{minLength: 5, required: true}}
                                        as={
                                            <Grid container spacing={1} alignItems="flex-end" className={'mb-3'}>
                                                <Grid item>
                                                    <TitleIcon fontSize={'large'}/>
                                                </Grid>
                                                <Grid item xs={10}>
                                                    <TextField placeholder={'Enter Title'}
                                                               fullWidth={true}
                                                               label="Title"
                                                               required={true}
                                                               rows={5}
                                                               error={errors.title}
                                                               helperText={errors.title ? 'Min 5 chars' : ''}

                                                    />
                                                </Grid>
                                            </Grid>
                                        }>
                            </Controller>
                            <Controller control={control}
                                        name={'description'}
                                        rules={{minLength: 10, required: true}}
                                        as={
                                            <Grid container spacing={1} alignItems="flex-end" className={'mb-3'}>
                                                <Grid item>
                                                    <DescriptionIcon fontSize={'large'}/>
                                                </Grid>
                                                <Grid item xs={10}>
                                                    <TextField placeholder={'Enter Description'}
                                                               fullWidth={true}
                                                               label="Description"
                                                               multiline={true}
                                                               required={true}
                                                               rows={5}
                                                               error={errors.description}
                                                               helperText={errors.description ? 'Min 10 chars' : ''}

                                                    />
                                                </Grid>
                                            </Grid>
                                        }>
                            </Controller>
                            <Button type={'submit'} color="secondary" variant="contained">
                                Submit Comment
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export {CommentSubmitForm}
