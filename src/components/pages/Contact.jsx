import { useEffect } from "react";
import ContactForm from "../ui/ContactForm";
import PageHeader from "../ui/PageHeader";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Portfolio";
  }, []);
  return (
    <div>
      <PageHeader home={"Home"} page={"Contact"} link={"/contact"} />
      <ContactForm />
    </div>
  );
};

export default Contact;
