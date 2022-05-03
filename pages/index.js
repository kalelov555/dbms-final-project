import { useEffect, useState } from "react";
import Head from "next/head";
import { CallToAction } from "../src/components/Landing/CallToAction/CallToAction";
import { Classes } from "../src/components/Landing/Classes/Classes";
import { ContactUs } from "../src/components/Landing/ContactUs/ContactUs";
import { Features } from "../src/components/Landing/Features/Features";
import { Footer } from "../src/components/Landing/Footer/Footer";
import { JsPreLoader } from "../src/components/Landing/JsPreLoader/JsPreLoader";
import { MainBanner } from "../src/components/Landing/MainBanner/MainBanner";
import { NavigationBar } from "../src/components/Landing/NavigationBar/NavigationBar";
import { Schedule } from "../src/components/Landing/Schedule/Schedule";
import { Trainers } from "../src/components/Landing/Trainers/Trainers";
import { sectionHeadings } from "../src/components/constants";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="landing">

      <Head>
        <title>Best Books</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      {loading && <JsPreLoader />}

      <NavigationBar />

      <MainBanner />

      <Features sectionHeading={sectionHeadings[0]} />

      <CallToAction />

      <Classes sectionHeading={sectionHeadings[1]} />

      <Trainers sectionHeading={sectionHeadings[3]} />

      <ContactUs />

      <Footer />
    </div>
  );
}
