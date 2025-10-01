import Head from 'next/head';
import Cover from '../components/cover'; 

export default function HomePage() {
  return (
    // This div acts as the main container for the page
    <div className="granite flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>The Code Cookbook</title>
      </Head>

      {/* Step 2: Render the Cover component */}
      <Cover />
      
    </div>
  );
}
