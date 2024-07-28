import Cart from "../Components/Cart/Cart";
import useCartsHocks from "../Hocks/useCartsHocks";

const MyCarts = () => {
  const carts = useCartsHocks([]);

  return (
    <div className="flex flex-col justify-center items-center gap-8 my-8">
      <h1 className="text">My Carts</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {carts.length > 0 ? (
          carts.map((cart) => <Cart key={cart._id} cart={cart} />)
        ) : (
          <h1>No save card available</h1>
        )}
      </div>
    </div>
  );
};

export default MyCarts;
