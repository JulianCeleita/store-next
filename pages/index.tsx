import { Navbar } from "@/components";
import { useEffect, useState } from "react";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch('/api/piece')
      .then((response) => response.json())
      .then(({data, length})=> {
        setProductList(data)
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <div>THIS IS THE NEW HOME</div>
      {productList.map((product)=> (
        <div>{product.name}</div>
      ))}
    </div>
  );
};
export default Home;
