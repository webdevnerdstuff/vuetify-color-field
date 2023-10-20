import { UseGetIcon } from '@/types';

const defaultIcons = {
	fa: {
		eyedropper: 'fa-solid fa-eyedropper',
		palette: 'fa-solid fa-palette',
		pip: 'fa-solid fa-circle',
	},
	mdi: {
		eyedropper: 'mdi:mdi-eyedropper',
		palette: 'mdi:mdi-palette',
		pip: 'mdi:mdi-circle',
	},
};

export const useGetIcon: UseGetIcon = (options) => {
	const { icon, iconOptions, name } = options;

	if (icon) {
		return icon;
	}

	const iconSet = defaultIcons[iconOptions?.defaultSet as string];

	if (!iconSet) {
		throw new Error(`VColorPickerField: No VColorPickerField default ${iconOptions?.defaultSet} icon set found.`);
	}

	const newIcon = iconSet[name];

	if (!newIcon) {
		throw new Error(`VColorPickerField: No ${name} icon found.`);
	}

	return newIcon;
};
