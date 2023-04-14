import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertColor } from "@mui/material/Alert";

const Contact: React.FC = () => {
  const emailjsPublicKey = "Ntr8rsDbOMKPBgp0P";
  const emailjsServiceID = "service_thlazkb";
  const emailjsTemplateID = "template_zxnxm8e";

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alertType, setAlertType] = useState<AlertColor>("success");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        emailjsServiceID,
        emailjsTemplateID,
        formValues,
        emailjsPublicKey
      );

      if (response.status === 200) {
        handleSnackbarOpen("success");
        setFormValues({ name: "", email: "", message: "" });
      } else {
        throw new Error("Email not sent");
      }
    } catch (error) {
      handleSnackbarOpen("error");
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSnackbarOpen = (type: AlertColor) => {
    setAlertType(type);
    setSnackbarOpen(true);
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-6">Contact me!</h1>
        <p className="text-lg mb-8 px-2">
          You can contact me via the form below. I will get back to you as soon
          as possible.
        </p>
      </div>
      <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          variant="filled"
          fullWidth
          value={formValues.name}
          onChange={handleChange}
        />
        <TextField
          id="email"
          type="email"
          label="Email"
          variant="filled"
          fullWidth
          value={formValues.email}
          onChange={handleChange}
        />
        <TextField
          id="message"
          label="Message"
          variant="filled"
          fullWidth
          multiline
          rows={4}
          value={formValues.message}
          onChange={handleChange}
        />
        <button
          className="w-full py-3 bg-secondary hover:bg-secondary-dark text-white font-bold text-lg rounded"
          type="submit"
        >
          Send
        </button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={alertType}
          sx={{ width: "100%" }}
        >
          {alertType === "success"
            ? "Your message has been sent successfully!"
            : "An error occurred while sending your message."}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
