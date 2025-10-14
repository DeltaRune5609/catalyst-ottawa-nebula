import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, MapPin, Users, Sparkles, Rocket, Zap, Play, ChevronRight, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background stars */}
      <div className="fixed inset-0 star-field pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
        
        <div className="container relative z-10 max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Main Title */}
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
              <h1 className="relative text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter text-gradient glow-primary leading-none">
                CATALYST
              </h1>
            </div>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary" />
              <Star className="w-6 h-6 text-primary animate-pulse" />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary" />
            </div>
            
            {/* Presented by */}
            <div className="text-muted-foreground text-lg space-y-2">
              <p className="text-sm uppercase tracking-widest">presented by</p>
              <p className="text-3xl font-bold text-primary">REDSHIFTED</p>
            </div>
            
            {/* Info Cards */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <div className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-card/30 backdrop-blur-sm px-6 py-4 hover:border-primary/60 transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">November XX 2025</span>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl border border-secondary/30 bg-card/30 backdrop-blur-sm px-6 py-4 hover:border-secondary/60 transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/10 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Ottawa, Canada</span>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl border border-accent/30 bg-card/30 backdrop-blur-sm px-6 py-4 hover:border-accent/60 transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative flex items-center gap-3">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="font-medium">100+ hackers</span>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                size="lg" 
                className="relative group text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all hover:scale-105"
                asChild
              >
                <a href="https://forms.gle/b2n71kTgUs7ddHD98" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-2">
                    REGISTER NOW
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 blur transition-opacity" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-32 px-4">
        <div className="container max-w-5xl">
          <div className="relative group">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/eoovOvF7nKM"
                title="Inside an Ottawa High School Hackathon: Lockdown 2025"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is a Hackathon */}
      <section className="relative py-32 px-4">
        <div className="container max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <h2 className="text-5xl md:text-7xl font-black text-gradient">
                What is a hackathon?
              </h2>
              <Sparkles className="w-8 h-8 text-accent animate-pulse" />
            </div>
          </div>
          
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="relative overflow-hidden p-10 md:p-12 bg-card/40 backdrop-blur-xl border-primary/30 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <p className="relative text-lg leading-relaxed text-foreground/90">
                A Hackathon is a social coding marathon where teenagers come together to build projects for a weekend and share them with the world. 
                A hackathon is a space that helps give makers everything they need to start building–mentors, collaborators, inspiration, and a goal to work towards.
              </p>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "ONLINE", color: "primary" },
                { label: "READY", color: "secondary" },
                { label: "INNOVATING", color: "accent" },
                { label: "BUILDING", color: "primary" }
              ].map((tag, i) => (
                <div 
                  key={i}
                  className={`relative group overflow-hidden rounded-2xl border border-${tag.color}/30 bg-card/30 backdrop-blur-sm p-6 hover:border-${tag.color}/60 transition-all hover:scale-105`}
                >
                  <div className={`absolute inset-0 bg-${tag.color}/5 group-hover:bg-${tag.color}/10 transition-colors`} />
                  <p className={`relative text-center text-xl font-bold text-${tag.color}`}>
                    {tag.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Examples of Hackathons */}
      <section className="relative py-32 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-gradient mb-4">
              Examples of Hackathons
            </h2>
            <p className="text-muted-foreground text-lg">
              Join the legacy of innovation
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { name: "Hack the North", subtitle: "One of the biggest hackathons in Canada", url: "https://hackthenorth.com/", color: "primary" },
              { name: "Scrapyard", subtitle: "A recent hackathon in Ottawa", url: "https://scrapyard.hackclub.com/", color: "secondary" },
              { name: "Counterspell", subtitle: "Another recent Ottawa hackathon", url: "https://counterspell.hackclub.com/", color: "accent" },
              { name: "Lockdown", subtitle: "Another recent Ottawa hackathon", url: "https://lockdown.youthhacks.ca/", color: "primary" }
            ].map((hackathon, index) => (
              <a 
                key={index}
                href={hackathon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r from-${hackathon.color}/50 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                <Card className="relative h-full p-8 bg-card/40 backdrop-blur-xl border-primary/20 group-hover:border-primary/60 transition-all group-hover:translate-y-[-4px]">
                  <div className="flex items-start justify-between mb-4">
                    <Rocket className={`w-8 h-8 text-${hackathon.color} group-hover:rotate-12 transition-transform`} />
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {hackathon.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {hackathon.subtitle}
                  </p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Catalyst */}
      <section className="relative py-32 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <Rocket className="w-8 h-8 text-secondary" />
              <h2 className="text-5xl md:text-7xl font-black text-gradient">
                About Catalyst.exe
              </h2>
              <Zap className="w-8 h-8 text-accent" />
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <Card className="relative p-12 md:p-16 bg-card/40 backdrop-blur-xl border-secondary/30 shadow-2xl">
              <div className="space-y-8">
                <p className="text-xl md:text-2xl leading-relaxed text-center">
                  Catalyst is Ottawa's <span className="text-primary font-bold">first high-school hardware hackathon</span>, 
                  a 24‑hour innovation sprint where teams go from idea to working prototype under tight timelines.
                </p>
                
                <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                
                <p className="text-lg md:text-xl leading-relaxed text-center text-muted-foreground">
                  Unlike traditional software hackathons, Catalyst empowers students to design, build, and test 
                  <span className="text-secondary font-semibold"> physical hardware</span> from circuits and sensors to mechanical systems 
                  with expert mentorship and hands-on support.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 pt-8">
                  {["ONLINE", "READY", "INNOVATING"].map((tag) => (
                    <div 
                      key={tag}
                      className="px-8 py-3 rounded-full bg-secondary/20 border border-secondary/40 text-secondary font-bold text-lg hover:bg-secondary/30 transition-colors"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="relative py-32 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-gradient mb-4">
              Our Sponsors
            </h2>
            <p className="text-muted-foreground text-lg">
              Powering innovation together
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className="group relative aspect-square rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-sm hover:border-primary/40 transition-all hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full flex items-center justify-center p-6">
                  <span className="text-center text-muted-foreground font-medium">
                    Your Logo Here
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <Card className="p-8 bg-card/40 backdrop-blur-xl border-primary/30 text-center">
            <p className="text-lg text-muted-foreground">
              Interested in sponsoring? Contact{" "}
              <a 
                href="mailto:andy.han@redshifted.ca" 
                className="text-primary hover:text-primary/80 font-semibold underline decoration-primary/30 hover:decoration-primary/60 transition-colors"
              >
                andy.han@redshifted.ca
              </a>
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-32 px-4 pb-40">
        <div className="container max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-gradient mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "What is Catalyst?",
                a: "Catalyst is a high-energy hardware hackathon where students come together to build, learn, and innovate on cutting-edge tech challenges."
              },
              {
                q: "Who can participate?",
                a: "Catalyst is open to high school students of all skill levels. Whether you're a beginner or a seasoned hacker, you're welcome!"
              },
              {
                q: "Is there a fee to participate?",
                a: "Our price is TBD, depending on the donations from our generous sponsors, but it will be around $50-$100."
              },
              {
                q: "What should I bring?",
                a: "Just bring your laptop, charger, any necessary personal items, and lots of curiosity. We provide hardware kits and tools!"
              },
              {
                q: "How do I register?",
                a: "You can sign up through our official website. Registration opens soon—stay tuned!"
              }
            ].map((faq, i) => (
              <AccordionItem 
                key={i}
                value={`item-${i}`} 
                className="group border border-primary/20 rounded-2xl px-6 bg-card/30 backdrop-blur-sm hover:border-primary/40 transition-all data-[state=open]:border-primary/60 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/10"
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary py-6 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Index;
