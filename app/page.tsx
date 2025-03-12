import { BlogPosts } from 'app/components/posts';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Christopher Schuldt is a senior technician and business owner with
        expertise in mission-critical operations, electrical and mechanical
        systems, and AI/ML applications. Currently leading data center
        operations at AWS, he optimizes redundancy, automation, and technical
        processes while overseeing 40MW critical facilities.`}
      </p>

      {/* New Tech Stack Section */}
      <h2 className="mt-10 text-xl font-bold">Tech Stack & Tools</h2>
      <div className="flex flex-wrap gap-4 mt-4">
        {[
          "Next.js",
          "Python",
          "AI/ML",
          "AWS",
          "Tailwind CSS",
          "LangChain",
          "Docker",
          "GitHub",
          "Vercel"
        ].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
