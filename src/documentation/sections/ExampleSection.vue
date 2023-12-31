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

		<ExampleContainer
			:code="getTemplateCode('TFOffsetExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<TFOffsetExample ref="TFOffsetExampleRef" />
		</ExampleContainer>

		<!-- ================================================== Pip Examples -->
		<v-col
			id="examples-pips"
			:class="h2Classes"
		>
			<h2><a
					class="text-secondary"
					href="#examples-pips"
				>Pip Examples</a></h2>
		</v-col>

		<ExampleContainer
			:code="getTemplateCode('PIPSimpleExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<PIPSimpleExample ref="PIPSimpleExampleRef" />
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('PIPIconExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<PIPIconExample ref="PIPIconExampleRef" />
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('PIPSizeExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<PIPSizeExample ref="PIPSizeExampleRef" />
		</ExampleContainer>

		<!-- <ExampleContainer
			:code="getTemplateCode('DFPlaceholderExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<DFPlaceholderExample ref="DFPlaceholderExampleRef" />
		</ExampleContainer> -->

	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import {
	ExampleContainer,
	PIPIconExample,
	PIPSimpleExample,
	PIPSizeExample,
	TFIconHoverColorExample,
	TFReadonlyExample,
	TFReadonlyInputExample,
	TFIconsExample,
	TFOffsetExample,
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
const TFOffsetExampleRef = ref(null);

// Pip Refs //
const PIPSimpleExampleRef = ref(null);
const PIPIconExampleRef = ref(null);
const PIPSizeExampleRef = ref(null);

const refElements = ref({
	PIPIconExampleRef,
	PIPSimpleExampleRef,
	PIPSizeExampleRef,
	TFIconHoverColorExampleRef,
	TFIconsExampleRef,
	TFOffsetExampleRef,
	TFReadonlyExampleRef,
	TFReadonlyInputExampleRef,
	TFSimpleExampleRef,
});

const refElementsOpen = ref({
	PIPIconExampleRef: null,
	PIPSimpleExampleRef: null,
	PIPSizeExampleRef: null,
	TFIconHoverColorExampleRef: null,
	TFIconsExampleRef: null,
	TFOffsetExampleRef: null,
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
