import { BlogPosts } from 'app/components/posts'

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
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
