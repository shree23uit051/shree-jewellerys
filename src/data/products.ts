import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // --- RINGS (10 products) ---
  {
    id: 'ring-01',
    name: 'The Nizam Solitaire Diamond Ring',
    category: 'Rings',
    price: 480000,
    rating: 5.0,
    reviewsCount: 42,
    description: 'A legendary 3-carat round brilliant-cut solitaire diamond mounted in an exquisite platinum band with hand-set micro-pavé shoulders.',
    longDescription: 'Evoking the legendary splendor of royal Indian treasuries, the Nizam Solitaire Ring features a 3.0-carat colorless, flawless round brilliant diamond. Hand-mounted in an elevated six-prong platinum crown designed to maximize light refraction, the platinum band is further embellished with micro-pavé diamonds running along the shoulders.',
    image: 'https://i.pinimg.com/736x/21/0b/7f/210b7f3eddf7a5a62ac0ced24db7ff68.jpg',
    images: [
      'https://i.pinimg.com/736x/21/0b/7f/210b7f3eddf7a5a62ac0ced24db7ff68.jpg',
      'https://i.pinimg.com/1200x/d9/f9/ee/d9f9eeb294bac34448900330a5298cff.jpg',
      'https://i.pinimg.com/736x/aa/ad/7f/aaad7f87e152ba6294771ecea93a3895.jpg'
    ],
    isFeatured: true,
    isBestSeller: true,
    specifications: {
      metal: '950 Platinum',
      purity: '95.0% Pure Platinum',
      gemstone: 'Round Brilliant Diamond (3.0 ct, D color, IF)',
      weight: '7.8 grams',
      certification: 'GIA & SGL Certified'
    }
  },
  {
    id: 'ring-02',
    name: 'Whispered Light Diamond Ring',
    category: 'Rings',
    price: 185000,
    rating: 4.8,
    reviewsCount: 19,
    description: 'A striking cushion-cut Zambian emerald framed by a sparkling halo of brilliant-cut diamonds in 18K white gold.',
    longDescription: 'Capturing the deep, serene essence of premium Zambian mines, this masterpiece showcases a 1.8-carat cushion-cut emerald. The vivid green gem is encircled by a sparkling halo of round brilliant diamonds, set upon an 18K white gold band decorated with milgrain borders.',
    image: 'https://i.pinimg.com/736x/b3/d4/0f/b3d40f44727df99b8471aa7d9dd52fa7.jpg',
    images: [
      'https://i.pinimg.com/736x/b3/d4/0f/b3d40f44727df99b8471aa7d9dd52fa7.jpg',
      'https://i.pinimg.com/1200x/5d/50/43/5d504378bc4fb05c7a50aec670324734.jpg',
      'https://i.pinimg.com/736x/7f/a7/97/7fa7977ed4e0551b71fa224cc6136f28.jpg',
      'https://i.pinimg.com/736x/8e/66/18/8e66186cc98fa06ab86a966c011457ae.jpg'
      
    ],
    isFeatured: true,
    specifications: {
      metal: '18K White Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Zambian Emerald & Brilliant Diamonds',
      weight: '5.4 grams',
      certification: 'IGI Certified'
    }
  },
  {
    id: 'ring-03',
    name: 'Classic Jubilee Diamond Band',
    category: 'Rings',
    price: 85000,
    rating: 4.9,
    reviewsCount: 31,
    description: 'An elegant half-eternity band with five matched brilliant-cut diamonds held in classic claw settings.',
    longDescription: 'A classic symbol of love and longevity, the Jubilee Diamond Band showcases five perfectly matched, clean round brilliant diamonds totaling 0.75 carats. Each stone is cradled in an open prong basket on an 18K white gold band, ensuring magnificent sparkle from every perspective.',
    image: 'https://i.pinimg.com/736x/88/e9/02/88e902e630456f70c51ff3578586b773.jpg',
    images: [
      'https://i.pinimg.com/736x/88/e9/02/88e902e630456f70c51ff3578586b773.jpg',
      'https://i.pinimg.com/736x/d3/21/a2/d321a2f3e18ec7434256a0521c3c19b6.jpg',
      'https://i.pinimg.com/1200x/81/5a/2a/815a2ae8a9351a86d4bbccc74ab100cf.jpg'
    ],
    isBestSeller: true,
    specifications: {
      metal: '18K Rose Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Round Diamonds (0.75 ctw, G color, VS1)',
      weight: '8.2 grams',
      certification: 'SGL Certified'
    }
  },
  {
    id: 'ring-04',
    name: 'Vintage Ruby Empress Ring',
    category: 'Rings',
    price: 220000,
    rating: 4.7,
    reviewsCount: 15,
    description: 'A deep crimson Burmese ruby accented with pear-shaped shoulder diamonds, cast in solid 18K yellow gold.',
    longDescription: 'Designed for a regal presence, the Ruby Empress Ring showcases a luscious 2.2-carat oval Burmese ruby. The centerpiece is highlighted by two elegant pear-shaped side diamonds and secured within an 18-karat yellow gold bezel, embodying rich antique style.',
    image: 'https://i.pinimg.com/736x/d3/53/a9/d353a9a175005e62277bc62ed2054f93.jpg',
    images: [
      'https://i.pinimg.com/736x/d3/53/a9/d353a9a175005e62277bc62ed2054f93.jpg',
      'https://i.pinimg.com/1200x/23/92/5f/23925f0f7118ca1ca2e3c9f596306307.jpg',
      'https://i.pinimg.com/736x/7c/b3/1a/7cb31a6d04d35b5ef221cf40f03f12c6.jpg',
      'https://i.pinimg.com/1200x/a7/32/85/a73285525994d3c893924f989cd1400b.jpg'
    ],
    isNewArrival: true,
    specifications: {
      metal: '18K Yellow Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Burmese Ruby & Pear Diamonds',
      weight: '6.1 grams',
      certification: 'SGL Certified'
    }
  },
  {
    id: 'ring-05',
    name: 'Maharani Polki Ring',
    category: 'Rings',
    price: 65000,
    rating: 4.9,
    reviewsCount: 22,
    description: 'A magnificent heritage cocktail ring featuring uncut Polki diamonds and beautiful red enamel work in 22K gold.',
    longDescription: 'Celebrate imperial history with the Maharani Polki Ring. Crafted using traditional Jadau methods, it highlights flat-cut uncut diamonds set on an ornate 22K yellow gold bezel with intricate red and green meenakari detailing on the reverse.',
    image: 'https://i.pinimg.com/736x/4b/75/12/4b7512bcc90d73e96812bafb4e1fb866.jpg',
    images: [
      'https://i.pinimg.com/736x/4b/75/12/4b7512bcc90d73e96812bafb4e1fb866.jpg',
      'https://i.pinimg.com/736x/0e/cd/e7/0ecde73fb0f996e72c05ecdb808572ab.jpg',
      'https://i.pinimg.com/1200x/dc/07/20/dc07208db4fdc5f9ad190794da81157f.jpg'
    ],
    specifications: {
      metal: '22K Yellow Gold',
      purity: '91.6% Pure Gold',
      gemstone: 'Uncut Polki Diamonds',
      weight: '11.5 grams',
      certification: 'BIS Hallmarked'
    }
  },
  {
    id: 'ring-06',
    name: 'Gilded Rose Gold Twist Band',
    category: 'Rings',
    price: 25000,
    rating: 4.6,
    reviewsCount: 12,
    description: 'A modern, interlocking twisted band made of brilliant 18K rose gold and micro-pavé diamonds.',
    longDescription: 'A delicate expression of modern romanticism, this band features two interlocking ribbons of polished 18K rose gold and shimmering pavé diamonds. Perfect for stacking or wearing alone as a minimal everyday statement.',
    image: 'https://i.pinimg.com/1200x/c5/a1/c5/c5a1c53085f07236f18abc14a9b1cbb2.jpg',
    images: [
      'https://i.pinimg.com/1200x/c5/a1/c5/c5a1c53085f07236f18abc14a9b1cbb2.jpg',
      'https://i.pinimg.com/736x/19/58/71/1958715288b4de3b1836319335008743.jpg',
      'https://i.pinimg.com/736x/89/f9/09/89f909533b07c3d54f594803eef885c9.jpg'
    ],
    isNewArrival: true,
    specifications: {
      metal: '18K Rose Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Micro-Pavé Diamonds (0.15 ctw)',
      weight: '3.1 grams',
      certification: 'BIS Hallmarked'
    }
  },
  {
    id: 'ring-07',
    name: 'Celestial Sapphire Signet Ring',
    category: 'Rings',
    price: 145000,
    rating: 4.9,
    reviewsCount: 8,
    description: 'An imposing signet ring showcasing a round Ceylon blue sapphire surrounded by carved gold celestial motifs.',
    longDescription: 'Hand-sculpted in heavy 18K gold, this magnificent signet ring houses a deep royal blue Ceylon sapphire of 1.5 carats, accented with delicate hand-engraved cosmic stars and crescent moon carvings.',
    image: 'https://i.pinimg.com/1200x/e0/be/26/e0be267229576d1e24a4360348740056.jpg',
    images: [
      'https://i.pinimg.com/1200x/e0/be/26/e0be267229576d1e24a4360348740056.jpg',
      'https://i.pinimg.com/1200x/e2/1d/3a/e21d3a0600356cf31f3fa82b850945a1.jpg',
      'https://i.pinimg.com/1200x/d5/7f/ed/d57fed97e2afe143f7c6422cc24b4b55.jpg',
      'https://i.pinimg.com/736x/f1/db/fe/f1dbfed0f66fbd3cd39969534ac7f582.jpg'
    ],
    specifications: {
      metal: '18K Yellow Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Ceylon Blue Sapphire (1.5 ct)',
      weight: '12.8 grams',
      certification: 'IGI Certified'
    }
  },
  {
    id: 'ring-08',
    name: 'Minimalist Eternity Diamond Ring',
    category: 'Rings',
    price: 45000,
    rating: 4.8,
    reviewsCount: 14,
    description: 'A continuous, sparkling ribbon of pavé-set diamonds set in beautiful 18K white gold.',
    longDescription: 'Symbolizing endless eternity, this delicate ring is completely wrapped in micro-pavé diamonds of exceptional clarity, cast in an ultra-slim 18K white gold band designed for stacking with engagement rings.',
    image: 'https://i.pinimg.com/1200x/1d/69/e4/1d69e4c4e0ed8321194d5c3ed44a6f34.jpg',
    images: [
      'https://i.pinimg.com/1200x/1d/69/e4/1d69e4c4e0ed8321194d5c3ed44a6f34.jpg',
      'https://i.pinimg.com/736x/f6/01/8c/f6018c47afc4f8f4424d1886fa9c90fe.jpg',
      'https://i.pinimg.com/736x/f9/32/78/f93278c5214a7287097c3326b44f63e7.jpg'
      
    ],
    specifications: {
      metal: '18K White Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Brilliant Diamonds (0.35 ctw)',
      weight: '2.4 grams',
      certification: 'SGL Certified'
    }
  },
  {
    id: 'ring-09',
    name: 'green stone ring 2 in 1',
    category: 'Rings',
    price: 45000,
    rating: 4.8,
    reviewsCount: 14,
    description: 'A continuous, sparkling ribbon of pavé-set diamonds set in beautiful 18K white gold.',
    longDescription: 'Symbolizing endless eternity, this delicate ring is completely wrapped in micro-pavé diamonds of exceptional clarity, cast in an ultra-slim 18K white gold band designed for stacking with engagement rings.',
    image: 'https://i.pinimg.com/1200x/a6/a2/e4/a6a2e4feda3ad5598ff242ecca544005.jpg',
    images: [
      'https://i.pinimg.com/1200x/a6/a2/e4/a6a2e4feda3ad5598ff242ecca544005.jpg',
      'https://i.pinimg.com/1200x/7a/26/68/7a2668a128d35f93abf5175e8d1b4104.jpg',
      'https://i.pinimg.com/1200x/61/83/6a/61836ad07dadeb4c6124ebf183d2d00f.jpg'
      
    ],
    specifications: {
      metal: '18K White Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Brilliant Diamonds (0.35 ctw)',
      weight: '2.4 grams',
      certification: 'SGL Certified'
    }
  },
  
  // --- NECKLACES (7 products) ---
  {
    id: 'necklace-01',
    name: 'Aura Diamond Collar Necklace',
    category: 'Necklaces',
    price: 495000,
    rating: 5.0,
    reviewsCount: 37,
    description: 'A magnificent royal bridal choker crafted with brilliant-cut diamonds, rich Burmese rubies, and premium South Sea pearls.',
    longDescription: 'Embodying pure regal splendor, The Shree Queen Bridal Necklace is designed for the modern bride who treasures heritage. Handcrafted over 450 hours by our master artisans, this set features premium-grade diamonds nestled in a 22-karat yellow gold frame, accented with deep crimson Burmese rubies and finished with dangling white South Sea pearls.',
    image: 'https://i.pinimg.com/736x/7e/e1/af/7ee1afe0cf79ca5c8d2719f24789185e.jpg',
    images: [
      'https://i.pinimg.com/736x/7e/e1/af/7ee1afe0cf79ca5c8d2719f24789185e.jpg',
      'https://i.pinimg.com/1200x/6c/d7/8d/6cd78dd7e8274c4b48cde4344b510def.jpg',
      'https://i.pinimg.com/1200x/dd/39/45/dd3945c6ded628e4c8b7c981e9404e2b.jpg',
      'https://i.pinimg.com/1200x/8f/97/2a/8f972a73c4db70de1e18b699b59e16e3.jpg'
    ],
    isFeatured: true,
    isBestSeller: true,
    specifications: {
      metal: '22K Yellow Gold',
      purity: '91.6% Pure Gold',
      gemstone: 'Certified Diamonds, Ruby, and Pearl',
      weight: '115.5 grams',
      certification: 'SGL & BIS Hallmarked'
    }
  },
  {
    id: 'necklace-02',
    name: 'Emerald Drop Diamond Necklace',
    category: 'Necklaces',
    price: 380000,
    rating: 4.9,
    reviewsCount: 26,
    description: 'An exceptional high-jewelry choker featuring graduated cushion-cut Zambian emeralds beautifully ringed by diamond halos.',
    longDescription: 'Capturing the deep, serene essence of the finest Zambian mines, this Royal Aura Choker is a breathtaking masterpiece. The center features seven graduated, ethically sourced deep green cushion-cut emeralds totaling 12.4 carats, hung from an intricate vine of sparkling marquise-cut diamond leaves.',
    image: 'https://i.pinimg.com/736x/ec/5b/e5/ec5be57011639d3c9df00ea27b4fefe4.jpg',
    images: [
      'https://i.pinimg.com/736x/ec/5b/e5/ec5be57011639d3c9df00ea27b4fefe4.jpg',
      'https://i.pinimg.com/1200x/cd/96/0d/cd960daf3e8c61616d9aba3281ad1aaf.jpg',
      'https://i.pinimg.com/736x/92/48/bc/9248bcb8e9b4cec255ea2f5dbf891209.jpg'
    ],
    isFeatured: true,
    isNewArrival: true,
    specifications: {
      metal: '18K White Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Zambian Cushion Emeralds & Brilliant Diamonds',
      weight: '48.3 grams',
      certification: 'IGI Certified Jewelry'
    }
  },
  {
    id: 'necklace-03',
    name: 'The Shree Queen Bridal Necklace',
    category: 'Necklaces',
    price: 295000,
    rating: 4.8,
    reviewsCount: 14,
    description: 'A breathtaking collar necklace showcasing a seamless line of graduated round brilliant diamonds set in white gold.',
    longDescription: 'This sleek collar wraps the neck with absolute light. Handcrafted with graduated round brilliant-cut diamonds totaling 15 carats, each diamond is meticulously set to create an endless ribbon of fire and light.',
    image: 'https://i.pinimg.com/1200x/b3/4c/88/b34c8801210c87817c05415a3b603e01.jpg',
    images: [
      'https://i.pinimg.com/1200x/b3/4c/88/b34c8801210c87817c05415a3b603e01.jpg',
      'https://i.pinimg.com/1200x/b7/38/71/b73871937548939dacf186ee567500dd.jpg',
      'https://i.pinimg.com/1200x/83/6e/36/836e368603746ca4bfed32ddf546f377.jpg',
      'https://i.pinimg.com/736x/43/5e/b9/435eb912a7bdae304c4c23d4431a8839.jpg'
    ],
    specifications: {
      metal: '18K White Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Graduated Diamonds (15.0 ctw, G/VS)',
      weight: '39.5 grams',
      certification: 'GIA & IGI Certified'
    }
  },
  {
    id: 'necklace-04',
    name: 'Burmese Ruby Heritage Haar',
    category: 'Necklaces',
    price: 450000,
    rating: 4.9,
    reviewsCount: 11,
    description: 'A traditional heavy wedding necklace with gorgeous strings of premium ruby beads, pearls, and gold filigree pendant.',
    longDescription: 'Crafted as a tribute to ancient Indian court jewelers, this multi-stranded necklace consists of hundreds of micro-faceted royal Burmese ruby beads and white pearls, gathered by an antique-finished pendant embedded with uncut diamonds.',
    image: 'https://i.pinimg.com/1200x/1b/88/0d/1b880dffc4810b39938d2de7ddb2799d.jpg',
    images: [
      'https://i.pinimg.com/1200x/1b/88/0d/1b880dffc4810b39938d2de7ddb2799d.jpg',
      'https://i.pinimg.com/1200x/15/7e/89/157e89e689a970df49d9d35d2f54dabb.jpg',
      'https://i.pinimg.com/1200x/fe/fd/b3/fefdb3f5e8e498efdeda9b0d9c16275b.jpg',
      'https://i.pinimg.com/1200x/7f/72/2d/7f722d95706deffe3aed1d0c2a2f5a1b.jpg'
    ],
    specifications: {
      metal: '22K Gold With Antique Finish',
      purity: '91.6% Pure Gold',
      gemstone: 'Pigeon-blood Ruby Beads, Keshi Pearls, Polki Diamonds',
      weight: '88.2 grams',
      certification: 'BIS Hallmark Certified'
    }
  },
  {
    id: 'necklace-05',
    name: 'Premio Diamond Necklace',
    category: 'Necklaces',
    price: 75000,
    rating: 4.7,
    reviewsCount: 29,
    description: 'A single, perfectly matched string of premium cream-white South Sea pearls with an 18K yellow gold clasp.',
    longDescription: 'Understated elegance at its absolute best. This string showcases 38 perfectly round, radiant cream-white South Sea cultured pearls of 10-11mm size, individually knotted on premium silk thread and secured by a fluted 18K yellow gold ball clasp.',
    image: 'https://i.pinimg.com/736x/47/6f/14/476f14e6e7e718c56073d0471325f9eb.jpg',
    images: [
      'https://i.pinimg.com/736x/47/6f/14/476f14e6e7e718c56073d0471325f9eb.jpg',
      'https://i.pinimg.com/736x/aa/6d/fb/aa6dfbca6cb6f2c9eb909cc9e6ad5e3f.jpg',
      'https://i.pinimg.com/736x/36/17/aa/3617aa00cb9cb52ba35e29937b516a31.jpg',
      'https://i.pinimg.com/736x/e3/a4/c1/e3a4c1df01ca49bd6f4e62f89152b1b9.jpg'
    ],
    isBestSeller: true,
    specifications: {
      metal: '18K Yellow Gold Clasp',
      purity: '75.0% Pure Gold',
      gemstone: 'South Sea Cultured Pearls',
      weight: '44.8 grams',
      certification: 'SGL Certified'
    }
  },
  {
    id: 'necklace-06',
    name: 'New lanuch Diamond Necklace',
    category: 'Necklaces',
    price: 195000,
    rating: 4.8,
    reviewsCount: 17,
    description: 'A sleek, contemporary V-shaped necklace adorned with baguettes and round brilliant diamonds.',
    longDescription: 'Capturing clean lines and geometric luxury, this chevron collar presents structured rows of sparkling baguette-cut diamonds outlined by highly-polished white gold, dropping down to a sharp central V-point.',
    image: 'https://i.pinimg.com/736x/58/ab/82/58ab82ecfe4c38e19c988280784c2acf.jpg',
    images: [
      'https://i.pinimg.com/736x/58/ab/82/58ab82ecfe4c38e19c988280784c2acf.jpg',
      'https://i.pinimg.com/736x/17/36/06/173606e4f42e817ae1448eb58478d2f4.jpg',
      'https://i.pinimg.com/736x/7f/d5/03/7fd50322c939f517c48e9b6c8b925c1f.jpg',
      'https://i.pinimg.com/1200x/dd/54/e0/dd54e0fe2b4d6fadb477a5c9010c7cda.jpg'
    ],
    isNewArrival: true,
    specifications: {
      metal: '18K White Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Baguette & Round Diamonds (4.5 ctw)',
      weight: '26.4 grams',
      certification: 'IGI Certified'
    }
  },
  {
    id: 'necklace-07',
    name: 'Diamond Doller',
    category: 'Necklaces',
    price: 165000,
    rating: 4.9,
    reviewsCount: 9,
    description: 'An extraordinary traditional collar hand-enameled using the rare Varanasi pink meenakari art, set with seed pearls.',
    longDescription: 'A vibrant heritage piece that stands out. Featuring pure 22K gold plates carefully hand-enameled with rare pink floral motifs, set with flat kundan stones and finished with lines of tiny seed pearls.',
    image: 'https://i.pinimg.com/1200x/c5/34/cc/c534cceadd576cf773891c76d3143799.jpg',
    images: [
      'https://i.pinimg.com/1200x/c5/34/cc/c534cceadd576cf773891c76d3143799.jpg',
      'https://i.pinimg.com/736x/40/5e/c7/405ec7cfb58d5ebdf80c54a3608cbe2a.jpg',
      'https://i.pinimg.com/1200x/d2/7d/f9/d27df9ad0abe38319765b6b7f26809f2.jpg',
      'https://i.pinimg.com/1200x/45/49/95/454995b528fa3a299e89f612c61ef9fb.jpg',
      'https://i.pinimg.com/736x/39/ae/9a/39ae9a8a3d0ad485e4a4848c84c1f18d.jpg'
    ],
    specifications: {
      metal: '22K Yellow Gold',
      purity: '91.6% Pure Gold',
      gemstone: 'Kundan & Seed Pearls with Hand-Enameling',
      weight: '55.3 grams',
      certification: 'BIS Hallmarked'
    }
  },
  {
    id: 'necklace-08',
    name: 'Double layer Diamond Necklace',
    category: 'Necklaces',
    price: 165000,
    rating: 4.9,
    reviewsCount: 9,
    description: 'An extraordinary traditional collar hand-enameled using the rare Varanasi pink meenakari art, set with seed pearls.',
    longDescription: 'A vibrant heritage piece that stands out. Featuring pure 22K gold plates carefully hand-enameled with rare pink floral motifs, set with flat kundan stones and finished with lines of tiny seed pearls.',
    image: 'https://i.pinimg.com/736x/c5/f4/57/c5f4572f27e4e82f6c2b7b63b52dd1ac.jpg',
    images: [
      'https://i.pinimg.com/736x/c5/f4/57/c5f4572f27e4e82f6c2b7b63b52dd1ac.jpg',
      'https://i.pinimg.com/1200x/4f/c8/6d/4fc86dfa3b80ef9685bfdbf897d97324.jpg',
      'https://i.pinimg.com/1200x/f1/0d/7a/f10d7a52ba187c239c704896fc49e28b.jpg',
      'https://i.pinimg.com/736x/ae/c5/67/aec56738d283bec2f084fed9cc995f37.jpg',
      'https://i.pinimg.com/736x/74/00/f2/7400f29d38dbb823523c57de5fc9f112.jpg'
    ],
    specifications: {
      metal: '22K Yellow Gold',
      purity: '91.6% Pure Gold',
      gemstone: 'Kundan & Seed Pearls with Hand-Enameling',
      weight: '55.3 grams',
      certification: 'BIS Hallmarked'
    }
  },
  
{
    id: 'necklace-09',
    name: 'The Classic Pearl Diamond Necklace',
    category: 'Necklaces',
    price: 165000,
    rating: 4.9,
    reviewsCount: 9,
    description: 'An extraordinary traditional collar hand-enameled using the rare Varanasi pink meenakari art, set with seed pearls.',
    longDescription: 'A vibrant heritage piece that stands out. Featuring pure 22K gold plates carefully hand-enameled with rare pink floral motifs, set with flat kundan stones and finished with lines of tiny seed pearls.',
    image: 'https://i.pinimg.com/1200x/67/2b/25/672b25225ec65f2c66c609d0dbbd4342.jpg',
    images: [
      'https://i.pinimg.com/1200x/67/2b/25/672b25225ec65f2c66c609d0dbbd4342.jpg',
      'https://i.pinimg.com/1200x/43/d4/8d/43d48de378fc1bbb5f48d81d4cc3280a.jpg',
      'https://i.pinimg.com/736x/c6/d3/17/c6d317c0eb1d3b621b6ef6faa317ce55.jpg',
      'https://i.pinimg.com/736x/98/02/67/9802678145901895c135bb8d32552a94.jpg',
      'https://i.pinimg.com/736x/e5/9e/cb/e59ecb99a8f2e00f39bc557c78bc59d8.jpg'
      
    ],
    specifications: {
      metal: '22K Yellow Gold',
      purity: '91.6% Pure Gold',
      gemstone: 'Kundan & Seed Pearls with Hand-Enameling',
      weight: '55.3 grams',
      certification: 'BIS Hallmarked'
    }
  },
  

  // --- EARRINGS (8 products) ---
  {
    id: 'earrings-01',
    name: 'Majestic Diamond Jhumka Earrings',
    category: 'Earrings',
    price: 125000,
    rating: 4.9,
    reviewsCount: 28,
    description: 'Spellbinding royal chandelier earrings featuring intricate peacock carvings, fine kundan stones, and cascading fresh-water pearl drops.',
    longDescription: 'These Peacock Jhumkas capture the grace of royal Indian courts. Hand-etched peacock figures with vibrant blue-green enamel (Meenakari) work sit atop double-tiered bell-shaped domes, embellished with flat-cut kundan stones and fresh-water seed pearls.',
    image: 'https://i.pinimg.com/736x/34/76/99/347699c6f6d732896a7c7877b3c566fd.jpg',
    images: [
      'https://i.pinimg.com/736x/34/76/99/347699c6f6d732896a7c7877b3c566fd.jpg',
      'https://i.pinimg.com/1200x/46/ff/8c/46ff8c86c3caf12568cfcd966146fbc7.jpg',
      'https://i.pinimg.com/736x/3c/cd/6c/3ccd6c7e49c4b47a6a8fdba3d3ef76b7.jpg',
      'https://i.pinimg.com/736x/7d/13/32/7d13326269ceb0ad63ffd4c0ed5594c1.jpg',
      'https://i.pinimg.com/736x/cc/05/dd/cc05ddde69dd6db527670ebdab9637a6.jpg'
    ],
    isFeatured: true,
    isBestSeller: true,
    specifications: {
      metal: '22K Yellow Gold',
      purity: '91.6% Pure Gold',
      gemstone: 'Kundan, Fresh Water Pearls & Enamel',
      weight: '34.2 grams',
      certification: 'BIS Hallmark Certified'
    }
  },
  {
    id: 'earrings-02',
    name: 'Classic Diamond Stud Earrings',
    category: 'Earrings',
    price: 95000,
    rating: 5.0,
    reviewsCount: 51,
    description: 'Prestige 1-carat total weight round brilliant diamonds set in highly-secure screw-back platinum settings.',
    longDescription: 'These studs carry a matched pair of brilliant diamonds totaling 1.0 carat. Selected for their outstanding fire and scintillation, they are mounted in a minimal four-prong platinum basket that positions them flush against the earlobe.',
    image: 'https://i.pinimg.com/736x/e0/f9/92/e0f992a526a5c6dc97d23420bddf86bd.jpg',
    images: [
      'https://i.pinimg.com/736x/e0/f9/92/e0f992a526a5c6dc97d23420bddf86bd.jpg',
      'https://i.pinimg.com/1200x/2c/32/b4/2c32b4aa54bf91d3ff1ce9038045511e.jpg',
      'https://i.pinimg.com/736x/60/4c/9f/604c9fd0ee9ad542e3293942352c042e.jpg',
      'https://i.pinimg.com/1200x/70/da/b0/70dab04c3ad4ddf204ff2b0aa6829514.jpg',
      'https://i.pinimg.com/736x/4b/d6/2b/4bd62be06b5401003dd7e4623cac0cdf.jpg',
      'https://i.pinimg.com/1200x/6a/f1/08/6af1082272881687241082a4e652780b.jpg'
    ],
    isBestSeller: true,
    specifications: {
      metal: '950 Platinum',
      purity: '95.0% Pure Platinum',
      gemstone: 'Round Diamonds (1.0 ctw, F color, VVS2)',
      weight: '3.1 grams',
      certification: 'GIA Certified'
    }
  },
  {
    id: 'earrings-03',
    name: 'Royal Emerald Drop Chandeliers',
    category: 'Earrings',
    price: 240000,
    rating: 4.8,
    reviewsCount: 16,
    description: 'Grand articulated chandelier earrings featuring pear-shaped Zambian emeralds suspended within brilliant diamond frameworks.',
    longDescription: 'Exuding aristocratic poise, these drop earrings hold two magnificent pear-shaped Zambian emeralds totaling 4.5 carats. The emeralds sway inside a delicate 18K white gold frame set with marquise and brilliant-cut diamonds.',
    image: 'https://i.pinimg.com/736x/a1/ae/5c/a1ae5c8e0ebf428104dc52332c646987.jpg',
    images: [
      'https://i.pinimg.com/736x/a1/ae/5c/a1ae5c8e0ebf428104dc52332c646987.jpg',
      'https://i.pinimg.com/1200x/85/42/67/85426729501ed4c42db1f582b023295a.jpg',
      'https://i.pinimg.com/736x/38/a1/5c/38a15c1d14d27bab2ed0895a36da8597.jpg',
      'https://i.pinimg.com/1200x/bf/d4/dd/bfd4dd0a6a9e434293797dde6b93692a.jpg',
      'https://i.pinimg.com/1200x/01/ca/3a/01ca3a5224f85d70a6966e1c43dd3bdc.jpg',
      'https://i.pinimg.com/736x/25/07/5d/25075de47192b1851e6de5d998892c5b.jpg'
    ],
    isFeatured: true,
    specifications: {
      metal: '18K White Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Zambian Emeralds & Diamonds (2.8 ctw)',
      weight: '16.5 grams',
      certification: 'IGI Certified'
    }
  },
  {
    id: 'earrings-04',
    name: 'Shree Signature Diamond Hoops',
    category: 'Earrings',
    price: 78000,
    rating: 4.7,
    reviewsCount: 22,
    description: 'Classic inside-out diamond hoop earrings crafted with high-polish 18K white gold.',
    longDescription: 'These hoops are meticulously engineered to show sparkling diamonds both on the front-facing outer rim and the rear-facing inner rim, offering premium double-sided fire. Built with a push-button safety click lock.',
    image: 'https://i.pinimg.com/736x/ab/86/1a/ab861a68327a22dc50efb30f08e6a1e9.jpg',
    images: [
      'https://i.pinimg.com/736x/ab/86/1a/ab861a68327a22dc50efb30f08e6a1e9.jpg',
      'https://i.pinimg.com/736x/34/60/c6/3460c6898edef2dc85c3898b24c03e96.jpg',
      'https://i.pinimg.com/1200x/d3/d9/85/d3d9853063ac5b33136da63b87566743.jpg',
      'https://i.pinimg.com/1200x/ca/39/da/ca39daaff5ecec3a40a2eaa4dfb8d657.jpg',
      'https://i.pinimg.com/736x/09/a5/30/09a5309292c6faf65298cff8050d4819.jpg',
      'https://i.pinimg.com/736x/dc/0b/90/dc0b9075d9fe55b3770dd34128046c1f.jpg'
      
    ],
    isNewArrival: true,
    specifications: {
      metal: '18K White Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Round Brilliant Diamonds (0.80 ctw)',
      weight: '5.8 grams',
      certification: 'SGL Certified'
    }
  },
  {
    id: 'earrings-05',
    name: 'Burmese Ruby Sui Dhaga Earrings',
    category: 'Earrings',
    price: 45000,
    rating: 4.6,
    reviewsCount: 15,
    description: 'Slender, adjustable gold pull-through earrings ending in bright, droplets of oval Burmese rubies.',
    longDescription: 'A delicate design that merges traditional mechanics with modern luxury. A long needle-thin chain slides comfortably through the earlobe, suspending vibrant, oval-cut Burmese rubies that bounce elegantly with movement.',
    image: 'https://i.pinimg.com/736x/fa/4a/2b/fa4a2bb130486c347444343bf372e135.jpg',
    images: [
      'https://i.pinimg.com/736x/fa/4a/2b/fa4a2bb130486c347444343bf372e135.jpg',
      'https://i.pinimg.com/736x/3e/1c/97/3e1c97cb53a4aa3d3babb999b02aad29.jpg',
      'https://i.pinimg.com/1200x/22/36/df/2236df54e0970a3e4492d562e9314ed9.jpg',
      'https://i.pinimg.com/1200x/86/ae/82/86ae82bfcf8388c58ec07de93f5a7c5c.jpg',
      'https://i.pinimg.com/736x/49/4b/91/494b91812727ed6bd5664f2f531b1854.jpg',
      'https://i.pinimg.com/736x/37/23/75/372375d09a95728b6713d71031e7775f.jpg'
    ],
    specifications: {
      metal: '18K Yellow Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Burmese Rubies (0.60 ctw)',
      weight: '2.9 grams',
      certification: 'BIS Hallmarked'
    }
  },
  {
    id: 'earrings-06',
    name: 'Kundan Nakshi Jhumkas',
    category: 'Earrings',
    price: 110000,
    rating: 4.9,
    reviewsCount: 13,
    description: 'Ornate antique gold bell earrings showcasing traditional Nakshi hand-engravings and kundan stone clusters.',
    longDescription: 'Representing temple art of Southern India, these heavy jhumkas feature intricate gold stampings of floral garlands, embellished with bright Kundan settings and finished with small gold beads cascading from the bell rims.',
    image: 'https://i.pinimg.com/736x/25/c7/19/25c719f5bd7e0fe2399208597afbfe51.jpg',
    images: [
      'https://i.pinimg.com/736x/25/c7/19/25c719f5bd7e0fe2399208597afbfe51.jpg',
      'https://i.pinimg.com/1200x/f6/d4/b0/f6d4b0495d5eb5d4377705991d10ec10.jpg',
      'https://i.pinimg.com/736x/1a/71/dc/1a71dc9b128588a76b48405c0778819a.jpg',
      'https://i.pinimg.com/736x/bc/06/94/bc06943e67e0323f0337171de33aa847.jpg',
      'https://i.pinimg.com/736x/f8/33/ab/f833abcd8782da8acdc23c32765817b4.jpg'
    ],
    specifications: {
      metal: '22K Yellow Gold (Antique Polish)',
      purity: '91.6% Pure Gold',
      gemstone: 'Kundan Polki Stones & Red Gem Accents',
      weight: '28.9 grams',
      certification: 'BIS Hallmarked'
    }
  },
  {
    id: 'earrings-07',
    name: 'Minimalist Diamond Ear Cuffs',
    category: 'Earrings',
    price: 350000,
    rating: 4.5,
    reviewsCount: 10,
    description: 'A contemporary pair of non-pierced sliding ear cuffs with brilliant-cut micro-diamonds in yellow gold.',
    longDescription: 'Add structured brilliance without needing multiple piercings. These minimal cuffs wrap comfortably around the upper cartilage, sparkling with pavé-set diamonds.',
    image: 'https://i.pinimg.com/736x/9a/55/09/9a5509a646c7b30dbf5faa00c308ede3.jpg',
    images: [
      'https://i.pinimg.com/736x/9a/55/09/9a5509a646c7b30dbf5faa00c308ede3.jpg',
      'https://i.pinimg.com/1200x/bd/3f/4e/bd3f4e0dd0476f680ee4349c00f295a3.jpg',
      'https://i.pinimg.com/736x/90/47/c0/9047c04031b6da7ab2ccf543112a4652.jpg',
      'https://i.pinimg.com/1200x/2d/27/a4/2d27a4def8eb65f40ebbc1b8620b8686.jpg',
      'https://i.pinimg.com/1200x/34/55/0f/34550ffa98f0abed0bd9fc197aba9f84.jpg'
    ],
    isNewArrival: true,
    specifications: {
      metal: '18K Yellow Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Round Diamonds (0.12 ctw)',
      weight: '2.1 grams',
      certification: 'BIS Hallmarked'
    }
  },
  {
    id: 'earrings-08',
    name: 'South Sea Pearl Drop Earrings',
    category: 'Earrings',
    price: 55000,
    rating: 4.8,
    reviewsCount: 19,
    description: 'Elegant post earrings with sparkling diamond clusters suspending large, flawless white South Sea pearls.',
    longDescription: 'For the ultimate wedding guest or evening gala ensemble, these elegant drops contain flawless, high-luster South Sea pearls dangling beneath cluster arrangements of marquise-cut white diamonds.',
    image: 'https://i.pinimg.com/1200x/d9/f3/4d/d9f34d8eb206adb8c1cbc670541f596a.jpg',
    images: [
      'https://i.pinimg.com/1200x/d9/f3/4d/d9f34d8eb206adb8c1cbc670541f596a.jpg',
      'https://i.pinimg.com/736x/ea/00/4a/ea004aa0a29ff6ae7fe3e7ae6ca647ef.jpg',
      'https://i.pinimg.com/736x/da/e9/e2/dae9e2b124aa342dbb18e6fcce3615e1.jpg',
      'https://i.pinimg.com/736x/8a/25/aa/8a25aa9f0724855ab27465d2ec511dd7.jpg',
      'https://i.pinimg.com/1200x/00/28/03/0028039bc500fe74b847952aae69eae2.jpg',
      'https://i.pinimg.com/736x/c4/a8/2d/c4a82dd01ae05cd8c6d840d29dd176dc.jpg'
    ],
    specifications: {
      metal: '18K White Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'South Sea Pearls & Diamonds (0.45 ctw)',
      weight: '7.2 grams',
      certification: 'SGL Certified'
    }
  },
  {
    id: 'earrings-09',
    name: 'Emerald Drop Diamond Earrings',
    category: 'Earrings',
    price: 100000,
    rating: 4.8,
    reviewsCount: 19,
    description: 'Elegant post earrings with sparkling diamond clusters suspending large, flawless white South Sea pearls.',
    longDescription: 'For the ultimate wedding guest or evening gala ensemble, these elegant drops contain flawless, high-luster South Sea pearls dangling beneath cluster arrangements of marquise-cut white diamonds.',
    image: 'https://i.pinimg.com/1200x/db/48/a9/db48a910b25642f9f7796f45311b4092.jpg',
    images: [
      'https://i.pinimg.com/1200x/db/48/a9/db48a910b25642f9f7796f45311b4092.jpg',
      'https://i.pinimg.com/1200x/1f/9b/ab/1f9bab7cc61f975e603f934f2e2643af.jpg',
      'https://i.pinimg.com/1200x/9a/78/61/9a7861958c429ee7be48536f5bfc404e.jpg',
      'https://i.pinimg.com/1200x/20/8c/32/208c32d0e7e7d4b6eb488e8ac9762ba5.jpg',
      'https://i.pinimg.com/1200x/41/08/2a/41082a918a4382cfe6cb1bf51b24be42.jpg'
    ],
    specifications: {
      metal: '18K White Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'South Sea Pearls & Diamonds (0.45 ctw)',
      weight: '7.2 grams',
      certification: 'SGL Certified'
    }
  },

  // --- BANGLES (7 products) ---
  {
    id: 'bangles-01',
    name: 'Imperial Gold Kada Cuff',
    category: 'Bangles',
    price: 190000,
    rating: 4.9,
    reviewsCount: 31,
    description: 'An ornate traditional 22K gold bangle crafted with heavy filigree detailing and secure screw hinge.',
    longDescription: 'The Imperial Gold Kada is a magnificent tribute to royal Indian filigree art. Meticulously shaped by hereditary goldsmiths, this thick cuff features interlocking geometric patterns, floral carvings, and a screw-lock hinge. Made of solid 22K gold, the outer rim is textured with micro-beading.',
    image: 'https://i.pinimg.com/736x/d9/b2/fe/d9b2fe53c6b8bd6fe91cb1ee60939fb7.jpg',
    images: [
      'https://i.pinimg.com/736x/d9/b2/fe/d9b2fe53c6b8bd6fe91cb1ee60939fb7.jpg',
      'https://i.pinimg.com/736x/a5/99/11/a5991144dfaa15181566c39b2e1d62b1.jpg',
      'https://i.pinimg.com/736x/5e/ba/a9/5ebaa924824d981062446ed071fa3463.jpg',
      'https://i.pinimg.com/1200x/5c/4f/4f/5c4f4f3e4811ab7b030817ab5045fb2a.jpg',
      'https://i.pinimg.com/736x/51/d5/8c/51d58c609dd5fcea348ffafa4f32dbfc.jpg',
      'https://i.pinimg.com/1200x/dd/e1/09/dde109069bc87b051a6f3116b7fcd81b.jpg'
    ],
    isFeatured: true,
    isBestSeller: true,
    specifications: {
      metal: '22K Yellow Gold',
      purity: '91.6% Pure Gold',
      gemstone: 'Solid Gold Artistry',
      weight: '56.8 grams',
      certification: 'BIS Hallmark Certified'
    }
  },
  {
    id: 'bangles-02',
    name: 'Royal Bangles Set',
    category: 'Bangles',
    price: 350000,
    rating: 5.0,
    reviewsCount: 18,
    description: 'A masterwork bridal set of heavy 22K gold bangles inlaid with pristine uncut Polki diamonds and rubies.',
    longDescription: 'Exuding pure royal magnificence, this bridal set of two broad kadas is meticulously crafted with flat-cut Polki diamonds nestled in high-purity gold foil settings, highlighted by bright red enamel inlays.',
    image: 'https://i.pinimg.com/1200x/af/20/b0/af20b036ae15476f4396134148d92d54.jpg',
    images: [
      'https://i.pinimg.com/1200x/af/20/b0/af20b036ae15476f4396134148d92d54.jpg',
      'https://i.pinimg.com/736x/4c/e5/40/4ce5406a6ec8a17e8e192760ee6056f9.jpg',
      'https://i.pinimg.com/1200x/85/97/1f/85971ffe3a18e90f47e7af4d01e5b732.jpg',
      'https://i.pinimg.com/736x/c3/48/cd/c348cd19e2a3c27d4c1997e6f065941f.jpg',
      'https://i.pinimg.com/1200x/9e/52/82/9e528217783775d589b8861d55d70ec3.jpg'
    ],
    isBestSeller: true,
    specifications: {
      metal: '22K Yellow Gold',
      purity: '91.6% Pure Gold Base',
      gemstone: 'Uncut Polki Diamonds & Rubies',
      weight: '72.4 grams',
      certification: 'BIS Hallmarked with Gemstone Report'
    }
  },
  {
    id: 'bangles-03',
    name: 'Bride collection',
    category: 'Bangles',
    price: 140000,
    rating: 4.8,
    reviewsCount: 14,
    description: 'Artistic bangles hand-enameled with magnificent peacock patterns and encrusted with kundan stones.',
    longDescription: 'Originating from Jaipur ateliers, these kadas display gorgeous hand-painted peacock colors. Lined with flat-cut kundan stones and closed securely with standard push-pin screw locks.',
    image: 'https://i.pinimg.com/736x/f5/b9/25/f5b9252df5297e43eb28c3ca0e5f91ac.jpg',
    images: [
      'https://i.pinimg.com/736x/f5/b9/25/f5b9252df5297e43eb28c3ca0e5f91ac.jpg',
      'https://i.pinimg.com/736x/d6/74/4c/d6744ce50c863cedbc34afa4cea226c5.jpg',
      'https://i.pinimg.com/1200x/6d/1d/f1/6d1df10e20080bb32fcdfa2b80e19ae8.jpg',
      'https://i.pinimg.com/1200x/3e/f6/f9/3ef6f91a87bca058f74b686ce2272b98.jpg',
      'https://i.pinimg.com/736x/e5/ab/e4/e5abe41a10d5c06a41e99c820c148b3a.jpg',
      'https://i.pinimg.com/736x/74/d7/40/74d740f769ca0278ba579414bde45ea4.jpg'
    ],
    specifications: {
      metal: '22K Yellow Gold',
      purity: '91.6% Pure Gold',
      gemstone: 'Kundan Stones & Jaipur Enamel',
      weight: '39.8 grams',
      certification: 'BIS Hallmark Certified'
    }
  },
  {
    id: 'bangles-04',
    name: 'Classic Single Bangle',
    category: 'Bangles',
    price: 95000,
    rating: 4.7,
    reviewsCount: 22,
    description: 'A pair of classic solid yellow gold bangles decorated with beautiful hand-drawn wire filigree meshes.',
    longDescription: 'These comfortable everyday luxury bangles feature an intricate mesh of hand-shaped gold wires, flanked by polished borders that slide on smoothly.',
    image: 'https://i.pinimg.com/1200x/17/b8/52/17b852ad480028da07daf9ea12d741b1.jpg',
    images: [
      'https://i.pinimg.com/1200x/17/b8/52/17b852ad480028da07daf9ea12d741b1.jpg',
      'https://i.pinimg.com/1200x/e5/df/f1/e5dff1c5467408d60cecb4f6a06d0dfe.jpg',
      'https://i.pinimg.com/736x/3e/33/d9/3e33d9a09b8dafd38f8b3fb98d532462.jpg',
      'https://i.pinimg.com/736x/a0/ce/41/a0ce41c39c90da7c6caad3b2a8652bf3.jpg',
      'https://i.pinimg.com/736x/20/5e/f5/205ef5baeda688ed57020ff34f008819.jpg'
    ],
    isFeatured: true,
    specifications: {
      metal: '22K Yellow Gold',
      purity: '91.6% Pure Gold',
      gemstone: 'None',
      weight: '26.5 grams (Pair total)',
      certification: 'BIS Hallmark Certified'
    }
  },
  {
    id: 'bangles-05',
    name: 'Diamond-Encrusted Elegant Kada',
    category: 'Bangles',
    price: 280000,
    rating: 4.9,
    reviewsCount: 11,
    description: 'A sleek, stunning 18K white gold kada paved with lines of brilliant round and baguette diamonds.',
    longDescription: 'For a high-fashion, premium aesthetic, this kada houses alternating lines of baguette and round brilliant-cut diamonds, totaling 4 carats. Constructed with a concealed lock mechanism.',
    image: 'https://i.pinimg.com/736x/a5/54/ab/a554abfdbc2b5c42d37268023c424a6a.jpg',
    images: [
      'https://i.pinimg.com/736x/a5/54/ab/a554abfdbc2b5c42d37268023c424a6a.jpg',
      'https://i.pinimg.com/736x/53/eb/b8/53ebb86c4818f302fcd19a9ef752ae8c.jpg',
      'https://i.pinimg.com/736x/08/19/32/0819329a899d1661c5f0c54cc1b53a18.jpg'
    ],
    isNewArrival: true,
    specifications: {
      metal: '18K White Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Brilliant & Baguette Diamonds (4.0 ctw)',
      weight: '24.1 grams',
      certification: 'SGL Certified'
    }
  },
  {
    id: 'bangles-06',
    name: 'Sleek Rose Gold Diamond Bangles',
    category: 'Bangles',
    price: 175000,
    rating: 4.8,
    reviewsCount: 15,
    description: 'A set of three delicate stacking bangles in 18K rose gold, paved with micro-diamonds.',
    longDescription: 'The ultimate in quiet luxury stacking. This triplet of ultra-thin, flexible rose gold bangles is individually encrusted with micro-pavé diamonds, glistening in any lighting condition.',
    image: 'https://i.pinimg.com/1200x/34/32/22/3432224854a13f47cd1f8a76bbc0b4dc.jpg',
    images: [
      'https://i.pinimg.com/1200x/34/32/22/3432224854a13f47cd1f8a76bbc0b4dc.jpg',
      'https://i.pinimg.com/1200x/48/d9/0a/48d90aa8c2444fecc1140e660ce212c4.jpg',
      'https://i.pinimg.com/736x/d8/49/a3/d849a3d5cceeee9d010dc877522a30e3.jpg',
      'https://i.pinimg.com/736x/f4/ba/f6/f4baf6ae60d5af22113e29f4b2f9c6f4.jpg'


    ],
    specifications: {
      metal: '18K Rose Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Brilliant Diamonds (1.8 ctw)',
      weight: '18.9 grams',
      certification: 'SGL Certified'
    }
  },
  {
    id: 'bangles-07',
    name: 'Antique Nakshi Gold Bangle Set',
    category: 'Bangles',
    price: 215000,
    rating: 4.9,
    reviewsCount: 13,
    description: 'Heavy traditional bangles carved with mythological symbols and deep copper-toned antique polish.',
    longDescription: 'Masterfully carved using ancient Southern Nakshi repoussé methods, this thick pair of bangles displays gorgeous temple floral carvings, creating a grand antique gold appearance.',
    image: 'https://i.pinimg.com/736x/b3/c6/ea/b3c6eac55a638458242cb1e1b2171e36.jpg',
    images: [
      'https://i.pinimg.com/736x/b3/c6/ea/b3c6eac55a638458242cb1e1b2171e36.jpg',
      'https://i.pinimg.com/736x/8e/3b/e3/8e3be36743cbee3ca3e28d3ad653ee87.jpg',
      'https://i.pinimg.com/736x/fd/c8/9d/fdc89dacad1acf4348e5cb5009e36a51.jpg',
      'https://i.pinimg.com/736x/fd/b4/0d/fdb40d0a4b851385ce03865b53c47309.jpg'
    ],
    isNewArrival: true,
    specifications: {
      metal: '22K Yellow Gold',
      purity: '91.6% Pure Gold',
      gemstone: 'None',
      weight: '44.5 grams',
      certification: 'BIS Hallmark Certified'
    }
  },

  // --- BRACELETS (5 products) ---
  {
    id: 'bracelet-01',
    name: 'Minimalist Rose Gold Diamond Cuff',
    category: 'Bracelets',
    price: 399000,
    rating: 5.0,
    reviewsCount: 37,
    description: 'A classic, seamless line of perfectly matched round diamonds, totaling 8.5 carats, set in individual 18K white gold baskets.',
    longDescription: 'Understated luxury in its most fluid form. Our Tennis Bracelet represents premium uniformity, composed of 46 hand-selected round brilliant diamonds of matching G-color and VS2-clarity. Each stone is cradled in an ultra-slim 18K white gold basket, creating a continuous sparkling beam that wraps elegantly around the wrist.',
    image: 'https://i.pinimg.com/736x/bf/79/c3/bf79c3ef02d8461a52f4d4e3f97aa483.jpg',
    images: [
      'https://i.pinimg.com/736x/bf/79/c3/bf79c3ef02d8461a52f4d4e3f97aa483.jpg',
      'https://i.pinimg.com/736x/c2/c0/c2/c2c0c200dd495cc5338bf10315c90c01.jpg',
      'https://i.pinimg.com/1200x/46/6c/cf/466ccf207841aef0831c63fa8288fbf6.jpg',
      'https://i.pinimg.com/1200x/35/96/a7/3596a790eac52eb7c8ff1118a5b03123.jpg'
    ],
    isFeatured: true,
    isBestSeller: true,
    specifications: {
      metal: '18K White Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Round Diamonds (8.5 ctw, G color, VS2)',
      weight: '16.5 grams',
      certification: 'SGL Certified Diamond Jewelry'
    }
  },
  {
    id: 'bracelet-02',
    name: 'Shimmering Tennis Diamond Bracelet',
    category: 'Bracelets',
    price: 260000,
    rating: 4.8,
    reviewsCount: 15,
    description: 'An alternating link bracelet showcasing rich oval Zambian emeralds and brilliant diamond halos in white gold.',
    longDescription: 'This majestic bracelet consists of ten vibrant green oval-cut Zambian emeralds, each framed by diamond halos and linked with sparkling brilliant-cut bar elements.',
    image: 'https://i.pinimg.com/1200x/73/0c/e4/730ce4a1478d5d004a71e1fc7cdd42c0.jpg',
    images: [
      'https://i.pinimg.com/1200x/73/0c/e4/730ce4a1478d5d004a71e1fc7cdd42c0.jpg',
      'https://i.pinimg.com/1200x/ce/20/74/ce2074efd1ba43ec8148e4a83857d576.jpg',
      'https://i.pinimg.com/1200x/8b/1d/c1/8b1dc196a761e151b04e3e769e05d898.jpg',
      'https://i.pinimg.com/1200x/79/8c/59/798c59edf758d00b9eb4e4b8adf677ed.jpg'
    ],
    specifications: {
      metal: '18K White Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Zambian Emeralds & Round Diamonds (2.5 ctw)',
      weight: '14.2 grams',
      certification: 'IGI Certified'
    }
  },
  {
    id: 'bracelet-03',
    name: 'Emerald & Diamond Link Bracelet',
    category: 'Bracelets',
    price: 85000,
    rating: 4.7,
    reviewsCount: 19,
    description: 'A sleek, open-ended bypass cuff in 18K rose gold, capped with triangular clusters of diamonds.',
    longDescription: 'An elegant contemporary addition, this slim rose gold cuff features extreme flexibility for easy slip-on wear, ending in sparkling geometric trillion-cut diamond clusters.',
    image: 'https://i.pinimg.com/1200x/16/26/bf/1626bfa715c697510731820859d8171e.jpg',
    images: [
      'https://i.pinimg.com/1200x/16/26/bf/1626bfa715c697510731820859d8171e.jpg',
      'https://i.pinimg.com/736x/44/86/c6/4486c61d844dafbd3981aaa62fc01906.jpg',
      'https://i.pinimg.com/1200x/18/39/ae/1839ae9076b104a534967bbd1bc0de84.jpg',
      'https://i.pinimg.com/736x/55/88/c7/5588c7e309a5ecf2d3d603940b0d9bd2.jpg',
      'https://i.pinimg.com/736x/6b/75/8f/6b758f19889869e055226bd9f0765fba.jpg'
    ],
    isBestSeller: true,
    specifications: {
      metal: '18K Rose Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Round Diamonds (0.45 ctw)',
      weight: '8.5 grams',
      certification: 'BIS Hallmarked'
    }
  },
  {
    id: 'bracelet-04',
    name: 'Double layer Diamond Bracelet',
    category: 'Bracelets',
    price: 68000,
    rating: 4.6,
    reviewsCount: 12,
    description: 'A heavy 22K gold chain bracelet decorated with dangling floral Kundan charms and small pearls.',
    longDescription: 'Add heritage flair to your wrist. This chunky link bracelet suspends five beautiful circular flower motifs crafted in gold-wrapped kundan glass settings.',
    image: 'https://i.pinimg.com/1200x/d4/4b/63/d44b633c132b63bec8b19e60fdd94813.jpg',
    images: [
      'https://i.pinimg.com/1200x/d4/4b/63/d44b633c132b63bec8b19e60fdd94813.jpg',
      'https://i.pinimg.com/1200x/c6/29/6c/c6296c1ba9e455c59cc5fddd9ad75ef6.jpg',
      'https://i.pinimg.com/1200x/c0/c5/6a/c0c56abdf61560a552d1642323701426.jpg',
      'https://i.pinimg.com/1200x/eb/e9/95/ebe99555896e4e2824bf38c1b292f0da.jpg',
      'https://i.pinimg.com/1200x/57/34/60/57346027b0f203be9b65aa4f685d8038.jpg',
      'https://i.pinimg.com/1200x/26/2b/86/262b863554f0fd553bfd54451eec9a5c.jpg'
    ],
    specifications: {
      metal: '22K Yellow Gold',
      purity: '91.6% Pure Gold',
      gemstone: 'Kundan Foil & Seed Pearls',
      weight: '19.4 grams',
      certification: 'BIS Hallmark Certified'
    }
  },
  {
    id: 'bracelet-05',
    name: 'Delicate Pearl & Diamond Bracelet',
    category: 'Bracelets',
    price: 42000,
    rating: 4.8,
    reviewsCount: 23,
    description: 'A slender yellow gold wire bracelet accented with five luminous pearls and sparkling diamond dividers.',
    longDescription: 'Perfect for elegant daily wear, this ultra-light gold band positions five grade-A cultured freshwater pearls separated by brilliant-cut diamond bands.',
    image: 'https://i.pinimg.com/1200x/fa/99/ae/fa99ae6626de2bc8eee3b46556d44dd0.jpg',
    images: [
      'https://i.pinimg.com/1200x/fa/99/ae/fa99ae6626de2bc8eee3b46556d44dd0.jpg',
      'https://i.pinimg.com/736x/fd/79/07/fd7907ac78282d4f54ee6d5ef586882e.jpg',
      'https://i.pinimg.com/736x/2a/16/96/2a16967e342c5088b56e5fd59c6072cc.jpg',
      'https://i.pinimg.com/736x/12/a0/9c/12a09cf645a5ce356fbbef9d91e692eb.jpg'
      
    ],
    isNewArrival: true,
    specifications: {
      metal: '18K Yellow Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Cultured Freshwater Pearls & Diamonds',
      weight: '5.2 grams',
      certification: 'BIS Hallmarked'
    }
  },

  // --- PENDANTS (5 products) ---
  {
    id: 'pendant-01',
    name: 'Aklet for Bride ',
    category: 'Pendants',
    price: 320000,
    rating: 4.9,
    reviewsCount: 33,
    description: 'A spectacular 2-carat pear-shaped brilliant solitaire pendant hung on a thin, solid platinum chain.',
    longDescription: 'Capturing ultimate sparkle, this pendant suspends a beautiful 2.0-carat pear-cut GIA-graded diamond in an open three-prong crown, hanging from a micro-faceted platinum wire chain.',
    image: 'https://i.pinimg.com/1200x/4c/91/5d/4c915d8901b4e75dac1446b6532e00bf.jpg',
    images: [
      'https://i.pinimg.com/1200x/4c/91/5d/4c915d8901b4e75dac1446b6532e00bf.jpg',
      'https://i.pinimg.com/736x/e0/1b/70/e01b701beedd6c56390360ce53af2416.jpg',
      'https://i.pinimg.com/1200x/12/02/a9/1202a92a4a9671dfd722672786bdd4df.jpg'
    ],
    isFeatured: true,
    isBestSeller: true,
    specifications: {
      metal: '950 Platinum',
      purity: '95.0% Pure Platinum',
      gemstone: 'Pear Solitaire Diamond (2.0 ct, E/VVS1)',
      weight: '5.5 grams',
      certification: 'GIA Certified'
    }
  },
  {
    id: 'pendant-02',
    name: 'Diamond Emerald Aklet ',
    category: 'Pendants',
    price: 115000,
    rating: 4.8,
    reviewsCount: 16,
    description: 'An elegant round emerald stone framed by dual halos of brilliant-cut diamonds in white gold.',
    longDescription: 'This delicate circular drop pendant showcases a 1.2-carat deep green emerald, highlighted beautifully by a double ring of shimmering micro-diamonds on an 18K white gold adjustable trace chain.',
    image: 'https://i.pinimg.com/736x/98/3f/cd/983fcda035c8eadeed3ab35da967fa15.jpg',
    images: [
      'https://i.pinimg.com/736x/98/3f/cd/983fcda035c8eadeed3ab35da967fa15.jpg',
      'https://i.pinimg.com/1200x/b6/bc/c5/b6bcc584d286734bfba308e6597c00fd.jpg',
      'https://i.pinimg.com/736x/5b/ac/49/5bac4920e4c217229000e78a0b3b4d6d.jpg',
      'https://i.pinimg.com/736x/62/41/eb/6241ebd346ec67289ee7152b61fb8f30.jpg',
      'https://i.pinimg.com/736x/c8/9d/ac/c89dac18d43d09e3dcd40999135e9528.jpg'
    ],
    isBestSeller: true,
    specifications: {
      metal: '18K White Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Zambian Round Emerald & Diamonds',
      weight: '4.8 grams',
      certification: 'IGI Certified'
    }
  },
  {
    id: 'pendant-03',
    name: 'Daily Wear Aklet Diamond',
    category: 'Pendants',
    price: 75000,
    rating: 4.7,
    reviewsCount: 21,
    description: 'A romantic heart-shaped Burmese ruby pendant bordered with micro-pavé diamonds in rose gold.',
    longDescription: 'Symbolizing deep affection, this pendant showcases a heart-faceted Burmese ruby of 0.85 carats, nestled within a classic brilliant diamond frame in high-polished rose gold.',
    image: 'https://i.pinimg.com/736x/19/f9/b2/19f9b2b2ed57da8dd390a1a2479f6263.jpg',
    images: [
      'https://i.pinimg.com/736x/19/f9/b2/19f9b2b2ed57da8dd390a1a2479f6263.jpg',
      'https://i.pinimg.com/736x/c3/43/e5/c343e5c857cf728cd7a1bb309ec64285.jpg',
      'https://i.pinimg.com/736x/58/3b/bc/583bbc31fb64f511481910ce9e00ecbb.jpg',
      'https://i.pinimg.com/736x/ce/1e/3b/ce1e3b0c07713c67adeb62367e5c24a7.jpg',
      'https://i.pinimg.com/736x/cb/e1/0a/cbe10a75c21d58ec28556351534b1681.jpg'
    ],
    specifications: {
      metal: '18K Rose Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Burmese Ruby & Diamonds (0.18 ctw)',
      weight: '3.9 grams',
      certification: 'SGL Certified'
    }
  },
  {
    id: 'pendant-04',
    name: 'Double Layer Diamond Aklet',
    category: 'Pendants',
    price: 35000,
    rating: 4.9,
    reviewsCount: 29,
    description: 'An iconic solid 22K gold coin pendant with an engraved sculpture of Lord Ganesha, detailed with rubies.',
    longDescription: 'An auspicious heirloom carrying divine blessings, this heavy solid gold medallion displays Lord Ganesha surrounded by hand-set cabochon ruby accents and delicate floral Nakshi engraving.',
    image: 'https://i.pinimg.com/1200x/fa/75/17/fa7517d620ab135bd6d93635a800f68e.jpg',
    images: [
      'https://i.pinimg.com/1200x/fa/75/17/fa7517d620ab135bd6d93635a800f68e.jpg',
      'https://i.pinimg.com/736x/4b/b3/38/4bb33867fbb34ea95afb1d4e41198a71.jpg',
      'https://i.pinimg.com/736x/46/78/37/46783748817a33f9f311d226d1ff3c22.jpg',
      'https://i.pinimg.com/736x/84/0d/21/840d216fcb9fbb7c9f3df1113f478176.jpg'
    ],
    specifications: {
      metal: '22K Yellow Gold',
      purity: '91.6% Pure Gold',
      gemstone: 'Cabochon Rubies',
      weight: '10.2 grams',
      certification: 'BIS Hallmark Certified'
    }
  },
  {
    id: 'pendant-05',
    name: 'Delicate Pearl aklet diamond',
    category: 'Pendants',
    price: 18000,
    rating: 4.6,
    reviewsCount: 14,
    description: 'A small starburst-shaped pendant with brilliant diamond pavé on an 18K yellow gold chain.',
    longDescription: 'Designed as a minimal daily touch of luxury, this charming starburst glows with micro-pavé diamonds, hanging gracefully from a fine, high-polish yellow gold chain.',
    image: 'https://i.pinimg.com/736x/70/4c/67/704c6758cf665c054fa1b4734a94f409.jpg',
    images: [
      'https://i.pinimg.com/736x/70/4c/67/704c6758cf665c054fa1b4734a94f409.jpg',
      'https://i.pinimg.com/736x/f8/e4/bb/f8e4bbe01bdf89d9974b4c3d51325207.jpg',
      'https://i.pinimg.com/736x/5b/b4/2e/5bb42e67b0c4247c19131699e66ffa04.jpg',
      'https://i.pinimg.com/736x/26/4f/cd/264fcdd6da0b0cf40e76c747a32ab5ce.jpg'
    ],
    isNewArrival: true,
    specifications: {
      metal: '18K Yellow Gold',
      purity: '75.0% Pure Gold',
      gemstone: 'Round Diamonds (0.08 ctw)',
      weight: '2.5 grams',
      certification: 'BIS Hallmarked'
    }
  }
];

export const REVIEWS = [
  {
    id: 'rev-01',
    name: 'Ananya Sharma',
    rating: 5,
    date: 'June 18, 2026',
    comment: 'The Shree Queen Bridal Set exceeded every single one of my expectations. It felt so heavy and royal on my wedding day, and the diamond work has an incredible shimmer in candlelight. Truly a legacy piece!',
    verified: true
  },
  {
    id: 'rev-02',
    name: 'Vikram Aditya',
    rating: 5,
    date: 'May 24, 2026',
    comment: 'Bought the Empress Solitaire ring for my fiancée and she was speechless. The GIA certification and the detail on the micro-pavé band are superb. The Shree customer service team sent detailed videos of the diamonds before shipment.',
    verified: true
  },
  {
    id: 'rev-03',
    name: 'Priyah Patel',
    rating: 4,
    date: 'April 02, 2026',
    comment: 'Gorgeous Kundan earrings! Excellent heft, and the traditional enamel on the back is as beautiful as the front. Delivery took an extra day, but the luxury box and leatherette casing made up for it.',
    verified: true
  },
  {
    id: 'rev-04',
    name: 'Kabir Mehta',
    rating: 5,
    date: 'March 11, 2026',
    comment: 'Exceptional craftsmanship. I bought the Imperial Kada as a heritage gift for my mother. The filigree detail is stunningly precise. Best luxury brand experience in modern jewelry.',
    verified: true
  }
];
