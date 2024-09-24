import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Products = ({ products }) => {
  return (
    <div>
      <Head>
        <title>All Products</title>
      </Head>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 gap-2 p-3">
        {products.map((product) => (
          <li
            key={product.id}
            className="border-2 p-3 cursor-pointer rounded-2xl hover:shadow-xl"
          >
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
                className="w-full h-[300px]"
                width={400}
                height={400}
              />
              <h2 className="text-lg font-bold line-clamp-1">
                {product.title}
              </h2>
              <p className="text-lg font-bold">
                Price:
                <span className="text-sm font-medium">${product.price}</span>
              </p>
              <p className="text-lg font-bold">
                Description: <span className="text-sm font-medium line-clamp-5">${product.description}</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default Products;
