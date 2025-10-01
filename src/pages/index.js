import Head from 'next/head';
import Cover from '../components/cover'; 

export default function HomePage() {
  return (
    // This div provides the granite background and centers the cover component.
    <div className="granite flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>The Code Cookbook</title>
      </Head>

      {/* We render the Cover component here. */}
      <Cover />
      
    </div>
  );
}
