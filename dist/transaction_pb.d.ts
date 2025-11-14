import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file transaction.proto.
 */
export declare const file_transaction: GenFile;
/**
 * @generated from message pb.Transaction
 */
export type Transaction = Message<"pb.Transaction"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string wallet_id = 2;
     */
    walletId: string;
    /**
     * @generated from field: pb.Transaction.TransactionType type = 3;
     */
    type: Transaction_TransactionType;
    /**
     * @generated from field: pb.Transaction.TransactionStatus status = 4;
     */
    status: Transaction_TransactionStatus;
    /**
     * Use string for amounts to prevent floating-point inaccuracies
     *
     * @generated from field: string amount = 5;
     */
    amount: string;
    /**
     * @generated from field: string currency = 6;
     */
    currency: string;
    /**
     * @generated from field: string source_address = 7;
     */
    sourceAddress: string;
    /**
     * @generated from field: string target_address = 8;
     */
    targetAddress: string;
    /**
     * @generated from field: string fee_amount = 9;
     */
    feeAmount: string;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 10;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp confirmed_at = 11;
     */
    confirmedAt?: Timestamp;
};
/**
 * Describes the message pb.Transaction.
 * Use `create(TransactionSchema)` to create a new message.
 */
export declare const TransactionSchema: GenMessage<Transaction>;
/**
 * @generated from enum pb.Transaction.TransactionType
 */
export declare enum Transaction_TransactionType {
    /**
     * @generated from enum value: TRANSACTION_TYPE_UNSPECIFIED = 0;
     */
    TRANSACTION_TYPE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: SEND = 1;
     */
    SEND = 1,
    /**
     * @generated from enum value: RECEIVE = 2;
     */
    RECEIVE = 2,
    /**
     * @generated from enum value: FEE = 3;
     */
    FEE = 3,
    /**
     * moving between user wallets
     *
     * @generated from enum value: INTERNAL = 4;
     */
    INTERNAL = 4
}
/**
 * Describes the enum pb.Transaction.TransactionType.
 */
export declare const Transaction_TransactionTypeSchema: GenEnum<Transaction_TransactionType>;
/**
 * @generated from enum pb.Transaction.TransactionStatus
 */
export declare enum Transaction_TransactionStatus {
    /**
     * @generated from enum value: TRANSACTION_STATUS_UNSPECIFIED = 0;
     */
    TRANSACTION_STATUS_UNSPECIFIED = 0,
    /**
     * @generated from enum value: PENDING = 1;
     */
    PENDING = 1,
    /**
     * @generated from enum value: CONFIRMED = 2;
     */
    CONFIRMED = 2,
    /**
     * @generated from enum value: FAILED = 3;
     */
    FAILED = 3,
    /**
     * @generated from enum value: CANCELED = 4;
     */
    CANCELED = 4
}
/**
 * Describes the enum pb.Transaction.TransactionStatus.
 */
export declare const Transaction_TransactionStatusSchema: GenEnum<Transaction_TransactionStatus>;
/**
 * @generated from message pb.SendTransactionRequest
 */
export type SendTransactionRequest = Message<"pb.SendTransactionRequest"> & {
    /**
     * @generated from field: string source_wallet_id = 1;
     */
    sourceWalletId: string;
    /**
     * @generated from field: string target_address = 2;
     */
    targetAddress: string;
    /**
     * @generated from field: string amount = 3;
     */
    amount: string;
    /**
     * @generated from field: optional string note = 5;
     */
    note?: string;
};
/**
 * Describes the message pb.SendTransactionRequest.
 * Use `create(SendTransactionRequestSchema)` to create a new message.
 */
export declare const SendTransactionRequestSchema: GenMessage<SendTransactionRequest>;
/**
 * @generated from message pb.SendTransactionResponse
 */
export type SendTransactionResponse = Message<"pb.SendTransactionResponse"> & {
    /**
     * @generated from field: pb.Transaction transaction = 1;
     */
    transaction?: Transaction;
};
/**
 * Describes the message pb.SendTransactionResponse.
 * Use `create(SendTransactionResponseSchema)` to create a new message.
 */
export declare const SendTransactionResponseSchema: GenMessage<SendTransactionResponse>;
/**
 * @generated from message pb.GetTransactionRequest
 */
export type GetTransactionRequest = Message<"pb.GetTransactionRequest"> & {
    /**
     * @generated from field: string transaction_id = 1;
     */
    transactionId: string;
};
/**
 * Describes the message pb.GetTransactionRequest.
 * Use `create(GetTransactionRequestSchema)` to create a new message.
 */
export declare const GetTransactionRequestSchema: GenMessage<GetTransactionRequest>;
/**
 * @generated from message pb.GetTransactionResponse
 */
export type GetTransactionResponse = Message<"pb.GetTransactionResponse"> & {
    /**
     * @generated from field: pb.Transaction transaction = 1;
     */
    transaction?: Transaction;
};
/**
 * Describes the message pb.GetTransactionResponse.
 * Use `create(GetTransactionResponseSchema)` to create a new message.
 */
export declare const GetTransactionResponseSchema: GenMessage<GetTransactionResponse>;
/**
 * @generated from message pb.ListTransactionsRequest
 */
export type ListTransactionsRequest = Message<"pb.ListTransactionsRequest"> & {
    /**
     * @generated from field: string wallet_id = 1;
     */
    walletId: string;
    /**
     * Optional filters
     *
     * @generated from field: optional pb.Transaction.TransactionType type_filter = 2;
     */
    typeFilter?: Transaction_TransactionType;
    /**
     * @generated from field: repeated pb.Transaction.TransactionStatus status_filter = 3;
     */
    statusFilter: Transaction_TransactionStatus[];
    /**
     * Pagination fields
     *
     * @generated from field: int32 page_size = 4;
     */
    pageSize: number;
    /**
     * @generated from field: string page = 5;
     */
    page: string;
};
/**
 * Describes the message pb.ListTransactionsRequest.
 * Use `create(ListTransactionsRequestSchema)` to create a new message.
 */
export declare const ListTransactionsRequestSchema: GenMessage<ListTransactionsRequest>;
/**
 * @generated from message pb.ListTransactionsResponse
 */
export type ListTransactionsResponse = Message<"pb.ListTransactionsResponse"> & {
    /**
     * @generated from field: repeated pb.Transaction transactions = 1;
     */
    transactions: Transaction[];
    /**
     * @generated from field: string next_page = 2;
     */
    nextPage: string;
};
/**
 * Describes the message pb.ListTransactionsResponse.
 * Use `create(ListTransactionsResponseSchema)` to create a new message.
 */
export declare const ListTransactionsResponseSchema: GenMessage<ListTransactionsResponse>;
/**
 * @generated from message pb.StreamWalletTransactionsRequest
 */
export type StreamWalletTransactionsRequest = Message<"pb.StreamWalletTransactionsRequest"> & {
    /**
     * List of wallet IDs to listen for. An empty list might mean 'all wallets associated with the user'.
     *
     * @generated from field: repeated string wallet_ids = 1;
     */
    walletIds: string[];
};
/**
 * Describes the message pb.StreamWalletTransactionsRequest.
 * Use `create(StreamWalletTransactionsRequestSchema)` to create a new message.
 */
export declare const StreamWalletTransactionsRequestSchema: GenMessage<StreamWalletTransactionsRequest>;
/**
 * @generated from message pb.StreamWalletTransactionsResponse
 */
export type StreamWalletTransactionsResponse = Message<"pb.StreamWalletTransactionsResponse"> & {
    /**
     * @generated from field: pb.Transaction transaction = 1;
     */
    transaction?: Transaction;
};
/**
 * Describes the message pb.StreamWalletTransactionsResponse.
 * Use `create(StreamWalletTransactionsResponseSchema)` to create a new message.
 */
export declare const StreamWalletTransactionsResponseSchema: GenMessage<StreamWalletTransactionsResponse>;
/**
 * @generated from service pb.TransactionService
 */
export declare const TransactionService: GenService<{
    /**
     * Initiate a new transaction (e.g., broadcasting to the network)
     *
     * @generated from rpc pb.TransactionService.SendTransaction
     */
    sendTransaction: {
        methodKind: "unary";
        input: typeof SendTransactionRequestSchema;
        output: typeof SendTransactionResponseSchema;
    };
    /**
     * Retrieve details for a specific transaction
     *
     * @generated from rpc pb.TransactionService.GetTransaction
     */
    getTransaction: {
        methodKind: "unary";
        input: typeof GetTransactionRequestSchema;
        output: typeof GetTransactionResponseSchema;
    };
    /**
     * Retrieve a list of transactions, typically for a specific wallet
     *
     * @generated from rpc pb.TransactionService.ListTransactions
     */
    listTransactions: {
        methodKind: "unary";
        input: typeof ListTransactionsRequestSchema;
        output: typeof ListTransactionsResponseSchema;
    };
    /**
     * Streams transaction updates from the blockchain in real-time
     *
     * @generated from rpc pb.TransactionService.StreamWalletTransactions
     */
    streamWalletTransactions: {
        methodKind: "server_streaming";
        input: typeof StreamWalletTransactionsRequestSchema;
        output: typeof StreamWalletTransactionsResponseSchema;
    };
}>;
//# sourceMappingURL=transaction_pb.d.ts.map