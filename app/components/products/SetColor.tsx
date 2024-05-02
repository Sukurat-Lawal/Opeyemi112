"use client"

import { CartProductType, SelectedImgType } from "@/app/product/[productid]/ProductDetails";

interface SetColorProps{
    images: SelectedImgType[],
    cartProduct: CartProductType,
    handleColorSelect: (value: SelectedImgType) => void

}

const SetColor: React.FC<SetColorProps> = ({
  images,
  cartProduct,
  handleColorSelect
)}

export default SetColor;