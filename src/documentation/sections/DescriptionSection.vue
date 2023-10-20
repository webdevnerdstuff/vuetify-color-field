<template>
	<v-row>
		<v-col
			id="description"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#description"
				>#</a>
				Description
			</h2>
		</v-col>

		<v-col cols="12">
			The <code class="ic">v-color-picker-field</code> component is a specialized <code class="ic">v-text-field</code>
			for using the <code class="ic">v-color-picker</code> component for use in forms.
		</v-col>

	</v-row>
</template>

<script setup>
import { inject } from 'vue';


const classes = inject('classes');
</script>
