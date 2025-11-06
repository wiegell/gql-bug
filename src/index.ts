import type { OperationDefinitionNode } from 'graphql';
import { GetHasIdDocument, GetHasIdQuery } from './generated/graphql';

const operationDefinition = GetHasIdDocument.definitions.find(
  (definition): definition is OperationDefinitionNode =>
    definition.kind === 'OperationDefinition'
);

type CharacterResult = GetHasIdQuery['character'];

console.log('GetHasId operation:', operationDefinition?.name?.value ?? 'unknown');
console.log('Result type example:', null as CharacterResult);
