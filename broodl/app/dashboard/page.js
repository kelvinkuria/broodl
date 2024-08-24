


import Dash from "@/components/Dash";
import Login from "@/components/Login";
import Main from "@/components/Main";

export const metadata = {
    title: "Moodl ⋅ Dashboard",
   
  };




export default function DashboardPage (){
  const isAuthenticated = true;

  let children = (<Login/>)

if(isAuthenticated){
  children = (
  <Dash />
  )
}

return (




    <Main>
{children}
    </Main>
)

} 