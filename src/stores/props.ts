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
	// dotField: false,
	// dotFieldProps: () => ({
	// 	borderColor: '#ccc',
	// 	borderRadius: '50%',
	// 	borderStyle: 'solid',
	// 	borderWidth: 2,
	// 	cursor: 'pointer',
	// 	height: 20,
	// 	showValue: false,
	// 	width: 20,
	// }) as const,
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
  fieldOffset: props.dotField ? 0 : 10,
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
		desc: 'This replaces the <code class="ic">v-text-field</code> component with a dot that changes to the selected color.',
		name: 'dot-field',
		type: 'boolean',
	},
	{
		default: `<pre class="ic"><code>{
  borderColor: '#ccc',
  borderRadius: '50%',
  borderStyle: 'solid',
  borderWidth: 2,
  cursor: 'pointer',
  height: 20,
  width: 20,
}</code></pre>`,
		desc: 'Props for the <code="ic">v-card</code> dot field when the <code class="ic">dot-field</code> prop is <code class="ic">true</code>.',
		name: 'dot-field-props',
		type: `<pre class="ic"><code>{
  borderColor?: string;
  borderRadius?: string;
  borderStyle?: string;
  borderWidth?: number;
  cursor?: string;
  height?: string | number;
  width?: string | number;
}</code></pre>`,
	},
	{
		default: 'false',
		desc: 'Hides the selected value. Used only when the <code class="ic">dot-field</code> is set to <code class="ic">true</code>.',
		name: 'hide-value',
		type: 'boolean',
	},
	{
		default: 'undefined',
		desc: 'The hover color for the <code class="ic">v-icon</code> component within the <code class="ic">prepend</code>, <code class="ic">prepend-inner</code>, <code class="ic">append-inner</code>, and <code class="ic">append</code> slots when using <code class="ic">prepend-icon</code>, <code class="ic">prepend-inner-icon</code>, <code class="ic">append-inner-icon</code>, and <code class="ic">append-icon</code> props. If <code class="ic">false</code> the hover color will be the same as the <code class="ic">v-text-field</code> color.',
		name: 'icon-hover-color',
		type: 'string | undefined',
	},
	{
		default: 'undefined',
		desc: 'Renders the <code class="ic">v-color-picker</code> open by default display. Make sure to use the <code class="ic">onMounted</code> method to set the <code class="ic">open</code> prop after the component has mounted for proper placement of the picker in relation to the field.',
		name: 'open',
		type: 'boolean | null | undefined',
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


export const usePropsStore = defineStore('props', {
	state: () => {
		return {
			componentProps,
			propsHeaders,
		};
	},
});
