import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file wallet.proto.
 */
export declare const file_wallet: GenFile;
/**
 * Request to retrieve a single, specific wallet by its unique identifier.
 *
 * @generated from message pb.GetWalletRequest
 */
export type GetWalletRequest = Message<"pb.GetWalletRequest"> & {
    /**
     * The unique ID of the wallet to retrieve.
     *
     * @generated from field: string wallet_id = 1;
     */
    walletId: string;
};
/**
 * Describes the message pb.GetWalletRequest.
 * Use `create(GetWalletRequestSchema)` to create a new message.
 */
export declare const GetWalletRequestSchema: GenMessage<GetWalletRequest>;
/**
 * Response containing the detailed information about a single wallet.
 *
 * @generated from message pb.GetWalletResponse
 */
export type GetWalletResponse = Message<"pb.GetWalletResponse"> & {
    /**
     * The unique ID of the wallet.
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Indicates if this is the user's primary wallet.
     *
     * @generated from field: bool is_default = 2;
     */
    isDefault: boolean;
    /**
     * User-defined name for the wallet (e.g., "Savings", "Trading").
     *
     * @generated from field: string wallet_name = 3;
     */
    walletName: string;
    /**
     * Map of address type (f1, f4, 0x) to its address (value).
     *
     * @generated from field: map<string, string> addresses = 4;
     */
    addresses: {
        [key: string]: string;
    };
    /**
     * Use a string for financial amounts to prevent floating-point inaccuracies.
     *
     * @generated from field: string balance = 5;
     */
    balance: string;
    /**
     * Timestamp when the wallet was created.
     *
     * @generated from field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
};
/**
 * Describes the message pb.GetWalletResponse.
 * Use `create(GetWalletResponseSchema)` to create a new message.
 */
export declare const GetWalletResponseSchema: GenMessage<GetWalletResponse>;
/**
 * Request to retrieve all wallets associated with the authenticated user.
 *
 * @generated from message pb.GetWalletsRequest
 */
export type GetWalletsRequest = Message<"pb.GetWalletsRequest"> & {};
/**
 * Describes the message pb.GetWalletsRequest.
 * Use `create(GetWalletsRequestSchema)` to create a new message.
 */
export declare const GetWalletsRequestSchema: GenMessage<GetWalletsRequest>;
/**
 * Response containing a list of all wallets and the account lock status.
 *
 * @generated from message pb.GetWalletsResponse
 */
export type GetWalletsResponse = Message<"pb.GetWalletsResponse"> & {
    /**
     * Indicates if the user's wallet system is locked (requires passphrase).
     *
     * @generated from field: bool is_locked = 1;
     */
    isLocked: boolean;
    /**
     * The list of all retrieved wallets.
     *
     * @generated from field: repeated pb.GetWalletResponse wallets = 2;
     */
    wallets: GetWalletResponse[];
};
/**
 * Describes the message pb.GetWalletsResponse.
 * Use `create(GetWalletsResponseSchema)` to create a new message.
 */
export declare const GetWalletsResponseSchema: GenMessage<GetWalletsResponse>;
/**
 * Request to create a new wallet.
 *
 * @generated from message pb.CreateWalletRequest
 */
export type CreateWalletRequest = Message<"pb.CreateWalletRequest"> & {
    /**
     * The initial name for the new wallet.
     *
     * @generated from field: string wallet_name = 1;
     */
    walletName: string;
    /**
     * Optional passphrase for initial encryption/unlock.
     *
     * @generated from field: optional string passphrase = 2;
     */
    passphrase?: string;
};
/**
 * Describes the message pb.CreateWalletRequest.
 * Use `create(CreateWalletRequestSchema)` to create a new message.
 */
export declare const CreateWalletRequestSchema: GenMessage<CreateWalletRequest>;
/**
 * Response returning the details of the newly created wallet.
 *
 * @generated from message pb.CreateWalletResponse
 */
export type CreateWalletResponse = Message<"pb.CreateWalletResponse"> & {
    /**
     * @generated from field: pb.GetWalletResponse wallet = 1;
     */
    wallet?: GetWalletResponse;
};
/**
 * Describes the message pb.CreateWalletResponse.
 * Use `create(CreateWalletResponseSchema)` to create a new message.
 */
export declare const CreateWalletResponseSchema: GenMessage<CreateWalletResponse>;
/**
 * Request to update metadata for an existing wallet.
 *
 * @generated from message pb.UpdateWalletRequest
 */
export type UpdateWalletRequest = Message<"pb.UpdateWalletRequest"> & {
    /**
     * The ID of the wallet to modify.
     *
     * @generated from field: string wallet_id = 1;
     */
    walletId: string;
    /**
     * Optional: New name for the wallet.
     *
     * @generated from field: optional string wallet_name = 2;
     */
    walletName?: string;
    /**
     * Optional: Set this wallet as the user's new default.
     *
     * @generated from field: optional bool set_default = 3;
     */
    setDefault?: boolean;
};
/**
 * Describes the message pb.UpdateWalletRequest.
 * Use `create(UpdateWalletRequestSchema)` to create a new message.
 */
export declare const UpdateWalletRequestSchema: GenMessage<UpdateWalletRequest>;
/**
 * Response returning the updated wallet details.
 *
 * @generated from message pb.UpdateWalletResponse
 */
export type UpdateWalletResponse = Message<"pb.UpdateWalletResponse"> & {
    /**
     * @generated from field: pb.GetWalletResponse wallet = 1;
     */
    wallet?: GetWalletResponse;
};
/**
 * Describes the message pb.UpdateWalletResponse.
 * Use `create(UpdateWalletResponseSchema)` to create a new message.
 */
export declare const UpdateWalletResponseSchema: GenMessage<UpdateWalletResponse>;
/**
 * Request to delete or archive a wallet.
 *
 * @generated from message pb.DeleteWalletRequest
 */
export type DeleteWalletRequest = Message<"pb.DeleteWalletRequest"> & {
    /**
     * The ID of the wallet to delete.
     *
     * @generated from field: string wallet_id = 1;
     */
    walletId: string;
};
/**
 * Describes the message pb.DeleteWalletRequest.
 * Use `create(DeleteWalletRequestSchema)` to create a new message.
 */
export declare const DeleteWalletRequestSchema: GenMessage<DeleteWalletRequest>;
/**
 * Response for deletion. Empty response signals success.
 *
 * @generated from message pb.DeleteWalletResponse
 */
export type DeleteWalletResponse = Message<"pb.DeleteWalletResponse"> & {};
/**
 * Describes the message pb.DeleteWalletResponse.
 * Use `create(DeleteWalletResponseSchema)` to create a new message.
 */
export declare const DeleteWalletResponseSchema: GenMessage<DeleteWalletResponse>;
/**
 * The primary service interface for managing the user's wallet portfolio.
 *
 * @generated from service pb.WalletService
 */
export declare const WalletService: GenService<{
    /**
     * Retrieves the detailed information for a single wallet.
     *
     * @generated from rpc pb.WalletService.GetWallet
     */
    getWallet: {
        methodKind: "unary";
        input: typeof GetWalletRequestSchema;
        output: typeof GetWalletResponseSchema;
    };
    /**
     * Retrieves a list of all wallets belonging to the user.
     *
     * @generated from rpc pb.WalletService.GetWallets
     */
    getWallets: {
        methodKind: "unary";
        input: typeof GetWalletsRequestSchema;
        output: typeof GetWalletsResponseSchema;
    };
    /**
     * Creates a new cryptographic wallet and saves its metadata.
     *
     * @generated from rpc pb.WalletService.CreateWallet
     */
    createWallet: {
        methodKind: "unary";
        input: typeof CreateWalletRequestSchema;
        output: typeof CreateWalletResponseSchema;
    };
    /**
     * Updates mutable metadata associated with a wallet (name, default status).
     *
     * @generated from rpc pb.WalletService.UpdateWallet
     */
    updateWallet: {
        methodKind: "unary";
        input: typeof UpdateWalletRequestSchema;
        output: typeof UpdateWalletResponseSchema;
    };
    /**
     * Permanently deletes or archives a wallet record.
     *
     * @generated from rpc pb.WalletService.DeleteWallet
     */
    deleteWallet: {
        methodKind: "unary";
        input: typeof DeleteWalletRequestSchema;
        output: typeof DeleteWalletResponseSchema;
    };
}>;
//# sourceMappingURL=wallet_pb.d.ts.map