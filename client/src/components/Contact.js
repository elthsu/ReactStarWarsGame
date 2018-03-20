import React from "react";

const styles = {
	fontSize: "125%",
	marginTop: "10%",
	lineHeight: "200%"
};

const Contact = (props) => {
	// re-format name to make it easier to reference in the JSX code
	let name = `${props.user.name.first} ${props.user.name.last}`;

	return (
		<div className="col-lg-4" style={styles}>
			<img src={props.user.picture.medium} className="img-circle" alt={name} />
			<div>{name}</div>
			<div>{props.user.email}</div>
			<div>{props.user.location.postcode}</div>

			<button className="btn btn-info" onClick={() => props.saveUser(props.user)}>Keep</button>
		</div>
	);
};

export default Contact;