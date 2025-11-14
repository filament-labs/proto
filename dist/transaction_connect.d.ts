/**
 * @generated from service pb.TransactionService
 */
export declare const TransactionService: {
    readonly typeName: "pb.TransactionService";
    readonly methods: {
        /**
         * Initiate a new transaction (e.g., broadcasting to the network)
         *
         * @generated from rpc pb.TransactionService.SendTransaction
         */
        readonly sendTransaction: {
            readonly name: "SendTransaction";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * Retrieve details for a specific transaction
         *
         * @generated from rpc pb.TransactionService.GetTransaction
         */
        readonly getTransaction: {
            readonly name: "GetTransaction";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * Retrieve a list of transactions, typically for a specific wallet
         *
         * @generated from rpc pb.TransactionService.ListTransactions
         */
        readonly listTransactions: {
            readonly name: "ListTransactions";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * Streams transaction updates from the blockchain in real-time
         *
         * @generated from rpc pb.TransactionService.StreamWalletTransactions
         */
        readonly streamWalletTransactions: {
            readonly name: "StreamWalletTransactions";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
    };
};
//# sourceMappingURL=transaction_connect.d.ts.map