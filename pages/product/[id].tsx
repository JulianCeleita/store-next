import { useRouter } from "next/router";
import { Navbar } from "@/components";

const Id = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <>
      <Navbar />
      <div>Id: {id} </div>
    </>
  );
};
export default Id;
