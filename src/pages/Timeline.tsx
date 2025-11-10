import { Card, CardContent } from "@/components/ui/card";

const Timeline = () => {
  const timelineEvents = [
    {
      year: "2000+ years ago",
      title: "Ancient Origins",
      description: "Games involving shuttlecocks played in ancient China, India, and Greece.",
      era: "ancient",
    },
    {
      year: "1860s",
      title: "Game of Poona",
      description: "British military officers play Poona in India, precursor to modern badminton.",
      era: "early",
    },
    {
      year: "1873",
      title: "Birth at Badminton House",
      description: "Duke of Beaufort introduces the game at his estate, giving badminton its name.",
      era: "early",
    },
    {
      year: "1877",
      title: "First Written Rules",
      description: "Bath Badminton Club establishes the first set of written rules.",
      era: "early",
    },
    {
      year: "1893",
      title: "Badminton Association Founded",
      description: "Badminton Association of England formed, standardizing the sport.",
      era: "early",
    },
    {
      year: "1899",
      title: "All England Championships",
      description: "First All England Open Badminton Championships held.",
      era: "early",
    },
    {
      year: "1934",
      title: "International Federation",
      description: "International Badminton Federation (now BWF) established with 9 members.",
      era: "modern",
    },
    {
      year: "1948",
      title: "Thomas Cup Begins",
      description: "Inaugural Thomas Cup men's team championship held.",
      era: "modern",
    },
    {
      year: "1956",
      title: "Uber Cup Debuts",
      description: "First Uber Cup women's team championship takes place.",
      era: "modern",
    },
    {
      year: "1977",
      title: "World Championships",
      description: "First BWF World Championships held in Malmö, Sweden.",
      era: "modern",
    },
    {
      year: "1989",
      title: "Sudirman Cup",
      description: "Inaugural Sudirman Cup mixed team championship.",
      era: "modern",
    },
    {
      year: "1992",
      title: "Olympic Sport",
      description: "Badminton debuts as an official Olympic sport in Barcelona.",
      era: "olympic",
    },
    {
      year: "1996",
      title: "Mixed Doubles Added",
      description: "Mixed doubles added to Olympic program at Atlanta Games.",
      era: "olympic",
    },
    {
      year: "2007",
      title: "BWF Super Series",
      description: "BWF Super Series (now World Tour) launched, modernizing professional circuit.",
      era: "olympic",
    },
    {
      year: "2018",
      title: "New Scoring System",
      description: "BWF introduces 5x11 scoring system in trial events.",
      era: "olympic",
    },
    {
      year: "2024",
      title: "Modern Era",
      description: "Badminton continues to grow globally with 190+ member nations.",
      era: "olympic",
    },
  ];

  const getEraColor = (era: string) => {
    switch (era) {
      case "ancient":
        return "bg-amber-100 text-amber-900 border-amber-300";
      case "early":
        return "bg-blue-100 text-blue-900 border-blue-300";
      case "modern":
        return "bg-green-100 text-green-900 border-green-300";
      case "olympic":
        return "bg-primary/10 text-primary border-primary/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen subtle-gradient py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Timeline of Badminton History
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A chronological journey through the sport's most significant moments
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full" />

            {/* Timeline Events */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <Card className="shadow-elegant hover:shadow-hover transition-smooth">
                      <CardContent className="p-6">
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 border ${getEraColor(
                            event.era
                          )}`}
                        >
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>

          {/* Era Legend */}
          <Card className="shadow-elegant mt-12">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Era Guide</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-300" />
                  <span className="text-sm">Ancient</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-300" />
                  <span className="text-sm">Early Modern</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-300" />
                  <span className="text-sm">Modern Era</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <span className="text-sm">Olympic Era</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
