<template>
	<VColorPickerField
		v-model="color"
		dot-field
		label="Color"
	/>
</template>

<script setup>
const color = ref(null);

const templateCode = `<template>
  <VColorPickerField
    v-model="color"
    dot-field
    label="Color"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const color = ref(null);
\</script\>`;

defineExpose({
	exampleCode: {
		desc: '',
		name: 'Label Prop',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
