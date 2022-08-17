import { BiCodeBlock } from "react-icons/bi";

export default function Hero() {
  return (
    <div className="bg-transparent my-10 mx-10 flex flex-col justify-center content-center">
      <p className="font-mono text-white font-medium text-l lg:text-xl">
        Hi, my name is
      </p>
      <p className="font-extrabold text-purple-400 mb-5 font-sans text-8xl lg:text-9xl">
        Eric Dam
      </p>
      <p className="text-xl text-white mb-10 lg:text-2xl">
        I am a full-stack developer who likes coding and eating rice. 🍚
      </p>
      <a
        href="https://drive.google.com/drive/folders/17cdw8GQJ90FAYoKtLCaaHJRPmcEfDhuI?usp=sharing"
        className="flex w-fit h-fit gap-2 rounded-lg font-medium bg-purple-500 hover:bg-purple-600 p-4 lg:p-5 text-xl text-white lg:text-2xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 lg:h-8 lg:w-8 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
          />
        </svg>
        View my resume
      </a>
    </div>
  );
}
