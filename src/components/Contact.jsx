import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nuqjy3c", "template_h9vtrte", form.current, {
        publicKey: "8rs5zhahKHMhWjAeP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    window.alert("success");
    window.location.reload();
  };

  return (
    <div
      id="contact"
      className="bg-zinc-900 border-b border-custom-light md:w-full w-full mx-auto justify-center items-center h-auto flex flex-wrap flex-col md:flex-row gap-4 p-4"
    >
      <div className="h-auto w-full flex flex-wrap flex-col items-center text-center">
        <p className="text-zinc-400 font-bold font-mono text-3xl md:text-4xl">
          Let&apos;s Talk
        </p>
        <div className="w-20 h-1 border-b-4 border-yellow-400 mt-2 rounded mb-12"></div>
      </div>
      <div className="p-5 md:mb-12 w-full text-justify rounded-lg md:w-[40%] md:h-[510px] bg-zinc-800">
        <h1 className="text-3xl font-serif  mt-8 text-custom-light font-semibold text-center">
          Contact Us
        </h1>
        <p className="px-6 mt-3 text-custom-green text-[17px] font-normal">
          Let&apos;s build a standout web presence for your brand together in
          the online space.
        </p>
        <div className="mt-11">
          <p className="flex gap-4 text-custom-green ">
            <HiOutlinePhone className="text-3xl" />
            <span className="text-lg">Phone</span>
          </p>
          <p className="mx-10 text-white text-2xl font-mono">03162486636</p>
        </div>
        <div className="mt-7">
          <p className="flex gap-4 text-custom-green ">
            <HiOutlineMailOpen className="text-3xl" />
            <span className="text-lg">Email</span>
          </p>
          <p className="mx-10 text-white text-2xl font-mono">
            m.owais4446@gmail.com
          </p>
        </div>
        <div className="mt-7 mb-11">
          <p className="flex gap-4 text-custom-green ">
            <HiOutlineHome className="text-3xl" />
            <span className="text-lg">Address</span>
          </p>
          <p className="mx-10 text-white  text-left text-xl md:text-2xl">
            Board Bazar Danishabad, Peshawar
          </p>
        </div>
      </div>
      <div className="p-3 md:px-12 md:mb-11 md:h-[510px] w-full text-justify rounded-lg md:w-[40%] h-auto bg-zinc-800">
        <div className="p-4 mx-auto font-serif">
          <h1 className="text-3xl mt-6 text-custom-light font-semibold text-center">
            Get In Touch
          </h1>
          <form ref={form} onSubmit={sendEmail} className="mt-4 space-y-4">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              className="w-full rounded-md py-3 px-4 bg-zinc-800 border border-white text-white focus:bg-transparent text-sm"
              required
            />
            <input
              type="email"
              name="from_Email"
              placeholder="Email"
              className="w-full rounded-md py-3 px-4 text-white bg-zinc-800 border border-white focus:bg-transparent text-sm"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md py-3 px-4 text-white bg-zinc-800 border border-white focus:bg-transparent text-sm"
            />
            <textarea
              placeholder="Message"
              name="message"
              rows="6"
              className="w-full rounded-md px-4 text-white bg-zinc-800 border border-white focus:bg-transparent text-sm pt-3"
              required
            ></textarea>
            <button
              type="submit"
              className="text-white bg-custom-green hover:bg-slate-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
