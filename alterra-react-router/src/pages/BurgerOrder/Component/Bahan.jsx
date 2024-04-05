import { useDispatch, useSelector } from "react-redux";
import { orderBurgers } from "../../../libs/redux/Slice/BurgerIngredients.slice";
export default function Bahan({ items }) {
  const { order } = useSelector((state) => state?.burgerIng?.burger);
  const dispatch = useDispatch();
  return (
    <button
      disabled={order.length > 9 ? true : false}
      className={`w-28 px-3 py-1 rounded-md text-lg text-center cursor-pointer  bg-amber-400 text-black shadow-md hover:bg-amber-300 disabled:cursor-not-allowed disabled:hover:bg-amber-400 `}
      key={items.id}
      onClick={() => {
        dispatch(orderBurgers({ id: order.length, items }));
      }}
    >
      <p>{order.id}</p>
      <p>Rp {items.harga}</p>
    </button>
  );
}
