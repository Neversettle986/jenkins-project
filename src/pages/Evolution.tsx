import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Evolution = () => {
  return (
    <div className="min-h-screen subtle-gradient py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Evolution Through the Ages
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How badminton transformed from a leisurely pastime to an Olympic sport
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Early Rules */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Establishing the Rules (1870s-1900s)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The formalization of badminton rules began in the late 19th century. Early versions 
                of the game varied significantly in court dimensions, scoring systems, and equipment 
                specifications. The Bath Badminton Club's 1877 rules and J.H.E. Hart's 1887 regulations 
                provided the foundation for standardization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Key developments included establishing the court dimensions (13.4m x 6.1m for doubles), 
                the height of the net (1.55m at the edges), and the scoring system. The shuttlecock's 
                design was also standardized, using 16 goose feathers attached to a cork base.
              </p>
            </CardContent>
          </Card>

          {/* Equipment Evolution */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Evolution of Equipment (1900s-1950s)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Early badminton racquets were made of wood and were much heavier than modern designs. 
                The 1960s saw the introduction of steel and aluminum racquets, which were lighter and 
                more durable. The 1980s brought carbon fiber technology, revolutionizing racquet design 
                with significantly lighter and stronger materials.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Shuttlecocks also evolved, with synthetic alternatives being developed for practice and 
                recreational play, though feathered shuttlecocks remain the standard for professional 
                competition. String technology advanced from natural gut to synthetic materials, offering 
                better durability and performance.
              </p>
            </CardContent>
          </Card>

          {/* International Growth */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">International Development (1930s-1970s)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The formation of the International Badminton Federation in 1934 marked a crucial step 
                in badminton's global development. Initially dominated by European nations, the sport 
                began to flourish in Asia during the post-World War II era.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Thomas Cup (men's team championship) was introduced in 1948, followed by the Uber 
                Cup (women's team championship) in 1956. These competitions helped establish badminton 
                as a major international sport and showcased emerging powerhouses from Asia, particularly 
                Indonesia, Malaysia, and China.
              </p>
            </CardContent>
          </Card>

          {/* Olympic Era */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">The Olympic Era (1992-Present)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Badminton was introduced as an Olympic sport at the 1992 Barcelona Games, marking its 
                arrival on the world's biggest sporting stage. Initially featuring four events (men's 
                and women's singles and doubles), mixed doubles was added at the 1996 Atlanta Olympics.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Olympic era brought increased professionalism, with the establishment of the BWF 
                World Tour in 2007 (replacing the Grand Prix circuit) and significant improvements in 
                player training, sports science, and global media coverage. Modern badminton is 
                characterized by exceptional athleticism, with rallies reaching speeds over 400 km/h 
                and requiring extraordinary reflexes and endurance.
              </p>
            </CardContent>
          </Card>

          {/* Modern Innovations */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Contemporary Developments (2000s-Present)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Recent years have seen technological innovations including electronic line calling systems, 
                Hawk-Eye technology for instant replays, and advanced analytics for player performance. 
                The BWF has also introduced new scoring systems and rule changes to make the game more 
                spectator-friendly and television-compatible.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The COVID-19 pandemic accelerated digital transformation in badminton, with virtual 
                training programs, online tournaments, and enhanced streaming services. Today, badminton 
                continues to evolve with a focus on player welfare, sustainability in equipment 
                manufacturing, and expanding the sport's reach to new markets and demographics.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Evolution;
