import { GetHasIdDocument } from './generated/graphql';
export const getHasIdQueryDocument = GetHasIdDocument;
export const sampleResult = {
    __typename: 'Query',
    character: {
        __typename: 'Droid',
        id: 'R2-D2',
        primaryFunction: 'Astromech'
    }
};
export function extractId(result) {
    return result.character?.id ?? null;
}
