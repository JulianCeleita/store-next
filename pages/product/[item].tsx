import { useRouter } from "next/router";

const Item = () => {
  const {
    query: { item },
  } = useRouter();
  return <div>Item: {item} </div>;
};
export default Item;
