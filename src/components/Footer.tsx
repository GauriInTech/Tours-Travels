import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <a href="#home" className="text-2xl font-serif font-bold tracking-wide text-background block mb-4">
              Shreya Tours & Travels
            </a>
            <p className="text-background/70 mb-6 leading-relaxed">
              Premium spiritual travel and Buddhist pilgrimage tours, guiding souls to inner peace since 2018.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-primary transition-colors" aria-label="Facebook">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors" aria-label="YouTube">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors" aria-label="WhatsApp">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-background">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-background/70 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#destinations" className="text-background/70 hover:text-primary transition-colors">Destinations</a></li>
              <li><a href="#packages" className="text-background/70 hover:text-primary transition-colors">Tour Packages</a></li>
              <li><a href="#about" className="text-background/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-background/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-background">Destinations</h4>
            <ul className="space-y-3">
              <li><a href="#destinations" className="text-background/70 hover:text-primary transition-colors">Bodh Gaya</a></li>
              <li><a href="#destinations" className="text-background/70 hover:text-primary transition-colors">Lumbini</a></li>
              <li><a href="#destinations" className="text-background/70 hover:text-primary transition-colors">Varanasi</a></li>
              <li><a href="#destinations" className="text-background/70 hover:text-primary transition-colors">Dharamshala</a></li>
              <li><a href="#destinations" className="text-background/70 hover:text-primary transition-colors">Ladakh & Sikkim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-background">Newsletter</h4>
            <p className="text-background/70 mb-4">Subscribe for spiritual insights and travel inspiration.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-background/10 border border-background/20 text-background px-4 py-2 w-full focus:outline-none focus:border-primary placeholder:text-background/40 rounded-none"
                required
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 font-medium transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>&copy; {new Date().getFullYear()} Shreya Tours & Travels. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
