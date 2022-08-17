import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWindowRestore } from "react-icons/fa";

export default function ProjectCard({
  projectName,
  technologiesUsed,
  tasksPerformed,
  buttonsLinked,
}) {
  return (
    <div className="bg-zinc-800 border border-zinc-700 p-5 md:px-10 md:py-8 rounded-lg">
      <div className="flex mb-5 justify-center align-center">
        <FaCode size={28} className="text-purple-200"></FaCode>
      </div>

      <p className="text-center font-extrabold text-purple-200 mb-2 font-sans text-2xl">
        {projectName}
      </p>

      <p className="text-center text-white mb-5 font-mono text-l">
        <span className="font-bold">Technologies used:</span>{" "}
        {technologiesUsed.join(", ")}
      </p>

      <ol className="list-disc pl-5 text-l font-normal text-white mb-5">
        {tasksPerformed.map((task) => {
          return <li key={task}>{task}</li>;
        })}
      </ol>

      <div className="flex flex-wrap gap-4">
        {Object.entries(buttonsLinked).map(([buttonText, buttonLink]) => {
          return (
            <a
              key={buttonText + buttonLink.link}
              href={buttonLink.link}
              className="flex hover:bg-purple-300 flex-row gap-3 rounded-lg font-medium w-fit text-zinc-800 bg-purple-200 p-4 border border-zinc-700"
            >
              {
                {
                  GITHUB: <FaGithub size={24} />,
                  WEBSITE: <FaWindowRestore size={24} />,
                }[buttonLink.icon]
              }
              {buttonText}
            </a>
          );
        })}
      </div>
    </div>
  );
}
