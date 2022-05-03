export const ContactForm = () => {
  return <div className="contact-form py-20 sm:px-10 lg:px-30 xl:px-40 px-0 w-full">
    <form id="contact" action="" method="post"
      className="bg-white p-10 rounded-md">
      <div className="row">
        <div className="">
          <fieldset>
            <input
              className="text-gray-500 text-sm border-gray-300 bg-white w-full h-10 outline-none leading-10 py-0 px-2
                        appearance-none mb-8"
              name="name"
              type="text"
              id="name"
              placeholder="Your Name*"
              required
            />
          </fieldset>
        </div>
        <div >
          <fieldset>
            <input
              className="text-gray-500 text-sm border-gray-300 bg-white w-full h-10 outline-none leading-10 py-0 px-2
                        appearance-none mb-8"
              name="email"
              type="text"
              id="email"
              placeholder="Your Email*"
              required
            />
          </fieldset>
        </div>
        <div>
          <fieldset>
            <input
              className="text-gray-500 text-sm border-gray-300 bg-white w-full h-10 outline-none leading-10 py-0 px-2
                        appearance-none mb-8"
              name="subject"
              type="text"
              id="subject"
              placeholder="Subject"
            />
          </fieldset>
        </div>
        <div>
          <fieldset>
            <textarea
              className="text-gray-500 text-sm border-gray-300 bg-white w-full outline-none leading-10 py-0 px-2
                        appearance-none mb-8 h-40 resize-none"
              name="message"
              rows={6}
              id="message"
              placeholder="Message"
              required
            ></textarea>
          </fieldset>
        </div>
        <div className="">
          <fieldset>
            <button
              type="submit"
              id="form-submit"
              className="main-button inline-block text-xs py-2.5 px-4 bg-red-500 hover:bg-red-400 text-white text-center font-normal uppercase duration-300 transition-all border-none outline-none hover:bg-lightOrange">
              Send Message
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
}
