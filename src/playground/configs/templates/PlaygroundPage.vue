<template>
	<v-col
		class="offset-4 mt-15 pt-15"
		cols="4"
	>
		<v-card elevation="5">
			<v-container>
				<VColorField
					v-model="color"
					:append-icon="VColorFieldProps.appendIcon"
					:append-inner-icon="VColorFieldProps.appendInnerIcon"
					:canvasHeight="VColorFieldProps.canvasHeight"
					:cardFieldWidth="VColorFieldProps.cardFieldWidth"
					:cardOffsetX="VColorFieldProps.cardOffsetX"
					:cardOffsetY="VColorFieldProps.cardOffsetY"
					:cardPadding="VColorFieldProps.cardPadding"
					:cardProps="VColorFieldProps.cardProps"
					:clearable="VColorFieldProps.clearable"
					:color="VColorFieldProps.color"
					:color-picker-props="VColorFieldProps.colorPickerProps"
					:density="VColorFieldProps.density"
					:dotSize="VColorFieldProps.dotSize"
					:hideCanvas="VColorFieldProps.hideCanvas"
					:hideInputs="VColorFieldProps.hideInputs"
					:hideSliders="VColorFieldProps.hideSliders"
					:hint="VColorFieldProps.hint"
					:hint-align="VColorFieldProps.hintAlign"
					:icon-hover-color="VColorFieldProps.iconHoverColor"
					:iconSize="VColorFieldProps.iconSize"
					:label="VColorFieldProps.label"
					:messages="VColorFieldProps.messages"
					:mode="VColorFieldProps.mode"
					:modes="VColorFieldProps.modes"
					:name="VColorFieldProps.name"
					:open="VColorFieldProps.open"
					:persistent-hint="VColorFieldProps.persistentHint"
					:persistent-placeholder="VColorFieldProps.persistentPlaceholder"
					:pip="VColorFieldProps.pip"
					:pipBorder="VColorFieldProps.pipBorder"
					:pipBorderRadius="VColorFieldProps.pipBorderRadius"
					:pipHeight="VColorFieldProps.pipHeight"
					:pipIcon="VColorFieldProps.pipIcon"
					:pipRadius="VColorFieldProps.pipRadius"
					:pipSlot="VColorFieldProps.pipSlot"
					:placeholder="VColorFieldProps.placeholder"
					:prepend-icon="VColorFieldProps.prependIcon"
					:prepend-inner-icon="VColorFieldProps.prependInnerIcon"
					:readonly="VColorFieldProps.readonly"
					:readonlyInput="VColorFieldProps.readonlyInput"
					:required="VColorFieldProps.required"
					:showSwatches="VColorFieldProps.showSwatches"
					:swatches="VColorFieldProps.swatches"
					:swatchesMaxHeight="VColorFieldProps.swatchesMaxHeight"
					:theme="VColorFieldProps.theme"
					:variant="VColorFieldProps.variant"
				>
					<!-- <template #prepend="{ toggleColorPicker }">
							<v-icon
								icon="$vuetify"
								@click="toggleColorPicker"
							/>
						</template> -->

					<!-- <template #prepend-inner="{ toggleColorPicker }">
							<v-icon
								icon="$vuetify"
								@click="toggleColorPicker"
							/>
						</template> -->

					<!-- <template #append-inner="{ toggleColorPicker }">
							<v-icon
								icon="$vuetify"
								@click="toggleColorPicker"
							/>
						</template> -->

					<!-- <template #append="{ toggleColorPicker }">
							<v-icon
								icon="$vuetify"
								@click="toggleColorPicker"
							/>
						</template> -->

					<!-- <template #label>
							Color
						</template> -->

				</VColorField>
			</v-container>
		</v-card>
	</v-col>
</template>

<script setup>
const color = ref(null);

const colorPickerProps = {
	canvasHeight: 150,
	dotSize: 10,
	hideCanvas: false,
	hideInputs: false,
	hideSliders: false,
	mode: 'rgba',
	modes: ['rgb', 'rgba', 'hsl', 'hsla', 'hex', 'hexa'],
	showSwatches: true,
	// swatches: [
	// 	['#FF0000', '#AA0000', '#550000'],
	// 	['#FFFF00', '#AAAA00', '#555500'],
	// 	['#00FF00', '#00AA00', '#005500'],
	// 	['#00FFFF', '#00AAAA', '#005555'],
	// 	['#0000FF', '#0000AA', '#000055'],
	// ],
	swatchesMaxHeight: 150,
};

const VColorFieldProps = ref({
	...colorPickerProps,
	appendIcon: undefined,
	appendInnerIcon: undefined,
	cardFieldWidth: false,
	cardOffsetX: 0,
	cardOffsetY: 5,
	cardPadding: 4,
	cardProps: {
		border: false,
		color: '',
		elevation: 5,
		loading: false,
		tag: 'div',
	},
	clearable: true,
	color: '',
	colorPickerProps: {
		dotSize: 30,
		// mode: 'hex',
		// modes: ['hex'],
		// showSwatches: true,
	},
	density: undefined,
	hint: undefined,
	hintAlign: undefined,
	iconHoverColor: undefined,
	iconSize: 'default',
	label: undefined,
	messages: undefined,
	// messages: 'This is a string message',
	// messages: ['This is a message', 'This is another message'],
	name: 'color',
	open: 'bottom left',
	persistentHint: true,
	persistentPlaceholder: false,
	pip: false,
	// pipBorder: 'none',
	// pipBorderRadius: '50%',
	pipIcon: undefined,
	pipSlot: undefined,
	placeholder: 'Select Color',
	prependIcon: undefined,
	prependInnerIcon: undefined,
	readonly: undefined,
	readonlyInput: undefined,
	required: false,
	theme: 'dark',
	variant: 'filled',
});
</script>
