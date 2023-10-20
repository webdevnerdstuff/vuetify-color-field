<template>
	<VColorPickerField
		v-model="colorA"
		pip
		pip-border="none"
		pip-icon="$vuetify"
		pip-size="x-small"
		pip-slot="prepend"
		:prepend-inner-icon="null"
	/>

	<VColorPickerField
		v-model="colorB"
		pip
		pip-border="none"
		pip-icon="$vuetify"
		pip-size="small"
	/>

	<VColorPickerField
		v-model="colorC"
		pip
		pip-border="none"
		pip-icon="$vuetify"
		pip-size="default"
		pip-slot="append-inner"
		:prepend-inner-icon="null"
	/>

	<VColorPickerField
		v-model="colorD"
		pip
		pip-border="none"
		pip-icon="$vuetify"
		pip-size="large"
		pip-slot="append"
		:prepend-inner-icon="null"
	/>

	<VColorPickerField
		v-model="colorE"
		pip
		pip-border="none"
		pip-icon="$vuetify"
		pip-size="x-large"
		pip-slot="append"
		:prepend-inner-icon="null"
	/>
</template>

<script setup>
const colorA = ref(null);
const colorB = ref(null);
const colorC = ref(null);
const colorD = ref(null);
const colorE = ref(null);

const templateCode = `<template>
  <VColorPickerField
    v-model="colorA"
    pip
    pip-border="none"
    pip-icon="$vuetify"
    pip-size="x-small"
    pip-slot="prepend"
    :prepend-inner-icon="null"
  />

  <VColorPickerField
    v-model="colorB"
    pip
    pip-border="none"
    pip-icon="$vuetify"
    pip-size="small"
  />

  <VColorPickerField
    v-model="colorC"
    pip
    pip-border="none"
    pip-icon="$vuetify"
    pip-size="default"
    pip-slot="append-inner"
    :prepend-inner-icon="null"
  />

  <VColorPickerField
    v-model="colorD"
    pip
    pip-border="none"
    pip-icon="$vuetify"
    pip-size="large"
    pip-slot="append"
    :prepend-inner-icon="null"
  />

  <VColorPickerField
    v-model="colorE"
    pip
    pip-border="none"
    pip-icon="$vuetify"
    pip-size="x-large"
    pip-slot="append"
    :prepend-inner-icon="null"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const colorA = ref(null);
  const colorB = ref(null);
  const colorC = ref(null);
  const colorD = ref(null);
  const colorE = ref(null);
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Changing the <code class="ic">pip</code> icon size.',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
