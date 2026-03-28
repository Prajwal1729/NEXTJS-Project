import SidebarComponent from "../components/sidebar/Sidebar";

export default function Sidebar(){
    return <SidebarComponent isOpen={false} toggleSidebar={function (): void {
        throw new Error("Function not implemented.");
    } }/>

}