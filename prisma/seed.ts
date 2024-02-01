const { PrismaClient } = require("@prisma/client");
const prismadb = new PrismaClient();

async function seedProducts() {
  try {
    await prismadb.products.create({
      data: {
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: {
          create: {
            name: "smartphones",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/1/1.jpg",
          "https://cdn.dummyjson.com/product-images/1/2.jpg",
          "https://cdn.dummyjson.com/product-images/1/3.jpg",
        ],
      },
    });

    await prismadb.products.create({
      data: {
        title: "iPhone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: {
          create: {
            name: "smartphones",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/2/1.jpg",
          "https://cdn.dummyjson.com/product-images/2/2.jpg",
          "https://cdn.dummyjson.com/product-images/2/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Samsung Universe 9",
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: {
          create: {
            name: "smartphones",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
        images: ["https://cdn.dummyjson.com/product-images/3/1.jpg"],
      },
    });
    await prismadb.products.create({
      data: {
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: {
          create: {
            name: "smartphones",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/4/1.jpg",
          "https://cdn.dummyjson.com/product-images/4/2.jpg",
          "https://cdn.dummyjson.com/product-images/4/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Huawei P30",
        description:
          "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: {
          create: {
            name: "smartphones",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/5/1.jpg",
          "https://cdn.dummyjson.com/product-images/5/2.jpg",
          "https://cdn.dummyjson.com/product-images/5/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "MacBook Pro",
        description:
          "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        brand: "Apple",
        category: {
          create: {
            name: "laptops",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
        images: [
          "https://cdn.dummyjson.com/product-images/6/1.png",
          "https://cdn.dummyjson.com/product-images/6/2.jpg",
          "https://cdn.dummyjson.com/product-images/6/3.png",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Samsung Galaxy Book",
        description:
          "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25,
        stock: 50,
        brand: "Samsung",
        category: {
          create: {
            name: "laptops",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/7/1.jpg",
          "https://cdn.dummyjson.com/product-images/7/2.jpg",
          "https://cdn.dummyjson.com/product-images/7/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Microsoft Surface Laptop 4",
        description:
          "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        price: 1499,
        discountPercentage: 10.23,
        rating: 4.43,
        stock: 68,
        brand: "Microsoft Surface",
        category: {
          create: {
            name: "laptops",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/8/1.jpg",
          "https://cdn.dummyjson.com/product-images/8/2.jpg",
          "https://cdn.dummyjson.com/product-images/8/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Infinix INBOOK",
        description:
          "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        price: 1099,
        discountPercentage: 11.83,
        rating: 4.54,
        stock: 96,
        brand: "Infinix",
        category: {
          create: {
            name: "laptops",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/9/1.jpg",
          "https://cdn.dummyjson.com/product-images/9/2.png",
          "https://cdn.dummyjson.com/product-images/9/3.png",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "HP Pavilion 15-DK1056WM",
        description:
          "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        price: 1099,
        discountPercentage: 6.18,
        rating: 4.43,
        stock: 89,
        brand: "HP Pavilion",
        category: {
          create: {
            name: "laptops",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
        images: [
          "https://cdn.dummyjson.com/product-images/10/1.jpg",
          "https://cdn.dummyjson.com/product-images/10/2.jpg",
          "https://cdn.dummyjson.com/product-images/10/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Plant Hanger For Home",
        description:
          "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
        price: 41,
        discountPercentage: 17.86,
        rating: 4.08,
        stock: 131,
        brand: "Boho Decor",
        category: {
          create: {
            name: "home-decoration",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/26/1.jpg",
          "https://cdn.dummyjson.com/product-images/26/2.jpg",
          "https://cdn.dummyjson.com/product-images/26/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Flying Wooden Bird",
        description:
          "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
        price: 51,
        discountPercentage: 15.58,
        rating: 4.41,
        stock: 17,
        brand: "Flying Wooden",
        category: {
          create: {
            name: "home-decoration",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
        images: [
          "https://cdn.dummyjson.com/product-images/27/1.jpg",
          "https://cdn.dummyjson.com/product-images/27/2.jpg",
          "https://cdn.dummyjson.com/product-images/27/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "3D Embellishment Art Lamp",
        description:
          "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
        price: 20,
        discountPercentage: 16.49,
        rating: 4.82,
        stock: 54,
        brand: "LED Lights",
        category: {
          create: {
            name: "home-decoration",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/28/1.jpg",
          "https://cdn.dummyjson.com/product-images/28/2.jpg",
          "https://cdn.dummyjson.com/product-images/28/3.png",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Handcraft Chinese style",
        description:
          "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
        price: 60,
        discountPercentage: 15.34,
        rating: 4.44,
        stock: 7,
        brand: "luxury palace",
        category: {
          create: {
            name: "home-decoration",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/29/thumbnail.webp",
        images: [
          "https://cdn.dummyjson.com/product-images/29/1.jpg",
          "https://cdn.dummyjson.com/product-images/29/2.jpg",
          "https://cdn.dummyjson.com/product-images/29/3.webp",
          "https://cdn.dummyjson.com/product-images/29/4.webp",
          "https://cdn.dummyjson.com/product-images/29/thumbnail.webp",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Key Holder",
        description:
          "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: "Golden",
        category: {
          create: {
            name: "home-decoration",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/30/1.jpg",
          "https://cdn.dummyjson.com/product-images/30/2.jpg",
          "https://cdn.dummyjson.com/product-images/30/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Mornadi Velvet Bed",
        description:
          "Mornadi Velvet Bed Base with Headboard Slats Support Classic Style Bedroom Furniture Bed Set",
        price: 40,
        discountPercentage: 17,
        rating: 4.16,
        stock: 140,
        brand: "Furniture Bed Set",
        category: {
          create: {
            name: "furniture",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/31/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/31/1.jpg",
          "https://cdn.dummyjson.com/product-images/31/2.jpg",
          "https://cdn.dummyjson.com/product-images/31/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Sofa for Coffe Cafe",
        description:
          "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
        price: 50,
        discountPercentage: 15.59,
        rating: 4.74,
        stock: 30,
        brand: "Ratttan Outdoor",
        category: {
          create: {
            name: "furniture",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/32/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/32/1.jpg",
          "https://cdn.dummyjson.com/product-images/32/2.jpg",
          "https://cdn.dummyjson.com/product-images/32/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "3 Tier Corner Shelves",
        description:
          "3 Tier Corner Shelves | 3 PCs Wall Mount Kitchen Shelf | Floating Bedroom Shelf",
        price: 700,
        discountPercentage: 17,
        rating: 4.31,
        stock: 106,
        brand: "Kitchen Shelf",
        category: {
          create: {
            name: "furniture",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/33/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/33/1.jpg",
          "https://cdn.dummyjson.com/product-images/33/2.jpg",
          "https://cdn.dummyjson.com/product-images/33/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Plastic Table",
        description:
          "V﻿ery good quality plastic table for multi purpose now in reasonable price",
        price: 50,
        discountPercentage: 4,
        rating: 4.01,
        stock: 136,
        brand: "Multi Purpose",
        category: {
          create: {
            name: "furniture",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/34/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/34/1.jpg",
          "https://cdn.dummyjson.com/product-images/34/2.jpg",
          "https://cdn.dummyjson.com/product-images/34/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "3 DOOR PORTABLE",
        description:
          "Material: Stainless Steel and Fabric  Item Size: 110 cm x 45 cm x 175 cm Package Contents: 1 Storage Wardrobe",
        price: 41,
        discountPercentage: 7.98,
        rating: 4.06,
        stock: 68,
        brand: "AmnaMart",
        category: {
          create: {
            name: "furniture",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/35/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/35/1.jpg",
          "https://cdn.dummyjson.com/product-images/35/2.jpg",
          "https://cdn.dummyjson.com/product-images/35/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "NIGHT SUIT",
        description:
          "NIGHT SUIT RED MICKY MOUSE..  For Girls. Fantastic Suits.",
        price: 55,
        discountPercentage: 15.05,
        rating: 4.65,
        stock: 21,
        brand: "RED MICKY MOUSE..",
        category: {
          create: {
            name: "womens-dresses",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/41/thumbnail.webp",
        images: [
          "https://cdn.dummyjson.com/product-images/41/1.jpg",
          "https://cdn.dummyjson.com/product-images/41/2.webp",
          "https://cdn.dummyjson.com/product-images/41/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Stiched Kurta plus trouser",
        description:
          "FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN",
        price: 80,
        discountPercentage: 15.37,
        rating: 4.05,
        stock: 148,
        brand: "Digital Printed",
        category: {
          create: {
            name: "womens-dresses",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/42/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/42/1.png",
          "https://cdn.dummyjson.com/product-images/42/2.png",
          "https://cdn.dummyjson.com/product-images/42/3.png",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "frock gold printed",
        description:
          "Ghazi fabric long frock gold printed ready to wear stitched collection (G992)",
        price: 600,
        discountPercentage: 15.55,
        rating: 4.31,
        stock: 150,
        brand: "Ghazi Fabric",
        category: {
          create: {
            name: "womens-dresses",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/43/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/43/1.jpg",
          "https://cdn.dummyjson.com/product-images/43/2.jpg",
          "https://cdn.dummyjson.com/product-images/43/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Ladies Multicolored Dress",
        description:
          "This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.",
        price: 79,
        discountPercentage: 16.88,
        rating: 4.03,
        stock: 2,
        brand: "Ghazi Fabric",
        category: {
          create: {
            name: "womens-dresses",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/44/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/44/1.jpg",
          "https://cdn.dummyjson.com/product-images/44/2.jpg",
          "https://cdn.dummyjson.com/product-images/44/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Malai Maxi Dress",
        description:
          "Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff",
        price: 50,
        discountPercentage: 5.07,
        rating: 4.67,
        stock: 96,
        brand: "IELGY",
        category: {
          create: {
            name: "womens-dresses",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/45/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/45/1.jpg",
          "https://cdn.dummyjson.com/product-images/45/2.webp",
          "https://cdn.dummyjson.com/product-images/45/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "women's shoes",
        description:
          "Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber",
        price: 40,
        discountPercentage: 16.96,
        rating: 4.14,
        stock: 72,
        brand: "IELGY fashion",
        category: {
          create: {
            name: "womens-shoes",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/46/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/46/1.webp",
          "https://cdn.dummyjson.com/product-images/46/2.jpg",
          "https://cdn.dummyjson.com/product-images/46/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Sneaker shoes",
        description:
          "Synthetic Leather Casual Sneaker shoes for Women/girls Sneakers For Women",
        price: 120,
        discountPercentage: 10.37,
        rating: 4.19,
        stock: 50,
        brand: "Synthetic Leather",
        category: {
          create: {
            name: "womens-shoes",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/47/thumbnail.jpeg",
        images: [
          "https://cdn.dummyjson.com/product-images/47/1.jpg",
          "https://cdn.dummyjson.com/product-images/47/2.jpg",
          "https://cdn.dummyjson.com/product-images/47/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Women Strip Heel",
        description:
          "Features: Flip-flops, Mid Heel, Comfortable, Striped Heel, Antiskid, Striped",
        price: 40,
        discountPercentage: 10.83,
        rating: 4.02,
        stock: 25,
        brand: "Sandals Flip Flops",
        category: {
          create: {
            name: "womens-shoes",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/48/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/48/1.jpg",
          "https://cdn.dummyjson.com/product-images/48/2.jpg",
          "https://cdn.dummyjson.com/product-images/48/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Chappals & Shoe Ladies Metallic",
        description:
          "Womens Chappals & Shoe Ladies Metallic Tong Thong Sandal Flat Summer 2020 Maasai Sandals",
        price: 23,
        discountPercentage: 2.62,
        rating: 4.72,
        stock: 107,
        brand: "Maasai Sandals",
        category: {
          create: {
            name: "womens-shoes",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/49/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/49/1.jpg",
          "https://cdn.dummyjson.com/product-images/49/2.jpg",
          "https://cdn.dummyjson.com/product-images/49/3.webp",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Women Shoes",
        description:
          "2020 New Arrivals Genuine Leather Fashion Trend Platform Summer Women Shoes",
        price: 36,
        discountPercentage: 16.87,
        rating: 4.33,
        stock: 46,
        brand: "Arrivals Genuine",
        category: {
          create: {
            name: "womens-shoes",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/50/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/50/1.jpeg",
          "https://cdn.dummyjson.com/product-images/50/2.jpg",
          "https://cdn.dummyjson.com/product-images/50/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "half sleeves T shirts",
        description:
          "Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands",
        price: 23,
        discountPercentage: 12.76,
        rating: 4.26,
        stock: 132,
        brand: "Vintage Apparel",
        category: {
          create: {
            name: "mens-shirts",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/51/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/51/1.png",
          "https://cdn.dummyjson.com/product-images/51/2.jpg",
          "https://cdn.dummyjson.com/product-images/51/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "FREE FIRE T Shirt",
        description:
          "quality and professional print - It doesn't just look high quality, it is high quality.",
        price: 10,
        discountPercentage: 14.72,
        rating: 4.52,
        stock: 128,
        brand: "FREE FIRE",
        category: {
          create: {
            name: "mens-shirts",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/52/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/52/1.png",
          "https://cdn.dummyjson.com/product-images/52/2.png",
          "https://cdn.dummyjson.com/product-images/52/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "printed high quality T shirts",
        description: "Brand: vintage Apparel ,Export quality",
        price: 35,
        discountPercentage: 7.54,
        rating: 4.89,
        stock: 6,
        brand: "Vintage Apparel",
        category: {
          create: {
            name: "mens-shirts",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/53/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/53/1.webp",
          "https://cdn.dummyjson.com/product-images/53/2.jpg",
          "https://cdn.dummyjson.com/product-images/53/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Pubg Printed Graphic T-Shirt",
        description:
          "Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking",
        price: 46,
        discountPercentage: 16.44,
        rating: 4.62,
        stock: 136,
        brand: "The Warehouse",
        category: {
          create: {
            name: "mens-shirts",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/54/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/54/1.jpg",
          "https://cdn.dummyjson.com/product-images/54/2.jpg",
          "https://cdn.dummyjson.com/product-images/54/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Money Heist Printed Summer T Shirts",
        description: "Fabric Jercy, Size: M & L Wear Stylish Dual Stiched",
        price: 66,
        discountPercentage: 15.97,
        rating: 4.9,
        stock: 122,
        brand: "The Warehouse",
        category: {
          create: {
            name: "mens-shirts",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/55/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/55/1.jpg",
          "https://cdn.dummyjson.com/product-images/55/2.webp",
          "https://cdn.dummyjson.com/product-images/55/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Sneakers Joggers Shoes",
        description:
          "Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New",
        price: 40,
        discountPercentage: 12.57,
        rating: 4.38,
        stock: 6,
        brand: "Sneakers",
        category: {
          create: {
            name: "mens-shoes",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/56/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/56/1.jpg",
          "https://cdn.dummyjson.com/product-images/56/2.jpg",
          "https://cdn.dummyjson.com/product-images/56/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Loafers for men",
        description:
          "Men Shoes - Loafers for men - Rubber Shoes - Nylon Shoes - Shoes for men - Moccassion - Pure Nylon (Rubber) Expot Quality.",
        price: 47,
        discountPercentage: 10.91,
        rating: 4.91,
        stock: 20,
        brand: "Rubber",
        category: {
          create: {
            name: "mens-shoes",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/57/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/57/1.jpg",
          "https://cdn.dummyjson.com/product-images/57/2.jpg",
          "https://cdn.dummyjson.com/product-images/57/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "formal offices shoes",
        description:
          "Pattern Type: Solid, Material: PU, Toe Shape: Pointed Toe ,Outsole Material: Rubber",
        price: 57,
        discountPercentage: 12,
        rating: 4.41,
        stock: 68,
        brand: "The Warehouse",
        category: {
          create: {
            name: "mens-shoes",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/58/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/58/1.jpg",
          "https://cdn.dummyjson.com/product-images/58/2.jpg",
          "https://cdn.dummyjson.com/product-images/58/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Spring and summershoes",
        description:
          "Comfortable stretch cloth, lightweight body; ,rubber sole, anti-skid wear;",
        price: 20,
        discountPercentage: 8.71,
        rating: 4.33,
        stock: 137,
        brand: "Sneakers",
        category: {
          create: {
            name: "mens-shoes",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/59/1.jpg",
          "https://cdn.dummyjson.com/product-images/59/2.jpg",
          "https://cdn.dummyjson.com/product-images/59/3.jpg",
        ],
      },
    });
    await prismadb.products.create({
      data: {
        title: "Stylish Casual Jeans Shoes",
        description:
          "High Quality ,Stylish design ,Comfortable wear ,FAshion ,Durable",
        price: 58,
        discountPercentage: 7.55,
        rating: 4.55,
        stock: 129,
        brand: "Sneakers",
        category: {
          create: {
            name: "mens-shoes",
          },
        },
        thumbnail: "https://cdn.dummyjson.com/product-images/60/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/60/1.jpg",
          "https://cdn.dummyjson.com/product-images/60/2.jpg",
          "https://cdn.dummyjson.com/product-images/60/3.jpg",
        ],
      },
    });
  } catch (error) {
    console.error(error);
  }
}

seedProducts();
