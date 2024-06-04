/*
 * @Author: 师英英
 * @Date: 2024-06-04 16:47:46
 * @LastEditors: 师英英
 * @LastEditTime: 2024-06-04 16:48:22
 * @FilePath: /nextjs-dashboard/app/dashboard/layout.tsx
 * @Description: 默认
 */
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}