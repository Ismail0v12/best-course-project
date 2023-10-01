type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
  const includedClassesFromMods = Object.entries(mods ?? {})
    .filter(([_, value]) => {
      const booleanModValue = typeof value === "boolean" ? value : false;
      const stringModValue = typeof value === "string" ? value : "";

      return booleanModValue || stringModValue.length > 0;
    })
    .map(([classKey]) => classKey);

  console.log(includedClassesFromMods);

  return [cls, ...includedClassesFromMods, ...additional].join(" ");
}