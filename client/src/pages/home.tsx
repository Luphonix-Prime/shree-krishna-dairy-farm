import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ImageSlider from "@/components/ui/image-slider";
import ProductCard from "@/components/ui/product-card";
import ContactForm from "@/components/ui/contact-form";
import images from "@/assets/images/Gheelogo.png";
import images2 from "@/assets/images/logo.png";
import images3 from "@/assets/images/images.jpg";

const products = [
  {
    id: 1,
    name: "Halvo",
    price: 40,
    description: "Traditional sweet semolina dessert",
    image: "https://pixabay.com/get/g762a60712da48813d63740e47b470e0039f7ce2a534d172bd7c51f065b2b95dd5cf8ac15475a51556124dd29e2522f708d1c529449d861dd3a9f5b5c282fd6fa_1280.jpg",
    alt: "Traditional halvo served in brass bowl"
  },
  {
    id: 2,
    name: "Penda",
    price: 60,
    description: "Rich milk-based traditional sweet",
    image: "https://pixabay.com/get/gda2876a21e0c8b6d27319efa8cf686a67a9da26a1c4d6beb96f4b133a6aba7fda39a753aaab3a3b44336a288a51edc71_1280.jpg",
    alt: "Traditional penda sweets arranged on banana leaf"
  },
  {
    id: 3,
    name: "Shuddh Ghee",
    price: 800,
    description: "Pure clarified butter - Jo sabka dil jeet le",
    image: "https://pixabay.com/get/g92626d276039eff2644f1019310104cb8da7aecb7542dc12a3d10d879886028343581dc5b5a45cbae21c58bf4d383132a5ab59e0022e6662edc7c4c771fa1022_1280.jpg",
    alt: "Pure golden ghee in traditional brass container"
  },
  {
    id: 4,
    name: "Dahi",
    price: 80,
    description: "Fresh homemade yogurt",
    image: "https://pixabay.com/get/gdf222b02e1bea88777039d096ab17424238cbeb4cf389f33297e04afc6d33da42c2ea027e67e7b30ef9e831249cf4d6e574987bccbd4bb407b0a7ba94ca274bd_1280.jpg",
    alt: "Fresh yogurt in traditional earthen pot"
  },
  {
    id: 5,
    name: "Paneer",
    price: 80,
    description: "Fresh cottage cheese",
    image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Fresh paneer cubes on wooden board"
  },
  {
    id: 6,
    name: "Shikand",
    price: 80,
    description: "Sweet strained yogurt dessert",
    image: "https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Traditional shrikhand garnished with nuts"
  },
  {
    id: 7,
    name: "Masaala Chhaas",
    price: 80,
    description: "Spiced traditional buttermilk",
    image: "https://pixabay.com/get/g3e60a5920e3670019241924a6aa8f565355d3030a8c69f2b268f76cd6242a25a8cfbcd7770ab863d4d6e81cba6971b183003e16e98707c7644a6324d46c619fd_1280.jpg",
    alt: "Spiced buttermilk with herbs in traditional glass"
  }
];

const sliderImages1 = [
  {
    src: "@assets/Ghee logo_1753777028473.png",
    alt: "Premium Quality Ghee - Jo sabka dil jeet le"
  },
  {
    src: "@assets/Ghee logo (1)_1753776187668.png",
    alt: "Quality Ghee with traditional packaging and branding"
  },
  {
    src: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Fresh milk being poured into traditional vessel"
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Traditional ghee making process in copper vessels"
  },
  {
    src: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Cows grazing in green pasture"
  },
  {
    src: "https://pixabay.com/get/gdaef75874b1ce4d09e28202844fc6db6960cc65214eee3aca1d24bdb50d139cd4a33616793beaa73fbd2a24b42f8035508be56ba98d32fa8ae1057a71f4bc983_1280.jpg",
    alt: "Traditional paneer making on wooden surface"
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Rural farm setting with milk containers"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Traditional dairy farm with Krishna blessings"
  },
  {
    src: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Fresh cream and milk products in traditional setting"
  },
  {
    src: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Organic farm with happy healthy cows"
  }
];

const sliderImages2 = [
  {
    src: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Traditional Indian sweets and dairy products display"
  },
  {
    src: "https://pixabay.com/get/g44352154ad1f38893f2be65bbcf652cd411737d198516a2e48cbbb1f3cfa260ffe4f0f65b100fab2445c05569dfda2fc8f03db8e41659f0cf2b24bf5e6fb14b4_1280.jpg",
    alt: "Fresh yogurt in traditional clay pots"
  },
  {
    src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Organic farm with happy cows"
  },
  {
    src: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Traditional buttermilk in glasses with herbs"
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Village dairy farm morning scene"
  },
  {
    src: "https://images.unsplash.com/photo-1563612116625-3012372fccce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Fresh paneer cubes on wooden cutting board"
  },
  {
    src: "https://images.unsplash.com/photo-1581883497019-7a5ffe775e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Traditional brass milk containers at farm"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Fresh dairy products in traditional Indian kitchen"
  }
];

export default function Home() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-cream font-inter">
      <Navigation />
      
      <HeroSection onExploreClick={scrollToProducts} />

      {/* Image Sliders Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-forest-green mb-4">
            Farm Fresh Gallery
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Discover the natural beauty and traditional methods behind our authentic dairy products
          </p>
        </div>

        <div className="mb-8">
          <ImageSlider images={sliderImages1} direction="left" />
        </div>
        
        <div>
          <ImageSlider images={sliderImages2} direction="right" />
        </div>
      </section>

      {/* Featured Product - Premium Ghee */}
      <section className="py-20 bg-gradient-to-br from-cream to-light-beige">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={images2}
                  alt="Shree Krishna Dairy Farm Logo"
                  className="w-12 h-12 object-contain"
                />
                <div className="inline-block bg-warm-brown text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured Product
                </div>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-forest-green">
                Premium Quality Ghee
              </h2>
              <p className="text-2xl text-warm-brown font-semibold italic">
                "Jo sabka dil jeet le"
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Purely made, freshly churned ghee with rich aroma and authentic taste. 
                Crafted with care using traditional methods passed down through generations.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-warm-brown">₹800/kg</span>
                <span className="bg-forest-green text-white px-4 py-2 rounded-full text-sm">
                  Fresh Every Day
                </span>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="bg-warm-brown hover:bg-warm-brown/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  <i className="fas fa-phone mr-2"></i>
                  Order Now: +91-9426620002
                </button>
                <button className="border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                  <i className="fas fa-envelope mr-2"></i>
                  Email Us
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src={images}
                alt="Premium Quality Ghee - Jo sabka dil jeet le"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products & Pricing Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-white to-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-forest-green mb-4">
              Our Premium Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handcrafted with love using traditional methods passed down through generations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Farm Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-forest-green mb-4">
              Our Traditional Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cow to cup, every step is done with love and traditional methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                  alt="Happy cows grazing in green fields"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-warm-brown text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-forest-green mb-2">Happy Cows</h3>
              <p className="text-gray-600 text-sm">Our cows graze freely in organic pastures, receiving the best care and nutrition</p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                  alt="Fresh milk collection in traditional containers"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-warm-brown text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-forest-green mb-2">Fresh Milking</h3>
              <p className="text-gray-600 text-sm">Daily fresh milking in hygienic conditions using traditional methods</p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                  alt="Traditional processing of dairy products"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-warm-brown text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-forest-green mb-2">Traditional Processing</h3>
              <p className="text-gray-600 text-sm">Time-honored methods to create authentic dairy products with rich flavors</p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1581883497019-7a5ffe775e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                  alt="Quality packaging and delivery of fresh products"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-warm-brown text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-forest-green mb-2">Fresh Delivery</h3>
              <p className="text-gray-600 text-sm">Daily fresh delivery to ensure you get the best quality products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-cream to-light-beige">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-forest-green mb-4">
              Farm Life Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into our daily life at the dairy farm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Krishna blessings at the dairy farm"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-playfair font-bold">Krishna's Blessings</h4>
                <p className="text-sm">Sacred traditions guide our work</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Fresh cream and traditional dairy products"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-playfair font-bold">Fresh Products</h4>
                <p className="text-sm">Daily fresh dairy delights</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Organic farm with healthy cows"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-playfair font-bold">Organic Farming</h4>
                <p className="text-sm">Natural and sustainable practices</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Traditional Indian kitchen with dairy products"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-playfair font-bold">Traditional Kitchen</h4>
                <p className="text-sm">Heritage recipes and methods</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Happy cows in green pastures"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-playfair font-bold">Happy Animals</h4>
                <p className="text-sm">Well-cared and loved cows</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1563612116625-3012372fccce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Fresh paneer on cutting board"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-playfair font-bold">Fresh Paneer</h4>
                <p className="text-sm">Handmade cottage cheese</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
               src={images2}
                alt="Lord Krishna with cow in traditional pastoral setting"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-forest-green">
                About Our Farm
              </h2>
              
              <div className="prose prose-lg">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  At <span className="font-semibold text-warm-brown">Shree Krushna Dairy Farm</span>, we are dedicated to providing pure and traditional dairy products. With a commitment to quality and authenticity, we ensure that every product is made with care and love.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our heritage spans generations of traditional dairy farming, where we blend time-honored techniques with modern hygiene standards. Every cow in our farm is treated with respect and care, following the ancient Vedic principles of <em>Ahimsa</em> and natural farming.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Established in 1978, our farm has been serving the community with fresh, organic dairy products for over four decades. We believe in sustainable farming practices and maintaining the highest standards of cleanliness and quality in all our products.
                </p>
              </div>

              <div className="flex items-center space-x-4 bg-light-beige rounded-2xl p-6">
                <img 
                  src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                  alt="Pure milk packet representing quality dairy products"
                  className="w-16 h-16 rounded-full shadow-lg object-cover"
                />
                <div>
                  <h4 className="font-playfair font-bold text-forest-green">100% Pure & Natural</h4>
                  <p className="text-gray-600 text-sm">No preservatives, no artificial additives</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-cream rounded-xl">
                  <i className="fas fa-cow text-warm-brown text-2xl mb-2"></i>
                  <p className="font-semibold text-forest-green">25+ Happy Cows</p>
                </div>
                <div className="text-center p-4 bg-cream rounded-xl">
                  <i className="fas fa-award text-warm-brown text-2xl mb-2"></i>
                  <p className="font-semibold text-forest-green">Since 1995</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gradient-to-b from-light-beige to-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-forest-green mb-4">
              Customer Testimonials
              <span className="block mt-2 text-3xl">ગ્રાહકોના અભિપ્રાય</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by generations across Gujarat
              <span className="block mt-1">ગુજરાતભરમાં પેઢીઓથી વિશ્વસનીય</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <img 
                  src={images3}
                  alt="Happy Customer - ખુશ ગ્રાહક"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-forest-green">Priya Patel | પ્રિયા પટેલ</h4>
                  <div className="flex text-yellow-500">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic mb-2">
                "The ghee from Shree Krishna Dairy Farm is truly pure and traditional. We now exclusively use their ghee at home."
              </p>
              <p className="text-gray-600 italic">
                "શ્રી કૃષ્ણ ડેરી ફાર્મનું ઘી સાચે જ શુદ્ધ અને પારંપરિક સ્વાદવાળું છે. અમારા ઘરમાં હવે માત્ર આ જ ઘી વપરાય છે."
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <img 
                  src={images3}
                  alt="Happy Customer - ખુશ ગ્રાહક"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-forest-green">Meeta Desai | મીતા દેસાઈ</h4>
                  <div className="flex text-yellow-500">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic mb-2">
                "The quality of dahi and chaas is excellent. The fresh taste and service are truly commendable."
              </p>
              <p className="text-gray-600 italic">
                "દહીં અને છાશની ક્વોલિટી એકદમ સરસ છે. તાજગીભર્યો સ્વાદ અને સેવા ખરેખર પ્શંસનીય છે."
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <img 
                  src={images3}
                  alt="Happy Customer - ખુશ ગ્રાહક"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-forest-green">Rajesh Shah | રાજેશ શાહ</h4>
                  <div className="flex text-yellow-500">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic mb-2">
                "The quality of paneer and shrikhand is excellent. Tastes just like homemade."
              </p>
              <p className="text-gray-600 italic">
                "પનીર અને શ્રીખંડની ક્વોલિટી એકદમ ઉત્તમ છે. ઘરે બનાવ્યા જેવો સ્વાદ મળે છે."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-forest-green mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our dairy products
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-playfair font-bold text-xl text-forest-green mb-3">
                Q: Are your products 100% organic and natural?
              </h3>
              <p className="text-gray-700">
                A: Yes, all our products are made from organic milk from cows that graze in natural pastures. We don't use any artificial preservatives, chemicals, or additives. Our cows are fed natural fodder and treated with utmost care following traditional Vedic principles.
              </p>
            </div>

            <div className="bg-light-beige rounded-2xl p-6">
              <h3 className="font-playfair font-bold text-xl text-forest-green mb-3">
                Q: How fresh are your dairy products?
              </h3>
              <p className="text-gray-700">
                A: We prepare and deliver fresh products daily. Our milk is collected every morning, and products like paneer, dahi, and ghee are made fresh daily using traditional methods. We ensure same-day delivery for maximum freshness.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-playfair font-bold text-xl text-forest-green mb-3">
                Q: Do you deliver across Ahmedabad?
              </h3>
              <p className="text-gray-700">
                A: Yes, we deliver fresh dairy products across Ahmedabad and nearby areas. Contact us at +91-9426620002 to check if we deliver to your location and to schedule regular deliveries.
              </p>
            </div>

            <div className="bg-light-beige rounded-2xl p-6">
              <h3 className="font-playfair font-bold text-xl text-forest-green mb-3">
                Q: What makes your ghee special?
              </h3>
              <p className="text-gray-700">
                A: Our ghee is made using the traditional bilona method from cow milk. It's hand-churned and slow-cooked to get the perfect golden color, rich aroma, and authentic taste. As our tagline says - "Jo sabka dil jeet le" - it truly wins everyone's heart!
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-playfair font-bold text-xl text-forest-green mb-3">
                Q: Can I visit your dairy farm?
              </h3>
              <p className="text-gray-700">
                A: Absolutely! We welcome visitors to see our traditional farming methods and meet our happy cows. Please call us at +91-9426620002 to schedule a visit. It's a great experience for families and children to understand where their food comes from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-cream to-light-beige">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-forest-green mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our products? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="font-playfair text-2xl font-bold text-forest-green mb-6">
                  Connect With Us
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-warm-brown text-white p-3 rounded-full">
                    <i className="fas fa-cow text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-green">Krishna's Blessings</h4>
                    <p className="text-gray-600">Visit our sacred farm</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-forest-green text-white p-3 rounded-full">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-green">Call Us</h4>
                    <p className="text-gray-600">+91-9426620002</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-warm-brown text-white p-3 rounded-full">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-green">Email Us</h4>
                    <p className="text-gray-600">shreekrishnadairyfarm78@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-forest-green text-white p-3 rounded-full">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-green">Visit Us</h4>
                    <p className="text-gray-600">Shree Krishna Dairy Farm, Opp. L.T. Munsha Ladies Hostel, Near Swastik Cross Road, Navrangpura, Ahmedabad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-green text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={images2}
                  alt="Shree Krishna Dairy Farm Logo"
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
                <span className="font-playfair font-bold text-xl">Shree Krushna Dairy</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Preserving traditional dairy farming with love, care, and devotion to Lord Krishna.
              </p>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Shree Krushna Dairy Farm. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
