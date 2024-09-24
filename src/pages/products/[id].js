
import Head from "next/head";
import Image from "next/image";

const Product = ({ product }) => {
  if (!product) return <div>No product found.</div>;

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
      </Head>
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p>{product.description}</p>
        <p className="text-xl font-bold">Price: ${product.price}</p>
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
        />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default Product;
