import { useRouter } from "next/router";
import { Navbar } from "@/components";

const Item = () => {
  const {
    query: { item },
  } = useRouter();
  return (
    <>
      <Navbar />
      <div>Item: {item} </div>
    </>
  );
};
export default Item;
