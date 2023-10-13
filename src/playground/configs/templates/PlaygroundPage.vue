<template>
	<v-col cols="12">
		<v-card elevation="5">
			<v-container>
				<VColorPickerField v-model="color" />
			</v-container>
		</v-card>
	</v-col>
</template>

<script setup>
const color = ref('#ff0000');
</script>

<style lang="scss" scoped>
</style>
