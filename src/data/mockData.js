// this is temporary data for stats and orders and has some modifications to fit the Indian context and the theme of the app. In a real application, this data would come from an API or database.
export const mockStats = [
  { id: 1, title: "Total Orders", value: "120", icon: "📦", color: "#4CAF50" },
  { id: 2, title: "Revenue", value: "₹10000", icon: "💰", color: "#FF9800" },
  { id: 3, title: "Active Users", value: "50", icon: "👥", color: "#2196F3" },
  { id: 4, title: "Pending Deliveries", value: "4", icon: "🚚", color: "#F44336" },
];

export const mockOrders = [
  { id: "ORD-1001", customer: "Rahul Sharma", item: "Organic Tomatoes", amount: "₹450", status: "Delivered", date: "2025-05-18" },
  { id: "ORD-1002", customer: "Priya Patel", item: "Fresh Spinach Bundle", amount: "₹220", status: "Pending", date: "2025-05-18" },
  { id: "ORD-1003", customer: "Amit Kumar", item: "Mango Box (5kg)", amount: "₹1,200", status: "Shipped", date: "2025-05-17" },
  { id: "ORD-1004", customer: "Sneha Reddy", item: "Mixed Vegetables", amount: "₹680", status: "Delivered", date: "2025-05-17" },
  { id: "ORD-1005", customer: "Vikram Singh", item: "Farm Eggs (30pcs)", amount: "₹360", status: "Pending", date: "2025-05-16" },
  { id: "ORD-1006", customer: "Anita Joshi", item: "Cold-Pressed Oil", amount: "₹890", status: "Shipped", date: "2025-05-16" },
];

export const mockProducts = [
  { id: 1, name: "Organic Tomatoes", category: "Vegetables", price: 80, stock: 45, status: "Available", emoji: "🍅" },
  { id: 2, name: "Fresh Spinach", category: "Greens", price: 40, stock: 0, status: "Out of Stock", emoji: "🥬" },
  { id: 3, name: "Alphonso Mangoes", category: "Fruits", price: 600, stock: 22, status: "Available", emoji: "🥭" },
  { id: 4, name: "Farm Fresh Eggs", category: "Dairy", price: 120, stock: 78, status: "Available", emoji: "🥚" },
  { id: 5, name: "Cold-Pressed Oil", category: "Pantry", price: 450, stock: 15, status: "Available", emoji: "🫒" },
  { id: 6, name: "Brown Rice (5kg)", category: "Grains", price: 380, stock: 0, status: "Out of Stock", emoji: "🍚" },
  { id: 7, name: "Honey Jar", category: "Pantry", price: 320, stock: 30, status: "Available", emoji: "🍯" },
  { id: 8, name: "Avocados", category: "Fruits", price: 250, stock: 18, status: "Available", emoji: "🥑" },
];
