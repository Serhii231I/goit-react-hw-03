import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <>
      <ContactForm />
      <ContactList />
      <Contact />
      <SearchBox />
    </>
  );
}

export default App;
