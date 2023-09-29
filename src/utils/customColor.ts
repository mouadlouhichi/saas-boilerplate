// Custom color with css variable color in __theme_color.scss
export function customColors(cssVar: string) {
  return ({
    opacityVariable,
    opacityValue,
  }: {
    opacityVariable?: string;
    opacityValue?: number;
  }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVar}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${cssVar}))`;
  };
}
