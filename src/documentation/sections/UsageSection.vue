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
						:code="usageGlobal"
						:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
						label="Global registration"
						lang="javascript"
						:prismjs="codeBlockSettings.plugin === 'prismjs'"
						:theme="codeBlockSettings.theme"
					>
					</CodeBlock>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<CodeBlock
						:code="usageIndividual"
						:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
						label="Local registration"
						lang="html"
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

const usageGlobal = `import { createApp } from 'vue';
import App from './App.vue';
import { VColorField } from '@wdns/vuetify-color-field';

const app = createApp(App);

app.component('VColorField', VColorField);

app.mount('#app');`;

const usageIndividual = `<template>
  <VColorField v-model="color" />
</template>

\<script setup\>
  import { VColorField } from '@wdns/vuetify-color-field';

  const color = ref(null);
\</script\>`;
</script>
