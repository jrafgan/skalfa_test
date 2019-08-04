import React, {Component, Fragment} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "../components/Select";
import Card from '@material-ui/core/Card';
import {registerUser} from "../store/actions/usersActions";
import {connect} from "react-redux";

class Register extends Component {
    state = {
        username: "",
        e_mail: "",
        password: "",
        country: "",
        image: ""
    };

    submitFormHandler = e => {
        e.preventDefault();
        if (this.state.image) {
            let formData = new FormData();
            Object.keys(this.state).forEach(key => {
                if (this.state[key] !== null) {
                    formData.append(key, this.state[key]);
                }
            });
            this.props.registerUser(formData);
        } else {
            this.props.registerUser(this.state)
        }
        console.log(this.state);
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    fileChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.files[0]
        });
    };

    render() {

        return (
            <Fragment>
                <Card style={{width: 275, padding: 20, marginTop: 60}}>
                    <h1>Register</h1>
                    <form onSubmit={this.submitFormHandler}>
                        <TextField
                            id="username"
                            label="Username"
                            value={this.state.username}
                            name="username"
                            onChange={this.changeHandler}
                            margin="dense"
                            autoFocus
                            fullWidth
                            required
                        />

                        <TextField
                            id="e_mail"
                            label="E_Mail"
                            value={this.state.e_mail}
                            name="e_mail"
                            onChange={this.changeHandler}
                            margin="dense"
                            fullWidth
                            required
                        />

                        <TextField
                            id="password"
                            label="Password"
                            value={this.state.password}
                            name="password"
                            onChange={this.changeHandler}
                            margin="dense"
                            fullWidth
                            required
                            type="password"
                        />

                        <Select style={{width: "100%"}}
                                changeHandler={this.changeHandler}
                                country={this.state.country}
                        />


                        <input className="file_input" type="file" name="image" id="image"
                               onChange={this.fileChangeHandler}/>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{marginTop: "20px", float: "right"}}
                        >
                            Register
                        </Button>
                    </form>
                </Card>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerUser(userData))
});

export default connect(null, mapDispatchToProps)(Register);
