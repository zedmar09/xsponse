import DashboardPageView from "./page-view";
import { getDictionary } from "@/src/components/dictionaries";
import DashboardLayoutProvider from "@/src/provider/dashboard.layout.provider"

interface DashboardProps {
  params: {
    lang: any;
  };
}


const Dashboard = async ({ params: { lang } }: DashboardProps) => {
  const trans = await getDictionary("en");
  return (
    <DashboardLayoutProvider trans={trans}>
<DashboardPageView trans={trans}/>;
</DashboardLayoutProvider>
  )
  
  
};
export default Dashboard;
