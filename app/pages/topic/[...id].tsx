import Link from "next/link";

import { useRouter } from "next/router";

import { Section } from "../reusable.style";

const ID = () => {
  const router = useRouter();

  const id = router.query.id;
  console.log(id);
  //    using this id, that is given from the route
  // we can query a specific row ID

  return <section>a post {id}</section>;
};

export default ID;
