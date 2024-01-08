import { describe, it, expect } from 'vitest';
import { usePipStyles } from '../styles';


describe('Styles Composable', () => {
	describe('usePipStyles', () => {
		it('should return pip styles with border and borderRadius', () => {
			const data = usePipStyles({
				pipBorder: '1px solid rgb(var(--v-theme-on-surface))',
				pipBorderRadius: '50%',
			});
			expect(data).toMatchInlineSnapshot(`
				{
				  "backgroundColor": "rgb(var(--v-theme-on-surface))",
				  "border": "1px solid rgb(var(--v-theme-on-surface))",
				  "borderRadius": "50%",
				  "overflow": "hidden",
				}
			`);
		});

		it('should return pip styles without border and borderRadius', () => {
			const data = usePipStyles({});
			expect(data).toMatchInlineSnapshot(`
				{
				  "backgroundColor": "transparent",
				  "overflow": "hidden",
				}
			`);
		});
	});
});
