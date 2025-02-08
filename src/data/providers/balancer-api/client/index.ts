import { ChainId } from '../../../../utils';

export class BalancerApiClient {
    apiUrl: string;
    chainId: ChainId;
    constructor(apiUrl: string, chainId: ChainId) {
        this.apiUrl = apiUrl;
        this.chainId = chainId;
    }

    async fetch(requestQuery: {
        operationName?: string;
        query: string;
        variables?: any;
    }) {
        const headers = {
            'Content-Type': 'application/json',
            ChainId: this.chainId.toString(),
        };

        if (process.env.BEX_API_KEY) {
            headers['x-api-key'] = process.env.BEX_API_KEY;
        }

        const response = await fetch(this.apiUrl, {
            method: 'post',
            body: JSON.stringify(requestQuery),
            headers,
        });
        return response.json();
    }
}
