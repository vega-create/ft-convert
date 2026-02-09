export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'measurement', name: 'Measurement', icon: '📏' },
  { id: 'science', name: 'Science', icon: '🔬' },
  { id: 'digital', name: 'Digital', icon: '💻' },
  { id: 'everyday', name: 'Everyday', icon: '🏠' },
  { id: 'math', name: 'Math & Numbers', icon: '🔢' },
];

export const tools: Tool[] = [
  // Measurement
  { name: 'Length Converter', slug: 'length', description: 'Convert between meters, feet, inches, miles, kilometers, and more.', icon: '📐', category: 'measurement' },
  { name: 'Weight Converter', slug: 'weight', description: 'Convert between kilograms, pounds, ounces, grams, and stones.', icon: '⚖️', category: 'measurement' },
  { name: 'Area Converter', slug: 'area', description: 'Convert between square meters, square feet, acres, and hectares.', icon: '📐', category: 'measurement' },
  { name: 'Volume Converter', slug: 'volume', description: 'Convert between liters, gallons, cups, milliliters, and fluid ounces.', icon: '🧪', category: 'measurement' },
  // Science
  { name: 'Temperature Converter', slug: 'temperature', description: 'Convert between Celsius, Fahrenheit, and Kelvin instantly.', icon: '🌡️', category: 'science' },
  { name: 'Speed Converter', slug: 'speed', description: 'Convert between km/h, mph, m/s, knots, and feet per second.', icon: '🏎️', category: 'science' },
  { name: 'Pressure Converter', slug: 'pressure', description: 'Convert between PSI, bar, atm, kPa, and mmHg.', icon: '🌀', category: 'science' },
  { name: 'Energy Converter', slug: 'energy', description: 'Convert between joules, calories, kWh, and BTU.', icon: '⚡', category: 'science' },
  // Digital
  { name: 'Data Storage Converter', slug: 'data-storage', description: 'Convert between bytes, KB, MB, GB, TB, and PB.', icon: '💾', category: 'digital' },
  { name: 'Number Base Converter', slug: 'number-base', description: 'Convert between binary, octal, decimal, and hexadecimal.', icon: '🔢', category: 'digital' },
  { name: 'Frequency Converter', slug: 'frequency', description: 'Convert between Hz, kHz, MHz, and GHz.', icon: '📡', category: 'digital' },
  // Everyday
  { name: 'Cooking Converter', slug: 'cooking', description: 'Convert cups, tablespoons, teaspoons, ml, and fluid ounces for recipes.', icon: '👩‍🍳', category: 'everyday' },
  { name: 'Fuel Economy Converter', slug: 'fuel', description: 'Convert between MPG, km/L, and L/100km.', icon: '⛽', category: 'everyday' },
  { name: 'Time Converter', slug: 'time', description: 'Convert between seconds, minutes, hours, days, weeks, and years.', icon: '⏱️', category: 'everyday' },
  // Math
  { name: 'Angle Converter', slug: 'angle', description: 'Convert between degrees, radians, and gradians.', icon: '📐', category: 'math' },
];

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter(t => t.category === categoryId);
}
