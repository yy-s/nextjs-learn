/*
 * @Author: 师英英
 * @Date: 2024-02-23 22:22:25
 * @LastEditors: 师英英
 * @LastEditTime: 2024-06-04 16:52:08
 * @FilePath: /nextjs-dashboard/app/layout.tsx
 * @Description: 默认
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}