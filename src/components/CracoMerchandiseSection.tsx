import { ShoppingCart, Star, Package, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CracoMerchandiseSection = () => {
  const merchandise = [
    {
      id: 1,
      name: "Craco Marathon T-Shirt",
      price: 599,
      originalPrice: 799,
      image: "👕",
      category: "Apparel",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White", "Blue", "Orange"],
      bestseller: true,
      description: "Premium cotton t-shirt featuring Craco's adventure spirit",
    },
    {
      id: 2,
      name: "Craco Sailor Cap",
      price: 399,
      originalPrice: 499,
      image: "🧢",
      category: "Accessories",
      colors: ["Navy Blue", "White"],
      limited: true,
      description: "Official Craco sailor cap - just like our mascot wears!",
    },
    {
      id: 3,
      name: "Craco Plush Toy",
      price: 899,
      originalPrice: 1199,
      image: "🦀",
      category: "Collectibles",
      sizes: ["15cm", "25cm"],
      new: true,
      description:
        "Adorable plush version of Craco - perfect for kids and collectors",
    },
    {
      id: 4,
      name: "Craco Water Bottle",
      price: 349,
      originalPrice: 449,
      image: "🍾",
      category: "Accessories",
      colors: ["Blue", "Orange"],
      description: "BPA-free water bottle with Craco's motivational quotes",
    },
    {
      id: 5,
      name: "Craco Running Shorts",
      price: 699,
      originalPrice: 899,
      image: "🩳",
      category: "Apparel",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Navy", "Orange"],
      description: "Quick-dry running shorts with Craco's adventure map print",
    },
    {
      id: 6,
      name: "Craco Sticker Pack",
      price: 149,
      originalPrice: 199,
      image: "🏷️",
      category: "Collectibles",
      bestseller: true,
      description:
        "Set of 10 waterproof stickers featuring Craco's expressions",
    },
  ];

  const benefits = [
    {
      icon: Package,
      title: "Premium Quality",
      desc: "High-quality materials and prints",
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      desc: "Free shipping on orders above ₹500",
    },
    {
      icon: Star,
      title: "Limited Edition",
      desc: "Exclusive marathon merchandise",
    },
  ];

  return (
    <section id="shop" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm font-medium">Official Merchandise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Craco's
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              Adventure Store
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Take home a piece of the adventure! Get exclusive Craco merchandise
            and show your marathon spirit.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg"
              >
                <benefit.icon className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <div className="font-semibold text-sm">{benefit.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {benefit.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Merchandise Grid - Show only hero items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {merchandise.slice(0, 3).map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-medium transition-smooth group"
            >
              <div className="relative">
                <div className="bg-gradient-ocean p-8 text-center">
                  <div className="text-6xl mb-2 group-hover:scale-110 transition-transform">
                    {item.image}
                  </div>
                  <div className="absolute top-3 right-3 flex flex-col gap-1">
                    {item.bestseller && (
                      <Badge className="bg-yellow-500 text-yellow-50 text-xs">
                        Bestseller
                      </Badge>
                    )}
                    {item.limited && (
                      <Badge className="bg-red-500 text-red-50 text-xs">
                        Limited
                      </Badge>
                    )}
                    {item.new && (
                      <Badge className="bg-green-500 text-green-50 text-xs">
                        New
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-accent font-medium mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>

                  {/* Variants */}
                  <div className="space-y-2 mb-4">
                    {item.sizes && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          Sizes:
                        </span>
                        <div className="flex gap-1">
                          {item.sizes.map((size) => (
                            <span
                              key={size}
                              className="text-xs bg-muted px-2 py-1 rounded"
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {item.colors && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          Colors:
                        </span>
                        <div className="flex gap-1">
                          {item.colors.map((color) => (
                            <span
                              key={color}
                              className="text-xs bg-muted px-2 py-1 rounded"
                            >
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-foreground">
                      ₹{item.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{item.originalPrice}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      {Math.round((1 - item.price / item.originalPrice) * 100)}%
                      OFF
                    </Badge>
                  </div>

                  <Button className="w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button size="lg" className="shadow-soft">
            View Complete Store
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Use code <strong>CRACO25</strong> for 25% off!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CracoMerchandiseSection;
