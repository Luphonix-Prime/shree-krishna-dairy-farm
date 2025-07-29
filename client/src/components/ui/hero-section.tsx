import images2 from "@/assets/images/download.jpg";
interface HeroSectionProps {
  onExploreClick: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image with Gujarati Krishna banner */}
      <div className="absolute inset-0 z-0">
        <img 
          src={images2}
          alt="Krishna with cows in pastoral setting - traditional Gujarati dairy farm scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/70 to-warm-brown/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to<br />
          <span className="text-yellow-300">Shree Krushna</span> Dairy Farm
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
          Pure • Traditional • Authentic Gujarati Dairy Products
        </p>
        <button 
          onClick={onExploreClick}
          className="bg-warm-brown hover:bg-warm-brown/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <i className="fas fa-leaf mr-2"></i>
          Explore Products
        </button>
      </div>
    </header>
  );
}
