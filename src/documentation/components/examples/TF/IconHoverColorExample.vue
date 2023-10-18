<template>
	<VColorPickerField
		v-model="color"
		icon-hover-color="primary"
	/>
</template>

<script setup>
const color = ref(null);

const templateCode = `<template>
  <VColorPickerField
	  v-model="color"
	  icon-hover-color="primary"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const color = ref(null);
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Using the <code class="ic">icon-hover-color</code> prop.',
		name: 'Icon Hover Color Prop',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
