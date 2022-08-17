import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { MdRiceBowl } from "react-icons/md";
import { MdTask } from "react-icons/md";

export default function SmallProjectCard({
  projectName,
  technologiesUsed,
  description,
  projectType,
  link,
  linkTag,
  date,
}) {
  return (
    <div className="bg-zinc-800 border border-zinc-700 p-5 rounded-lg mb-5 md:mb-0">
      <div className="flex mb-5 justify-center align-center">
        {
          {
            WEB: (
              <FaLaptopCode
                size={28}
                className="text-purple-200"
              ></FaLaptopCode>
            ),
            MOBILE: (
              <FaMobileAlt size={28} className="text-purple-200"></FaMobileAlt>
            ),
            RICE: (
              <MdRiceBowl size={28} className="text-purple-200"></MdRiceBowl>
            ),
            TASK: <MdTask size={28} className="text-purple-200"></MdTask>,
          }[projectType]
        }
      </div>

      <p className="text-center font-extrabold text-purple-200 font-sans text-2xl">
        {projectName}
      </p>

      <p className="text-l text-center font-normal text-white mb-2">
        <a
          className="underline text-purple-100 hover:text-purple-200"
          href={link}
        >
          {linkTag}
        </a>{" "}
        | {date}
      </p>

      <p className="text-center text-white mb-5 font-mono text-l">
        <span className="font-bold">Technologies used:</span>{" "}
        {technologiesUsed.join(", ")}
      </p>

      <p className="text-l font-normal text-white md:text-center">
        {description}
      </p>
    </div>
  );
}
