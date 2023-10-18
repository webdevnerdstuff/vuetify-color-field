<template>
	<VColorPickerField
		v-model="color"
		dot-field
		hint="Hello World"
		hint-color="#00ff00"
	/>
</template>

<script setup>
const color = ref('#ff0000');

const templateCode = `<template>
  <VColorPickerField
    v-model="color"
    dot-field
    hint="Hello World"
    hint-color="#00ff00"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const color = ref('#ff0000');
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'A simple example of a color picker field using the <code class="ic">dot-field</code> prop.',
		name: 'Hint Prop',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
