<template>
	<v-row>
		<v-col
			id="examples"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#examples"
				>#</a>
				Examples
			</h2>
		</v-col>

		<!-- ================================================== Text Field Examples -->
		<v-col cols="12">
			<h2 class="text-secondary">Text Field Examples</h2>
		</v-col>

		<ExampleContainer
			:code="getTemplateCode('TFSimpleExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<TFSimpleExample ref="TFSimpleExampleRef" />
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('TFIconHoverColorExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<TFIconHoverColorExample ref="TFIconHoverColorExampleRef" />
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('TFReadonlyInputExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<TFReadonlyInputExample ref="TFReadonlyInputExampleRef" />
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('TFReadonlyExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<TFReadonlyExample ref="TFReadonlyExampleRef" />
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('TFIconsExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<TFIconsExample ref="TFIconsExampleRef" />
		</ExampleContainer>

		<!-- ================================================== Dot Field Examples -->
		<v-col cols="12">
			<h2 class="text-secondary">Dot Field Examples</h2>
		</v-col>

		<ExampleContainer
			:code="getTemplateCode('DFSimpleExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<DFSimpleExample ref="DFSimpleExampleRef" />
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('DFHintExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<DFHintExample ref="DFHintExampleRef" />
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('DFLabelExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<DFLabelExample ref="DFLabelExampleRef" />
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('DFPlaceholderExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<DFPlaceholderExample ref="DFPlaceholderExampleRef" />
		</ExampleContainer>

	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import {
	DFHintExample,
	DFLabelExample,
	DFPlaceholderExample,
	DFSimpleExample,
	ExampleContainer,
	TFIconHoverColorExample,
	TFReadonlyExample,
	TFReadonlyInputExample,
	TFIconsExample,
	TFSimpleExample,
} from '@/documentation/components/examples';

defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

// Text Field Refs //
const TFSimpleExampleRef = ref(null);
const TFIconHoverColorExampleRef = ref(null);
const TFReadonlyInputExampleRef = ref(null);
const TFReadonlyExampleRef = ref(null);
const TFIconsExampleRef = ref(null);

// Dot Field Refs //
const DFSimpleExampleRef = ref(null);
const DFHintExampleRef = ref(null);
const DFLabelExampleRef = ref(null);
const DFPlaceholderExampleRef = ref(null);

const refElements = ref({
	DFHintExampleRef,
	DFLabelExampleRef,
	DFPlaceholderExampleRef,
	DFSimpleExampleRef,
	TFIconHoverColorExampleRef,
	TFIconsExampleRef,
	TFReadonlyExampleRef,
	TFReadonlyInputExampleRef,
	TFSimpleExampleRef,
});


const classes = inject('classes');


function getTemplateCode(exampleName) {
	console.log('getTemplateCode', exampleName);
	const el = refElements.value[exampleName];
	const example = el?.exampleCode ?? { code: '', desc: undefined, name: undefined, template: '' };
	console.log(example);
	return example;
}


</script>
