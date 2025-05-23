import emailjs from "@emailjs/browser";

export const sendEmail = async (form: HTMLFormElement): Promise<boolean> => {
  try {
    await emailjs.sendForm(
      "service_m21d3kr",
      "template_tjp92ue",
      form,
      "ajGYNYSkBCgVMA_ib"
    );
    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.log("Error sending email:", error);
    return false;
  }
};
