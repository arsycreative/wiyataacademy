/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "midtrans-client" {
  export interface MidtransConfig {
    isProduction?: boolean;
    serverKey: string;
    clientKey?: string;
  }

  export interface SnapTransactionParams {
    transaction_details: {
      order_id: string;
      gross_amount: number;
    };
    item_details?: Array<{
      id: string;
      price: number;
      quantity: number;
      name: string;
      brand?: string;
      category?: string;
      merchant_name?: string;
    }>;
    customer_details?: {
      first_name?: string;
      last_name?: string;
      email?: string;
      phone?: string;
      billing_address?: Record<string, string>;
      shipping_address?: Record<string, string>;
    };
    enabled_payments?: string[];
    credit_card?: {
      secure?: boolean;
      bank?: string;
      channel?: string;
      installment?: {
        required?: boolean;
        terms?: Record<string, number[]>;
      };
    };
    callbacks?: {
      finish?: string;
      error?: string;
      pending?: string;
    };
    expiry?: {
      start_time?: string;
      unit?: "minute" | "day" | "hour";
      duration?: number;
    };
    custom_field1?: string;
    custom_field2?: string;
    custom_field3?: string;
  }

  export interface SnapTransactionResponse {
    token: string;
    redirect_url: string;
  }

  export class Snap {
    constructor(options: MidtransConfig);
    createTransaction(parameter: SnapTransactionParams): Promise<SnapTransactionResponse>;
    createTransactionToken(parameter: SnapTransactionParams): Promise<string>;
    createTransactionRedirectUrl(parameter: SnapTransactionParams): Promise<string>;
    apiConfig: {
      set(options: MidtransConfig): void;
      get(): MidtransConfig;
    };
    transaction: {
      status(orderId: string): Promise<any>;
      approve(orderId: string): Promise<any>;
      cancel(orderId: string): Promise<any>;
      expire(orderId: string): Promise<any>;
      refund(orderId: string, parameter?: any): Promise<any>;
    };
  }

  export class CoreApi {
    constructor(options: MidtransConfig);
    charge(parameter: any): Promise<any>;
    apiConfig: {
      set(options: MidtransConfig): void;
      get(): MidtransConfig;
    };
    transaction: {
      status(orderId: string): Promise<any>;
      approve(orderId: string): Promise<any>;
      cancel(orderId: string): Promise<any>;
      expire(orderId: string): Promise<any>;
      refund(orderId: string, parameter?: any): Promise<any>;
    };
  }

  const midtransClient: {
    Snap: typeof Snap;
    CoreApi: typeof CoreApi;
  };

  export default midtransClient;
}

// Global Window augmentation for Midtrans Snap.js script
declare global {
  interface Window {
    snap?: {
      pay(
        token: string,
        options?: {
          onSuccess?: (result: any) => void;
          onPending?: (result: any) => void;
          onError?: (result: any) => void;
          onClose?: () => void;
        },
      ): void;
      embed(
        token: string,
        options: {
          embedId: string;
          onSuccess?: (result: any) => void;
          onPending?: (result: any) => void;
          onError?: (result: any) => void;
          onClose?: () => void;
        },
      ): void;
    };
  }
}
