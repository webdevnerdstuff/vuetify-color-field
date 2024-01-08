<template>
	<v-hover>
		<template v-slot:default="{ isHovering, props }">
			<v-icon
				v-bind="props"
				:color="isHovering ? color : undefined"
				:icon="theIcon"
				:size="iconSize"
				@click="toggleColorPicker"
			></v-icon>
		</template>
	</v-hover>
</template>

<script setup lang="ts">
import { ColorPickerIconProps } from '@/plugin/types';
import { IconOptions } from 'vuetify';
import { useGetIcon } from '@composables/icons';


const emit = defineEmits(['click']);

const props = withDefaults(defineProps<ColorPickerIconProps>(), {
	icon: '',
});

const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));

const theIcon = computed(() => {
	return useGetIcon({
		icon: props.icon !== 'default' ? props.icon : '',
		iconOptions,
		name: 'default',
	});
});

function toggleColorPicker() {
	emit('click');
}
</script>
