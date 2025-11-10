import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const KeyFigures = () => {
  const legends = [
    {
      name: "Sir George Thomas",
      era: "1900s-1920s",
      achievement: "Founder of the Thomas Cup",
      description: "British player and administrator who donated the Thomas Cup trophy for international men's team competition in 1939. Won 21 All England titles across singles, doubles, and mixed doubles.",
      legacy: "Pioneer",
    },
    {
      name: "Rudy Hartono",
      era: "1960s-1970s",
      achievement: "8× All England Champion",
      description: "Indonesian legend who won the All England Championships eight times (1968-1974, 1976), including seven consecutive titles. Dominated men's singles during the golden era of Indonesian badminton.",
      legacy: "Champion",
    },
    {
      name: "Lin Dan",
      era: "2000s-2010s",
      achievement: "2× Olympic Gold Medalist",
      description: "Chinese superstar known as 'Super Dan.' Two-time Olympic champion (2008, 2012), five-time World Champion, and the only player to complete the 'Super Grand Slam' of all major titles.",
      legacy: "Legend",
    },
    {
      name: "Gao Ling",
      era: "1990s-2000s",
      achievement: "4× Olympic Medalist",
      description: "Chinese doubles specialist who won Olympic medals in mixed and women's doubles. Known for exceptional tactical awareness and partnership chemistry with multiple partners.",
      legacy: "Icon",
    },
    {
      name: "Taufik Hidayat",
      era: "2000s-2010s",
      achievement: "Olympic Gold Medalist 2004",
      description: "Indonesian player famous for his backhand smash technique. Olympic champion at Athens 2004 and World Champion in 2005, inspiring a new generation of Indonesian players.",
      legacy: "Innovator",
    },
    {
      name: "Zhang Ning",
      era: "1990s-2010s",
      achievement: "2× Olympic Champion",
      description: "Chinese women's singles player who won Olympic gold medals at Athens 2004 and Beijing 2008. At 33, became the oldest Olympic badminton champion, showcasing remarkable longevity.",
      legacy: "Champion",
    },
  ];

  return (
    <div className="min-h-screen subtle-gradient py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Key Figures in Badminton History
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating the legendary players and pioneers who shaped the sport
          </p>
        </header>

        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <Card className="shadow-elegant mb-8">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                Throughout badminton's history, certain individuals have transcended the sport, 
                leaving indelible marks through their skill, dedication, and innovation. From the 
                early pioneers who formalized the game to modern champions who have pushed the 
                boundaries of athleticism, these figures represent the very best of badminton.
              </p>
            </CardContent>
          </Card>

          {/* Legends Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legends.map((legend, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-hover transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{legend.name}</CardTitle>
                    <Badge variant="secondary">{legend.legacy}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{legend.era}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <p className="font-semibold text-primary">{legend.achievement}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {legend.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Organizations Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Important Organizations
            </h2>
            <div className="space-y-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Badminton World Federation (BWF)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Founded in 1934 as the International Badminton Federation, the BWF is the 
                    international governing body for badminton. With over 190 member associations, 
                    it oversees all major international competitions, develops the sport globally, 
                    and maintains the rules and regulations of badminton.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">All England Open Badminton Championships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Established in 1899, the All England Open is the world's oldest and most 
                    prestigious badminton tournament. Often referred to as the "Wimbledon of 
                    Badminton," it has been the stage for countless historic moments and remains 
                    one of the sport's most coveted titles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFigures;
