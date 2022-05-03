import ByGenreCard from "../../../src/components/ByGenreCard/ByGenreCard";
import Footer from "../../../src/components/Footer/Footer";
import Header from "../../../src/components/Header/Header";

const Bookgenre = ( {books, genre }) => {
  console.log("BOOKS", genre);
  return <div className="px-20 py-4">
    <div className="container">
      <div><Header /></div>
      <div><ByGenreCard books={books} genre={genre} /></div>
    </div>
    <Footer />
  </div>
}

export async function getServerSideProps({resolvedUrl, params}) {
  console.log("url",resolvedUrl);
  // Fetch data from external API
  const result = await fetch(`http://localhost:3001/list/genre/${params.genre}`)
  const books = await result.json()

  // Pass data to the page via props
  return { 
      props: { 
        books, 
        genre: params.genre
      } 
    }
}

export default Bookgenre;
