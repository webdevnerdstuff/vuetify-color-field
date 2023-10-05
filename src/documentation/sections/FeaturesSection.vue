<template>
	<v-row>
		<v-col
			id="features"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#features"
				>#</a>
				Features
			</h2>
		</v-col>

		<v-col cols="12">
			<v-list>
				<v-list-subheader color="secondary">
					<h3>Stack</h3>
				</v-list-subheader>

				<v-list-item
					href="https://vuejs.org/"
					target="_blank"
				>
					<template #prepend>
						<v-icon icon="mdi:mdi-vuejs"></v-icon>
					</template>

					Vue 3 - Using Composition API
				</v-list-item>

				<v-list-item
					href="https://vuetifyjs.com/en/"
					target="_blank"
				>
					<template #prepend>
						<v-icon icon="$vuetify"></v-icon>
					</template>

					Vuetify 3
				</v-list-item>

				<v-list-item
					href="https://www.typescriptlang.org/"
					target="_blank"
				>
					<template #prepend>
						<v-icon icon="mdi:mdi-language-typescript"></v-icon>
					</template>

					Typescript
				</v-list-item>

				<v-list-subheader color="secondary">
					<h3>Build Tools</h3>
				</v-list-subheader>

				<v-list-item
					href="https://vuetifyjs.com/en/"
					target="_blank"
				>
					<template #prepend>
						<v-img
							class="me-8"
							src="https://vitejs.dev/logo.svg"
							width="24"
						></v-img>
					</template>

					Vite
				</v-list-item>

				<v-list-item
					href="https://eslint.org/"
					target="_blank"
				>
					<template #prepend>
						<v-icon icon="mdi:mdi-eslint"></v-icon>
					</template>

					ESLint
				</v-list-item>

				<v-list-item
					href="https://stylelint.io/"
					target="_blank"
				>
					<template #prepend>
						<v-img
							class="me-8"
							src="https://www.google.com/s2/favicons?sz=64&domain=stylelint.io"
							width="24"
						></v-img>
					</template>

					Stylelint
				</v-list-item>

				<v-list-item
					href="https://sass-lang.com/"
					target="_blank"
				>
					<template #prepend>
						<v-icon icon="mdi:mdi-sass"></v-icon>
					</template>

					SCSS
				</v-list-item>

				<v-list-item
					href="https://typicode.github.io/husky/"
					target="_blank"
				>
					<template #prepend>
						<span
							class="me-8"
							style="font-size: 24px; width: 24px;"
						>
							🐶
						</span>
					</template>

					Husky
				</v-list-item>

				<v-list-item
					href="https://github.com/antfu/unplugin-auto-import"
					target="_blank"
				>
					<template #prepend>
						<v-icon icon="mdi:mdi-github"></v-icon>
					</template>

					unplugin-auto-import
				</v-list-item>

				<v-list-item
					href="https://miragejs.com/"
					target="_blank"
				>
					<template #prepend>
						<v-img
							class="me-8"
							src="https://miragejs.com/favicon.svg"
							width="24"
						></v-img>
					</template>

					Mirage JS - To use as a mock server if you need (database included in playground configs)
				</v-list-item>

				<v-list-item>
					<template #prepend>
						<v-icon icon="mdi:mdi-seesaw"></v-icon>
					</template>

					Playground Page - To test out the component when building and/or to help users test out the component
				</v-list-item>

				<v-list-subheader color="secondary">
					<h3>Documentation Site</h3>
				</v-list-subheader>

				<v-list-item>
					<template #prepend>
						<v-icon icon="mdi:mdi-check"></v-icon>
					</template>

					Prebuilt layout using Vuetify
				</v-list-item>

				<v-list-item>
					<template #prepend>
						<v-icon icon="mdi:mdi-check"></v-icon>
					</template>

					Multiple section templates
				</v-list-item>

				<v-list-item>
					<template #prepend>
						<v-icon icon="mdi:mdi-theme-light-dark"></v-icon>
					</template>

					Light &amp; Dark Mode
				</v-list-item>

				<v-list-item
					href="https://pinia.esm.dev/"
					target="_blank"
				>
					<template #prepend>
						<v-img
							class="me-8"
							max-height="24"
							src="https://pinia.vuejs.org/logo.svg"
							width="24"
						></v-img>
					</template>

					Pinia
				</v-list-item>

				<v-list-item
					href="https://webdevnerdstuff.github.io/vue3-code-block/"
					target="_blank"
				>
					<template #prepend>
						<v-icon icon="mdi:mdi-code-braces-box"></v-icon>
					</template>

					Vue 3 Code Block - By WebDevNerdStuff
				</v-list-item>

				<v-list-item
					href="https://pictogrammers.com/library/mdi/"
					target="_blank"
				>
					<template #prepend>
						<v-icon icon="mdi:mdi-vector-square"></v-icon>
					</template>

					MDI Font Icons Support
				</v-list-item>

				<v-list-item
					href="https://fontawesome.com/icons"
					target="_blank"
				>
					<template #prepend>
						<v-icon icon="mdi:mdi-font-awesome"></v-icon>
					</template>

					FontAwesome Icons Support
				</v-list-item>

				<v-list-item
					href="https://pages.github.com/"
					target="_blank"
				>
					<template #prepend>
						<v-icon icon="mdi:mdi-github"></v-icon>
					</template>

					Support to publish to GitHub Pages
				</v-list-item>

				<v-list-subheader color="secondary">
					<h3>GitHub</h3>
				</v-list-subheader>

				<v-list-item
					href="https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository"
					target="_blank"
				>
					<template #prepend>
						<v-icon icon="mdi:mdi-bug"></v-icon>
					</template>

					Issue Template
				</v-list-item>

				<v-list-item
					href="https://github.com/features/actions"
					target="_blank"
				>
					<template #prepend>
						<v-icon icon="mdi:mdi-github"></v-icon>
					</template>

					GitHub Pages Action - Used to build and publish the documentation site to GitHub Pages. Make sure to update
					email and user name in `.github/workflows/main.yml`
				</v-list-item>

				<v-list-item
					href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository"
					target="_blank"
				>
					<template #prepend>
						<v-icon icon="mdi:mdi-gift"></v-icon>
					</template>

					Funding Template
				</v-list-item>
			</v-list>
		</v-col>

		<v-col cols="12">
			<v-alert icon="$warning">
				Please note that this component is using the experimental vue feature <a
					href="defineModel"
					target="_blank"
				>defineModel</a>. You do not need to use this if you choose not to.
			</v-alert>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';


const classes = inject('classes');
</script>
