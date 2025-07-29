interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  alt: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl product-card overflow-hidden">
      <img 
        src={product.image}
        alt={product.alt}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold text-forest-green mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-warm-brown">
            ₹{product.price}{product.price >= 800 ? '/kg' : ''}
          </span>
          <button className="bg-forest-green text-white px-4 py-2 rounded-full hover:bg-forest-green/80 transition-colors">
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
