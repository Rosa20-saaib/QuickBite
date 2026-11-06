const foods = [
  {
    id: 1,
    name: 'Hummus Beiruti',
    description: 'Silky chickpea hummus finished with lemon, olive oil, and warm pita.',
    price: '$7.50',
    category: 'Mezze',
    image: 'https://cdn.tasteatlas.com/images/dishes/12885298a62f411bbe11d081bc0b187b.jpg?m=facebook'
  },
  {
    id: 2,
    name: 'Baba Ghanouj',
    description: 'Smoky roasted eggplant whipped with tahini, lemon, and garlic.',
    price: '$8.25',
    category: 'Mezze',
    image: 'https://tse2.mm.bing.net/th/id/OIP.s22A15HTzScAiLQ6tO_n4QHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 3,
    name: 'Tabbouleh',
    description: 'A bright Lebanese parsley salad with tomato, mint, and bulgur.',
    price: '$8.50',
    category: 'Mezze',
    image: 'https://tse1.mm.bing.net/th/id/OIP.gqh1BMHpUXyHjcLdKTQ9OgHaJ1?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 4,
    name: 'Fattoush',
    description: 'Crisp garden vegetables, toasted pita, sumac, and tangy dressing.',
    price: '$9.25',
    category: 'Mezze',
    image: 'https://tse3.mm.bing.net/th/id/OIP.rHfq0bKBx_G_EwfUROQj6wHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 5,
    name: 'Chicken Tawook',
    description: 'Charcoal-grilled lemon-garlic chicken with toum and pita.',
    price: '$14.50',
    category: 'Grills & Classics',
    image: 'https://tse3.mm.bing.net/th/id/OIP.x5FAqEEnUOA8gFvtbfwbgwHaHa?r=0&w=768&h=768&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 6,
    name: 'Kafta Meshwi',
    description: 'Grilled parsley-and-spice beef kafta served with rice and salad.',
    price: '$15.25',
    category: 'Grills & Classics',
    image: 'https://mealsbykara.com/wp-content/uploads/2025/10/beef-kafta-kebabs-grilled-meat-skewers-with-herbs-and-spices-1.webp'
  },
  {
    id: 7,
    name: 'Mixed Grill Platter',
    description: 'A generous feast of tawook, kafta, grilled vegetables, and toum.',
    price: '$19.50',
    category: 'Grills & Classics',
    image: 'https://tse2.mm.bing.net/th/id/OIP.HR_836PtT4Z300gTq8Zu_gHaFb?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 8,
    name: 'Shish Barak',
    description: 'Tender meat dumplings in warm, minty yogurt sauce.',
    price: '$14.75',
    category: 'Grills & Classics',
    image: 'https://tse2.mm.bing.net/th/id/OIP.vU6vQXpsQ4CatqoP6E0lQwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 9,
    name: 'Manoushe Zaatar',
    description: 'Freshly baked flatbread topped with fragrant zaatar and olive oil.',
    price: '$6.50',
    category: 'Manakish',
    image: 'https://tse4.mm.bing.net/th/id/OIP.IJ5dh0DubXrL1VtP0gZM9AHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 10,
    name: 'Manoushe Jibneh',
    description: 'Warm Lebanese flatbread with melted cheese and a hint of nigella.',
    price: '$7.25',
    category: 'Manakish',
    image: 'https://tse4.mm.bing.net/th/id/OIP.IlMKZ-zmEAM0Mtzh33QiFQHaEC?r=0&w=1408&h=768&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 11,
    name: 'Lahm Bi Ajin',
    description: 'Baked flatbread topped with spiced minced meat, tomato, and herbs.',
    price: '$8.75',
    category: 'Manakish',
    image: 'https://tse1.mm.bing.net/th/id/OIP.7L6LFMUflGiWg0rniFn7XQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 12,
    name: 'Kishk Manoushe',
    description: 'Traditional flatbread topped with tangy kishk and a drizzle of oil.',
    price: '$7.75',
    category: 'Manakish',
    image: 'https://tse4.mm.bing.net/th/id/OIP.F4TGsKyIJb2HoE89rthTTgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 13,
    name: 'Lebanese Mint Lemonade',
    description: 'Fresh lemon, garden mint, and a little sweetness blended ice-cold.',
    price: '$4.25',
    category: 'Drinks & Sweets',
    image: 'https://www.tatteredrecipes.com/wp-content/uploads/2026/04/lebanese-mint-lemonade-1.webp'
  },
  {
    id: 14,
    name: 'Jallab',
    description: 'A refreshing date-and-grape molasses drink with rose water and pine nuts.',
    price: '$4.75',
    category: 'Drinks & Sweets',
    image: 'https://tse3.mm.bing.net/th/id/OIP.f87cQGmThArfg5AIvIYYdgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 15,
    name: 'Baklava',
    description: 'Flaky layers of pastry, crushed pistachio, and fragrant syrup.',
    price: '$5.50',
    category: 'Drinks & Sweets',
    image: 'https://img.freepik.com/premium-photo/baklava-with-pistachio-nut-plate-layered-pastry-dessert-made-filo-pastry-sweetened-with-syrup-honey_493325-5614.jpg'
  },
  {
    id: 16,
    name: 'Knefeh',
    description: 'Warm cheese pastry with crisp kataifi, orange blossom syrup, and pistachio.',
    price: '$7.25',
    category: 'Drinks & Sweets',
    image: 'https://silkroadrecipes.com/wp-content/uploads/2023/06/Knafeh-Middle-Eastern-Pastry-square.jpg'
  }
];

export default foods;
