
import './globals.css';
import Navbar from '@/components/Navbar';
export const metadata = { title: 'JobGuard', description: 'AI Fake Job Detector' };
export default function RootLayout({ children }: { children: React.ReactNode }){
  return (<html lang="en"><body><Navbar /><main className="container py-8">{children}</main></body></html>);
}
