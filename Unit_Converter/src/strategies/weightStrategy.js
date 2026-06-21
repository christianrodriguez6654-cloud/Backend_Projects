export class WeightStrategy {
  convert(value, from, to) {
    const factors = {
      kg: 1, g: 0.001, mg: 0.000001,
      lb: 0.453592, oz: 0.0283495
    };
    if (!factors[from] || !factors[to]) throw new Error("Unidades inválidas");
    const valueInKg = value * factors[from];
    return valueInKg / factors[to];
  }
}