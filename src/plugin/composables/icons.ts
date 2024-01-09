import { UseGetIcon } from '@/plugin/types';

const defaultIcons = {
	fa: {
		default: 'fa-solid fa-palette',
		pip: 'fa-solid fa-circle',
	},
	mdi: {
		default: 'mdi:mdi-palette',
		pip: 'mdi:mdi-circle',
	},
};

export const useGetIcon: UseGetIcon = (options) => {
	const { icon, iconOptions, name } = options;

	if (icon) {
		return icon;
	}

	const defaultSet = iconOptions?.defaultSet as string ?? '';
	let iconAbbv = defaultSet.toLowerCase();

	iconAbbv = iconAbbv === 'fa' || iconAbbv === 'fasvg' ? 'fa' : iconAbbv;
	const iconSet = defaultIcons[iconAbbv];

	if (!iconSet) {
		throw new Error(`[VColorField]: No default ${iconOptions?.defaultSet} icon set found.`);
	}

	const newIcon = iconSet[name];

	if (!newIcon) {
		throw new Error(`[VColorField]: No ${name} icon found.`);
	}

	return newIcon;
};
