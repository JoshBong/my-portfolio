import Head from 'next/head';
import Cover from '../components/cover'; 

export default function HomePage() {
  return (
    // This div provides the granite background and centers the cover component.
    <div className="granite">
      <Head>
        <title>The Code Cookbook | Resume Recipes</title>
        <meta name="description" content="Joshua Huang's Interactive Portfolio - A Personal Portfolio of Professional Creations" />
      </Head>

      {/* We render the Cover component here. */}
      <Cover />
      
      {/* Optional: Add a subtitle */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '14px',
        fontFamily: 'serif',
        textAlign: 'center'
      }}>
        Click the book to open
      </div>
      
    </div>
  );
}
