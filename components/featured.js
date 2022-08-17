import ProjectCard from "./component-cards/project-card";

export default function Featured() {
  return (
    <div id="featured" className="py-10 px-10 md:px-20 bg-transparent lg:mx-10">
      <p className="font-extrabold lg:text-5xl lg:text-left text-purple-400 md:text-center md:text-4xl lg:text-5xl lg:text-left mb-10 font-sans text-4xl md:text-purple-300 md:underline md:decoration-8 md:offset-0 md:decoration-purple-500">
        Featured projects
      </p>

      <div className="sm:grid sm:gap-5 lg:grid lg:grid-cols-2 lg:gap-5">
        <ProjectCard
          projectName="Gloocel Innovations"
          technologiesUsed={[
            "Flutter",
            "AWS",
            "Django",
            "Python",
            "RabbitMQ",
            "Raspberry Pi",
            "PostgreSQL",
          ]}
          tasksPerformed={[
            "Created a Flutter application that replaces traditional buzzing and key fob systems for buildings.",
            "Received and sent messages from a message broker to perform tasks using a Raspberry Pi.",
            "Hosted a database and implemented login and registration features on AWS.",
            "Connected the mobile application to a Raspberry Pi prototype with LEDs to simulate a door.",
          ]}
          buttonsLinked={{
            "View frontend code": {
              link: "https://github.com/RiceDam/Gloocel_Mobile",
              icon: "GITHUB",
            },
            "View backend code": {
              link: "https://github.com/RiceDam/Gloocel_Django",
              icon: "GITHUB",
            },
            "View miscellaneous code": {
              link: "https://github.com/RiceDam/Gloocel_Pi",
              icon: "GITHUB",
            },
          }}
        ></ProjectCard>

        <ProjectCard
          projectName="ByteSense"
          technologiesUsed={[
            "React",
            "MongoDB",
            "ExpressJS",
            "NodeJS",
            "HTML",
            "CSS",
          ]}
          tasksPerformed={[
            "Created a company website for a cybersecurity company.",
            "Collaborated with other software developers in a team of four to create the website.",
            "Designed and developed the graphical user interface with the use of React.",
            "Implemented login, registration, cart, and checkout features.",
          ]}
          buttonsLinked={{
            "View repository": {
              link: "https://github.com/RiceDam/Byte-Sense",
              icon: "GITHUB",
            },
          }}
        ></ProjectCard>

        <ProjectCard
          projectName="Yojana"
          technologiesUsed={["JavaEE", "React"]}
          tasksPerformed={[
            "Collaborated with other software developers to create a web-based timesheet application.",
            "Implemented a login and registration system with tokens in Java.",
            "Gathered data from a MySQL database using RESTful APIs.",
            "Designed and developed the graphical user interface with the use of React.",
          ]}
          buttonsLinked={{
            "View frontend code": {
              link: "https://github.com/RiceDam/Yojana-Client",
              icon: "GITHUB",
            },
            "View backend code": {
              link: "https://github.com/RiceDam/Yojana-Backend",
              icon: "GITHUB",
            },
          }}
        ></ProjectCard>
      </div>
    </div>
  );
}
