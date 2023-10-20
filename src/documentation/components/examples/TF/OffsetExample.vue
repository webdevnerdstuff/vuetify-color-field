<template>
	<VColorPickerField
		v-model="colorA"
		cardOffsetX="-36"
	/>

	<VColorPickerField
		v-model="colorB"
		cardOffsetY="25"
	/>
</template>

<script setup>
const colorA = ref(null);
const colorB = ref(null);

const templateCode = `<template>
  <VColorPickerField
    v-model="colorA"
    cardOffsetX="-36"
  />

  <VColorPickerField
    v-model="colorB"
    cardOffsetY="25"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const colorA = ref(null);
  const colorB = ref(null);
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Using the <code class="ic">cardOffsetX</code> & <code class="ic">cardOffsetY</code> prop to offset the color picker card.',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
