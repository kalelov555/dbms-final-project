import Header from "../src/components/Header/Header"
import { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "antd";
import TopBook from "../src/components/TopBook/TopBook";
import Footer from "../src/components/Footer/Footer";

const Home = ({books}) => {
  return <div className="px-20 py-4">
  <div className="container">
    <div><Header /></div>
    <div className="books-container" style={{ "padding": "3%" }}>
      <div >
        <Typography.Title level={1} style={{ "color": "#1890ff", "textAlign": "center" }}>Top Rated Books</Typography.Title>
        <div style={{
          "display": 'flex',
          "flexDirection": "row",
          "marginLeft": "80px"
        }}>
          {books.map((book) => {
            const { id, bookName, author, description, genre, img } = book;
            return <TopBook key={id} id={id} bookName={bookName} author={author} description={description} img={img} />
          })}
        </div>

        </div>
      </div>
    </div>
    <Footer />
  </div>
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3001/home`)
  const books = await res.json()

  // Pass data to the page via props
  return { props: { books } }
}

export default Home;
