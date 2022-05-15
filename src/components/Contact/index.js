import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";

const theme = createTheme({
    palette: {
        primary: {
            main: "#5b7886",
        },
        secondary: {
            main: "#000000",
        },
    },
});

function Contact(props) {
    const [errorMessage, setErrorMessage] = useState("");
    const { thankYou, setThankYou } = props;
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage("");
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        for (const property in formState) {
            if (!formState[property]) {
                setErrorMessage(
                    "If using autofill, please select each input field once and resubmit. You'll get a thank you message if successful"
                );
                return;
            }
        }
        setThankYou(true);
        setTimeout(() => {
            setThankYou(false);
        }, 10000);
    }
    return (
        <Grid container id="react-card">
            <Grid item m="auto">
                <h1>Contact me</h1>
            </Grid>
            <Grid item>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} p={2}>
                            <ThemeProvider theme={theme}>
                                <TextField
                                    p={1}
                                    id="form-field"
                                    label="Name"
                                    onBlur={handleChange}
                                    name="name"
                                    variant="filled"
                                />
                            </ThemeProvider>
                        </Grid>
                        <Grid item xs={12} p={2}>
                            <ThemeProvider theme={theme}>
                                <TextField
                                    id="form-field"
                                    name="email"
                                    label="Email"
                                    onBlur={handleChange}
                                    variant="filled"
                                />
                            </ThemeProvider>
                        </Grid>
                        <Grid item xs={12} p={2}>
                            <ThemeProvider theme={theme}>
                                <TextField
                                    id="form-field"
                                    label="Note"
                                    name="message"
                                    multiline
                                    rows={5}
                                    onBlur={handleChange}
                                    variant="filled"
                                />
                            </ThemeProvider>
                        </Grid>
                        {errorMessage && (
                            <Grid item xs={12} p={2}>
                                <p className="error-text">{errorMessage}</p>
                            </Grid>
                        )}
                        <Grid item xs={12} p={2}>
                            <ThemeProvider theme={theme}>
                                <Button
                                    startIcon={<SendIcon />}
                                    variant="contained"
                                    type="submit"
                                    color="primary"
                                >
                                    Submit
                                </Button>
                            </ThemeProvider>
                        </Grid>
                    </Grid>
                </form>
            </Grid>

            {thankYou && (
                <Grid item xs={12}>
                    {/* Thank you for submitting your information */}
                    Thank you for testing this page. I'm still working on a back
                    end to capture data. Please contact me using the info in the
                    gray footer below.
                </Grid>
            )}
        </Grid>
    );
}

export default Contact;
