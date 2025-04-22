function mapBreakpointValues(breakpoints, callback) {
  if (typeof breakpoints !== 'object') {
    return callback(breakpoints);
  }
  const {
    sm,
    md,
    lg
  } = breakpoints;
  if (sm === md && md === lg) {
    return callback(sm);
  }
  return Object.entries(breakpoints).reduce((breakpoints, [breakpoint, value]) => {
    breakpoints[breakpoint] = callback(value);
    return breakpoints;
  }, {});
}

export { mapBreakpointValues };
//# sourceMappingURL=breakpoints.js.map
