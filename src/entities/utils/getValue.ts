import { NATIVE_ASSETS } from '@/utils';
import { TokenAmount } from '../tokenAmount';
import { Slippage } from '../slippage';

export const getValue = (
    amountsIn: TokenAmount[],
    wethIsEth: boolean,
    slippage?: Slippage,
): bigint => {
    let value = 0n;
    if (wethIsEth) {
        value =
            amountsIn.find((a) =>
                a.token.isUnderlyingEqual(NATIVE_ASSETS[a.token.chainId]),
            )?.amount ?? 0n;
    }
    if (slippage) {
        return slippage.applyTo(value);
    }
    return value;
};
