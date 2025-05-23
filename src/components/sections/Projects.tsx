import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/configs/projects";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="bg-muted/30 py-24">
      <div className="container">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="sm:text-4xl text-3xl font-bold tracking-tight">
              Projects
            </h2>
            <Separator className="w-24 mx-auto mt-4 bg-purple-600" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg">
              A selection of my recent work and personal projects that showcase
              my skills and expertise.
            </p>
          </div>
        </AnimatedSection>

        <div className="md:grid-cols-2 grid gap-8 mt-16">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={0.2 * index}>
              <Card className="flex flex-col h-full overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="hover:scale-110 object-cover w-full h-full transition-transform duration-500"
                  />
                </div>
                <CardContent className="flex flex-col flex-grow p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="dark:bg-purple-900 dark:text-purple-200 text-purple-800 bg-purple-100"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            asChild
                            className="hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-950 text-purple-600 border-purple-600 rounded-full"
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View Source Code</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <Button
                      asChild
                      className="hover:bg-purple-700 bg-purple-600"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Live Demo
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
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
