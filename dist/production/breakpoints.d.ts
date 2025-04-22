export type Breakpoints<T> = {
    sm?: T;
    md?: T;
    lg?: T;
};
export declare function mapBreakpointValues<Old extends string | undefined, New>(breakpoints: Old | Breakpoints<Old>, callback: (value: Old | undefined) => New): Breakpoints<New> | New;
