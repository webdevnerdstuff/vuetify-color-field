

const defaultIcons = {
	fa: {
		eyedropper: 'fa-solid fa-eye-dropper',
	},
	mdi: {
		eyedropper: '$checkboxOff',
	},
};

export const useGetIcon = (options) => {
	const { icon, iconOptions, name } = options;

	if (icon) {
		return icon;
	}

	const iconSet = defaultIcons[iconOptions?.defaultSet as string];

	if (!iconSet) {
		throw new Error(`VColorPickerField: No VColorPickerField default ${iconOptions?.defaultSet} icon set found for ${name}. Please set the icon prop.`);
	}

	const newIcon = iconSet[name];

	if (!newIcon) {
		throw new Error(`VColorPickerField: No ${name} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
	}

	return newIcon;
};
