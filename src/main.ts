import emailjs from "@emailjs/browser";
import "./style.css";

const form = document.getElementById("form")! as HTMLFormElement;

let isSending = false;
let errorMessage = "";

form.addEventListener("submit", async (ev: SubmitEvent) => {
  ev.preventDefault();

  if (isSending) return; // Prevent double submission
  isSending = true;

  try {
    await emailjs.sendForm(
      "service_srvdg09",
      "template_564qdoo",
      form,
      "aXwBSC3r1y427hVfk"
    );
    errorMessage = "";
    form.reset();
    alert("Message sent successfully!");
  } catch (error: any) {
    errorMessage = "Failed to send message. Please try again later.";
    console.error("Error sending email:", error.message);
    alert(errorMessage);
  } finally {
    isSending = false;
  }
});
