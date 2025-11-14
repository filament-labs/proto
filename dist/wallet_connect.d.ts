/**
 * The primary service interface for managing the user's wallet portfolio.
 *
 * @generated from service pb.WalletService
 */
export declare const WalletService: {
    readonly typeName: "pb.WalletService";
    readonly methods: {
        /**
         * Retrieves the detailed information for a single wallet.
         *
         * @generated from rpc pb.WalletService.GetWallet
         */
        readonly getWallet: {
            readonly name: "GetWallet";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * Retrieves a list of all wallets belonging to the user.
         *
         * @generated from rpc pb.WalletService.GetWallets
         */
        readonly getWallets: {
            readonly name: "GetWallets";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * Creates a new cryptographic wallet and saves its metadata.
         *
         * @generated from rpc pb.WalletService.CreateWallet
         */
        readonly createWallet: {
            readonly name: "CreateWallet";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * Updates mutable metadata associated with a wallet (name, default status).
         *
         * @generated from rpc pb.WalletService.UpdateWallet
         */
        readonly updateWallet: {
            readonly name: "UpdateWallet";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
        /**
         * Permanently deletes or archives a wallet record.
         *
         * @generated from rpc pb.WalletService.DeleteWallet
         */
        readonly deleteWallet: {
            readonly name: "DeleteWallet";
            readonly I: any;
            readonly O: any;
            readonly kind: any;
        };
    };
};
//# sourceMappingURL=wallet_connect.d.ts.map