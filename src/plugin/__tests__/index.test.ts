import { describe, it, expect } from 'vitest';
import { createVColorField } from '../';


describe('Plugin Index', () => {
	describe('install', () => {
		it('should return install function', () => {
			const VColorField = createVColorField();

			expect('install' in VColorField).toBe(true);
		});
	});
});
