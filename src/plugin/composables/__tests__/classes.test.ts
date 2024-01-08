import { describe, it, expect } from 'vitest';
import {
	usePipClasses,
	useTextFieldClasses,
	useHintClasses,
	useCardClasses
} from '../classes';


describe('Classes Composable', () => {

	describe('usePipClasses', () => {
		it('should return class object', () => {
			const classes = usePipClasses();

			expect(classes).toMatchSnapshot();
		});
	});

	describe('useTextFieldClasses', () => {
		it('should return class object', () => {
			const classes = useTextFieldClasses({
				readonlyInput: false,
			});

			expect(classes).toMatchInlineSnapshot(`
				{
				  "v-color-field--text-field": true,
				  "v-color-field--text-field-": false,
				  "v-color-field--text-field-readonly": false,
				  "v-color-field--text-field-readonly-input": false,
				}
			`);
		});

		it('should return class object', () => {
			const classes = useTextFieldClasses({
				name: 'foobar',
				readonly: true,
				readonlyInput: true,
			});

			expect(classes).toMatchInlineSnapshot(`
				{
				  "v-color-field--text-field": true,
				  "v-color-field--text-field-foobar": true,
				  "v-color-field--text-field-readonly": true,
				  "v-color-field--text-field-readonly-input": false,
				}
			`);
		});
	});

	describe('useHintClasses', () => {
		it('should return class object', () => {
			const classes = useHintClasses({

			});

			expect(classes).toMatchSnapshot();
		});
	});

	describe('useCardClasses', () => {
		it('should return class object', () => {
			const classes = useCardClasses({
				fullWidth: false,
			});

			expect(classes).toMatchSnapshot();
		});
	});

	it('should return class object', () => {
		const classes = useCardClasses({
			fullWidth: true,
		});

		expect(classes).toMatchSnapshot();
	});
});
