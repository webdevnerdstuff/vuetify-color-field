<template>
	<div
		ref="fieldContainerRef"
		class="v-color-field"
	>
		<!-- ================================================== VTextField -->
		<v-text-field
			ref="textFieldRef"
			v-bind="$attrs"
			:class="textFieldClasses"
			:color="color"
			:density="density"
			:hint="hint"
			:messages="messages"
			:model-value="modelValue"
			:persistent-hint="persistentHint"
			:persistent-placeholder="persistentPlaceholder"
			:placeholder="placeholder"
			:readonly="textFieldReadonly"
			:theme="themeAll"
			@click:clear="toggleColorPicker('clear')"
			@click:control="toggleCheck('textField')"
			@keyup.enter="toggleColorPicker('keyup')"
			@update:model-value="updateModelValue"
		>
			<!-- ========================= Pass Slots -->
			<template
				v-for="(_, slot) in slots"
				#[slot]="scope"
			>
				<slot
					v-if="!slots['prepend'] && !slots['prepend-inner'] && !slots['append-inner'] && !slots['append']"
					:name="slot"
					v-bind="{ ...scope }"
				/>
			</template>

			<!-- ========================= Prepend Slot -->
			<template
				v-if="slots.prepend"
				#[`prepend`]="props"
			>
				<slot
					name="prepend"
					v-bind="{
						...props,
						toggleColorPicker,
					}"
				/>
			</template>

			<template
				v-if="(prependIcon || (pipSlot === 'prepend' && pip)) && !slots['prepend']"
				#prepend
			>
				<PipComponent
					v-if="pip"
					v-bind="pipProps"
					@click="toggleColorPicker"
				/>
				<ColorPickerIcon
					v-else-if="prependIcon"
					:color="hoverIconColor"
					:icon="prependIcon"
					:iconSize="iconSize"
					@click="toggleColorPicker"
				/>
			</template>

			<!-- ========================= Prepend Inner Slot -->
			<template
				v-if="slots['prepend-inner']"
				#[`prepend-inner`]="props"
			>
				<slot
					name="prepend-inner"
					v-bind="{
						...props,
						toggleColorPicker,
					}"
				/>
			</template>

			<template
				v-if="(prependInnerIcon || (pipSlot === 'prepend-inner' && pip)) && !slots['prepend-inner']"
				#prepend-inner
			>
				<PipComponent
					v-if="pip"
					v-bind="pipProps"
					@click="toggleColorPicker"
				/>
				<ColorPickerIcon
					v-else-if="prependInnerIcon"
					:color="hoverIconColor"
					:icon="prependInnerIcon"
					:iconSize="iconSize"
					@click="toggleCheck('textFieldIcon')"
				/>
			</template>

			<!-- ========================= Append Inner Slot -->
			<template
				v-if="slots['append-inner']"
				#[`append-inner`]="props"
			>
				<slot
					name="append-inner"
					v-bind="{
						...props,
						toggleColorPicker,
					}"
				/>
			</template>

			<template
				v-if="(appendInnerIcon || (pipSlot === 'append-inner' && pip)) && !slots['append-inner']"
				#append-inner
			>
				<PipComponent
					v-if="pip"
					v-bind="pipProps"
					@click="toggleColorPicker"
				/>
				<ColorPickerIcon
					v-else-if="appendInnerIcon"
					:color="hoverIconColor"
					:icon="appendInnerIcon"
					:iconSize="iconSize"
					@click="toggleCheck('textFieldIcon')"
				/>
			</template>

			<!-- ========================= Append Slot -->
			<template
				v-if="slots.append"
				#[`append`]="props"
			>
				<slot
					name="append"
					v-bind="{
						...props,
						toggleColorPicker,
					}"
				/>
			</template>

			<template
				v-if="(appendIcon || (pipSlot === 'append' && pip)) && !slots['append']"
				#append
			>
				<PipComponent
					v-if="pip"
					v-bind="pipProps"
					@click="toggleColorPicker"
				/>
				<ColorPickerIcon
					v-else-if="appendIcon"
					:color="hoverIconColor"
					:icon="appendIcon"
					:iconSize="iconSize"
					@click="toggleColorPicker"
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
				v-bind="defaultCardProps"
				ref="cardRef"
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
	CardStylesObject,
	HtmlRefElement,
	Mode,
	Props,
	TextFieldProperties,
	VuetifyDefaults,
} from '@/plugin/types';
import { useConvertToUnit } from '@composables/helpers';
import {
	useCardClasses,
	useTextFieldClasses,
} from '@composables/classes';
import ColorPickerIcon from '@components/ColorPickerIcon.vue';
import PipComponent from '@components/PipComponent.vue';
import type { VCard } from 'vuetify/components';
import { onClickOutside } from '@vueuse/core';


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
	cardFieldWidth: false,
	cardOffsetX: 0,
	cardOffsetY: 5,
	cardPadding: 4,
	cardProps: () => ({}) as const,
	color: undefined,
	colorPickerProps: () => ({}) as const,
	density: 'default',
	hint: '',
	iconHoverColor: undefined,
	iconSize: 'default',
	label: undefined,
	messages: undefined,
	name: 'color',
	open: 'bottom left',
	persistentHint: false,
	persistentPlaceholder: false,
	pip: false,
	pipBorder: '3px solid rgb(var(--v-theme-on-surface))',
	pipBorderRadius: '50%',
	pipIcon: 'pip',
	pipSlot: 'prepend-inner',
	placeholder: undefined,
	prependIcon: undefined,
	prependInnerIcon: 'default',
	readonly: false,
	readonlyInput: false,
	required: false,
});


// -------------------------------------------------- Defaults //
// ------------------------- VCard //
const defaultCardProps: Props['cardProps'] = {
	elevation: 5,
	hover: false,
	loading: false,
	verticalOffset: 28,
};

// ------------------------- VColorPicker //
const defaultColorPickerProps: Props['colorPickerProps'] = {
	elevation: 0,
};

const defaults = ref<VuetifyDefaults>({
	VCard: {
		...defaultCardProps,
		...props.cardProps,
	},
	VColorPicker: {
		...defaultColorPickerProps,
		...{
			canvasHeight: props.canvasHeight,
			dotSize: props.dotSize,
			hideCanvas: props.hideCanvas,
			hideInputs: props.hideInputs,
			hideSliders: props.hideSliders,
			mode: props.mode,
			modes: props.modes,
			showSwatches: props.showSwatches,
			swatches: props.swatches,
			swatchesMaxHeight: props.swatchesMaxHeight,
		},
		...props.colorPickerProps,
	},
});


// -------------------------------------------------- Data #
const cardRef = ref<VCard | null>(null);
const cardStyles = ref<CardStylesObject>({});
const colorPickerOpen = ref<boolean>(false);
const fieldContainerRef = ref<HtmlRefElement>(null);
const colorPickerModelValue = ref<any>(attrs.modelValue);
const modelValue = ref<any>(attrs.modelValue);
const pickerMode = ref<Mode>(defaults.value.VColorPicker?.mode);
const themeAll = ref(props.theme ?? undefined);
let textFieldProperties = reactive<TextFieldProperties>({
	bottom: 0,
	height: 0,
	left: 0,
	right: 0,
	top: 0,
	width: 0,
});

// ------------------------- Pip //
const pipProps = ref({
	density: props.density,
	modelValue,
	pip: props.pip,
	pipBorder: props.pipBorder,
	pipBorderRadius: props.pipBorderRadius,
	pipIcon: props.pipIcon,
	pipSize: props.iconSize,
});


// -------------------------------------------------- Watch #
watch(() => attrs.modelValue, (newVal) => {
	updateModelValue(newVal);
});


// -------------------------------------------------- Computed #

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

// ------------------------- Card #
const cardClasses = computed(() => useCardClasses({
	fullWidth: props.cardFieldWidth,
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
function toggleColorPicker(trigger?: string | Event): void {
	const defaultCoords = { left: 0, right: 0, top: 0, width: 0 };
	const fieldContainer = fieldContainerRef.value;

	// Only close the color picker if it is open on keyup & clear event //
	if (!colorPickerOpen.value && (trigger === 'keyup' || trigger === 'clear')) {

		// If clear, reset the model values //
		if (trigger === 'clear') {
			updateModelValues('');
		}

		return;
	}

	colorPickerOpen.value = !colorPickerOpen.value;

	// If color picker is closed no further action is needed //
	if (!colorPickerOpen.value) {
		cardStyles.value.display = 'none';
		return;
	}

	const fieldElementCoords = fieldContainer?.getBoundingClientRect() ?? defaultCoords;

	// Set the height and width of the field //
	let inputHeight: number | undefined = fieldContainer?.offsetHeight ?? 0;
	let inputWidth: number = 300;
	let positionLeft = fieldElementCoords?.left ?? 0;
	let positionRight = fieldElementCoords?.right ?? 0;

	const fieldInputContainer: HtmlRefElement = fieldContainerRef?.value?.querySelector('.v-field__input');
	const fieldContainerInputCoords = fieldInputContainer?.getBoundingClientRect() ?? defaultCoords;

	inputHeight = fieldInputContainer?.offsetHeight;
	inputWidth = fieldInputContainer?.offsetWidth ?? 0;
	positionLeft = fieldContainerInputCoords.left;
	positionRight = fieldContainerInputCoords.right - fieldContainerInputCoords.width;

	textFieldProperties = {
		bottom: 'initial',
		height: inputHeight as number,
		left: positionLeft,
		right: positionRight,
		top: (window.scrollY + fieldElementCoords?.top ?? 0),
		width: props.cardFieldWidth ? inputWidth : 'auto',
	};

	setCardStyles();
}

// ------------------------- Set Card Styles //
function setCardStyles(): void {
	let top: string | number = Number(textFieldProperties.top) + Number(textFieldProperties.height);
	let bottom: string | number = 'initial';
	let offsetY = Number(props.cardOffsetY) ?? 0;
	const offsetX = Number(props.cardOffsetX) ?? 0;

	if (props.hint || props.messages) {
		offsetY += defaults.value.VCard?.verticalOffset ?? 0;
	}

	top = top + offsetY;

	// Top/Bottom Card Alignment //
	if (props.open?.includes('top')) {
		bottom = (window.innerHeight - top) + Number(textFieldProperties.height) + (offsetY * 2);
		top = 'initial';
	}

	// Left/Right Card Alignment //
	let left: string | number = Number(textFieldProperties.left) + offsetX;
	let right: string | number = textFieldProperties.right ?? 0;

	if (props.cardFieldWidth) {
		left = textFieldProperties.left as number;
		right = 'initial';
	}
	else {
		right = 'initial';

		if (props.open?.includes('right')) {
			left = 'initial' as string;
			right = Number(textFieldProperties.right) + offsetX;
		}
	}

	const styles: CardStylesObject = {
		bottom: useConvertToUnit({ value: bottom }),
		display: 'block',
		left: useConvertToUnit({ value: left }),
		minWidth: useConvertToUnit({ value: textFieldProperties.width }),
		padding: useConvertToUnit({ value: props.cardPadding }),
		right: useConvertToUnit({ value: right }),
		top: useConvertToUnit({ value: top }),
		width: useConvertToUnit({ value: textFieldProperties.width }),
	};

	cardStyles.value = styles;
}

// ------------------------- Toggle Color Picker Click Outside Trigger //
onClickOutside(fieldContainerRef, (event) => {
	const element = unref(cardRef);

	if (event.target !== element && !element?.$el?.contains(event.target) && colorPickerOpen.value) {
		toggleColorPicker('outside');
	}
}, { ignore: [cardRef] });


// ------------------------- Update Models //
function updateModelValue(value: any) {
	let returnColor = value ?? '';

	if (returnColor.length < 7) {
		modelValue.value = returnColor;
		updateModelValues(returnColor);
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

	updateModelValues(returnColor);
}

function updateModelValues(val: any, updatePicker = true) {
	if (updatePicker) {
		colorPickerModelValue.value = val;
	}

	modelValue.value = val;
	emit('update:modelValue', val);
	emit('update', val);
}

// ------------------------- Update Color Picker Mode //
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
