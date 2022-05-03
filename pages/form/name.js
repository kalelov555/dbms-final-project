import Footer from "../../src/components/Footer/Footer";
import Header from "../../src/components/Header/Header";
import SearchByName from "../../src/components/SearchByName/SearchByName";

const FormName = () => {
  return <div className="px-20 py-4">
    <div className="container">
      <div><Header /></div>
      <div><SearchByName /></div>
    </div>
    <Footer />
  </div>
}

export default FormName;
