const theme = {
  black: '#000000',
  white: '#FFFFFF',
  lightGrey: '#B0B0B0',
  middleGrey: '#717171',
  deepGrey: '#222222',
  hoverGrey: '#DBDBDB',

  flex: (justify = 'space-between', align = 'center') => `
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`,
};

export default theme;
