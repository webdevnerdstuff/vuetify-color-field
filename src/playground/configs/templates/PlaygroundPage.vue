<template>
	<v-row>
		<v-col
			class="offset-4 mt-15 pt-15"
			cols="4"
		>
			<v-card elevation="5">
				<v-container>
					<VColorPickerField
						v-model="color"
						:append-icon="VColorPickerFieldProps.appendIcon"
						:append-inner-icon="VColorPickerFieldProps.appendInnerIcon"
						:card-props="VColorPickerFieldProps.cardProps"
						:color="VColorPickerFieldProps.color"
						:color-picker-props="VColorPickerFieldProps.colorPickerProps"
						:density="VColorPickerFieldProps.density"
						:dot-field="VColorPickerFieldProps.dotField"
						:dot-field-props="VColorPickerFieldProps.dotFieldProps"
						:hint="VColorPickerFieldProps.hint"
						:hint-align="VColorPickerFieldProps.hintAlign"
						:hint-color="VColorPickerFieldProps.hintColor"
						:icon-hover-color="VColorPickerFieldProps.iconHoverColor"
						:label="VColorPickerFieldProps.label"
						:name="VColorPickerFieldProps.name"
						:persistent-card="VColorPickerFieldProps.persistentCard"
						:persistent-hint="VColorPickerFieldProps.persistentHint"
						:persistent-placeholder="VColorPickerFieldProps.persistentPlaceholder"
						:prepend-icon="VColorPickerFieldProps.prependIcon"
						:prepend-inner-icon="VColorPickerFieldProps.prependInnerIcon"
						:readonly="VColorPickerFieldProps.readonly"
						:readonly-input="VColorPickerFieldProps.readonlyInput"
						:required="VColorPickerFieldProps.required"
						:theme="VColorPickerFieldProps.theme"
						:variant="VColorPickerFieldProps.variant"
					>
						<!-- <template #prepend-inner>
							BOB
						</template>
						<template #append-inner>
							STU
						</template> -->
					</VColorPickerField>

				</v-container>
			</v-card>
		</v-col>
	</v-row>
</template>

<script setup>
const color = ref(null);

const VColorPickerFieldProps = ref({
	appendIcon: undefined,
	appendInnerIcon: undefined,
	cardProps: {
		// align: 'top left',
		// fullWidth: true,
		// padding: 5,
		// theme: 'light',
	},
	color: undefined,
	colorPickerProps: {
		// disabled: true,
		mode: 'hex',
		modes: ['hex'],
		showSwatches: true,
		// theme: 'light',
	},
	density: undefined,
	dotField: false,
	dotFieldProps: {
		borderColor: '#ccc',
		borderRadius: '50%',
		borderStyle: 'solid',
		borderWidth: 2,
		cursor: 'pointer',
		height: 20,
		showValue: true,
		width: 20,
	},
	hint: undefined,
	hintAlign: undefined,
	hintColor: undefined,
	iconHoverColor: undefined,
	label: undefined,
	name: 'color',
	persistentCard: false,
	persistentHint: undefined,
	persistentPlaceholder: false,
	placeholder: undefined,
	prependIcon: undefined,
	prependInnerIcon: 'mdi:mdi-palette',
	readonly: undefined,
	readonlyInput: undefined,
	required: false,
	theme: 'dark',
	variant: 'filled',
})

</script>

<style lang="scss" scoped>
</style>
