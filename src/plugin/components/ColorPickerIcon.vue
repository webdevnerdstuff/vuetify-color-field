<template>
	<v-hover>
		<template v-slot:default="{ isHovering, props }">
			<v-icon
				v-bind="props"
				:color="isHovering ? color : undefined"
				:icon="theIcon"
				@click="toggleColorPicker"
			></v-icon>
		</template>
	</v-hover>
</template>

<script setup lang="ts">
import { ColorPickerIconProps } from '@/types';
import { IconOptions } from 'vuetify';
import { useGetIcon } from '@/plugin/composables/icons';


const emit = defineEmits(['click']);

const props = withDefaults(defineProps<ColorPickerIconProps>(), {
	icon: '',
});

const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));

const theIcon = computed(() => {
	return useGetIcon({
		icon: props.icon,
		iconOptions,
		name: 'palette',
	});
});

function toggleColorPicker() {
	emit('click');
}
</script>
