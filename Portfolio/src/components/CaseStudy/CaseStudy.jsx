import { useParams, Link } from "react-router-dom";

const CaseStudy = () => {
  const { id } = useParams();

  // Temporary placeholder project data (can be replaced later)
  const project = {
    id: id,
    title: "Project Title",
    description:
      "This is a sample project description. Replace this text with the real project details.",
    tools: ["React", "TailwindCSS", "Node.js"],
    images: [
      "https://via.placeholder.com/600x400?text=Project+Image+1",
      "https://via.placeholder.com/600x400?text=Project+Image+2",
    ],
  };

  return (
    <div className="min-h-screen px-6 py-20 max-w-[1240px] mx-auto">
      <Link
        to="/"
        className="text-yellow-500 underline underline-offset-4 mb-6 block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-500 max-w-[700px] mb-6">{project.description}</p>

      <h3 className="text-xl font-semibold mb-2">Tools Used:</h3>
      <ul className="flex gap-4 mb-8">
        {project.tools.map((tool) => (
          <li
            key={tool}
            className="bg-gray-200 text-black px-4 py-1 rounded-full"
          >
            {tool}
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={project.title}
            className="rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
