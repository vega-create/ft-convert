import UnitConverter from './UnitConverter';

const units = {
    'us-teaspoon': { label: 'Teaspoon (tsp)', toBase: (v) => v * 4.92892, fromBase: (v) => v / 4.92892 },
    'us-tablespoon': { label: 'Tablespoon (tbsp)', toBase: (v) => v * 14.7868, fromBase: (v) => v / 14.7868 },
    'us-fluid-ounce': { label: 'Fluid Ounce (fl oz)', toBase: (v) => v * 29.5735, fromBase: (v) => v / 29.5735 },
    'us-cup': { label: 'Cup', toBase: (v) => v * 236.588, fromBase: (v) => v / 236.588 },
    'us-pint': { label: 'Pint', toBase: (v) => v * 473.176, fromBase: (v) => v / 473.176 },
    'us-quart': { label: 'Quart', toBase: (v) => v * 946.353, fromBase: (v) => v / 946.353 },
    'milliliter': { label: 'Milliliter (mL)', toBase: (v) => v * 1, fromBase: (v) => v / 1 },
    'liter': { label: 'Liter (L)', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 }
};

export default function CookingConverter() {
  return <UnitConverter title="Cooking Converter" units={units} defaultFrom="us-cup" defaultTo="milliliter" />;
}
