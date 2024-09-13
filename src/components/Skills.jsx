import python from "../images/python.png";
import nodejs from "../images/nodejs.png";
import mysql from "../images/mysql.png";
import atom from "../images/atom.png";
import similar from "../images/similar.png";
import js from "../images/js.png";
function Skills() {
  return (
    <div
      id="skills"
      className="bg-zinc-900 h-auto w-100 flex flex-wrap flex-col items-center text-center p-10"
    >
      <div className="h-auto w-full flex flex-wrap flex-col items-center text-center">
        <p className="text-zinc-400 font-bold font-mono text-3xl md:text-4xl">
          Skills
        </p>
        <div className="w-14 h-1 border-b-4 border-yellow-400 mt-1 rounded mb-12"></div>
      </div>
      <div className="w-full md:w-[84%] h-auto flex flex-wrap justify-evenly">
        <Badge title="Javascript" img={js} />
        <Badge title="Tailwind Css" img={similar} />
        <Badge title="React" img={atom} />
        <Badge title="MySQL" img={mysql} />
        <Badge title="Nodejs" img={nodejs} />
        <Badge title="Python" img={python} />
      </div>
    </div>
  );
}

export default Skills;

function Badge({ title, img }) {
  return (
    <div className="w-32 rounded-xl p-4 flex flex-col bg-zinc-800 h-auto text-center items-center mb-12">
      <img className="mt-2 w-10 mb-3" src={img} alt="icon" />
      <p className="text-white text-base font-medium">{title}</p>
    </div>
  );
}
