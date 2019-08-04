import React, {Component, Fragment} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import {loginUser} from "../store/actions/usersActions";
import {connect} from "react-redux";

class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    submitHandler = e => {
        e.preventDefault();
        this.props.loginUser(this.state)
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {

        return (
            <Fragment>
                <Card style={{width: 275, padding: 20, marginTop: 60}}>
                    <h1>Login</h1>
                    <form onSubmit={this.submitHandler}>
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

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{marginTop: "20px", float: "right"}}
                        >
                            Login
                        </Button>
                    </form>
                </Card>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loginUser: userData => dispatch(loginUser(userData))
});

export default connect(null, mapDispatchToProps)(Login);
