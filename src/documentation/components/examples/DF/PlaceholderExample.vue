<template>
	<VColorPickerField
		v-model="color"
		dot-field
		placeholder="Select color"
		show-value
	/>
</template>

<script setup>
const color = ref(null);

const templateCode = `<template>
  <VColorPickerField
    v-model="color"
    dot-field
    placeholder="Select color"
    show-value
  />
</template>
`;

const scriptCode = `\<script setup\>
  const color = ref(null);
\</script\>`;

defineExpose({
	exampleCode: {
		name: 'Placeholder Prop',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
