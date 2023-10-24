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


const componentProps = [
	{
		default: 'false',
		desc: 'Sets the <code class="ic">VCard</code> width to the same width as the <code class="ic">VTextField</code> input.',
		name: 'card-field-width',
		type: 'boolean',
	},
	{
		default: '0',
		desc: 'Sets the horizontal offset of the <code class="ic">VCard</code> component.',
		name: 'card-offset-x',
		type: 'number',
	},
	{
		default: '5',
		desc: 'Sets the vertical offset of the <code class="ic">VCard</code> component.',
		name: 'card-offset-y',
		type: 'number',
	},
	{
		default: '4',
		desc: 'Sets the padding of the <code class="ic">VCard</code> component.',
		name: 'card-padding',
		type: 'number',
	},
	{
		default: `VCard defaults & <pre class="ic"><code>{ elevation: 5 }</code></pre>`,
		desc: 'Props for the <code="ic">VCard</code> component that contains the <code="ic">VColorPicker</code> component. See Vuetify documentation for full list of props.',
		name: 'card-props',
		type: 'VCard[\'$props\']',
	},
	{
		default: 'undefined',
		desc: 'This functions normally as the <code class="ic">VTextField</code> color prop, but also is used for the <code class="ic">icon-hover-color</code> when that prop is not set.',
		name: 'color',
		type: 'string | undefined',
	},
	{
		default: `VColorPicker defaults & <pre class="ic"><code>{ elevation: 0 }</code></pre>`,
		desc: 'Props for the <code="ic">VColorPicker</code> component. See Vuetify documentation for full list of props.',
		name: 'color-picker-props',
		type: 'VColorPicker[\'$props\']',
	},
	{
		default: 'undefined',
		desc: 'The hover color for the <code class="ic">VIcon</code> component within the <code class="ic">prepend</code>, <code class="ic">prepend-inner</code>, <code class="ic">append-inner</code>, and <code class="ic">append</code> slots when using <code class="ic">prepend-icon</code>, <code class="ic">prepend-inner-icon</code>, <code class="ic">append-inner-icon</code>, and <code class="ic">append-icon</code> props. If <code class="ic">false</code> the hover color will be the same as the <code class="ic">VTextField</code> color.',
		name: 'icon-hover-color',
		type: 'string | undefined',
	},
	{
		default: 'default',
		desc: 'Sets the size of the <code class="ic">prepend-icon</code>, <code class="ic">prepend-inner-icon</code>, <code class="ic">append-inner-icon</code>, <code class="ic">append-icon</code> <code class="ic">VIcon</code> as well as the <code class="ic">pip-icon</code> <code class="ic">VIcon</code>.',
		name: 'icon-size',
		type: 'VIcon[\'$props\'][\'size\']',
	},
	{
		default: 'bottom left',
		desc: 'Sets the position of the <code class="ic">VCard</code> component relative to the <code class="ic">VTextField</code> input when it opens. Ex. <code class="ic">bottom left</code>, <code class="ic">bottom right</code>, <code class="ic">top left</code>, <code class="ic">top right</code>',
		name: 'open',
		type: 'string | undefined',
	},
	{
		default: 'false',
		desc: 'Sets the if the <code class="ic">pip</code> (a preview of the selected color) should be used.',
		name: 'pip',
		type: 'boolean',
	},
	{
		default: '3px solid rgb(var(--v-theme-on-surface))',
		desc: 'Sets the <code class="ic">pip</code> border style.',
		name: 'pip-border',
		type: 'string | null | undefined',
	},
	{
		default: '50%',
		desc: 'Sets the <code class="ic">pip</code> border radius.',
		name: 'pip-border-radius',
		type: 'string',
	},
	{
		default: 'mdi:mdi-circle',
		desc: 'Sets the <code class="ic">pip</code> <code class="ic">VIcon</code>.',
		name: 'pip-icon',
		type: 'VIcon[\'$props\'][\'icon\']',
	},
	{
		default: 'prepend-inner',
		desc: 'Sets the slot where the <code class="ic">pip</code> is placed.',
		name: 'pip-slot',
		type: 'string | undefined',
	},
	{
		default: 'false',
		desc: 'Used to disable the <code class="ic">VTextField</code> input, and <code class="ic">VColorPicker</code> component. This will also make clicking on the field open the color picker.',
		name: 'readonly',
		type: 'boolean | null | undefined',
	},
	{
		default: 'false',
		desc: 'Used to disable the <code class="ic">VTextField</code> input, but not the <code class="ic">VColorPicker</code> component. This will also make clicking on the field open the color picker.',
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
