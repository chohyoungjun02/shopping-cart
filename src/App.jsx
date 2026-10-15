import { useReducer } from "react";
import "./App.css";
import { products } from "./data/products";
import { cartReducer, initialState } from "./reducers/cartReducer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

// App: 상태(useReducer)를 가지고, 하위 컴포넌트에 데이터와 핸들러를 내려준다
export default function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Event Handler는 상태를 직접 바꾸지 않고, "무슨 일이 일어났는지"만 dispatch로 알린다
  const handleAdd = (product) => dispatch({ type: "ADD_ITEM", payload: product });
  const handleIncrease = (id) => dispatch({ type: "INCREASE_QUANTITY", payload: id });
  const handleDecrease = (id) => dispatch({ type: "DECREASE_QUANTITY", payload: id });
  const handleRemove = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const handleClear = () => dispatch({ type: "CLEAR_CART" });

  return (
    <>
      <Header />
      <main className="layout">
        <ProductList products={products} onAdd={handleAdd} />
        <Cart
          items={state.items}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
          onClear={handleClear}
        />
      </main>
    </>
  );
}
