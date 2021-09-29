import React, { useEffect } from "react";
import useStore from "../store";

export default function FavouritePage() {
  // @ts-ignore
  const productList = useStore((store) => store.productList);
  // @ts-ignore
  const loggedInUser = useStore((store) => store.loggedInUser);
  // @ts-ignore
  const findProductById = useStore((store) => store.findProductById);
  // @ts-ignore
  const favouriteProducts = useStore((store) => store.favouriteProducts);
  // @ts-ignore
  const setFavouriteProducts = useStore((store) => store.setFavouriteProducts);

  useEffect(() => {
    if (loggedInUser === null) return;
    setFavouriteProducts();
  }, [loggedInUser]);

  return (
    <>
      <div className="space"></div>
      <div className="patoto">
        <div className="favourite-list">
          <h2>Favourite Books</h2>
          <ul>
            {favouriteProducts.find((favouriteProduct) => {
              const product = findProductById(favouriteProduct.id);
              console.log("PRODUCT", product);
              return (
                <li>
                  <div className="favourite-page-card">
                    <img
                      height="300px"
                      width="300px"
                      src={product.image}
                      className="selected-card-image"
                      alt=""
                    ></img>
                    <h2>{product.title}</h2>
                    <h3>By {product.price}</h3>
                    {/* <button
                      className="add-button"
                      onClick={() => {
                        addBookstoRead(book.id);
                      }}
                    >
                      Buy it now!
                    </button>
                    <button
                      className="remove-button"
                      onClick={() => {
                        removeFavouriteBook(book.id, favouriteBook.id);
                      }}
                    >
                      X
                    </button> */}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
