<template>
	<v-row>
		<v-col
			id="legal"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#legal"
				>#</a>
				Legal
			</h2>
		</v-col>

		<v-col cols="12">
			<p>
				Vuetify and the Vuetify logo are trademarks of Vuetify LLC. This
				component was not created or endorsed by Vuetify.
			</p>
		</v-col>
	</v-row>

	<!-- Please keep this section as an appreciation for my work :) -->
	<v-row>
		<v-col
			class="font-italic text-disabled text-caption"
			cols="12"
		>
			Site built using the <a
				href="https://github.com/webdevnerdstuff/vuetify-plugin-template"
				target="_blank"
			>vuetify-plugin-template</a> by <a
				href="https://github.com/webdevnerdstuff/"
				target="_blank"
			>WebDevNerdStuff</a>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';


const classes = inject('classes');
</script>
