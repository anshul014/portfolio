import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { experiences } from "@/configs/exp";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="sm:text-4xl text-3xl font-bold tracking-tight">
              Experience & Education
            </h2>
            <Separator className="w-24 mx-auto mt-4 bg-purple-600" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg">
              My professional journey and educational background that have
              shaped my skills and expertise.
            </p>
          </div>
        </AnimatedSection>

        <div className="md:pl-0 relative pl-4 mx-auto mt-16">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-border"></div>

          {experiences.map((exp, index) => (
            <AnimatedSection
              key={index}
              className={`relative mb-16 md:w-1/2 ${
                index % 2 === 0 ? "md:ml-auto md:pr-12" : "md:pl-12"
              }`}
              delay={0.2 * index}
            >
              <div
                className={`absolute top-0 rounded-full bg-purple-100 p-2 dark:bg-purple-900 ${
                  index % 2 === 0
                    ? "left-0 -translate-x-1/2 md:left-0"
                    : "left-0 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2"
                }`}
              >
                {exp.type === "job" ? (
                  <Briefcase className="dark:text-purple-400 w-5 h-5 text-purple-600" />
                ) : (
                  <GraduationCap className="dark:text-purple-400 w-5 h-5 text-purple-600" />
                )}
              </div>

              <Card
                className={`overflow-hidden border-l-4 ${
                  exp.type === "job"
                    ? "border-l-purple-600"
                    : "border-l-amber-500"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-muted-foreground text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
