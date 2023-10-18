<template>
	<VColorPickerField
		v-model="color"
		:readonly="true"
	/>
</template>

<script setup>
const color = ref('#ff0000');

const templateCode = `<template>
  <VColorPickerField
	  v-model="color"
	  :readonly="true"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const color = ref('#ff0000');
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Using the <code class="ic">readonly</code> prop will put the <code class="ic">v-text-field</code> and <code class="ic">v-color-picker</code> components into readonly mode. Clicking on the field will still open the color picker.',
		name: 'Readonly Prop',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
