import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 border-t">
      <div className="md:flex-row md:space-y-0 container flex flex-col items-center justify-between space-y-4">
        <div className="md:text-left text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com/anshul014"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/anshul014"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
