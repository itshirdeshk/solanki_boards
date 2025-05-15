import { useState } from 'react';
import logo from "../assets/logo.png"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Menu, Home, IdCard, FileText, Bell, FileCheck, LogOut } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");

    // Redirect to login page or home page
    navigate("/login");
  };

  return (
    <nav className="relative flex items-center justify-between py-2 px-8 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 shadow-md z-50">
      {/* Logo and Heading Section */}
      <Link to="/">
        <div className="flex items-center flex-col space-x-2 justify-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-12 "
          />
          <h1 className="text-sm font-bold text-blue-950">SBCODL</h1>
        </div>
      </Link>


      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-2 items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <Link to="/">
                <Button variant="ghost" className="text-slate-700 hover:bg-slate-200 flex items-center gap-2">
                  <Home className="h-5 w-5 text-blue-700" /> Dashboard
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/id-card">
                <Button variant="ghost" className="text-slate-700 hover:bg-slate-200 flex items-center gap-2">
                  <IdCard className="h-5 w-5 text-indigo-700" /> ID-CARD
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-slate-700 hover:bg-slate-200 flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-green-700" /> Examination
              </NavigationMenuTrigger>
              <NavigationMenuContent className="z-50 bg-white text-slate-800 shadow-lg rounded-md">
                <div className="p-2 space-y-2 w-[15vw]">
                  <NavigationMenuLink className="block hover:bg-slate-100 p-2 rounded">Exam Schedule</NavigationMenuLink>
                  <NavigationMenuLink className="block hover:bg-slate-100 p-2 rounded">Previous Papers</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-slate-700 hover:bg-slate-200 flex items-center gap-2">
                <Bell className="h-5 w-5 text-yellow-600" /> Notice
              </NavigationMenuTrigger>
              <NavigationMenuContent className="z-50 bg-white text-slate-800 shadow-lg rounded-md">
                <div className="p-2 space-y-2 w-[15vw]">
                  <NavigationMenuLink className="block hover:bg-slate-100 p-2 rounded">Recent Notices</NavigationMenuLink>
                  <NavigationMenuLink className="block hover:bg-slate-100 p-2 rounded">Archives</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/result">
                <Button variant="ghost" className="text-slate-700 hover:bg-slate-200 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-purple-700" /> Result
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="destructive" className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2" onClick={handleLogout}>
                <LogOut className="h-5 w-5" /> Logout
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="text-slate-700 border-slate-300 hover:bg-slate-200">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="z-[9999] bg-white px-0 pt-0 flex flex-col h-full">
            {/* Logo and Heading at the top */}
            <div className="flex flex-col items-center py-6 border-b mb-2 bg-gradient-to-r from-slate-100 to-slate-200">
              <img src={logo} alt="Logo" className="h-12 w-14 mb-1" />
              <h1 className="text-lg font-bold text-blue-950 tracking-wide">SBCODL</h1>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Accordion type="single" collapsible className="w-full px-2">
                <AccordionItem value="dashboard" className="border-b">
                  <Button variant="ghost" className="w-full justify-start text-slate-800 hover:bg-slate-100 py-4 text-base gap-3 flex items-center" onClick={() => { setIsOpen(false); navigate('/'); }}>
                    <Home className="h-5 w-5 text-blue-700" /> Dashboard
                  </Button>
                </AccordionItem>
                <AccordionItem value="i-card" className="border-b">
                  <AccordionTrigger className="text-slate-800 hover:bg-slate-100 py-4 text-base gap-3 flex items-center justify-start">
                    <IdCard className="h-5 w-5 text-indigo-700 mr-2" /> I-Card
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      <Button variant="ghost" className="w-full text-slate-700 hover:bg-slate-100 justify-start gap-2 flex items-center" onClick={() => { setIsOpen(false); navigate('/id-card'); }}>
                        <FileText className="h-4 w-4 text-indigo-700" /> View I-Card
                      </Button>
                      {/* <Button variant="ghost" className="w-full text-slate-700 hover:bg-slate-100 justify-start gap-2">
                        <Download className="h-4 w-4 text-indigo-700" /> Download I-Card
                      </Button> */}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="examination" className="border-b">
                  <AccordionTrigger className="text-slate-800 hover:bg-slate-100 py-4 text-base gap-3 flex items-center justify-start">
                    <FileCheck className="h-5 w-5 text-green-700 mr-2" /> Examination
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      <Button variant="ghost" className="w-full text-slate-700 hover:bg-slate-100 justify-start gap-2 flex items-center">
                        <FileText className="h-4 w-4 text-green-700" /> Exam Schedule
                      </Button>
                      <Button variant="ghost" className="w-full text-slate-700 hover:bg-slate-100 justify-start gap-2 flex items-center">
                        <FileText className="h-4 w-4 text-green-700" /> Previous Papers
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="notice" className="border-b">
                  <AccordionTrigger className="text-slate-800 hover:bg-slate-100 py-4 text-base gap-3 flex items-center justify-start">
                    <Bell className="h-5 w-5 text-yellow-600 mr-2" /> Notice
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      <Button variant="ghost" className="w-full text-slate-700 hover:bg-slate-100 justify-start gap-2 flex items-center">
                        <Bell className="h-4 w-4 text-yellow-600" /> Recent Notices
                      </Button>
                      <Button variant="ghost" className="w-full text-slate-700 hover:bg-slate-100 justify-start gap-2 flex items-center">
                        <Bell className="h-4 w-4 text-yellow-600" /> Archives
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="result" className="border-b">
                  <Button variant="ghost" className="w-full justify-start text-slate-800 hover:bg-slate-100 py-4 text-base gap-3 flex items-center" onClick={() => { setIsOpen(false); navigate('/result'); }}>
                    <FileText className="h-5 w-5 text-purple-700" /> Result
                  </Button>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Divider and Logout Button at the bottom */}
            <div className="border-t pt-4 pb-2 px-4 mt-2">
              <Button variant="destructive" className="w-full bg-red-500 hover:bg-red-600 text-white py-4 text-base gap-3 flex items-center justify-start" onClick={handleLogout}>
                <LogOut className="h-5 w-5" /> Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;