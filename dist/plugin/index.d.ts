import type { App } from 'vue';
import type { GlobalOptions } from './types';
import './styles/main.scss';
import VColorField from './VColorField.vue';
export declare const globalOptions: unique symbol;
export declare function createVColorField(options?: GlobalOptions): {
    install: (app: App) => void;
};
export default VColorField;
export { VColorField, };
