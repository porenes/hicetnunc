import {
  DAppClient,
  DAppClientOptions,
  RequestPermissionInput,
  PermissionScope,
} from '@airgap/beacon-sdk'
import {
  WalletDelegateParams,
  WalletOriginateParams,
  WalletProvider,
  WalletTransferParams,
} from '@taquito/taquito'

export async function ledgerProvider() {
  let tk = new TezosToolkit('https://hangzhounet.api.tez.ie')

  // client: DAppClient;
  // constructor(options: DAppClientOptions);
  // private validateRequiredScopesOrFail;
  // requestPermissions(request?: RequestPermissionInput): Promise<void>;
  let getPKH = () => {}
  // mapTransferParamsToWalletParams(params: () => Promise<WalletTransferParams>): Promise<any>;
  // mapOriginateParamsToWalletParams(params: () => Promise<WalletOriginateParams>): Promise<any>;
  // mapDelegateParamsToWalletParams(params: () => Promise<WalletDelegateParams>): Promise<any>;
  // formatParameters(params: any): any;
  // removeDefaultParams(params: WalletTransferParams | WalletOriginateParams | WalletDelegateParams, operatedParams: any): any;
  // sendOperations(params: any[]): Promise<string>;
  // /**
  //  *
  //  * @description Removes all beacon values from the storage. After using this method, this instance is no longer usable.
  //  * You will have to instanciate a new BeaconWallet.
  //  */
  // disconnect();
  // /**
  //  *
  //  * @description This method removes the active account from local storage by setting it to undefined.
  //  */
  // clearActiveAccount();
}
