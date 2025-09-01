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
              I am a detail-oriented Business Analyst Student, passionate about transforming complex data into clear, actionable insights. My experience spans operational management,
              data-driven problem-solving, and analytics from optimizing partner networks at Urban Company to enhancing efficiency through predictive models and visualization projects. 
              Skilled in Python, MySQL, MS-Excel, and analytical tools like SAS and SPSS, I enjoy uncovering patterns and delivering strategies that support smarter decision-making.
              With hands-on experience in machine learning, data visualization, and end-to-end workflows, I aim to bridge the gap between business needs and technical solutions, 
              driving growth and efficiency in dynamic environments.
            </p>
          </div>
        </AnimatedSection> 
      </div>
    </section>
  );
}
