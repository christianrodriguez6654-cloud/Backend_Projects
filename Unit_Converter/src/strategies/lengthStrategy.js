export class LengthStrategy {
  convert(value, from, to) {
    const factors = {
      m: 1, cm: 0.01, mm: 0.001,
      ft: 0.3048, in: 0.0254, yd: 0.9144
    };
    if (!factors[from] || !factors[to]) throw new Error("Unidades inválidas");
    const valueInMeters = value * factors[from];
    return valueInMeters / factors[to];
  }
} 
