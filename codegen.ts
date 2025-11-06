import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'graphql/spec.graphql',
  documents: 'graphql/queries/**/*.graphql',
  generates: {
    './src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typed-document-node'
      ]
    }
  }
};

export default config;
