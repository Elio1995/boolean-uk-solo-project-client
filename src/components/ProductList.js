import useStore from "../store";
import styled from "styled-components";
import { APP_COLOR } from "../consistent";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { useEffect } from "react";
import { useHistory } from "react-router";

const StyledImg = styled.img`
  height: 100px;
  width: 100px;
`;

const PinkButton = withStyles(() => ({
  root: {
    margin: "5px",
    marginLeft: "5px",
    color: APP_COLOR.black,
    backgroundColor: APP_COLOR.lightBlue,
    "&:hover": {
      backgroundColor: APP_COLOR.lightGrey,
    },
  },
}))(Button);

const StyledList = styled.button`
  font-size: 12px;
  font-family: "roboto";
  color: ${APP_COLOR.black};
  margin: 30px;
  padding: 50px;
  border: solid 0.2px ${APP_COLOR.lightBlue};
  border-radius: 3px;
`;

export const MyList = withStyles(() => ({
  root: {
    margin: "10px",
    padding: "10px",
    width: "100vw",
    height: "100vh",
    overflow: "scroll",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    backgroundColor: APP_COLOR.lightBlue,
  },
}))(ToggleButtonGroup);

export default function ProductList() {
  // @ts-ignore
  const chooseProduct = useStore((state) => state.chooseProduct);
  // @ts-ignore
  const setChooseProduct = useStore((state) => state.setChooseProduct);
  // @ts-ignore
  const productList = useStore((state) => state.productList);
  // @ts-ignore
  const setProductList = useStore((state) => state.setProductList);

  const history = useHistory();

  useEffect(() => {
    setProductList();
  }, []);

  useEffect(() => {
    if (chooseProduct) {
      history.push("/detail-page");
    }
  }, [chooseProduct, history]);

  //   const handleAirport = (e, newProduct) => {
  //     e.preventDefault();

  //     setChooseAirport(newAirport);
  //   };

  //   console.log(chooseAirport);

  return (
    <MyList>
      {productList?.map((product) => {
        return (
          <StyledList
            onClick={() => {
              setChooseProduct(product);
            }}
          >
            <StyledImg src={product.image} alt="" />
            <h2>{product.title}</h2>
            <h2>{product.price}£</h2>
            <PinkButton>Add to my favourites</PinkButton>
            <PinkButton>Buy it now</PinkButton>
          </StyledList>
        );
      })}
    </MyList>
  );
}

// value={chooseAirport} exclusive onChange={handleAirport}
