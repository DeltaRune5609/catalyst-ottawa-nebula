import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, MapPin, Users, Sparkles, Rocket, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden star-field">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container relative z-10 text-center px-4 py-20">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-6 text-gradient glow-primary">
              CATALYST
            </h1>
            <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-8" />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 animate-fade-in">
            presented by <span className="text-primary font-bold">REDSHIFTED</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm md:text-base animate-fade-in">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>November XX 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-secondary" />
              <span>Ottawa, Canada</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span>100+ hackers</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground glow-primary animate-fade-in"
            asChild
          >
            <a href="https://forms.gle/b2n71kTgUs7ddHD98" target="_blank" rel="noopener noreferrer">
              REGISTER NOW
            </a>
          </Button>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <div className="aspect-video rounded-xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/eoovOvF7nKM"
              title="Inside an Ottawa High School Hackathon: Lockdown 2025"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* What is a Hackathon */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Sparkles className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              What is a hackathon?
            </h2>
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/30 shadow-xl">
            <p className="text-lg md:text-xl leading-relaxed text-center text-muted-foreground">
              A Hackathon is a social coding marathon where teenagers come together to build projects for a weekend and share them with the world. 
              A hackathon is a space that helps give makers everything they need to start building–mentors, collaborators, inspiration, and a goal to work towards. 
              Hackers will leave a hackathon with a project of their own, ready and excited to keep hacking once they get home.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {["ONLINE", "READY", "INNOVATING"].map((tag) => (
                <div key={tag} className="px-6 py-3 rounded-full bg-primary/20 border border-primary/40 text-primary font-bold">
                  {tag}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* About Catalyst */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Rocket className="w-8 h-8 text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              About Catalyst.exe
            </h2>
            <Zap className="w-8 h-8 text-accent" />
          </div>
          
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-secondary/30 shadow-xl">
            <p className="text-lg md:text-xl leading-relaxed text-center text-muted-foreground mb-12">
              Catalyst is Ottawa's first high-school hardware hackathon, a 24‑hour innovation sprint where teams go from idea to working prototype under tight timelines. 
              Unlike traditional software hackathons, Catalyst empowers students to design, build, and test physical hardware from circuits and sensors to mechanical systems with expert mentorship and hands-on support.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8">
              {["ONLINE", "READY", "INNOVATING"].map((tag) => (
                <div key={tag} className="px-6 py-3 rounded-full bg-secondary/20 border border-secondary/40 text-secondary font-bold">
                  {tag}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Examples of Hackathons
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Hack the North", subtitle: "One of the biggest hackathons in Canada", url: "https://hackthenorth.com/" },
              { name: "Scrapyard", subtitle: "A recent hackathon in Ottawa", url: "https://scrapyard.hackclub.com/" },
              { name: "Counterspell", subtitle: "Another recent Ottawa hackathon", url: "https://counterspell.hackclub.com/" },
              { name: "Lockdown", subtitle: "Another recent Ottawa hackathon", url: "https://lockdown.youthhacks.ca/" }
            ].map((hackathon, index) => (
              <a 
                key={index}
                href={hackathon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur border-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {hackathon.name}
                  </h3>
                  <p className="text-muted-foreground">{hackathon.subtitle}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Our Sponsors
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="aspect-square flex items-center justify-center bg-card/30 backdrop-blur border-primary/20 hover:border-primary/40 transition-colors">
                <span className="text-muted-foreground text-center px-4">Your Logo Here</span>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground">
            Contact <a href="mailto:andy.han@redshifted.ca" className="text-primary hover:underline">andy.han@redshifted.ca</a> for sponsoring this event.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 pb-32">
        <div className="container max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Got questions? We've got answers. Here's everything you need to know about Catalyst.
          </p>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-primary/20 rounded-lg px-6 bg-card/30 backdrop-blur">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What is Catalyst?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Catalyst is a high-energy hardware hackathon where students come together to build, learn, and innovate on cutting-edge tech challenges.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-primary/20 rounded-lg px-6 bg-card/30 backdrop-blur">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Who can participate?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Catalyst is open to high school students of all skill levels. Whether you're a beginner or a seasoned hacker, you're welcome!
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-primary/20 rounded-lg px-6 bg-card/30 backdrop-blur">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Is there a fee to participate?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our price is TBD, depending on the donations from our generous sponsors, but it will be around $50-$100.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-primary/20 rounded-lg px-6 bg-card/30 backdrop-blur">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What should I bring?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Just bring your laptop, charger, any necessary personal items, and lots of curiosity. We provide hardware kits and tools!
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-primary/20 rounded-lg px-6 bg-card/30 backdrop-blur">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How do I register?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You can sign up through our official website. Registration opens soon—stay tuned!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Index;
