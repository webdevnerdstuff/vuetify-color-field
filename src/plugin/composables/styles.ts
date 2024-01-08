import { CSSProperties } from 'vue';
import {
	UsePipStyle,
} from '@/plugin/types';


// ------------------------------------------------ Pip //
export const usePipStyles: UsePipStyle = (options) => {
	const { pipBorder, pipBorderRadius } = options;

	const styles: {
		backgroundColor: string;
		border?: string;
		borderRadius?: string;
		overflow: string;
	} = {
		backgroundColor: pipBorder && pipBorder !== 'none' ? 'rgb(var(--v-theme-on-surface))' : 'transparent',
		overflow: 'hidden',
	};

	if (pipBorder && pipBorder !== 'none') {
		styles.border = pipBorder;
		styles.borderRadius = pipBorderRadius;
	}

	return styles as CSSProperties;
};
