import { handleDecreaseQuantity } from './helpers';
import { useGlobalStoreContext, reducerActions, GlobalStoreContextType } from '../../providers';

export default function DecreaseQuantityButton(props: {
    listId: string,
    productId: string,
}): JSX.Element {
    const { dispatch }: GlobalStoreContextType = useGlobalStoreContext();

    const decreaseQuantity = async (): Promise<void> => await handleDecreaseQuantity({
        listId: props.listId,
        productId: props.productId,
        context: {
            dispatch,
            actions: reducerActions
        }
    });

    return (
        <button
            className='List-count-button decrease'
            onClick={decreaseQuantity}
        >
            <p>-</p>
        </button>
    );
}