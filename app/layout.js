import Preloader from '@/layouts/Preloader';
import '@css/main.css';
import { DM_Sans, Inter } from 'next/font/google';
import 'react-nice-select/css/nice-select.css';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--headingFont',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--paraFont',
  display: 'swap',
});

export const metadata = {
  title: 'HeplChain',
  description: 'Help Cahin POWERED BY STELLAR NETWORK',
};

const fontFamily = `${dm_sans.variable} ${inter.variable}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Preloader />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
