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
	// cardProps: () => ({}) as const,
	// color: undefined,
	// colorPickerProps: () => ({}) as const,
	// density: 'default',
	// hint: '',
	// iconHoverColor: undefined,
	// label: undefined,
	// name: 'color',
	persistentCard: false,
	// persistentHint: false,
	persistentPlaceholder: false,
	placeholder: undefined,
	// prependIcon: undefined,
	// prependInnerIcon: 'mdi:mdi-palette',
	readonly: false,
	readonlyInput: false,
	required: false,
};

console.log(props);

const componentProps = [
	{
		default: `VCard defaults & <pre class="ic"><code>{
  align: 'bottom left',
  border: false,
  borderColor: 'transparent',
  borderStyle: 'solid',
  borderWidth: 2,
  closeDelay: 500,
  color: '',
  elevation: 5,
  fieldOffset: props.pip ? 0 : 10,
  fullWidth: false,
  hover: false,
  loading: false,
  padding: 4,
  ripple: false,
  tag: 'div',
  verticalOffset: 28,
}</code></pre>`,
		desc: 'Props for the <code="ic">v-card</code> component that contains the <code="ic">v-color-picker</code> component. For additional props see [v-card props table]',
		name: 'card-props',
		type: `VCard['$props'] & <pre class="ic"><code>{
  align?: string | undefined;
  borderColor?: string;
  borderStyle?: string;
  borderWidth?: number;
  closeDelay?: number;
  fieldOffset?: number;
  fullWidth?: boolean;
  padding?: number;
  verticalOffset?: number;
}</code></pre>`,
	},
	{
		default: 'undefined',
		desc: 'This functions normally as the <code class="ic">v-text-field</code> color prop, but also is used for the <code class="ic">icon-hover-color</code> when that prop is not set.',
		name: 'color',
		type: 'string | undefined',
	},
	{
		default: `VColorPicker defaults & <pre class="ic"><code>{
  elevation: 0,
}</code></pre>`,
		desc: 'Props for the <code="ic">v-color-picker</code> component. For additional props see [v-color-picker props table]',
		name: 'color-picker-props',
		type: 'VColorPicker[\'$props\']',
	},
	{
		default: 'false',
		desc: 'TBD',
		name: 'pip',
		type: 'boolean',
	},
	{
		default: 'undefined',
		desc: 'The hover color for the <code class="ic">v-icon</code> component within the <code class="ic">prepend</code>, <code class="ic">prepend-inner</code>, <code class="ic">append-inner</code>, and <code class="ic">append</code> slots when using <code class="ic">prepend-icon</code>, <code class="ic">prepend-inner-icon</code>, <code class="ic">append-inner-icon</code>, and <code class="ic">append-icon</code> props. If <code class="ic">false</code> the hover color will be the same as the <code class="ic">v-text-field</code> color.',
		name: 'icon-hover-color',
		type: 'string | undefined',
	},
	{
		default: 'false',
		desc: 'Used to disable the <code class="ic">v-text-field</code> input, and <code class="ic">v-color-picker</code> component. This will also make clicking on the field open the color picker.',
		name: 'readonly',
		type: 'boolean | null | undefined',
	},
	{
		default: 'false',
		desc: 'Used to disable the <code class="ic">v-text-field</code> input, but not the <code class="ic">v-color-picker</code> component. This will also make clicking on the field open the color picker.',
		name: 'readonly-input',
		type: 'boolean | null | undefined',
	},
];

const vCardProps = [
	{
		default: ``,
		desc: '',
		name: 'align',
		type: ``,
	},
	{
		default: ``,
		desc: '',
		name: 'border-color',
		type: ``,
	},
	{
		default: ``,
		desc: '',
		name: 'border-style',
		type: ``,
	},
	{
		default: ``,
		desc: '',
		name: 'border-width',
		type: ``,
	},
	{
		default: ``,
		desc: '',
		name: 'field-offset',
		type: ``,
	},
	{
		default: ``,
		desc: '',
		name: 'full-width',
		type: ``,
	},
	{
		default: ``,
		desc: '',
		name: 'padding',
		type: ``,
	},
	{
		default: ``,
		desc: '',
		name: 'vertical-offset',
		type: ``,
	},
];


export const usePropsStore = defineStore('props', {
	state: () => {
		return {
			componentProps,
			propsHeaders,
			vCardProps,
		};
	},
});
