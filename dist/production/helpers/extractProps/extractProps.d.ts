type ContainerStylePropNames = 'className' | 'style' | 'margin' | 'marginX' | 'marginY' | 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft';
declare const extractProps: <P extends Record<string, any>>(props: P) => [Pick<P, ContainerStylePropNames>, Omit<P, ContainerStylePropNames>];
export default extractProps;
