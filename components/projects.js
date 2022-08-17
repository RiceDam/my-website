import SmallProjectCard from "./component-cards/small-project-card";

export default function Projects() {
  return (
    <div id="featured" className="py-10 px-10 md:px-20 bg-transparent lg:mx-10">
      <p className="font-extrabold lg:text-5xl lg:text-left text-purple-400 mb-10 font-sans text-4xl md:text-center md:text-4xl mb-10 font-sans text-4xl md:text-purple-300 md:underline md:decoration-8 md:offset-0 md:decoration-purple-500">
        All projects
      </p>

      <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        <SmallProjectCard
          projectName="Yordle"
          technologiesUsed={["React", "HTML", "CSS", "JavaScript"]}
          description="A League of Legends-themed word game based on New York Times' Wordle."
          projectType="WEB"
          link="#"
          linkTag="View on GitHub"
          date="January 2022"
        ></SmallProjectCard>

        <SmallProjectCard
          projectName="Onigiri"
          technologiesUsed={["Angular", "HTML", "CSS", "JavaScript"]}
          description="A web application tracking your favorite manga and anime."
          projectType="RICE"
          link="#"
          linkTag="View on browser"
          date="Work in progress"
        ></SmallProjectCard>

        <SmallProjectCard
          projectName="Task manager"
          technologiesUsed={["Google Firebase", "HTML", "CSS", "JavaScript"]}
          description="A web application for managing your tasks."
          projectType="TASK"
          link="#"
          linkTag="View on GitHub"
          date="December 2019"
        ></SmallProjectCard>
      </div>
    </div>
  );
}
