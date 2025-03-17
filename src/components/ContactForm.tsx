import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BrainCircuit, MessageSquare, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
export function ContactForm() {
  return (
    <div className="container py-24 lg:py-32">
      {/* Title */}
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Contact us</h1>
        <p className="mt-3 text-muted-foreground">
          We&apos;d love to talk about how we can help you.
        </p>
      </div>

      <div className="mt-12 max-w-lg mx-auto">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-8 text-xl font-semibold">Fill in the form</h2>
            <form>
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input
                      type="text"
                      id="firstname"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input
                      type="text"
                      id="lastname"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project"
                    rows={4}
                  />
                </div>
              </div>

              <div className="mt-6 grid">
                <Button type="submit" size="lg">
                  Send inquiry
                </Button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-muted-foreground">
                  We&apos;ll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">
        <Link
          to={"#"}
          className="group flex flex-col h-full text-center rounded-lg hover:bg-muted p-4 sm:p-6"
        >
          <BrainCircuit className="size-9 mx-auto text-muted-foreground" />
          <div className="mt-5">
            <h3 className="text-lg font-semibold">Knowledgebase</h3>
            <p className="mt-1 text-muted-foreground">
              We&apos;re here to help with any questions or code.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-primary">
              Contact support
              <svg
                className="size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </Link>

        <Link
          to={"#"}
          className="group flex flex-col h-full text-center rounded-lg hover:bg-muted p-4 sm:p-6"
        >
          <MessageSquare className="size-9 mx-auto text-muted-foreground" />
          <div className="mt-5">
            <h3 className="text-lg font-semibold">FAQ</h3>
            <p className="mt-1 text-muted-foreground">
              Search our FAQ for answers to anything you might ask.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-primary">
              Visit FAQ
              <svg
                className="size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </Link>

        <Link
          to={"#"}
          className="group flex flex-col h-full text-center rounded-lg hover:bg-muted p-4 sm:p-6"
        >
          <Wrench className="size-9 mx-auto text-muted-foreground" />
          <div className="mt-5">
            <h3 className="text-lg font-semibold">Developer APIs</h3>
            <p className="mt-1 text-muted-foreground">
              Check out our development quickstart guide.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-primary">
              Contact sales
              <svg
                className="size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
