import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';

export default function About() {
  return (
    <Layout className=' relative h-full '>
      <div className='fixed top-0 left-0 flex h-full w-full flex-col items-center justify-center  py-2 text-gray-100'>
        <main className='flex h-full w-full flex-1 flex-col items-center justify-center px-20 text-center'>
          <h1 className='text-6xl font-bold'>Kutok</h1>
          <p className='mt-3 text-2xl'>Online CV By Faouzi Mohamed</p>
        </main>
        <Footer />
      </div>
    </Layout>
  );
}
