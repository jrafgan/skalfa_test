import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {country_list} from "../constants";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SimpleSelect = props => {
    const classes = useStyles();

    return (

        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="country-required">Country</InputLabel>
            <Select
                value={props.country}
                onChange={props.changeHandler}
                inputProps={{
                    name: 'country',
                    id: 'country-required',
                }}
            >
                {country_list.map(country => <MenuItem value={country} key={country}>{country}</MenuItem>)}
            </Select>
        </FormControl>

    );
};

export default SimpleSelect;