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
			Vuetify Plugin Template is a template to help you get starting building your own plugin/component for Vuetify.
		</v-col>

		<v-col cols="12">
			<v-alert
				color="success"
				icon="$info"
			>
				When using this template, make sure to update all links to point to your own repository and documentation by
				searching all files for <code class="ic">vuetify-plugin-template</code>, as well as <code
					class="ic">__USERNAME__</code>, <code class="ic">__EMAIL__</code>.
			</v-alert>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';


const classes = inject('classes');
</script>
