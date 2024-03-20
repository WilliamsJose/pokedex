export function hectogramToLbs(value: number): number {
  const lbs = value * 0.220462;
  return lbs;
}

export function hectogramToKg(value: number): number {
  const kg = value / 10;
  return kg;
}

export function formatWeight(value: number): string {
  const lbs = hectogramToLbs(value).toFixed(1);
  const kg = hectogramToKg(value).toFixed(1);
  return `${lbs}lbs (${kg}kg)`;
}

export function decimeterToCentimeter(value: number): number {
  const cm = value * 10;
  return cm;
}

export function decimeterToInches(value: number): number {
  const kg = value * 3.93;
  return kg;
}

export function formatHeight(value: number): string {
  const cm = decimeterToCentimeter(value).toFixed();
  const inch = decimeterToInches(value).toFixed(1);
  return `${inch}" (${cm} cm)`;
}

export function capitalize(str: string): string {
  return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
}

export function formatSpecialWords(str: string): string {
  return str
    .replaceAll('special-attack', 'Sp. Atk')
    .replaceAll('special-defense', 'Sp. Def');
}
