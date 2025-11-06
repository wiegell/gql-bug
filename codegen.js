const config = {
    schema: 'graphql/spec.graphql',
    documents: 'graphql/spec.graphql',
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
