import Header from "./components/Header";
import profileImage from "./assets/2x2-Natividad.jpg";
import Project from "./sections/Project";
import Contact from "./sections/Contact";

function App() {
  const aboutHighlights = [
    "Fullstack web development",
    "Critical thinking",
    "Creative problem solving",
    "Team-first leadership",
  ];

  return (
    <>
      <div className="bg-white min-h-screen w-full py-4 px-6 sm:px-8 md:py-8 md:px-8 lg:px-16 xl:px-20">
        <div className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-20 border-b border-blue-500/20">
          <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
            <Header heading="PORTFOLIO - Karl Natividad" />
          </div>
        </div>
        <div className="mt-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-6">
            <div className="flex-1">
              <h1 className="text-blue-700 text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm Karl and
              </h1>
              <p className="text-gray-700 text-xl md:text-3xl leading-relaxed">
                I enjoy building web apps that work under the hood.
              </p>
              <p className="text-gray-400 text-base md:text-md">
                Backend Developer, Frontend Developer, Project Manager, Quality
                Assurance.
              </p>
            </div>
            <div className="w-64 h-72 md:w-72 md:h-80 border-4 border-blue-500 shadow-lg shadow-blue-500/50 rounded-lg overflow-hidden shrink-0">
              <img
                src={profileImage}
                alt="Karl Natividad"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <section className="mt-12 rounded-3xl border border-blue-100 bg-blue-50/60 p-6 shadow-sm sm:p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <div className="flex-1 space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-blue-600">
                About Me
              </p>
              <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                I am a fullstack developer who thrives on critical thinking and
                creative problem solving to ship polished, reliable products.
              </h3>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                From translating ambiguous requirements into delightful user
                experiences to diagnosing stubborn backend issues, I enjoy
                building systems that feel effortless to use and resilient under
                the hood. I collaborate closely with teams, ask the right
                questions, and keep momentum moving forward.
              </p>
            </div>
            <div className="flex flex-1 flex-wrap gap-3">
              {aboutHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
