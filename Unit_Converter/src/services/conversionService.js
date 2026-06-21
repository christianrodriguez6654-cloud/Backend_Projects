import { LengthStrategy } from '../strategies/lengthStrategy.js';
import { TempStrategy } from '../strategies/tempStrategy.js';
import { WeightStrategy } from '../strategies/weightStrategy.js';

export class ConversionService {
  constructor() {
    this.strategies = {
      length: new LengthStrategy(),
      temperature: new TempStrategy(),
      weight: new WeightStrategy()
    };
  }

  calculate({ type, value, from, to }) {
    const strategy = this.strategies[type];
    if (!strategy) throw new Error("Tipo no soportado");
    if (isNaN(value)) throw new Error("Valor no numérico");
    return strategy.convert(parseFloat(value), from, to);
  }
}   