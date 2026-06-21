export class TempStrategy {
  convert(value, from, to) {
    if (from === to) return value;
    let celsius;
    // A Celsius
    if (from === 'C') celsius = value;
    else if (from === 'F') celsius = (value - 32) * 5/9;
    else if (from === 'K') celsius = value - 273.15;
    else throw new Error("Origen inválido");

    // De Celsius a Destino
    if (to === 'C') return celsius;
    if (to === 'F') return (celsius * 9/5) + 32;
    if (to === 'K') return celsius + 273.15;
    throw new Error("Destino inválido");
  }
}   