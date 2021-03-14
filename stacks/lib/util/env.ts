export function env(name: string): string {
  const value = process.env[name];

  if (value === undefined) {
    throw new Error(`${name} not specified`);
  }
  return value;
}
