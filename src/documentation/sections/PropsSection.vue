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
				For component specific props, please refer to the <a
					:href="store.links.vuetify"
					target="_blank"
				>Vuetify</a> documentation.
			</div>
		</v-col>

		<v-col cols="12">
			<PropsTable
				:headers="propsStore.propsHeaders"
				:items="propsStore.componentProps"
				section-id="component-props"
				section-title="Component Props"
				subtitle="These props are used by the component."
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
