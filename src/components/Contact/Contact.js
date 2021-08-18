import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div
      style={{
        background: "var(--primary-color)",
        padding: "100px var(--margin)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white" }}>Grow Your Business</h1>
      <p style={{ marginTop: "10px", color: "white", textAlign: "center" }}>
        Please reach out to us by sharing the following information and we will
        get back to you at earliest.
      </p>

      <form
        className="form"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="input"
          type="text"
          name="Phone Number"
          placeholder="Phone Number"
          required
        />
        {/* <input className="input" type="text" name="name" placeholder="Name" />
        <input className="input" type="text" name="name" placeholder="Name" />
        <input className="input" type="select" name="name" placeholder="Name" /> */}

        <select
          className="select"
          defaultValue="Select Business Category"
          required
        >
          <option disabled hidden>
            Select Business Category
          </option>
          <option>Hotel</option>
          <option>Cafe & Bakery</option>
          <option>Coffes Shop</option>
        </select>

        <input className="submit-btn" type="submit" value="REQUEST A DEMO" />
      </form>
    </div>
  );
};

export default Contact;
