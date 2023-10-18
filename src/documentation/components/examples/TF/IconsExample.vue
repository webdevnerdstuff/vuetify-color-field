<template>
	<VColorPickerField
		v-model="color"
		prepend-icon="mdi:mdi-eyedropper"
		:prepend-inner-icon="false"
	/>

	<VColorPickerField
		v-model="color"
		prepend-inner-icon="mdi:mdi-eyedropper"
	/>

	<VColorPickerField
		v-model="color"
		append-inner-icon="mdi:mdi-eyedropper"
		:prepend-inner-icon="false"
	/>

	<VColorPickerField
		v-model="color"
		append-icon="mdi:mdi-eyedropper"
		:prepend-inner-icon="false"
	/>
</template>

<script setup>
const color = ref('#ff0000');

const templateCode = `<template>
  <VColorPickerField
    v-model="color"
    prepend-icon="mdi:mdi-eyedropper"
    :prepend-inner-icon="false"
  >

  <VColorPickerField
    v-model="color"
    prepend-inner-icon="mdi:mdi-eyedropper"
  />

  <VColorPickerField
    v-model="color"
    append-inner-icon="mdi:mdi-eyedropper"
    :prepend-inner-icon="false"
  />

  <VColorPickerField
    v-model="color"
    append-icon="mdi:mdi-eyedropper"
    :prepend-inner-icon="false"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const color = ref('#ff0000');
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Using the built in <code class="ic">v-text-field</code> <code class="ic">prepend-icon</code>, <code class="ic">prepend-inner-icon</code>, <code class="ic">append-inner-icon</code>, and <code class="ic">append-icon</code> props. By default the <code class="ic">prepend-inner-icon</code> prop is used.',
		name: 'Icon Props',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
