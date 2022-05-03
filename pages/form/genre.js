import Footer from "../../src/components/Footer/Footer";
import Header from "../../src/components/Header/Header";
import SearchByGenre from "../../src/components/SearchByGenre/SearchByGenre";

const FormGenre = () => {
  return <div className="px-20 py-4">
    <div className="container">
      <div><Header /></div>
      <div><SearchByGenre /></div>
    </div>
    <Footer />
  </div>
}

export default FormGenre;
