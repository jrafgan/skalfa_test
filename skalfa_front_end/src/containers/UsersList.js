import React, {Component} from 'react';

import connect from "react-redux/es/connect/connect";
import {getUsers} from "../store/actions/usersActions";
import Pagination from "../components/Pagination";

class UsersList extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    componentDidUpdate(prevProps) {
        return prevProps.users !== this.props.users
    }

    render() {
        return (
            <div className="list_div">
                <p className="photo_p">Users List</p>
                <Pagination users={this.props.users ? this.props.users : null}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users.users,
});

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);