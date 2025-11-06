import { GetHasIdQuery, HasId } from "./generated/graphql";

export const sampleResult: GetHasIdQuery = {
  __typename: "Query",
  character: {
    __typename: "Droid",
    id: "R2-D2",
    primaryFunction: "Astromech",
  },
};

export function someFunc(result: GetHasIdQuery) {
  const tmp: HasId = result;
}
