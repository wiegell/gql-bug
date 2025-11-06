import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Droid = HasId & {
  __typename?: 'Droid';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  primaryFunction: Scalars['String']['output'];
};

export type Fruit = HasId & {
  __typename?: 'Fruit';
  id: Scalars['ID']['output'];
  taste: Scalars['String']['output'];
};

export type HasId = {
  id: Scalars['ID']['output'];
};

export type Hat = HasId & {
  __typename?: 'Hat';
  id: Scalars['ID']['output'];
  taste: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  character?: Maybe<HasId>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID']['input'];
};

export type GetHasIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHasIdQuery = { __typename?: 'Query', character?:
    | { __typename?: 'Droid', id: string, primaryFunction: string }
    | { __typename?: 'Fruit', id: string, taste: string }
    | { __typename?: 'Hat' }
   | null };

export type DroidFragmentFragment = { __typename?: 'Droid', id: string, primaryFunction: string };

export type FruitFragmentFragment = { __typename?: 'Fruit', id: string, taste: string };

export const DroidFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DroidFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Droid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"primaryFunction"}}]}}]} as unknown as DocumentNode<DroidFragmentFragment, unknown>;
export const FruitFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FruitFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fruit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"taste"}}]}}]} as unknown as DocumentNode<FruitFragmentFragment, unknown>;
export const GetHasIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHasId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"character"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"R2-D2","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Droid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DroidFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fruit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FruitFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DroidFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Droid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"primaryFunction"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FruitFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fruit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"taste"}}]}}]} as unknown as DocumentNode<GetHasIdQuery, GetHasIdQueryVariables>;