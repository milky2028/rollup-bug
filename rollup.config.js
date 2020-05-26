import ts from '@rollup/plugin-typescript';

export default ({ watch }) => {
  return [
    {
      input: {
        main: 'src/index.ts',
      },
      output: {
        dir: 'dist',
        format: 'esm',
      },
      plugins: [ts()],
    },
  ];
};
