import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {
	componentWillMount() {
		if (this.props.authenticated)
			this.props.fetchUsers();
	}

	renderUser(user) {
		return (
			<div className="card card-block" key={user.id}>
				<h4 className="card-title">{user.name}</h4>
				<p className="card-text">{user.company.name}</p>
				<a className="btn btn-primary" href={user.website}>Website</a>
			</div>
		);
	}

	render() {
		return (
			<div className="user-list">
				{this.props.users.map(this.renderUser)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { 
		users: state.users,
		authenticated: state.authenticated 
	};
}

export default connect(mapStateToProps, actions)(UserList);