<template>
	<v-hover>
		<template v-slot:default="{ isHovering, props }">
			<v-icon
				v-bind="props"
				:color="isHovering ? color : undefined"
				:icon="iconValue"
				@click="toggleColorPicker"
			></v-icon>
		</template>
	</v-hover>
</template>

<script setup lang="ts">
import {
	ColorPickerIconProps,
} from '@/types';
import type {
	VIcon,
} from 'vuetify/components';
import { IconOptions } from 'vuetify';

const emit = defineEmits(['click']);

const props = withDefaults(defineProps<ColorPickerIconProps>(), {
	icon: '',
});

const defaultIcons = {
	fa: {
		eyedropper: 'fa-solid fa-eyedropper',
		palette: 'fa-solid fa-palette',
	},
	mdi: {
		eyedropper: 'mdi:mdi-eyedropper',
		palette: 'mdi:mdi-palette',
	},
};

const iconValue = computed(() => {
	return props.icon ?? getDefaultIcon();
});

function getDefaultIcon(): string | void {
	const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));
	const iconSet = defaultIcons[iconOptions?.defaultSet as string];
	const name = 'eyedropper';

	if (!iconSet) {
		throw new Error(`VColorPickerField: No VColorPickerField default ${iconOptions?.defaultSet} icon set found.`);
	}

	return iconSet[name] ?? null;
}

function toggleColorPicker() {
	emit('click');
}
</script>
