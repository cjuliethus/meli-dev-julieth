import {
    WrapperItemResult,
    ZonePicture,
    DescriptionZone,
    Price,
    Title,
    PrincipalInfo,
    City,
} from "./style";
import NumberFormat from "react-number-format";
import IconSmall from '../../assets/img/icons/envio-small.png'
import { useHistory } from "react-router-dom";


/**
 * Component: ItemResult
 * 
 * Description: This component it show a little summary from the product in the main result
 * 
 * @param {object} product 
 * 
 * Example usage:
 *    <ItemResult product={product} />
 */
const ItemResult = ({ product }) => {
    const history = useHistory();

    /**
     * Function who dispatch an action that sends to the detail from the product
     */
    const pushProductDetail = () => {
        history.push(`items/${product.id}`)
    }
    return (
        <WrapperItemResult>
            <ZonePicture onClick={() => { pushProductDetail() }}>
                <img src={product.thumbnail} alt="Imagen producto" />
            </ZonePicture>
            <DescriptionZone>
                <PrincipalInfo>
                    <Price onClick={() => { pushProductDetail() }}>
                        <NumberFormat
                            value={product.price}
                            displayType={"text"}
                            thousandSeparator={"."}
                            decimalSeparator={","}
                            prefix={"$ "}
                        />
                        {product.shipping.free_shipping && <img src={IconSmall} className="icon" alt="Envío gratis" />}

                    </Price>
                    <City>{product.address.state_name}</City>
                </PrincipalInfo>

                <Title onClick={() => { pushProductDetail() }}>{product.title}</Title>
            </DescriptionZone>
        </WrapperItemResult>
    );
};

export default ItemResult;
