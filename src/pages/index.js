import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex justify-center items-center flex-col gap-2 h-screen'>
      <h1 className="text-2xl font-bold capitalize"> this is a Home page</h1>
      <Link href="/products">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:scale-125">
          Go to Products
        </button>
      </Link>
    </div>
  );
}
