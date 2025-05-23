import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { skills } from "@/configs/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-muted/30 py-24">
      <div className="container">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="sm:text-4xl text-3xl font-bold tracking-tight">
              Technical Skills
            </h2>
            <Separator className="w-24 mx-auto mt-4 bg-purple-600" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg">
              My technical toolkit includes a variety of languages, frameworks,
              and tools that I've mastered over the years.
            </p>
          </div>
        </AnimatedSection>

        <div className="md:grid-cols-2 lg:grid-cols-4 grid gap-8 mt-16">
          {skills.map((category, index) => (
            <AnimatedSection key={category.category} delay={0.1 * index}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="dark:bg-purple-900 dark:text-purple-400 p-3 text-purple-600 bg-purple-100 rounded-lg">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      {category.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-muted-foreground flex items-center"
                      >
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-600"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
