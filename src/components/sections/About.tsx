import AnimatedSection from "@/components/AnimatedSection";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="sm:text-4xl text-3xl font-bold tracking-tight">
              About Me
            </h2>
            <Separator className="w-24 mx-auto mt-4 bg-purple-600" />
          </div>
        </AnimatedSection>

        <AnimatedSection className="max-w-3xl mx-auto" delay={0.2}>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I'm a dedicated Business Analyst with a passion for transforming
              complex data into actionable insights. With a background in
              business strategy and analytical thinking, I help organizations
              make informed decisions that drive growth and operational
              efficiency.
            </p>
            <p>
              My journey began at the University of Technology, where I earned
              my Bachelor's degree in Business Administration. Since then, I've
              worked with startups and established enterprises, leading
              initiatives that streamline processes, improve user satisfaction,
              and align business goals with technology.
            </p>
            <p>
              When I'm not analyzing trends or refining workflows, I enjoy
              exploring the latest in data analytics tools, contributing to
              professional communities, and mentoring aspiring analysts. I'm
              committed to continuous learning and staying ahead in a dynamic
              business environment.
            </p>
            <p>
              I thrive in collaborative settings, where I can connect the dots
              between stakeholders, developers, and end users. My goal is to
              deliver solutions that not only meet business objectives but also
              add lasting value.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
