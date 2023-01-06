import React from "react";
import { TextField } from "@mui/material";

const Contact = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center m-10">
      <h1 className="text-3xl font-extrabold flex">Contact me!</h1>
      <p className="m10">
        You can contact me via the form below. I will get back to you as soon as
        possible.{" "}
      </p>
      <form className="flex flex-col m-10">
        <TextField
          className="m-5"
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          className="m-5"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          className="m-5"
          id="outlined-basic"
          label="Message"
          variant="outlined"
          minRows={5}
          multiline
        />
      </form>
    </div>
  );
};

export default Contact;
