<template>
	<v-row>
		<v-col
			id="components-props"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#props"
				>#</a>
				Components
			</h2>

			<div>
				If you have multiple components you can use this section.
			</div>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';
// import { useCoreStore } from '@/stores/index';


defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const classes = inject('classes');
// const store = useCoreStore();
</script>

<style lang="scss" scoped>
</style>
