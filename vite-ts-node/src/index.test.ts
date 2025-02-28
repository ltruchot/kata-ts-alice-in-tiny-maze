import { describe, it, expect } from 'vitest';
import { hello } from './index';

describe('hello', () => {
  it('should be world', () => {
    expect(hello).toBe('world');
  });
});

