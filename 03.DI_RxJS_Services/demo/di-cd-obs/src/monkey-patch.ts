// Monkey Patching is a technique to change or modify the default behaviour of code at runtime when you don’t have access to the original code.
const _setInterval = window.setInterval;
(window as any).setInterval = function (...args: any[]): number {
  console.log('setInterval was called', args);
  return _setInterval.apply(this, args as any) as unknown as number;
};
