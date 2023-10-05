<template>
	<div
		ref="inlineFieldsContainer"
		:class="containerClasses"
		:style="containerStyle"
	>
		My Custom Component
	</div>
</template>

<script setup lang="ts">
import { AllProps } from './utils/props';
import { Props } from '@/types';
import {
	useContainerClasses,
} from './composables/classes';
import {
	useContainerStyle,
} from './composables/styles';
import componentEmits from './utils/emits';



const modelValue = defineModel<string>();

const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits([...componentEmits]);

const theme = useTheme();

const props = withDefaults(defineProps<Props>(), { ...AllProps });
const settings = reactive({ ...attrs, ...props });

console.log({
	emit,
	modelValue,
	props,
	settings,
	slots,
	theme,
});


// ------------------------------------------------ Class & Styles //
const containerClasses = computed(() => useContainerClasses({
	isOption: true,
}));

const containerStyle = computed(() => useContainerStyle({
	displayType: 'block',
}));
</script>

<style lang="scss" scoped>
</style>
