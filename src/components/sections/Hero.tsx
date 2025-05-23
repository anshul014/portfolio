import { Button } from "@/components/ui/button";
import { socialItems } from "@/configs/socialItems";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen py-20 overflow-hidden"
    >
      <div className="lg:flex-row container flex flex-col-reverse items-center justify-between gap-12">
        <motion.div
          className="lg:text-left max-w-2xl text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="dark:text-purple-400 block text-lg font-medium text-purple-500">
            Hello, I'm
          </span>
          <h1 className="sm:text-5xl md:text-6xl mt-2 text-4xl font-bold tracking-tight">
            Anshul Singh Rathore
          </h1>
          <h2 className="text-muted-foreground sm:text-3xl mt-3 text-2xl font-medium">
            Business Analyst
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            I craft insightful and data-driven business solutions that drive
            growth and efficiency. Passionate about bridging the gap between
            technology and business through strategic analysis and clear
            communication.
          </p>

          <div className="lg:justify-start flex justify-center mt-8 space-x-4">
            {socialItems.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary border-primary hover:bg-primary hover:text-background p-2 transition-colors border rounded-full"
                  aria-label={link.label}
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>

          <div className="lg:justify-start flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild className="hover:bg-purple-700 bg-purple-600">
              <a href="#contact">
                Contact Me <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="hover:bg-purple-100 dark:hover:bg-purple-950 text-purple-600 border-purple-600"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/Anshul_Resume.pdf"
              >
                <Download className="w-4 h-4 mr-2" /> Download Resume
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="sm:h-80 sm:w-80 md:h-96 md:w-96 relative w-64 h-64 overflow-hidden border-4 border-purple-600 rounded-full">
            <img
              src="/profile.webp"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="-z-10 absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[10%] right-[10%] h-64 w-64 rounded-full bg-purple-400/20 blur-3xl"></div>
        <div className="absolute -bottom-[10%] left-[5%] h-72 w-72 rounded-full bg-purple-700/20 blur-3xl"></div>
      </div>
    </section>
  );
}
