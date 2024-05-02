import { Container } from "@mui/material";
import ProductDetails from "./ProductDetails";
import { product } from "@/utils/product";

interface Iprams {
    productId?: string;
}
const  Product = ({ params }: { params: Iprams }) => {
    console.log("params", params); 

    return <div className="p-8">
    <Container>
        <ProductDetails product = {product} />
    </Container>
        </div>
};
 
export default Product;