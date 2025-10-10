const parseShorthandNumber = (str) => {
  if (str == null) return 0;

  const s = String(str).trim().toLowerCase();

  if (/^[\d,]+(\.\d+)?$/.test(s)) {
    return Number(s.replace(/,/g, ''));
  }
  const match = s.match(/^([\d,.]*\d)([kmgbt])?$/i);
  if (!match) return NaN;

  let [, num, unit] = match;
  const value = parseFloat(num.replace(/,/g, ''));

  if (isNaN(value)) return NaN;

  const multipliers = {
    k: 1e3,
    m: 1e6,
    b: 1e9,
    g: 1e9,  
    t: 1e12
  };

  if (!unit) return value;
  const mul = multipliers[unit] ?? 1;
  return value * mul;
}

export default parseShorthandNumber;