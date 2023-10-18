import { defineStore } from 'pinia';


const propsHeaders = [
	{
		align: 'start',
		filterable: true,
		key: 'name',
		sortable: true,
		title: 'Name',
		width: '20%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'type',
		sortable: false,
		title: 'Type',
		width: '20%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'default',
		sortable: false,
		title: 'Default',
	},
	{
		align: 'start',
		filterable: false,
		key: 'desc',
		sortable: false,
		title: 'Description',
	},
];

const props = {
	appendIcon: undefined,
	appendInnerIcon: undefined,
	cardProps: () => ({}) as const,
	color: undefined,
	colorPickerProps: () => ({}) as const,
	defaultColor: undefined,
	density: 'default',
	dotField: false,
	dotFieldProps: () => ({
		borderColor: '#ccc',
		borderRadius: '50%',
		borderStyle: 'solid',
		borderWidth: 2,
		cursor: 'pointer',
		height: 20,
		showValue: false,
		width: 20,
	}) as const,
	hint: '',
	hintAlign: 'left',
	hintColor: 'default',
	iconHoverColor: undefined,
	label: undefined,
	name: 'color',
	persistentCard: false,
	persistentHint: false,
	persistentPlaceholder: false,
	placeholder: undefined,
	prependIcon: undefined,
	prependInnerIcon: 'mdi:mdi-palette',
	readonly: false,
	readonlyInput: false,
	required: false,
};

console.log(props);

const componentProps = [
	{
		default: 'undefined',
		desc: 'Props for the <code="ic">v-card</code> component that contains the <code="ic">v-color-picker</code> component. For additional props see [v-card props table]',
		name: 'card-props',
		type: 'VCard[\'$props\']',
	},
	{
		default: 'false',
		desc: 'This replaces the <code class="ic">v-text-field</code> component with a dot that changes to the selected color.',
		name: 'dot-field',
		type: 'boolean',
	},
	{
		default: 'xxx',
		desc: 'Props for the <code="ic">v-card</code> dot field when the <code class="ic">dot-field</code> prop is <code class="ic">true</code>. For additional props see [dot-field-props table]',
		name: 'dot-field-props',
		type: 'xxx',
	},
	{
		default: 'undefined',
		desc: 'Applies specified color to the hint',
		name: 'hint-color',
		type: 'string | undefined',
	},
	{
		default: 'undefined',
		desc: 'The hover color for the <code class="ic">v-icon</code> component within the <code class="ic">prepend</code>, <code class="ic">prepend-inner</code>, <code class="ic">append-inner</code>, and <code class="ic">append</code> slots when using <code class="ic">prepend-icon</code>, <code class="ic">prepend-inner-icon</code>, <code class="ic">append-inner-icon</code>, and <code class="ic">append-icon</code> props. If <code class="ic">false</code> the hover color will be the same as the <code class="ic">v-text-field</code> color.',
		name: 'icon-hover-color',
		type: 'string | undefined',
	},
	{
		default: 'false',
		desc: 'Forces the <code class="ic">v-card</code> and <code class="ic">v-color-picker</code> to always be visible.',
		name: 'persistent-card',
		type: 'boolean',
	},
	{
		default: 'false',
		desc: 'Used to disable the <code class="ic">v-text-field</code> input, but not the <code class="ic">v-color-picker</code> component. This will also make clicking on the field open the color picker.',
		name: 'readonly-input',
		type: 'boolean | null | undefined',
	},

];


export const usePropsStore = defineStore('props', {
	state: () => {
		return {
			componentProps,
			propsHeaders,
		};
	},
});
