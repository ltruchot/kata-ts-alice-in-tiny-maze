import { describe, it, expect } from 'vitest';
import { hello } from './main';

describe('hello', () => {
  it('should be world', () => {
    expect(hello).toBe('world');
  });
});

