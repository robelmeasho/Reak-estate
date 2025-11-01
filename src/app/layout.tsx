import './globals.css';
import Navbar from './Hcomponents/Navbar'; // adjust path if needed

export const metadata = {
  title: 'HouseDreams | Find Your Dream Home',
  description: 'Browse homes, apartments, and condos at HouseDreams.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // ← tell TypeScript the type of children
}) {
  return (
    <html lang='en'>
      <body className='bg-gray-650 text-gray-900'>
        <Navbar />
        <main className='pt-16'>{children}</main>
      </body>
    </html>
  );
}
