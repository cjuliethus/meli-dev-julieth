import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import NumberFormat from "react-number-format";
import { getProductDescription } from "../../services/services";
import {
    WrapperCardDetail,
    ImageProduct,
    ProductSummary,
    TagVendidos,
    TitleProduct,
    Price,
    ButtonCompra,
    ProductDescription,
    TitleDescription,
    Description,
} from "./Style";


/**
 * Component: CardDetail
 * 
 * @param {object} product 
 * 
 * Example Usage: 
 *    <CardDetail product={product} />
 */

const CardDetail = (props) => {
    const [product, setProduct] = useState({ pictures: [{ secure_url: "" }] });
    const [condition, setCondition] = useState({ value_name: "" });
    const [description, setDescription] = useState("");

    /**
     * Getting the description with the id from the product
     * because the product it doesn't have it nowhere from the Json
     */
    const getDescription = async (id) => {
        await getProductDescription(id)
            .then((response) => {
                setDescription(response.data[0].body[0]["plain_text"]);
            })
            .catch((e) => {
                console.erros("Errors", e);
            });
    };

    useEffect(() => {
        //Setting states before mount the component otherwise the component will break down
        if (Object.keys(props.product).length > 0) {
            let newCondition = props.product.attributes.filter(
                (element) => element.name === "Condición del ítem"
            );
            newCondition = newCondition[0];
            setCondition(newCondition);
            setProduct(props.product);
            getDescription(props.product.id);
        }
    }, [props.product]);

    return (
        <WrapperCardDetail>
            {/* Setting basic info for SEO in react helmet */}
            <Helmet>
                <title className="title">{product.title || ""} | Mercado libre</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={window.location.href} />
                <meta property="og:title" content={product.title || ""} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={product.pictures[0].secure_url} />
            </Helmet>
            <ImageProduct>
                <img src={product.pictures[0].secure_url} alt="Producto" />
            </ImageProduct>
            <ProductSummary>
                <TagVendidos>
                    {condition.value_name} - {product.sold_quantity} vendidos
                </TagVendidos>
                <TitleProduct>{product.title}</TitleProduct>
                <Price>
                    <NumberFormat
                        value={product.price}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={"$ "}
                    />
                </Price>
                <ButtonCompra>Comprar</ButtonCompra>
            </ProductSummary>
            <ProductDescription>
                <TitleDescription>Descripción del producto</TitleDescription>
                <Description>{description || 'No existe una descripción para este producto'}</Description>
            </ProductDescription>
        </WrapperCardDetail>
    );
};

export default CardDetail;
