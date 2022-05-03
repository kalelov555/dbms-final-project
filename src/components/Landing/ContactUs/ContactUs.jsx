import { ContactForm } from "../ContactForm/ContactForm";
import styles from "./ContactUs.module.css";

export const ContactUs = () => {
  return <section id="contact-us" className={`section p-0 mt-36 ${styles.bgContact}`}>
    <ContactForm />
  </section>
}
