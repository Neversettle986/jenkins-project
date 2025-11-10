import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Origins = () => {
  return (
    <div className="min-h-screen subtle-gradient py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Origins of Badminton
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tracing the ancient roots of one of the world's fastest racquet sports
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Ancient Origins */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Ancient Beginnings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The origins of badminton can be traced back over 2,000 years to ancient civilizations 
                in Asia and Europe. Games involving shuttlecocks and racquets were played in ancient 
                Greece, China, and India, though they bore little resemblance to the modern sport.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In ancient China, a game called "Ti Jian Zi" involved keeping a feathered projectile 
                airborne using feet. Meanwhile, in India, a game called "Poona" was played by British 
                military officers in the 1860s, which would directly influence the development of modern badminton.
              </p>
            </CardContent>
          </Card>

          {/* The Game of Poona */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">The Game of Poona</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The game of Poona was played in Pune, India, during the 19th century. British Army 
                officers stationed there adapted the game and brought it back to England in the 1870s. 
                The game was initially called "Poonah" and was played in the backyards and ballrooms 
                of English estates.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Duke of Beaufort is credited with introducing the game to English society at his 
                country estate, Badminton House in Gloucestershire, around 1873. This is where the 
                sport acquired its modern name.
              </p>
            </CardContent>
          </Card>

          {/* Formal Development */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Birth of Modern Badminton</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                In 1877, the first set of written rules was drawn up by the newly formed Bath 
                Badminton Club. These rules were further refined in 1887 when J.H.E. Hart of the 
                Pune Rifle Club drew up regulations that formed the basis of today's rules.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Badminton Association of England was formed in 1893, and the first Badminton 
                competition, the All England Championships, was held in 1899. This marked the 
                transition of badminton from a casual garden party game to a serious competitive sport.
              </p>
            </CardContent>
          </Card>

          {/* Global Spread */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Global Expansion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                By the early 20th century, badminton had spread throughout the British Empire and 
                beyond. The sport gained particular popularity in Denmark, Sweden, Indonesia, Malaysia, 
                and later China, Korea, and Japan, where it continues to dominate today.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The International Badminton Federation (now the Badminton World Federation) was 
                established in 1934, with nine founding member nations. This marked the beginning 
                of badminton as a truly global sport.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Origins;
