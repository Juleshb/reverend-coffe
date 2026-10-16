export const shop = {
  name: "Reverend Coffee",
  city: "Rubavu",
  country: "Rwanda",
  welcome: "Welcome",
  motto: "natural. fresh. excellent.",
  tagline: "Two coffee houses on the north shore of Lake Kivu.",
  about:
    "Reverend Coffee keeps two rooms in Rubavu. Mahoko is the quieter house. Gisenyi sits near Petite Barrière, for people coming and going along the lake. Both pour the same cups: short espresso, slow filter, and a small kitchen for the morning.",
  photos: [
    "/shop/reverend-1.jpg",
    "/shop/reverend-2.jpg",
    "/shop/reverend-3.jpg",
    "/shop/reverend-4.jpg",
    "/shop/reverend-5.jpg",
    "/shop/reverend-6.jpg",
    "/shop/reverend-7.jpg",
  ],
}

function photo(id) {
  return `/menu/${id}.jpg`
}

export const branches = [
  {
    id: "mahoko",
    name: "Mahoko",
    area: "Mahoko, Rubavu",
    summary: "The neighbourhood house. A slower room, a short walk from the Mahoko road.",
    hours: [
      ["Monday – Friday", "7:00 – 21:00"],
      ["Saturday – Sunday", "7:30 – 21:00"],
    ],
    note: "Best for a long filter and a quiet table.",
    maps: "https://maps.app.goo.gl/GEvkiKjbKFL3vknX7",
    image: "/shop/reverend-1.jpg",
  },
  {
    id: "gisenyi",
    name: "Gisenyi",
    area: "Near Petite Barrière",
    summary: "The lakeside house in Gisenyi, close to Petite Barrière.",
    hours: [
      ["Monday – Thursday", "7:00 – 21:30"],
      ["Friday – Sunday", "7:00 – 22:00"],
    ],
    note: "Best when you are crossing town and want a cold cup.",
    maps: "https://www.google.com/maps/search/?api=1&query=Petite+Barriere+Gisenyi+Rubavu",
    image: "/shop/reverend-5.jpg",
  },
]

export const categories = [
  { id: "espresso", name: "Espresso bar" },
  { id: "milk", name: "Milk coffee" },
  { id: "brew", name: "Filter & brew" },
  { id: "cold", name: "Cold & fresh" },
  { id: "tea", name: "Tea" },
  { id: "kitchen", name: "Kitchen" },
]

export const menu = [
  {
    id: "espresso",
    name: "Espresso",
    description: "A short, dark shot. Served as a single or as a double.",
    price: 1500,
    category: "espresso",
    image: photo("photo-1514432324607-a09d9b4aefdd"),
  },
  {
    id: "macchiato",
    name: "Macchiato",
    description: "Espresso marked with a spoon of warm milk foam.",
    price: 2000,
    category: "espresso",
    image: photo("photo-1485808191679-5f86510681a2"),
  },
  {
    id: "americano",
    name: "Americano",
    description: "Espresso lengthened with hot water. Clean and steady.",
    price: 2000,
    category: "espresso",
    image: photo("photo-1514432324607-a09d9b4aefdd"),
  },
  {
    id: "cortado",
    name: "Cortado",
    description: "Equal parts espresso and steamed milk, in a small glass.",
    price: 2500,
    category: "espresso",
    featured: true,
    image: photo("photo-1572442388796-11668a67e53d"),
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Espresso, steamed milk, and a thick cap of foam.",
    price: 3000,
    category: "milk",
    image: photo("photo-1534778101976-62847782c213"),
  },
  {
    id: "flat-white",
    name: "Flat white",
    description: "Silky milk poured short over a double shot.",
    price: 3200,
    category: "milk",
    image: photo("photo-1509042239860-f550ce710b93"),
  },
  {
    id: "latte",
    name: "Café latte",
    description: "A longer milk coffee. Quiet, warm, and easy to stay with.",
    price: 3500,
    category: "milk",
    image: photo("photo-1561882468-9110e03e0f78"),
  },
  {
    id: "mocha",
    name: "Mocha",
    description: "Espresso, dark cocoa, and steamed milk.",
    price: 4000,
    category: "milk",
    image: photo("photo-1606313564200-e75d5e30476c"),
  },
  {
    id: "honey-latte",
    name: "Mahoko honey latte",
    description: "Latte sweetened with local honey and a little cinnamon.",
    price: 4000,
    category: "milk",
    branches: ["mahoko"],
    featured: true,
    image: photo("photo-1541167760496-1628856ab772"),
  },
  {
    id: "spice-latte",
    name: "Reverend spice latte",
    description: "Cardamom, ginger, and a double shot under steamed milk.",
    price: 4200,
    category: "milk",
    featured: true,
    image: photo("photo-1541167760496-1628856ab772"),
  },
  {
    id: "house-filter",
    name: "House filter",
    description: "A rotating Rwandan lot, brewed by the cup. Ask what is on the bar.",
    price: 2500,
    category: "brew",
    featured: true,
    image: photo("photo-1511920170033-f8396924c348"),
  },
  {
    id: "v60",
    name: "V60 single origin",
    description: "One cup, one origin. Usually Huye, Nyamasheke, or Gakenke.",
    price: 3500,
    category: "brew",
    image: photo("photo-1511920170033-f8396924c348"),
  },
  {
    id: "press",
    name: "French press for two",
    description: "A shared press of the house lot. Served with two cups.",
    price: 5000,
    category: "brew",
    image: photo("photo-1511920170033-f8396924c348"),
  },
  {
    id: "cold-brew",
    name: "Cold brew",
    description: "Steeped overnight and poured over ice. Smooth, no bitterness.",
    price: 3500,
    category: "cold",
    image: photo("photo-1461023058943-07fcbe16d735"),
  },
  {
    id: "barriere-tonic",
    name: "Barrière tonic",
    description: "Espresso, tonic, and a strip of orange. Bright and tall.",
    price: 4000,
    category: "cold",
    branches: ["gisenyi"],
    featured: true,
    image: photo("photo-1513558161293-cdaf765ed2fd"),
  },
  {
    id: "iced-latte",
    name: "Iced latte",
    description: "Espresso and cold milk over ice.",
    price: 3800,
    category: "cold",
    image: photo("photo-1517701550927-30cf4ba1dba5"),
  },
  {
    id: "passion",
    name: "Passion cooler",
    description: "Fresh passion fruit, a little honey, and sparkling water.",
    price: 3000,
    category: "cold",
    image: photo("photo-1546173159-315724a31696"),
  },
  {
    id: "tree-tomato",
    name: "Tree tomato juice",
    description: "Pressed to order. Tart, and good with a salty snack.",
    price: 2500,
    category: "cold",
    image: photo("photo-1600271886742-f049cd451bba"),
  },
  {
    id: "chai",
    name: "African chai",
    description: "Black tea simmered with ginger, cardamom, and milk.",
    price: 2500,
    category: "tea",
    image: photo("photo-1564890369478-c89ca6d9cde9"),
  },
  {
    id: "ginger-honey",
    name: "Ginger honey",
    description: "Fresh ginger, honey, and hot water. No caffeine.",
    price: 2200,
    category: "tea",
    image: photo("photo-1564890369478-c89ca6d9cde9"),
  },
  {
    id: "black-tea",
    name: "Black tea",
    description: "A simple pot. Milk and honey on the side if you want them.",
    price: 1500,
    category: "tea",
    image: photo("photo-1576092768241-dec231879fc3"),
  },
  {
    id: "mint",
    name: "Fresh mint",
    description: "A handful of mint in hot water.",
    price: 2000,
    category: "tea",
    image: photo("photo-1556679343-c7306c1976bc"),
  },
  {
    id: "croissant",
    name: "Butter croissant",
    description: "Baked in the morning. Plain, or with jam.",
    price: 2000,
    category: "kitchen",
    image: photo("photo-1555507036-ab1f4038808a"),
  },
  {
    id: "mandazi",
    name: "Mandazi",
    description: "Warm, lightly sweet, and good with chai.",
    price: 1500,
    category: "kitchen",
    image: photo("photo-1551024506-0bccd828d307"),
  },
  {
    id: "sambusa",
    name: "Beef sambusa",
    description: "Crisp pastry, spiced beef. Two pieces.",
    price: 1500,
    category: "kitchen",
    image: photo("photo-1601050690597-df0568f70950"),
  },
  {
    id: "avocado",
    name: "Avocado toast",
    description: "Ripe avocado, chili, and lemon on toasted bread.",
    price: 4500,
    category: "kitchen",
    tags: ["Vegetarian"],
    image: photo("photo-1482049016688-2d3e1b311543"),
  },
  {
    id: "eggs",
    name: "Eggs and chapati",
    description: "Two eggs, chapati, and a small salad.",
    price: 4000,
    category: "kitchen",
    image: photo("photo-1525351484163-7529414344d8"),
  },
  {
    id: "granola",
    name: "Granola, yogurt, honey",
    description: "House granola, thick yogurt, banana, and honey.",
    price: 4500,
    category: "kitchen",
    tags: ["Vegetarian"],
    image: photo("photo-1490474418585-ba9bad8fd0ea"),
  },
  {
    id: "banana-bread",
    name: "Banana bread",
    description: "A thick slice. Toasted if you ask.",
    price: 2500,
    category: "kitchen",
    tags: ["Vegetarian"],
    image: photo("photo-1509440159596-0249088772ff"),
  },
]

export const milkNote = "Oat milk is 500 RWF extra on any milk coffee."

export function formatRwf(amount) {
  return `${new Intl.NumberFormat("en-RW").format(amount)} RWF`
}

export function branchName(id) {
  return branches.find((branch) => branch.id === id)?.name ?? id
}

export function itemBranches(item) {
  return item.branches ?? branches.map((branch) => branch.id)
}
