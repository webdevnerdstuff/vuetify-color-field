import { defineStore } from 'pinia';
import { useCoreStore } from './index';


export const useMenuStore = defineStore('menu', () => {
	const coreStore = useCoreStore();
	const links = coreStore.links;

	const componentItems = [
		{
			href: '#components-v-text-field',
			icon: 'mdi:mdi-minus',
			key: 'v-inline-text-field',
			link: `${links.vuetify}en/api/v-text-field/`,
			title: 'VInlineTextField',
			topTitle: 'VTextField',
		},
		{
			href: '#components-v-color-picker',
			icon: 'mdi:mdi-eyedropper',
			key: 'v-inline-text-field',
			link: `${links.vuetify}en/api/v-color-picker/`,
			title: 'VColorPicker',
			topTitle: 'VColorPicker',
		},
		{
			href: '#components-v-card',
			icon: 'mdi:mdi-card-outline',
			key: 'v-inline-text-field',
			link: `${links.vuetify}en/api/v-card/`,
			title: 'VCard',
			topTitle: 'VCard',
		},
		{
			href: '#components-v-icon',
			icon: '$vuetify',
			key: 'v-icon',
			link: `${links.vuetify}en/api/v-icon/`,
			title: 'VIcon',
			topTitle: 'VIcon',
		},
	];

	const vuetifyLinks = [
		{
			icon: 'mdi:mdi-github',
			key: 'vuetify-github',
			link: links.vuetifyGithub,
			title: 'Github',
		},
		{
			key: 'vuetify',
			link: `${links.vuetify}en/components/all/`,
			title: 'Vuetify Components',
		},
	];

	const menuItems = [
		{
			href: '#home',
			icon: 'mdi:mdi-home',
			title: 'Home',
		},
		{
			href: '#installation',
			icon: 'mdi:mdi-plus-thick',
			title: 'Installation',
		},
		{
			href: '#description',
			icon: 'mdi:mdi-information-outline',
			title: 'Description',
		},
		{
			href: '#usage',
			icon: 'mdi:mdi-power-plug-outline',
			title: 'Usage',
		},
		{
			href: '#examples',
			icon: 'mdi:mdi-code-json',
			title: 'Examples',
		},
		{
			href: '#props',
			icon: 'mdi:mdi-cog',
			title: 'Props',
		},
		{
			href: '#events',
			icon: 'mdi:mdi-calendar-star',
			title: 'Events',
		},
		{
			href: '#slots',
			icon: 'mdi:mdi-slot-machine',
			title: 'Slots',
		},
		{
			href: '#playground',
			icon: 'mdi:mdi-seesaw',
			title: 'Playground',
		},
		{
			href: '#dependencies',
			icon: 'mdi:mdi-asterisk-circle-outline',
			title: 'Dependencies',
		},
		{
			href: '#license',
			icon: 'mdi:mdi-card-account-details-outline',
			title: 'License',
		},
		{
			href: '#legal',
			icon: 'mdi:mdi-scale-balance',
			title: 'Legal',
		},
	];

	return {
		componentItems,
		menuItems,
		vuetifyLinks,
	};
});
