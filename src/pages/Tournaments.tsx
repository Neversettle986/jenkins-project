import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const Tournaments = () => {
  const majorTournaments = [
    {
      name: "All England Open Badminton Championships",
      established: "1899",
      description: "The world's oldest and most prestigious badminton tournament, often called the 'Wimbledon of Badminton.' Held annually in Birmingham, England, it attracts the world's best players.",
      significance: "Most prestigious individual tournament",
    },
    {
      name: "Olympic Games",
      established: "1992",
      description: "Badminton became an official Olympic sport at the 1992 Barcelona Games. Features five events: men's and women's singles, men's and women's doubles, and mixed doubles.",
      significance: "Highest level of international competition",
    },
    {
      name: "BWF World Championships",
      established: "1977",
      description: "The flagship event of the Badminton World Federation, held every year except Olympic years. Brings together the world's top players across all five disciplines.",
      significance: "Premier world championship event",
    },
    {
      name: "Thomas Cup",
      established: "1948",
      description: "The men's world team championship, named after Sir George Thomas. Teams compete in a knockout format with matches comprising singles and doubles rubbers.",
      significance: "Oldest team championship",
    },
    {
      name: "Uber Cup",
      established: "1956",
      description: "The women's world team championship, named after Betty Uber. Follows the same format as the Thomas Cup and is often held concurrently.",
      significance: "Premier women's team event",
    },
    {
      name: "Sudirman Cup",
      established: "1989",
      description: "The world mixed team championship featuring men's and women's singles, men's and women's doubles, and mixed doubles. Named after Indonesian badminton legend Dick Sudirman.",
      significance: "Only mixed-gender team competition",
    },
  ];

  const milestones = [
    {
      year: "1899",
      event: "First All England Championships held",
    },
    {
      year: "1934",
      event: "International Badminton Federation founded",
    },
    {
      year: "1948",
      event: "Inaugural Thomas Cup competition",
    },
    {
      year: "1956",
      event: "First Uber Cup tournament",
    },
    {
      year: "1977",
      event: "First BWF World Championships",
    },
    {
      year: "1989",
      event: "Inaugural Sudirman Cup",
    },
    {
      year: "1992",
      event: "Badminton debuts at Barcelona Olympics",
    },
    {
      year: "2007",
      event: "BWF Super Series (now World Tour) launched",
    },
  ];

  return (
    <div className="min-h-screen subtle-gradient py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Trophy className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Major Tournaments & Milestones
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The prestigious competitions that define excellence in badminton
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Major Tournaments */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Premier Tournaments</h2>
            <div className="space-y-6">
              {majorTournaments.map((tournament, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-hover transition-smooth">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <CardTitle className="text-xl">{tournament.name}</CardTitle>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                        Est. {tournament.established}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      {tournament.description}
                    </p>
                    <div className="bg-primary/10 rounded-lg p-3">
                      <p className="text-sm font-semibold text-primary">
                        {tournament.significance}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Historical Milestones */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Historic Milestones</h2>
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                    >
                      <div className="bg-primary text-primary-foreground font-bold rounded-lg px-3 py-2 min-w-[80px] text-center">
                        {milestone.year}
                      </div>
                      <p className="text-muted-foreground flex-1 pt-2">
                        {milestone.event}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Tournament Format */}
          <section>
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
      </div>
    </div>
  );
};

export default Tournaments;
