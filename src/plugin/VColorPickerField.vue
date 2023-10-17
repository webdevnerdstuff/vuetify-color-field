<template>
	<div
		ref="fieldContainerRef"
		class="v-color-picker-field"
	>
		<!-- ================================================== Dot Option -->
		<div
			v-if="dotField"
			ref="dotFieldRef"
			v-bind="$attrs"
			class="v-text-field"
			:class="dotContainerClass"
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
							<label
								v-if="label"
								class="v-label mr-1"
							>{{ label }} </label>
							<div
								v-else-if="placeholder && !modelValue || persistentPlaceholder"
								class="v-label mr-1"
							>{{ placeholder }}</div>
							<div v-if="dotFieldProps.showValue">{{ modelValue }}</div>
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

		<!-- ================================================== VTextField Option -->
		<v-text-field
			v-else
			ref="textFieldRef"
			v-bind="$attrs"
			:class="textFieldClasses"
			:color="color"
			:density="density"
			:hint="hint"
			:model-value="modelValue"
			:persistent-hint="persistentHint"
			:persistent-placeholder="persistentPlaceholder"
			:placeholder="placeholder"
			:readonly="textFieldReadonly"
			:theme="themeAll"
			@click:control="toggleCheck('textField')"
			@update:model-value="updateModelValue"
		>
			<template
				v-for="(_, slot) in slots"
				#[slot]="scope"
			>
				<slot
					v-if="!slots['prepend']"
					:name="slot"
					v-bind="{ ...scope }"
				/>
			</template>

			<template
				v-if="prependIcon && !slots['prepend']"
				#prepend
			>
				<ColorPickerIcon
					:color="hoverIconColor"
					:icon="prependIcon"
					@click="toggleColorPicker"
				/>
			</template>

			<template
				v-if="prependInnerIcon && !slots['prepend-inner']"
				#prepend-inner
			>
				<ColorPickerIcon
					:color="hoverIconColor"
					:icon="prependInnerIcon"
					@click="toggleCheck('textFieldIcon')"
				/>
			</template>

			<template
				v-if="appendIcon && !slots['append']"
				#append
			>
				<ColorPickerIcon
					:color="hoverIconColor"
					:icon="appendIcon"
					@click="toggleColorPicker"
				/>
			</template>

			<template
				v-if="appendInnerIcon && !slots['append-inner']"
				#append-inner
			>
				<ColorPickerIcon
					:color="hoverIconColor"
					:icon="appendInnerIcon"
					@click="toggleCheck('textFieldIcon')"
				/>
			</template>

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

	<!-- ================================================== Card Picker Container  -->
	<Teleport to="body">
		<div class="position-elm-helper"></div>

		<v-defaults-provider :defaults="defaults">
			<v-card
				v-if="colorPickerOpen"
				:class="cardClasses"
				:style="cardStyles"
				:theme="defaults.VCard?.theme ?? themeAll"
				:width="textFieldProperties.width"
			>
				<v-color-picker
					v-model="colorPickerModelValue"
					class="v-color-selection"
					:disabled="readonly || defaults.VColorPicker?.disabled"
					:mode="pickerMode"
					:theme="defaults.VColorPicker?.theme ?? themeAll"
					@update:mode="updateMode"
					@update:model-value="updateModelValue"
				></v-color-picker>
			</v-card>
		</v-defaults-provider>
	</Teleport>
</template>

<script setup lang="ts">
import {
	HtmlRefElement,
	Mode,
	Props,
	TextFieldProperties,
	VuetifyDefaults,
} from '@/types';
import { useConvertToUnit } from '@/plugin/composables/helpers';
import {
	useCardClasses,
	useDotContainerClass,
	useDotFieldClasses,
	useHintClasses,
	useTextFieldClasses,
} from '@/plugin/composables/classes';
import {
	useDotStyles,
	useHintStyles,
} from '@/plugin/composables/styles';
import ColorPickerIcon from '@/plugin/components/ColorPickerIcon.vue';


defineOptions({
	inheritAttrs: false,
});

const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits([
	'update',
	'update:mode',
	'update:modelValue',
]);


// -------------------------------------------------- Props //
const props = withDefaults(defineProps<Props>(), {
	appendIcon: undefined,
	appendInnerIcon: undefined,
	cardProps: () => ({}) as const,
	color: undefined,
	colorPickerProps: () => ({}) as const,
	defaultColor: '',
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
});


// -------------------------------------------------- Defaults //
// ------------------------- VCard //
const defaultCardProps: Props['cardProps'] = {
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
};

// ------------------------- VColorPicker //
const defaultColorPickerProps: Props['colorPickerProps'] = {
	elevation: 0,
	hideModeSwitch: true,
	// mode: 'hex',
	// modes: ['hex'],
};

const defaults = ref<VuetifyDefaults>({
	VCard: {
		...defaultCardProps,
		...props.cardProps,
	},
	VColorPicker: {
		...defaultColorPickerProps,
		...props.colorPickerProps,
	},
	// global: {	},
});



// -------------------------------------------------- Data #
const cardStyles = ref({});
const colorPickerOpen = ref<boolean>(false);
const dotFieldRef = ref<HtmlRefElement>(null);
const dotHintActive = ref<boolean>(false);
const fieldContainerRef = ref<HtmlRefElement>(null);
const colorPickerModelValue = ref<any>(attrs.modelValue);
const modelValue = ref<any>(attrs.modelValue);
const pickerMode = ref<Mode>(defaults.value.VColorPicker?.mode);
const themeAll = ref(props.theme ?? undefined);
let textFieldProperties = reactive<TextFieldProperties>({
	bottom: 0,
	height: 0,
	left: 0,
	// maxWidth: 'auto',
	right: 0,
	top: 0,
	width: 0,
});

const { dotField, dotFieldProps } = toRefs(props);


// -------------------------------------------------- Computed #
// ------------------------- Dot Selector #
const dotContainerClass = computed(() => useDotContainerClass({
	density: props.density,
}));

const dotFieldClasses = computed(() => useDotFieldClasses({
	name: props.name,
}));

const dotStyles = computed(() => useDotStyles({
	dotField,
	dotFieldProps,
	modelValue,
}));

// ------------------------- Text Field #
const textFieldClasses = computed(() => useTextFieldClasses({
	name: props.name,
	readonly: props.readonly,
	readonlyInput: props.readonlyInput,
}));

const textFieldReadonly = computed(() => {
	return props.readonly || props.readonlyInput;
});

const hoverIconColor = computed<string | undefined>(() => {
	if (props.iconHoverColor === false) {
		return undefined;
	}

	if (typeof props.iconHoverColor === 'string') {
		return props.iconHoverColor;
	}

	return props.color ?? undefined;
});

// ------------------------- Hint #
const hintClasses = computed(() => useHintClasses({
	hintAlign: props.hintAlign,
	hintColor: props.hintColor,
}));

const hintStyles = computed(() => useHintStyles({
	dotHintActive,
	hintAlign: props.hintAlign,
	hintColor: props.hintColor,
	persistentHint: props.persistentHint,
}));

// ------------------------- Card #
const cardClasses = computed(() => useCardClasses({
	fullWidth: defaults.value.VCard?.fullWidth,
}));


// -------------------------------------------------- Methods //

// ------------------------- Toggle Check //
// ? Checks to prevent double triggers //
function toggleCheck(trigger: string) {
	if (trigger === 'textField' && !props.readonlyInput && !props.readonly) {
		return;
	}

	if (trigger === 'textFieldIcon' && (props.readonlyInput || props.readonly)) {
		return;
	}

	toggleColorPicker();
}
// ------------------------- Toggle Color Picker //

function toggleColorPicker(): void {
	const defaultCoords = { left: 0, right: 0, top: 0, width: 0 };
	let fieldContainer = fieldContainerRef.value;

	// Determine if the field is a dot field or a text field //
	if (props.dotField) {
		fieldContainer = dotFieldRef?.value?.querySelector('.v-input__control');
		dotHintActive.value = !dotHintActive.value;
	}

	const fieldElementCoords = fieldContainer?.getBoundingClientRect() ?? defaultCoords;

	// Set the height and width of the field //
	let inputHeight: number | undefined = fieldContainer?.offsetHeight ?? 0;
	let inputWidth: number = 300;
	let positionLeft = fieldElementCoords?.left ?? 0;
	let positionRight = fieldElementCoords?.right ?? 0;

	if (!props.dotField) {
		const fieldInputContainer: HtmlRefElement = fieldContainerRef?.value?.querySelector('.v-field__input');
		const fieldContainerInputCoords = fieldInputContainer?.getBoundingClientRect() ?? defaultCoords;

		inputHeight = fieldInputContainer?.offsetHeight;
		inputWidth = fieldInputContainer?.offsetWidth ?? 0;
		positionLeft = fieldContainerInputCoords.left;
		positionRight = fieldContainerInputCoords.right - fieldContainerInputCoords.width;
	}

	textFieldProperties = {
		bottom: 'initial',
		height: inputHeight as number,
		left: positionLeft,
		// maxWidth: inputWidth,
		right: positionRight,
		top: fieldElementCoords?.top ?? 0,
		width: defaults.value.VCard?.fullWidth ? inputWidth : 'auto',
	};

	colorPickerOpen.value = !colorPickerOpen.value;
	setCardStyles();
}

// ------------------------- Set Card Styles //
function setCardStyles(): void {
	let top: string | number = Number(textFieldProperties.top) + Number(textFieldProperties.height);
	let bottom: string | number = 'initial';
	let offsetTop = defaults.value.VCard?.fieldOffset ?? 0;

	if (props.hint) {
		offsetTop += defaults.value.VCard?.verticalOffset ?? 0;
	}

	top = top + offsetTop;

	// Top/Bottom Card Alignment //
	if (defaults.value.VCard?.align?.includes('top')) {
		bottom = (window.innerHeight - top) + Number(textFieldProperties.height) + (offsetTop * 2);
		top = 'initial';
	}

	// Left/Right Card Alignment //
	let left = textFieldProperties.left;
	let right = textFieldProperties.right;

	if (defaults.value.VCard?.fullWidth) {
		left = textFieldProperties.left;
		right = 'initial';
	}
	else {
		left = textFieldProperties.left;
		right = 'initial';

		if (defaults.value.VCard?.align?.includes('right')) {
			left = 'initial';
			right = textFieldProperties.right;
		}
	}

	const styles: {
		borderColor?: string;
		borderStyle?: string;
		borderWidth?: string;
		bottom?: string | number;
		left?: string | number;
		// maxWidth?: string | number;
		minWidth?: string;
		padding?: string;
		right?: string | number;
		top?: string | number;
		width?: string | number;
	} = {
		borderColor: defaults.value.VCard?.borderColor ?? 'transparent',
		borderStyle: defaults.value.VCard?.borderStyle ?? 'solid',
		borderWidth: useConvertToUnit({ value: defaults.value.VCard?.borderWidth ?? 0 }),
		bottom: useConvertToUnit({ value: bottom }),
		left: useConvertToUnit({ value: left }),
		// maxWidth: useConvertToUnit({ value: textFieldProperties.maxWidth }),
		minWidth: useConvertToUnit({ value: textFieldProperties.width }),
		padding: useConvertToUnit({ value: defaults.value.VCard?.padding }),
		right: useConvertToUnit({ value: right }),
		top: useConvertToUnit({ value: top }),
		width: useConvertToUnit({ value: textFieldProperties.width }),
	};

	// ! DEBUG HELPER ! //
	// const positionHelper: HTMLDivElement | null | undefined = document.querySelector('.position-elm-helper');

	// if (positionHelper) {
	// 	positionHelper.style.top = styles.top as string;
	// 	positionHelper.style.left = styles.left as string;
	// 	positionHelper.style.right = styles.right as string;
	// 	positionHelper.style.bottom = styles.bottom as string;
	// 	positionHelper.style.display = 'block';
	// }
	// ! END DEBUG HELPER ! //

	cardStyles.value = styles;
}

function updateModelValue(value: any) {
	let returnColor = value ?? '';

	if (value === '#') {
		returnColor = props.defaultColor;
	}

	if (returnColor.length < 7) {
		modelValue.value = returnColor;
		return;
	}

	if (pickerMode.value === 'hex') {
		if (value.length > 7) {
			returnColor = value.substr(0, 7);
		}

		if (returnColor.toString().match(/#[a-zA-Z0-9]{7}/)) {
			returnColor = value.substr(0, 7);
		}
	}

	colorPickerModelValue.value = returnColor;
	modelValue.value = returnColor;
	emit('update:modelValue', returnColor);
	emit('update', returnColor);
}

function updateMode(mode: Mode) {
	pickerMode.value = mode;
	modelValue.value = colorPickerModelValue.value;
	emit('update:mode', mode);
}

</script>

<style lang="scss" scoped>
.position-elm-helper {
	background-color: #f00;
	border-radius: 50%;
	display: none;
	height: 10px;
	left: 0;
	position: absolute;
	top: 0;
	width: 10px;
	z-index: 99999999999;
}
</style>
