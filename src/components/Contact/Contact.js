import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./Contact.css";

const SERVICE_ID = "contact_form";
const TEMPLATE_ID = "template_0nmax1e";
const USER_ID = "user_HkrKaP4TkpFAcGTqUgwth";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, contact_number, business_name, business_category } =
      data;
    console.log(data);
    // console.log(process.env.REACT_APP_USER_ID);
    // console.log(process.env.REACT_APP_SERVICE_ID);
    // console.log(process.env.REACT_APP_TEMPLATE_ID);

    const templateParams = {
      name,
      email,
      contact_number,
      business_name,
      business_category,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        reset();

        alert(
          "Thank you for filling your details Dinefine Team will reach to you soon"
        );
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

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
        onSubmit={handleSubmit(onSubmit)}
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
          placeholder="Name"
          required
          {...register("name")}
        />
        <input
          className="input"
          type="text"
          placeholder="Contact Number"
          required
          {...register("contact_number")}
        />
        <input
          className="input"
          type="email"
          placeholder="Email Address"
          {...register("email")}
        />
        <input
          className="input"
          type="text"
          placeholder="Name of Your Business"
          required
          {...register("business_name")}
        />

        <select
          className="select"
          defaultValue="Select Business Category"
          required
          {...register("business_category")}
        >
          <option disabled hidden>
            Select Business Category
          </option>
          <option>Restaurant</option>
          <option>Hotel</option>
          <option>Cafe & Bakery</option>
          <option>Coffes Shop</option>
          <option>Others</option>
        </select>

        <input className="submit-btn" type="submit" value="REQUEST A DEMO" />
      </form>
    </div>
  );
};

export default Contact;
