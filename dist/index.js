import { GetHasIdDocument } from './generated/graphql';
const operationDefinition = GetHasIdDocument.definitions.find((definition) => definition.kind === 'OperationDefinition');
console.log('GetHasId operation:', operationDefinition?.name?.value ?? 'unknown');
console.log('Result type example:', null);
