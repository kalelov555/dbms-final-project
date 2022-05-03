import ByNameCard from "../../../src/components/ByNameCard/ByNameCard";
import Footer from "../../../src/components/Footer/Footer";
import Header from "../../../src/components/Header/Header";

const Bookname = ( {books }) => {
  return <div className="px-20 py-4">
    <div className="container">
      <div><Header /></div>
      <div><ByNameCard books={books} /></div>
    </div>
    <Footer />
  </div>
}

export async function getServerSideProps({resolvedUrl, params}) {
  console.log("url",resolvedUrl);
  // Fetch data from external API
  const result = await fetch(`http://localhost:3001/list/books/${params.bookname}`)
  const books = await result.json()

  // Pass data to the page via props
  return { props: { books } }
}

export default Bookname;
