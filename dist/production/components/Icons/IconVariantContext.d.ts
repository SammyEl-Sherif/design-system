import { IconProps } from './Icon';
type VariantContext = {
    variantOverride: IconProps['variant'] | undefined;
    variantProvider: string;
} | Record<string, never>;
declare const IconVariantContext: import("react").Context<VariantContext>;
export declare function useIconVariantContext(variantPropValue?: IconProps['variant']): import("./Icon").Variants | import("../../breakpoints").Breakpoints<import("./Icon").Variants> | undefined;
export default IconVariantContext;
