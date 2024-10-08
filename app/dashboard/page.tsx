"use client"

import { useRouter } from "next/navigation";  // Use "next/navigation" instead of "next/router"
import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";  // Example Card UI component
import { DashboardComponent } from "@/components/component/dashboard";

// Spinner Component
const Spinner = () => (
    <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
    </div>
);

export default function Dashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();  // This is now using the correct import

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = sessionStorage.getItem("jwtToken");
            if (token) {
                setIsAuthenticated(true);
                setIsLoading(false);  // Done loading
            } else {
                //router.push("/Login");
                setIsAuthenticated(true);
                setIsLoading(false);
            }
        }
    }, [router]);

    if (!isAuthenticated) {
        return null;
    }

    return (
       
        <div>
            <DashboardComponent/>
        </div>
    );
}
