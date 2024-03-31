import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";
import { styled } from "@mui/material/styles";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact({ setIsLoading }) {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
      "&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
        color: "white",
      },
      "&.MuiInputBase-multiline": {
        color: "white",
      },
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();
    const name = e.target.user_name_and_lastname.value;
    const email = e.target.user_email.value;
    const text = e.target.user_text.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === "" || email.trim() === "" || text.trim() === "") {
      toast.error("Please complete all required fields", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setIsLoading(true);
      emailjs
        .sendForm(
          "service_iz93nyp",
          "template_wjddv6e",
          e.target,
          "r5gUxAN-_iB78sC8D"
        )
        .then(() => {
          toast.success("Query Sent !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setIsLoading(false);
          e.target.reset();
        });
    }
  };
  return (
    <>
      <ToastContainer />
      <Box
        onSubmit={sendEmail}
        component="form"
        className="container-contact"
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          width: { md: "40%", sx: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ width: "100%" }}>
          <div style={{ padding: "5%  " }}>
            <CssTextField
              sx={{ width: "100%", color: "white" }}
              name="user_name_and_lastname"
              label="Name and Last name"
              id="custom-css-outlined-input"
              focused
            />
            <FormHelperText id="component-helper-text" sx={{ color: "white" }}>
              Please enter your name and last name.
            </FormHelperText>
            <CssTextField
              sx={{ width: "100%", marginTop: "10px", color: "white" }}
              type="email"
              name="user_email"
              label="Email"
              id="custom-css-outlined-input"
              focused
            />
            <FormHelperText id="component-helper-text" sx={{ color: "white" }}>
              Please enter your email.
            </FormHelperText>
          </div>
          <div style={{ padding: "0% 5% 0% 5%" }}>
            <CssTextField
              sx={{ width: "100%", fontFamily: "Poppins" }}
              type="text"
              name="user_text"
              label="Text"
              id="custom-css-outlined-input"
              rows={4}
              multiline
              focused
            />
            <FormHelperText id="component-helper-text" sx={{ color: "white" }}>
              Please enter the query you have.
            </FormHelperText>
          </div>
          <button
            type="submit"
            style={{
              color: "white",
              borderRadius: "5px",
              backgroundColor: "transparent",
              border: "2px solid white",
              margin: "10px 0px 0px 28px",
              width: "80px",
              height: "30px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </Box>
      <footer
        style={{
          backgroundColor: "#1B1E1E",
          position: "fixed",
          bottom: "0",
          width: "100%",
          height: "10%",
          display: "flex",
        }}
      >
        <div className="text-footer">
          <p
            style={{ color: "white", fontSize: "15px", fontFamily: "Poppins" }}
          >
            Get connected with me on social networks:
          </p>
        </div>
        <div className="buttons-container">
          <a
            className="button-contact"
            href="https://www.facebook.com/profile.php?id=100010168543402"
            target="_blank"
          >
            <FaFacebookF className="icons-contact" />
          </a>
          <a
            className="button-contact"
            href="https://www.linkedin.com/in/cristian-blanco-l23/"
            target="_blank"
          >
            <FaLinkedinIn className="icons-contact" />
          </a>
          <a
            className="button-contact"
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=GTvVlcSBnNXKnSmzPsrdgmMTgHqNSJBtbkTMKlTbKMMRvgSxqPfNMzbhTTtNlDmwcjfPbNqKPRQzr"
            target="_blank"
          >
            <FaGoogle className="icons-contact" />
          </a>
          <a
            className="button-contact"
            href="https://github.com/cristian-23"
            target="_blank"
          >
            <FaGithub className="icons-contact" />
          </a>
          <a
            className="button-contact"
            href="https://twitter.com/Cristia62995798"
            target="_blank"
          >
            <FaTwitter className="icons-contact" />
          </a>
          <a
            className="button-contact"
            href="https://api.whatsapp.com/send?phone=59162091221"
            target="_blank"
          >
            <BsWhatsapp className="icons-contact" />
          </a>
        </div>
      </footer>
    </>
  );
}
