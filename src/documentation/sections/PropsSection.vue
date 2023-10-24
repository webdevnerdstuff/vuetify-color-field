<template>
	<v-row>
		<v-col
			id="props"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#props"
				>#</a>
				Props
			</h2>

			<div>
				When using the <code class="ic">VTextField</code>, you can use the regular props
				that are available for that component.
			</div>
		</v-col>

		<v-col cols="12">
			<v-alert>
				Some of the more common <code class="ic">VColorPicker</code> props that have a <v-icon
					color="primary"
					icon="mdi:mdi-palette"
				/>
				next to them in the prop table below. Any other props can be added to the <code
					class="ic">color-picker-props</code>
				prop. Please note that the <code class="ic">color-picker-props</code> have a higher priority than the individual
				props.

			</v-alert>
		</v-col>

		<v-col cols="12">
			For other component specific props, please refer to the <a
				:href="store.links.vuetify"
				target="_blank"
			>Vuetify</a> documentation.
		</v-col>

		<v-col cols="12">
			<PropsTable
				:headers="propsStore.propsHeaders"
				:items="propsStore.componentProps"
				section-id="component-props"
				section-title="Component Props"
			/>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import { useCoreStore } from '@/stores/index';
import { usePropsStore } from '@/stores/props';
import PropsTable from '@/documentation/components/PropsTable.vue';

const classes = inject('classes');
const store = useCoreStore();
const propsStore = usePropsStore();
</script>

<style lang="scss" scoped>
</style>
