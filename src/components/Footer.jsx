import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="h-auto text-custom-light p-7 bg-zinc-900 w-full flex flex-col justify-center items-center">
      <div className="flex text-2xl gap-7">
        <a target="blank" href="http://www.instagram.com/awais_khan357/">
          <FaInstagram />
        </a>
        <a target="blank" href="https://x.com/Awaiskhan1020">
          <FaXTwitter />
        </a>
        <a target="blank" href="https://www.linkedin.com/in/awaiskhan357/">
          <FaLinkedin />
        </a>
        <a target="blank" href="https://github.com/Awais-khan357/">
          <FaGithub />
        </a>
      </div>
      <p className="text-xl text-center text-custom-green mt-5">
        © 2024. Created By Muhammad Owais 😎
      </p>
    </div>
  );
}

export default Footer;
