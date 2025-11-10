import HeroSlider from "@/components/HeroSlider";
import { Calendar, Trophy, Users, History } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  const features = [
    {
      icon: <History className="w-12 h-12 text-primary" />,
      title: "Ancient Origins",
      description: "Discover how badminton evolved from ancient games in India and China to the sport we know today.",
      link: "/origins",
    },
    {
      icon: <Calendar className="w-12 h-12 text-primary" />,
      title: "Historical Timeline",
      description: "Explore key milestones from the sport's inception to its modern Olympic status.",
      link: "/timeline",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Legendary Figures",
      description: "Learn about the players and pioneers who shaped badminton history.",
      link: "/key-figures",
    },
    {
      icon: <Trophy className="w-12 h-12 text-primary" />,
      title: "Major Tournaments",
      description: "From the All England Open to the Olympics, discover the prestigious competitions.",
      link: "/tournaments",
    },
  ];

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Introduction Section */}
      <section className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Welcome to Badminton History
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Badminton is one of the world's most popular sports, enjoyed by millions across the globe. 
              This website is dedicated to preserving and sharing the fascinating journey of badminton—from 
              its humble beginnings in ancient civilizations to its status as an Olympic sport. Explore the 
              rich history, legendary players, and defining moments that have shaped this elegant and 
              dynamic game.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Explore Badminton's Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <a
                key={index}
                href={feature.link}
                className="group"
              >
                <Card className="h-full shadow-elegant hover:shadow-hover transition-smooth border-2 hover:border-primary">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="hero-gradient py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Journey Through Time
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            From ancient courts to modern arenas, discover the evolution of a sport that has 
            captivated generations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/origins"
              className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-smooth shadow-elegant"
            >
              Discover Origins
            </a>
            <a
              href="/timeline"
              className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-smooth shadow-elegant"
            >
              View Timeline
            </a>
          </div>
        </div>
      </section>

      {/* Tournament Format */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Tournament Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-xl">Individual Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Single-elimination knockout format in most tournaments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Best-of-three games (first to 21 points)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Seeding based on world rankings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Qualification rounds for lower-ranked players</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-xl">Team Championships</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Group stage followed by knockout rounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Five matches per tie (3 singles, 2 doubles)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Teams represent their nations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Held biennially (every two years)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
