interface StateAttibutes {
    disabled?: boolean;
    hasError: boolean;
    isFieldFocused: boolean;
}
declare const getStateColors: ({ disabled, hasError, isFieldFocused }: StateAttibutes) => {
    border: "neutral-200" | "neutral-600" | "urgent-600" | "active-800";
    text: "neutral-600" | "active-800";
    background: "neutral-100" | "neutral-white";
};
export default getStateColors;
