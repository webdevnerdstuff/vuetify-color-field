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
		<v-col :class="h2Classes">
			<h2 class="text-secondary">Text Field Examples</h2>
		</v-col>

		<ExampleContainer
			:code="getTemplateCode('TFSimpleExampleRef')"
			:codeBlockOptions="codeBlockOptions"
			@closePicker="closePicker('TFSimpleExampleRef');"
		>
			<TFSimpleExample
				ref="TFSimpleExampleRef"
				:open="refElementsOpen.TFSimpleExampleRef"
			/>
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

		<!-- ================================================== Pip Examples -->
		<v-col :class="h2Classes">
			<h2 class="text-secondary">Pip Examples</h2>
		</v-col>

		<ExampleContainer
			:code="getTemplateCode('PIPSimpleExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<PIPSimpleExample ref="PIPSimpleExampleRef" />
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
	ExampleContainer,
	PIPSimpleExample,
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

// Pip Refs //
const PIPSimpleExampleRef = ref(null);

const refElements = ref({
	PIPSimpleExampleRef,
	TFIconHoverColorExampleRef,
	TFIconsExampleRef,
	TFReadonlyExampleRef,
	TFReadonlyInputExampleRef,
	TFSimpleExampleRef,
});

const refElementsOpen = ref({
	PIPSimpleExampleRef: null,
	TFIconHoverColorExampleRef: null,
	TFIconsExampleRef: null,
	TFReadonlyExampleRef: null,
	TFReadonlyInputExampleRef: null,
	TFSimpleExampleRef: null,
});

const classes = inject('classes');
const h2Classes = ref('offset-lg-2 offset-xl-1 v-col-sm-12 v-col-lg-8 v-col-xl-10 mb-0 pb-0');


function getTemplateCode(exampleName) {
	const el = refElements.value[exampleName];
	const example = el?.exampleCode ?? { code: '', desc: undefined, name: undefined, template: '' };

	return example;
}

function closePicker(key) {
	refElementsOpen.value[key] = new Date().getTime().toString();
}


</script>
