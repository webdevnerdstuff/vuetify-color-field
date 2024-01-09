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
		</v-col>

		<v-col cols="12">
			<CodeBlock
				:code="usageGlobalPlugin"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="javascript"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			>
				<template #label>
					Global Plugin Registration
					<br>
					<i>Global options have a higher precedence and will override local props</i>
				</template>
			</CodeBlock>
		</v-col>

		<v-col cols="12">
			<CodeBlock
				:code="usageGlobalComponent"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				label="Global Component Registration"
				lang="javascript"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			/>
		</v-col>

		<v-col cols="12">
			<CodeBlock
				:code="usageIndividual"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				label="Local Registration"
				lang="html"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			/>
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

const usageGlobalPlugin = `import { createApp } from 'vue';
import App from './App.vue';
import { createVColorField } from '@wdns/vuetify-color-field';

const app = createApp(App);

app.use(createVColorField({
  // options
}));

app.mount('#app');`;

const usageGlobalComponent = `import { createApp } from 'vue';
import App from './App.vue';
import { VColorField } from  '@wdns/vuetify-color-field';

const app = createApp(App);

app.component('VColorField', VColorField);

app.mount('#app');`;

const usageIndividual = `<template>
  <VColorField
    v-model="color"
  />
</template>

\<script setup\>
  import VColorField from  '@wdns/vuetify-color-field';

  const color = ref(null);
\</script\>`;
</script>
