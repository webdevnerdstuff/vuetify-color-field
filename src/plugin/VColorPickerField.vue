<template>
	<div ref="fieldContainerRef">
		<!-- Dot Option -->
		<div
			v-if="dotField"
			ref="dotFieldRef"
			v-bind="$attrs"
			class="v-text-field"
			:class="dotContainerClass"
			@mouseenter="closePickerStop"
			@mouseleave="closePicker"
		>
			<div class="v-input__control">
				<div class="v-field v-field--focused">
					<div :class="dotFieldClasses">
						<div class="v-field__input d-flex align-center py-0">
							<div
								class="me-2"
								:style="dotStyles"
								@click="toggleColorPicker"
							></div>
							<label class="v-label">{{ label }}</label>
						</div>
					</div>
				</div>
			</div>

			<div class="v-input__details">
				<div
					class="v-messages"
					role="alert"
				>
					<div
						class="v-messages__message"
						:class="hintClasses"
						style="transform-origin: center top 0;"
						:style="hintStyles"
					>
						{{ hint }}
					</div>
				</div>
			</div>
		</div>

		<!-- VTextField Option -->
		<v-text-field
			v-else
			ref="textFieldRef"
			v-model="modelValue"
			:class="textFieldClasses"
			:density="density"
			:hint="hint"
			:persistent-hint="persistentHint"
			:readonly="readonly"
			:value="modelValue"
			v-bind="$attrs"
			@click="toggleColorPicker"
			@mouseenter="closePickerStop"
			@mouseleave="closePicker"
			@update:model-value="updateModelValue"
		>
			<!-- Label Slot -->
			<template
				v-if="slots.label || label"
				#label
			>
				<slot
					v-if="slots.label"
					name="label"
				></slot>
				<div v-else-if="label">
					{{ label }}
					<span
						v-if="required"
						class="text-error ms-1"
					>*</span>
				</div>
			</template>
		</v-text-field>
	</div>

	<!-- Card Picker Container  -->
	<Teleport to="body">
		<v-card
			v-if="colorPickerOpen"
			v-bind="cardProps"
			class="v-color-picker-card"
			:style="cardStyles"
			:width="textFieldProperties.width"
			@mouseenter="closePickerStop"
			@mouseleave="closePicker"
		>
			<v-card-text
				class="d-flex justify-center"
				:style="cardTextStyles"
			>
				<v-color-picker
					v-bind="colorPickerProps"
					v-model="modelValue"
					class="v-color-selection"
					:hide-mode-switch="true"
					:width="textFieldProperties.width"
				></v-color-picker>
				<!-- @update:model-value="updateModelValue" -->
			</v-card-text>
		</v-card>
	</Teleport>
</template>

<script setup lang="ts">
import type {
	VCard,
	VColorPicker,
	VTextField,
} from 'vuetify/components';
import { useConvertToUnit } from '@/plugin/composables/helpers';

defineOptions({
	inheritAttrs: false,
});

const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits(['update:modelValue']);

// -------------------------------------------------- Props #
interface Props {
	cardProps?: VCard['$props'] & {
		align?: string;
		borderColor?: string;
		borderStyle?: string;
		borderWidth?: number;
		closeDelay?: number;
		direction?: string;
		fieldOffset?: number;
		padding?: number;
		verticalOffset?: number;
	};
	colorPickerProps?: VColorPicker['$props'] & {
		hideModeSwitch?: boolean;
	};
	defaultColor?: string;
	density?: VTextField['$props']['density'];
	dotField?: boolean;
	dotFieldProps?: {
		borderColor?: string;
		borderRadius?: string;
		borderStyle?: string;
		borderWidth?: number;
		cursor?: string;
		height?: string | number;
		width?: string | number;
	};
	hint?: string;
	hintAlign?: 'left' | 'right';
	hintColor?: string;
	label?: string;
	name?: any;
	persistentCard?: boolean;
	persistentHint?: boolean;
	readonly?: boolean;
	required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	cardProps: () => ({}) as const,
	colorPickerProps: () => ({}) as const,
	defaultColor: '#ff0000',
	density: 'default',
	dotField: false,
	dotFieldProps: () => ({
		borderColor: '#ccc',
		borderRadius: '50%',
		borderStyle: 'solid',
		borderWidth: 2,
		cursor: 'pointer',
		height: 20,
		width: 20,
	}) as const,
	hint: '',
	hintAlign: 'left',
	hintColor: 'default',
	label: '',
	name: 'color',
	persistentCard: false,
	persistentHint: false,
	readonly: false,
	required: false,
});

// ------------------------- VCard #
const defaultCardProps: Props['cardProps'] = {
	align: 'left',
	border: false,
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: 2,
	closeDelay: 500,
	color: '',
	direction: 'below',
	elevation: 5,
	fieldOffset: props.dotField ? 0 : 10,
	hover: false,
	loading: false,
	padding: 0,
	ripple: false,
	tag: 'div',
	verticalOffset: 28,
};

const cardProps = computed<Props['cardProps']>(() => ({
	...defaultCardProps,
	...props.cardProps,
}));

// ------------------------- VColorPicker #
const defaultColorPickerProps: Props['colorPickerProps'] = {
	elevation: 0,
	hideModeSwitch: true,
	mode: 'hex',
};

const colorPickerProps = computed<Props['colorPickerProps']>(() => ({
	...defaultColorPickerProps,
	...props.colorPickerProps,
}));


// -------------------------------------------------- Data #
const cardStyles = ref({});
const colorPickerOpen = ref(false);
const dotFieldRef = ref<HTMLDivElement | null>(null);
const dotHintActive = ref(false);
const fieldContainerRef = ref<HTMLDivElement | null | undefined>(null);
const modelValue = ref<string>(attrs.modelValue as string);
let textFieldProperties = reactive({
	height: 0,
	left: 0,
	top: 0,
	width: 0,
});

const { dotField, dotFieldProps } = toRefs(props);


// -------------------------------------------------- Computed #
// ------------------------- Dot Selector #
const dotContainerClass = computed<string>(() => {
	let classes = 'v-input--horizontal ';

	if (props.density === 'compact') {
		classes += 'v-input--density-compact';
	}

	if (props.density === 'default') {
		classes += 'v-input--density-default';
	}

	if (props.density === 'comfortable') {
		classes += 'v-input--density-comfortable';
	}
	return classes;
});

const dotFieldClasses = computed<string>(() => {
	let classes = 'v-field__field ';
	classes += 'v-color-picker--dot-field ';
	classes += `v-color-picker--dot-field-${props.name}`;

	return classes;
});

const dotStyles = computed(() => {
	const dotOptions = dotFieldProps.value;
	let styles = {};

	if (dotField.value) {
		styles = {
			backgroundColor: modelValue.value,
			borderColor: dotOptions.borderColor,
			borderRadius: useConvertToUnit({ value: dotOptions.borderRadius }),
			borderStyle: dotOptions.borderStyle,
			borderWidth: useConvertToUnit({ value: dotOptions.borderWidth }),
			cursor: dotOptions.cursor,
			height: useConvertToUnit({ value: dotOptions.height }),
			width: useConvertToUnit({ value: dotOptions.width }),
		};
	}

	return styles as CSSProperties;
});

// ------------------------- Text Field #
const textFieldClasses = computed(() => {
	const classes = {
		'v-color-picker--text-field': true,
		'v-color-picker--text-field-readonly': props?.readonly ?? false,
		[`v-color-picker--text-field-${props.name}`]: true,
	};

	return classes;
});

// ------------------------- Hint #
const hintClasses = computed(() => {
	const classes = {
		'text-left': props.hintAlign === 'left',
		'text-right': props.hintAlign === 'right',
	};

	if (props.hintColor) {
		classes[`text-${props.hintColor}`] = true;
	}

	return classes;
});

const hintStyles = computed(() => {
	const styles: {
		color?: string;
		textAlign?: string;
		transform?: string;
	} = {
		color: props.hintColor,
	};

	if (!props?.persistentHint && !dotHintActive.value) {
		styles.transform = 'translateY(-20px)';
	}

	if (props.hintAlign === 'left') {
		styles.textAlign = 'text-left';
	}

	if (props.hintAlign === 'right') {
		styles.textAlign = 'text-right';
	}

	return styles;
});

// ------------------------- Card #
const cardTextStyles = computed(() => {
	const styles: {
		padding?: string | number | undefined;
	} = {
		padding: useConvertToUnit({ value: cardProps.value?.padding }),
	};

	return styles as CSSProperties;
});


// -------------------------------------------------- Methods //
// TODO: Add debounce to hide field //
function closePickerStop() {
	console.log('closePickerStop');
}

function closePicker() {
	console.log('closePicker');
}

function toggleColorPicker(): void {
	// const fieldClassName = `v-color-picker--${type}-field-${props.name}`;

	// Determine if the field is a dot field or a text field //
	let fieldContainer = fieldContainerRef.value;

	if (props.dotField) {
		fieldContainer = dotFieldRef?.value?.querySelector('.v-input__control');
	}

	// Set the height and width of the field //
	let inputHeight: number | undefined = fieldContainer?.offsetHeight ?? 0;
	let inputWidth: number | undefined = 300;

	if (!props.dotField) {
		const fieldContainerInput = fieldContainerRef?.value?.querySelector('input');
		inputHeight = fieldContainerInput?.offsetHeight;
		inputWidth = fieldContainerInput?.offsetWidth;
	}

	const fieldElementCoords = fieldContainer?.getBoundingClientRect() ?? { left: 0, top: 0 };

	textFieldProperties = {
		height: inputHeight as number,
		left: fieldElementCoords?.left ?? 0,
		top: fieldElementCoords?.top ?? 0,
		width: inputWidth as number,
	};

	colorPickerOpen.value = !colorPickerOpen.value;
	setCardStyles();
}

function setCardStyles(): void {
	let top = textFieldProperties.top + textFieldProperties.height;
	let offsetTop = cardProps.value?.fieldOffset ?? 0;

	if (props.hint) {
		offsetTop += cardProps.value?.verticalOffset ?? 0;
	}

	top = top + offsetTop;

	const styles: {
		borderColor?: string;
		borderStyle?: string;
		borderWidth?: string;
		maxWidth?: string;
		minWidth?: string;
		top?: string;
		right?: string;
		left?: string;
	} = {
		borderColor: cardProps.value?.borderColor ?? 'transparent',
		borderStyle: cardProps.value?.borderStyle ?? 'solid',
		borderWidth: useConvertToUnit({ value: cardProps.value?.borderWidth ?? 0 }),
		maxWidth: 'initial',
		minWidth: useConvertToUnit({ value: textFieldProperties.width }),
		top: useConvertToUnit({ value: top }),
	};

	// Default is below the input //
	let left = textFieldProperties.left;

	if (cardProps.value?.direction === 'left' || cardProps.value?.direction === 'right') {
		styles.right = `-${styles.minWidth}`;

		if (cardProps.value.direction === 'left') {
			left = textFieldProperties.left - textFieldProperties.width;
		}

		if (cardProps.value.direction === 'right') {
			left = textFieldProperties.left + textFieldProperties.width;
		}
	}

	styles.left = useConvertToUnit({ value: left });

	cardStyles.value = styles;
}

function updateModelValue(value: any): void {
	console.log('updateModelValue', value);
	let returnColor = value;

	if (!value) {
		returnColor = props.defaultColor;
	}

	if (props?.colorPickerProps.mode === 'hex' && value.length > 7) {
		returnColor = value.substr(0, 7);
	}

	if (value.toString().match(/#[a-zA-Z0-9]{7}/)) {
		returnColor = value.substr(0, 7);
	}

	modelValue.value = returnColor;
	emit('update:modelValue', returnColor);
}

</script>

<style lang="scss" scoped>
.v-color-picker {
	max-width: 100% !important;

	&--dot-field {
		overflow: visible;
		position: relative;
	}

	&--text-field {
		&-readonly {
			:deep(.v-field__input) {
				cursor: pointer !important;
			}
		}
	}

	&-card {
		position: absolute;
		z-index: 999999;
	}
}
</style>
