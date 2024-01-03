import { TextEncoder } from "node:util";
global.TextEncoder = TextEncoder;
// eslint-disable-next-line import/first
import { setupServer } from "msw/node";
// eslint-disable-next-line import/first
import handlers from "./handlers";

export const server = setupServer(...handlers);
