import React from "react";
import "./styles/CardForm.css";

export default function CardForm(props) {
  function handleClick(e) {}

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            value={props.data.firstName}
            name="firstName"
          />
          <label>Last Name</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            value={props.data.lastName}
            name="lastName"
          />
          <label>Email</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="email"
            value={props.data.email}
            name="email"
          />
          <label>Job Title</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            value={props.data.jobTitle}
            name="jobTitle"
          />
          <label>Twitter</label>
          <input
            onChange={props.onChange}
            className="form-control"
            type="text"
            value={props.data.twitter}
            name="twitter"
          />
        </div>
        <button onClick={handleClick} className="btn btn-primary">
          Save
        </button>
        {props.error && <p className="text-danger">{props.error.message}</p>}
      </form>
    </div>
  );
}
