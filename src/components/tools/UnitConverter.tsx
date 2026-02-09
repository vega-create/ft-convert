import { useState, useCallback } from 'react';

interface UnitDef {
  label: string;
  toBase: (v: number) => number;
  fromBase: (v: number) => number;
}

interface Props {
  title: string;
  units: Record<string, UnitDef>;
  defaultFrom?: string;
  defaultTo?: string;
  precision?: number;
}

export default function UnitConverter({ title, units, defaultFrom, defaultTo, precision = 6 }: Props) {
  const unitKeys = Object.keys(units);
  const [value, setValue] = useState('1');
  const [fromUnit, setFromUnit] = useState(defaultFrom || unitKeys[0]);
  const [toUnit, setToUnit] = useState(defaultTo || unitKeys[1]);
  const [results, setResults] = useState<Record<string, string>>({});
  const [showAll, setShowAll] = useState(false);

  const convert = useCallback(() => {
    const num = parseFloat(value);
    if (isNaN(num)) { setResults({}); return; }
    const baseVal = units[fromUnit].toBase(num);
    const newResults: Record<string, string> = {};
    for (const [key, unit] of Object.entries(units)) {
      const converted = unit.fromBase(baseVal);
      newResults[key] = converted < 0.001 && converted !== 0
        ? converted.toExponential(3)
        : parseFloat(converted.toFixed(precision)).toLocaleString('en-US', { maximumFractionDigits: precision });
    }
    setResults(newResults);
  }, [value, fromUnit, units, precision]);

  useState(() => { convert(); });

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setTimeout(() => {
      const num = parseFloat(e.target.value);
      if (!isNaN(num)) {
        const baseVal = units[fromUnit].toBase(num);
        const newResults: Record<string, string> = {};
        for (const [key, unit] of Object.entries(units)) {
          const converted = unit.fromBase(baseVal);
          newResults[key] = converted < 0.001 && converted !== 0
            ? converted.toExponential(3)
            : parseFloat(converted.toFixed(precision)).toLocaleString('en-US', { maximumFractionDigits: precision });
        }
        setResults(newResults);
      } else { setResults({}); }
    }, 0);
  };

  const handleFromChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromUnit(e.target.value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      const baseVal = units[e.target.value].toBase(num);
      const newResults: Record<string, string> = {};
      for (const [key, unit] of Object.entries(units)) {
        const converted = unit.fromBase(baseVal);
        newResults[key] = converted < 0.001 && converted !== 0
          ? converted.toExponential(3)
          : parseFloat(converted.toFixed(precision)).toLocaleString('en-US', { maximumFractionDigits: precision });
      }
      setResults(newResults);
    }
  };

  const swap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    if (results[toUnit]) {
      setValue(results[toUnit].replace(/,/g, ''));
      const num = parseFloat(results[toUnit].replace(/,/g, ''));
      if (!isNaN(num)) {
        const baseVal = units[toUnit].toBase(num);
        const newResults: Record<string, string> = {};
        for (const [key, unit] of Object.entries(units)) {
          const converted = unit.fromBase(baseVal);
          newResults[key] = converted < 0.001 && converted !== 0
            ? converted.toExponential(3)
            : parseFloat(converted.toFixed(precision)).toLocaleString('en-US', { maximumFractionDigits: precision });
        }
        setResults(newResults);
      }
    }
  };

  const displayedUnits = showAll ? unitKeys : unitKeys.slice(0, 6);

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label>Value</label>
            <input type="number" value={value} onChange={handleValueChange}
              className="text-2xl font-semibold" placeholder="Enter value" />
          </div>
          <div>
            <label>From</label>
            <select value={fromUnit} onChange={handleFromChange}>
              {unitKeys.map(k => <option key={k} value={k}>{units[k].label}</option>)}
            </select>
          </div>
        </div>

        <div className="flex justify-center my-4">
          <button onClick={swap}
            className="w-10 h-10 bg-primary-50 hover:bg-primary-100 text-primary-600 rounded-full flex items-center justify-center transition-colors text-lg"
            title="Swap units">
            ⇅
          </button>
        </div>

        {/* Quick Result */}
        <div className="bg-primary-50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-primary-700 font-medium text-sm mb-0">Result</label>
            <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}
              className="text-sm border-none bg-transparent text-primary-700 font-medium focus:ring-0 p-0">
              {unitKeys.map(k => <option key={k} value={k}>{units[k].label}</option>)}
            </select>
          </div>
          <div className="text-3xl font-bold text-primary-900">
            {results[toUnit] || '—'}
          </div>
          <p className="text-sm text-primary-600 mt-1">
            {value} {units[fromUnit].label} = {results[toUnit] || '—'} {units[toUnit].label}
          </p>
        </div>
      </div>

      {/* All Results */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">All Conversions</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {displayedUnits.map(k => (
            <div key={k} className={`flex justify-between items-center p-3 rounded-xl ${k === fromUnit ? 'bg-primary-50 border border-primary-200' : 'bg-gray-50'}`}>
              <span className="text-sm text-gray-600">{units[k].label}</span>
              <span className={`font-mono font-semibold ${k === fromUnit ? 'text-primary-700' : 'text-gray-900'}`}>
                {results[k] || '—'}
              </span>
            </div>
          ))}
        </div>
        {unitKeys.length > 6 && (
          <button onClick={() => setShowAll(!showAll)}
            className="mt-3 text-sm text-primary-600 hover:text-primary-700 font-medium">
            {showAll ? 'Show less ↑' : `Show all ${unitKeys.length} units ↓`}
          </button>
        )}
      </div>
    </div>
  );
}
