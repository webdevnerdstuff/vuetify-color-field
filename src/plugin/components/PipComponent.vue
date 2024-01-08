<template>
	<v-icon
		:class="pipClasses"
		:color="modelValue || '--v-theme-on-surface'"
		:icon="thePipIcon"
		:size="pipSize"
		:style="pipStyles"
		tag="div"
		@click="toggleColorPicker"
	></v-icon>
</template>

<script setup lang="ts">
import type { PipComponentProps } from '@/plugin/types';
import { IconOptions } from 'vuetify';
import { usePipClasses } from '@composables/classes';
import { usePipStyles } from '@composables/styles';
import { useGetIcon } from '@composables/icons';

const emit = defineEmits(['click']);

const props = withDefaults(defineProps<PipComponentProps>(), {});

const { modelValue } = toRefs(props);

const pipClasses = computed(() => usePipClasses());

const pipStyles = computed(() => usePipStyles({
	pipBorder: props.pipBorder,
	pipBorderRadius: props.pipBorderRadius,
}));

const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));

const thePipIcon = computed(() => {
	return useGetIcon({
		icon: props.pipIcon !== 'pip' ? props.pipIcon : '',
		iconOptions,
		name: 'pip',
	});
});

function toggleColorPicker() {
	emit('click');
}

</script>
