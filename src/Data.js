/* eslint-disable no-unused-vars */
import React from 'react'
import { useGetAllProductsQuery, useGetProductQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } from './services/api'

export default function Data() {
  const { data, error, isError, isLoading } = useGetAllProductsQuery();
  console.log("all product");
  console.log(data);


  const product = useGetProductQuery("iphone");
  console.log("searching ");
  console.log(product.data);

  const [fun, add] = useAddProductMutation({ name: "iphone 7" });
  console.log("ADD to cart");
  console.log(add);

  const [fun2,update] = useUpdateProductMutation({name:"iphone "})
  console.log("delete to cart");
  console.log(update);

  const [fun3, del] = useDeleteProductMutation("iphone 7");
  console.log("delete product");
  console.log(del);


  return (
    <div>
      Check Console
    </div>
  )
}
