import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ImageThumbnail from "./ImageThumbnail";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar({user, logout}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Users List
                    </Typography>
                    {!user ? <Fragment><Button color="inherit" href="/">Register</Button>
                            <Button color="inherit" href="/login">Login</Button></Fragment> :
                        <Fragment>Welcome, {user.username} ! &nbsp;<ImageThumbnail image={user.image}
                                                                                   class="small_img_thumbnail"/><Button
                            color="inherit" onClick={logout}>&nbsp;Logout</Button></Fragment>}
                </Toolbar>
            </AppBar>
        </div>
    );
}