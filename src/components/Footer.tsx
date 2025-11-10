const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About This Project</h3>
            <p className="text-sm opacity-90">
              A comprehensive resource dedicated to preserving and sharing the rich history of badminton, 
              from its ancient origins to its modern Olympic status.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/origins" className="hover:text-secondary transition-smooth">
                  Origins of Badminton
                </a>
              </li>
              <li>
                <a href="/timeline" className="hover:text-secondary transition-smooth">
                  Historical Timeline
                </a>
              </li>
              <li>
                <a href="/key-figures" className="hover:text-secondary transition-smooth">
                  Key Figures
                </a>
              </li>
              <li>
                <a href="/Evolution" className="hover:text-secondary transition-smooth">
                  Evolution of the Game
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://bwfbadminton.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-smooth"
                >
                  Badminton World Federation
                </a>
              </li>
              <li>
                <a 
                  href="https://olympics.com/en/sports/badminton/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-smooth"
                >
                  Olympic Badminton
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Badminton History Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
