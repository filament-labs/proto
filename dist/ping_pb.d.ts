import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file ping.proto.
 */
export declare const file_ping: GenFile;
/**
 * @generated from message pb.PingRequest
 */
export type PingRequest = Message<"pb.PingRequest"> & {};
/**
 * Describes the message pb.PingRequest.
 * Use `create(PingRequestSchema)` to create a new message.
 */
export declare const PingRequestSchema: GenMessage<PingRequest>;
/**
 * @generated from message pb.PingResponse
 */
export type PingResponse = Message<"pb.PingResponse"> & {
    /**
     * @generated from field: int64 timestamp = 1;
     */
    timestamp: bigint;
};
/**
 * Describes the message pb.PingResponse.
 * Use `create(PingResponseSchema)` to create a new message.
 */
export declare const PingResponseSchema: GenMessage<PingResponse>;
/**
 * @generated from service pb.PingService
 */
export declare const PingService: GenService<{
    /**
     * @generated from rpc pb.PingService.Ping
     */
    ping: {
        methodKind: "unary";
        input: typeof PingRequestSchema;
        output: typeof PingResponseSchema;
    };
}>;
//# sourceMappingURL=ping_pb.d.ts.map