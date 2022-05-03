import styles from "./VideoOverlay.module.css";
import Link from "next/dist/client/link";

export const VideoOverlay = () => {
  return <div className="video-overlay header-text absolute top-0 left-0 bottom-0 w-full">
    <div className={`caption text-center absolute w-4/5 left-1/2 top-1/2 ${styles.translate}`}>
      <h6 className="mt-0 text-lg tracking-wide uppercase font-extrabold text-white">read more, get smarter</h6>
      <h2 className="mt-6 mb-4 text-5xl md:text-6xl uppercase font-extrabold text-white tracking-wide">easy with our
        <em className="not-italic text-red-500 font-black"> Website</em></h2>
      <div className="main-button scroll-to-section">
        <Link  href="http://localhost:3000/home">
          <a className="inline-block uppercase transition duration-300 ease-out text-sm font-normal py-2.5 px-3 bg-red-500 hover:bg-red-400 text-white text-center">Get started</a>
        </Link>
      </div>
    </div>
  </div>
}
