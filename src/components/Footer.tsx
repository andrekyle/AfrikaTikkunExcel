import { BookOpen, Mail, Twitter, Youtube, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/images/logoeru.png" 
                alt="Eruditio" 
                className="h-14 w-auto" 
              />
            </div>
            <p className="text-sm text-muted-foreground">Empowering staff <br />with Data Analytics Skills
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Courses</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-excel-green transition-colors">Excel Fundamentals</a></li>
              <li><a href="#" className="hover:text-excel-green transition-colors">Advanced Excel</a></li>
              <li><a href="#" className="hover:text-excel-green transition-colors">VBA Programming</a></li>
              <li><a href="#" className="hover:text-excel-green transition-colors">AI in Excel</a></li>
              <li><a href="#" className="hover:text-excel-green transition-colors">Data Analytics</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-excel-green transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-excel-green transition-colors">Practice Files</a></li>
              <li><a href="#" className="hover:text-excel-green transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-excel-green transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-excel-green transition-colors">Support</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-md bg-excel-green/10 hover:bg-excel-green hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-md bg-excel-blue/10 hover:bg-excel-blue hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-md bg-learning-orange/10 hover:bg-learning-orange hover:text-primary-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-md bg-muted hover:bg-foreground hover:text-background transition-colors">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Eruditio. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
            <a href="#" className="hover:text-excel-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-excel-green transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-excel-green transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;