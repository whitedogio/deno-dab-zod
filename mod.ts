import { z } from "zod";
import { AppIdentifier } from "./app_identifier.ts";
import { AppIntent } from "./app_intent.ts";
import { AppMetadata } from "./app_metadata.ts";
import { BroadcastRequest } from "./broadcast.ts";
import { Channel } from "./channel.ts";
import { ConnectedAgentsUpdate } from "./connected_agents_update.ts";
import { Context } from "./context.ts";
import { FindInstancesRequest, FindInstancesResponse } from "./find_instances.ts";
import { FindIntentRequest, FindIntentResponse } from "./find_intent.ts";
import { FindIntentsByContextRequest, FindIntentsByContextResponse } from "./find_intents_by_context.ts";
import { GetAppMetadataRequest, GetAppMetadataResponse } from "./get_app_metadata.ts";
import { Handshake, Hello } from "./hello_handshake.ts";
import { DesktopAgentMetadata, ImplementationMetadata } from "./implementation_metadata.ts";
import { IntentMetadata } from "./intent_metadata.ts";
import { IntentResolution } from "./intent_resolution.ts";
import { Metadata } from "./metadata.ts";
import { OpenRequest, OpenResponse } from "./open.ts";
import { RaiseIntentRequest, RaiseIntentResponse, RaiseIntentResultResponse } from "./raise_intent.ts";
import { Source } from "./source.ts";

export const parseJSON = (s: string) => messages.safeParse(JSON.parse(s));
export const parse = (s: Messages) => messages.safeParse(s);

export const messages = z.discriminatedUnion("type", [
  BroadcastRequest,
  ConnectedAgentsUpdate,
  FindInstancesRequest,
  FindInstancesResponse,
  FindIntentRequest,
  FindIntentResponse,
  FindIntentsByContextRequest,
  FindIntentsByContextResponse,
  GetAppMetadataRequest,
  GetAppMetadataResponse,
  Handshake,
  Hello,
  OpenRequest,
  OpenResponse,
  RaiseIntentRequest,
  RaiseIntentResponse,
  RaiseIntentResultResponse,
]);

export const requestMessages = z.discriminatedUnion("type", [
  BroadcastRequest,
  FindInstancesRequest,
  FindIntentRequest,
  FindIntentsByContextRequest,
  GetAppMetadataRequest,
  Handshake,
  OpenRequest,
  RaiseIntentRequest,
]);

export const responseMessages = z.discriminatedUnion("type", [
  ConnectedAgentsUpdate,
  FindInstancesResponse,
  FindIntentResponse,
  FindIntentsByContextResponse,
  GetAppMetadataResponse,
  OpenResponse,
  RaiseIntentResponse,
  RaiseIntentResultResponse,
]);

export type AppIdentifier = z.infer<typeof AppIdentifier>;
export type AppIntent = z.infer<typeof AppIntent>;
export type AppMetadata = z.infer<typeof AppMetadata>;
export type BroadcastRequest = z.infer<typeof BroadcastRequest>;
export type Channel = z.infer<typeof Channel>;
export type ConnectedAgentsUpdate = z.infer<typeof ConnectedAgentsUpdate>;
export type Context = z.infer<typeof Context>;
export type DesktopAgentMetadata = z.infer<typeof DesktopAgentMetadata>;
export type FindInstancesRequest = z.infer<typeof FindInstancesRequest>;
export type FindInstancesResponse = z.infer<typeof FindInstancesResponse>;
export type FindIntentRequest = z.infer<typeof FindIntentRequest>;
export type FindIntentResponse = z.infer<typeof FindIntentResponse>;
export type FindIntentsByContextRequest = z.infer<typeof FindIntentsByContextRequest>;
export type FindIntentsByContextResponse = z.infer<typeof FindIntentsByContextResponse>;
export type GetAppMetadataRequest = z.infer<typeof GetAppMetadataRequest>;
export type GetAppMetadataResponse = z.infer<typeof GetAppMetadataResponse>;
export type Handshake = z.infer<typeof Handshake>;
export type Hello = z.infer<typeof Hello>;
export type ImplementationMetadata = z.infer<typeof ImplementationMetadata>;
export type IntentMetadata = z.infer<typeof IntentMetadata>;
export type IntentResolution = z.infer<typeof IntentResolution>;
export type MessageMetadata = z.infer<typeof Metadata>;
export type OpenRequest = z.infer<typeof OpenRequest>;
export type OpenResponse = z.infer<typeof OpenResponse>;
export type RaiseIntentRequest = z.infer<typeof RaiseIntentRequest>;
export type RaiseIntentResponse = z.infer<typeof RaiseIntentResponse>;
export type RaiseIntentResultResponse = z.infer<typeof RaiseIntentResultResponse>;
export type Source = z.infer<typeof Source>;

export type Messages = z.infer<typeof messages>;
export type RequestMessages = z.infer<typeof requestMessages>;
export type ResponseMessages = z.infer<typeof responseMessages>;

export const requestResponseMap: Record<
  RequestMessages["type"],
  ResponseMessages["type"] | undefined
> = {
  broadcastRequest: undefined,
  findInstancesRequest: "findInstancesResponse",
  findIntentRequest: "findIntentResponse",
  findIntentsByContextRequest: "findIntentsByContextResponse",
  getAppMetadataRequest: "getAppMetadataResponse",
  handshake: "connectedAgentsUpdate",
  openRequest: "openResponse",
  raiseIntentRequest: "raiseIntentResponse",
};
