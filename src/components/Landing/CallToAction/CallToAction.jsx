import styles from "./CallToAction.module.css";

export const CallToAction = () => {
  
  return <section className={`section text-center ${styles.bgCta}`} id="call-to-action">
    <div className="cta-content py-28 sm:px-4 md:px-24 text-center">
      <h2 className="text-4xl uppercase font-extrabold text-white tracking-wide">
        Don’t <em className="not-italic text-red-500">think</em>, begin <em className="not-italic text-red-500">today</em>!
      </h2>
      <p className="text-white text-base my-6">
        Ut consectetur, metus sit amet aliquet placerat, enim est
        ultricies ligula, sit amet dapibus odio augue eget libero.
        Morbi tempus mauris a nisi luctus imperdiet.
      </p>
      <div className="main-button inline-block align-middle w-1/3 px-3 py-2 uppercase bg-red-500 hover:bg-red-400 font-medium lg:text-sm text-xs text-white">
        <a className="hover:text-white " href="#our-classes">Join the course</a>
      </div>
    </div>
  </section>
}
