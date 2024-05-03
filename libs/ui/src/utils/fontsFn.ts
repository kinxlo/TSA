function stripUnit(value: string): number {
  return parseFloat(value);
}

export function fluidType(
  minVw: string,
  maxVw: string,
  minFontSize: string,
  maxFontSize: string
): { fontSize: string } {
  const minVwValue = stripUnit(minVw);
  const maxVwValue = stripUnit(maxVw);
  const minFontSizeValue = stripUnit(minFontSize);
  const maxFontSizeValue = stripUnit(maxFontSize);

  return {
    fontSize: `${minFontSizeValue}px`,
    [`@media screen and (min-width: ${minVw})`]: {
      fontSize: `${
        minFontSizeValue +
        ((maxFontSizeValue - minFontSizeValue) * (100 - minVwValue)) /
          (maxVwValue - minVwValue)
      }px`,
    },
    [`@media screen and (min-width: ${maxVw})`]: {
      fontSize: `${maxFontSizeValue}px`,
    },
  };
}

export const convertUnit = {
  rem: (pxValue: number): string => {
    return `${pxValue / 16}rem`;
  },
  em: (pxValue: number): string => {
    const parentFontSize = parseFloat(getComputedStyle(document.body).fontSize);
    return `${pxValue / 16}rem`;
  },
};
