import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star, Truck, Shield, Heart } from "lucide-react";
import CracoMerchandiseSection from "./CracoMerchandiseSection";

const ShopSection = () => {
  const featuredProducts = [
    {
      name: "Craco Limited Edition T-Shirt",
      price: "₹899",
      image: "/lovable-uploads/c0c27ab1-2592-4a1a-b7be-826296e14106.png",
      category: "Apparel",
      badge: "Limited",
      rating: 4.9,
      description: "Premium organic cotton tee featuring Craco artwork",
    },
    {
      name: "Marathon Finisher Medal",
      price: "₹1,499",
      image: "🏅",
      category: "Collectible",
      badge: "Exclusive",
      rating: 5.0,
      description: "Commemorative medal for marathon finishers",
    },
    {
      name: "Tech Running Vest",
      price: "₹2,199",
      image: "🏃",
      category: "Performance",
      badge: "Best Seller",
      rating: 4.8,
      description: "Moisture-wicking fabric with GPS pocket",
    },
    {
      name: "Goa Marathon Cap",
      price: "₹599",
      image: "🧢",
      category: "Accessories",
      badge: "New",
      rating: 4.7,
      description: "UV protection cap with marathon branding",
    },
  ];

  const benefits = [
    { icon: <Truck className="w-5 h-5" />, text: "Free Shipping" },
    { icon: <Shield className="w-5 h-5" />, text: "Quality Guaranteed" },
    { icon: <Heart className="w-5 h-5" />, text: "Runner Approved" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <CracoMerchandiseSection />
      <div className="container mt-4 mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm font-medium">Official Store</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Marathon
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              {" "}
              Merchandise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your exclusive Craco and marathon gear - limited edition items
            available only here!
          </p>
        </div>

        {/* Benefits */}
        <div className="flex justify-center gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-primary">
              {benefit.icon}
              <span className="text-sm font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-medium transition-all group"
            >
              <div className="relative">
                <div className="h-48 bg-gradient-primary/5 flex items-center justify-center">
                  {product.name.includes("Craco") ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  ) : (
                    <div className="text-6xl">{product.image}</div>
                  )}
                </div>
                <div className="absolute top-2 left-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      product.badge === "Limited"
                        ? "bg-red-100 text-red-700"
                        : product.badge === "Exclusive"
                        ? "bg-purple-100 text-purple-700"
                        : product.badge === "Best Seller"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {product.badge}
                  </span>
                </div>
                <div className="absolute top-2 right-2">
                  <div className="flex items-center gap-1 bg-background/90 px-2 py-1 rounded">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium">
                      {product.rating}
                    </span>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground mb-1">
                  {product.category}
                </div>
                <h3 className="font-bold text-sm mb-2">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-primary">
                    {product.price}
                  </div>
                  <Button
                    size="sm"
                    className="group-hover:scale-105 transition-transform"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            View Complete Store
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Use code <span className="font-semibold text-accent">RUNNER15</span>{" "}
            for 15% off your first order
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
