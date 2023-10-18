<template>
	<VColorPickerField
		v-model="color"
		dot-field
		hint="Hello World"
	/>
</template>

<script setup>
const color = ref('#ff0000');

const templateCode = `<template>
  <VColorPickerField
    v-model="color"
    dot-field
    hint="Hello World"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const color = ref('#ff0000');
\</script\>`;

defineExpose({
	exampleCode: {
		name: 'Hint Prop',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
