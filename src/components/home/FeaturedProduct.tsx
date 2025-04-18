
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FeaturedProductProps {
  product: Product;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add to cart logic would go here
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add to wishlist logic would go here
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Product</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={product.images[0] || 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'} 
              alt={product.name} 
              className="w-full h-auto transition-transform duration-700 hover:scale-105"
            />
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-brand-600 font-medium bg-brand-50 px-3 py-1 rounded-full">FEATURED</span>
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-gray-600 ml-1">{product.rating} Rating</span>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{product.name}</h3>
            
            <div className="flex items-center mb-6">
              <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through ml-3">${product.originalPrice.toFixed(2)}</span>
              )}
              {product.originalPrice && (
                <span className="ml-3 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>
            
            <p className="text-gray-600 mb-8 line-clamp-3">{product.description}</p>
            
            <div className="mb-8">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Colors</h4>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <div 
                    key={color.name}
                    className="w-8 h-8 rounded-full cursor-pointer border-2 border-transparent hover:border-brand-500 transition-all"
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Sizes</h4>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <div 
                    key={size}
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 cursor-pointer hover:border-brand-500 hover:bg-brand-50 transition-all"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="flex-1 bg-brand-600 hover:bg-brand-700 text-white"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={16} className="mr-2" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-brand-600 text-brand-600 hover:bg-brand-50"
                onClick={handleAddToWishlist}
              >
                <Heart size={16} className="mr-2" />
                Add to Wishlist
              </Button>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                to={`/product/${product.id}`} 
                className="text-brand-600 hover:text-brand-700 text-sm font-medium story-link"
              >
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
