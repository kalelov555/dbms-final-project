import AddBook from "../../../src/components/AddBook/AddBook";
import Footer from "../../../src/components/Footer/Footer";
import Header from "../../../src/components/Header/Header";

const Add = () => {
  return <div className="px-20 py-4">
    <div className="container">
      <div><Header /></div>
      <div><AddBook /></div>
    </div>
    <Footer />
  </div>
}

export default Add;
