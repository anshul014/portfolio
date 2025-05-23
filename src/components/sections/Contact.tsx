import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { contactItems } from "@/configs/contactItems";
import { sendEmail } from "@/lib/sendEmail";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setIsLoading(true);
    toast.promise(sendEmail(form), {
      loading: "Sending...",
      success: () => {
        form.reset(); // ✅ Reset the form on success
        return "Thank you for contacting me!!";
      },
      error: "Failed to send email. Please try again.",
    });
    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="sm:text-4xl text-3xl font-bold tracking-tight">
              Get In Touch
            </h2>
            <Separator className="w-24 mx-auto mt-4 bg-purple-600" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg">
              Have a project in mind or want to collaborate? Feel free to reach
              out and let's discuss how we can work together.
            </p>
          </div>
        </AnimatedSection>

        <div className="mx-auto mt-16">
          <div className="md:grid-cols-2 grid items-start grid-cols-1 gap-8">
            <AnimatedSection delay={0.1}>
              <Card>
                <CardContent className="md:p-8 p-6">
                  <h3 className="mb-6 text-2xl font-semibold">
                    Send a Message
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="md:grid-cols-2 grid gap-6">
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Anshul Singh Rathore"
                          required
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="email">Your Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="itzanshul.014@gmail.com"
                          required
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message here..."
                          rows={6}
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Button
                          type="submit"
                          className="hover:bg-purple-700 w-full bg-purple-600"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="animate-spin w-4 h-4 mr-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            <div className="flex flex-col justify-between gap-6">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection delay={0.1 * (index + 1)} key={item.title}>
                    <Card>
                      <CardContent className="flex items-start gap-6 p-6">
                        <div className="dark:bg-purple-900 dark:text-purple-400 p-3 mb-4 text-purple-600 bg-purple-100 rounded-full">
                          <Icon className="size-6" />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-lg font-medium">{item.title}</h3>
                          {item.href ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
