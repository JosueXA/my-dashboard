import { WidgetsGrid } from '../../../components/dashboard/WidgetsGrid';


export const metadata = {
  title: 'Admin Dashboard',
  description: 'Información general del sistema',
};

export default function MainPage() {
  return (
    <div className="m-5 text-black">
      <h1 className="text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>

      <WidgetsGrid />

    </div>
  );
}
