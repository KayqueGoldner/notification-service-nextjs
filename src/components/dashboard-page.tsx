"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { Heading } from "./heading";

interface DashboardPageProps {
  title: string;
  children?: React.ReactNode;
  hideBackButton?: boolean;
  cta?: React.ReactNode;
}

export const DashboardPage = ({
  title,
  children,
  hideBackButton,
  cta
}: DashboardPageProps) => {
  const router = useRouter();

  return (
    <section className="flex-1 h-full w-full flex flex-col">
      <div className="w-full p-6 sm:p-8 flex justify-between border-b border-gray-200">
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex items-center gap-8">
            {hideBackButton ? null : (
              <Button 
                variant="outline"
                className="w-fit bg-white"
                onClick={() => router.push("/dashboard")}
              >
                <ArrowLeft className="size-4" />
              </Button>
            )}
            <Heading>
              {title}
            </Heading>
          </div>

          {cta ? (
            <div className="w-full">
              {cta}
            </div>
          ): null}
        </div>
      </div>

      <div className="flex-1 p-6 sm:p-8 flex flex-col overflow-y-auto">
        {children}
      </div>
    </section>
  )
}