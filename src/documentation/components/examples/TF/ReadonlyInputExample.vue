<template>
	<VColorField
		v-model="color"
		readonly-input
	/>
</template>

<script setup>
const color = ref(null);

const templateCode = `<template>
  <VColorField
	  v-model="color"
	  readonly-input
  />
</template>
`;

const scriptCode = `\<script setup\>
  const color = ref(null);
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Using the <code class="ic">readonly-input</code> prop. This prop is useful when you want to display the color picker field as a readonly input, but still want to be able to edit the color picker field. Clicking on the field will open the color picker.',
		name: 'Readonly Input Prop',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
