<template>
	<VColorPickerField
		v-model="color"
		dot-field
	/>
</template>

<script setup>
const color = ref(null);

const templateCode = `<template>
  <VColorPickerField
    v-model="color"
    dot-field
  />
</template>
`;

const scriptCode = `\<script setup\>
  const color = ref(null);
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'A simple example of a color picker field using the <code class="ic">dot-field</code> prop.',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
