<template>
	<v-row>
		<v-col
			id="usage"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#usage"
				>#</a>
				Usage
			</h2>

			<v-row>
				<v-col cols="12">
					<CodeBlock
						:code="usageAll"
						:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
						label="Load all components"
						lang="javascript"
						:prismjs="codeBlockSettings.plugin === 'prismjs'"
						:theme="codeBlockSettings.theme"
					>
					</CodeBlock>
				</v-col>

				<v-col cols="12">
					<CodeBlock
						:code="usageIndividual"
						:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
						label="Load individual components"
						lang="javascript"
						:prismjs="codeBlockSettings.plugin === 'prismjs'"
						:theme="codeBlockSettings.theme"
					>
					</CodeBlock>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script setup>
import { computed, inject } from 'vue';


const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const codeBlockSettings = computed(() => props.codeBlockOptions);
const classes = inject('classes');

const usageAll = `import { createApp } from 'vue';
import App from './App.vue';
import * as MyComponents from './index';

const app = createApp(App);

for (const prop in MyComponents) {
  app.component(prop, MyComponents[prop]);
}

app.mount('#app');`;

const usageIndividual = `import { createApp } from 'vue';
import App from './App.vue';
import {
  VPluginTemplate
} from 'vuetify-plugin-template';

const app = createApp(App);

app.component('VPluginTemplate', VPluginTemplate);

app.mount('#app');`;
</script>
