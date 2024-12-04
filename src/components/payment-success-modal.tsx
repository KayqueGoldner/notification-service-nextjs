/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query";
import { CheckIcon } from "lucide-react";

import { client } from "@/app/lib/client";
import { Modal } from "@/components/ui/modal";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Button } from "@/components/ui/button";

export const PaymentSuccessModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { data, isPending } = useQuery({
    queryKey: ["user-plan"],
    queryFn: async () => {
      const res = await client.payment.getUserPlan.$get();
      
      return await res.json();
    },
    refetchInterval: (query) => {
      return query.state.data?.plan === "PRO" ? false : 1000;
    }
  });

  const handleClose = () => {
    setIsOpen(false);
    router.push("/dashboard");
  }

  const isPaymentSuccessful = data?.plan === "PRO";

  return (
    <Modal 
      showModal={isOpen} 
      setShowModal={setIsOpen}
      onClose={handleClose}
      className="px-6 pt-6"
      preventDefaultClose={!isPaymentSuccessful}
    >
      <div className="flex flex-col items-center">
        {isPending || !isPaymentSuccessful ? (
          <div className="flex flex-col items-center justify-center h-64">
            <LoadingSpinner className="mb-4" />
            <p className="text-lg/7 font-medium text-gray-900">
              Upgrading your account...
            </p>
            <p className="text-gray-600 text-sm/6 mt-2 text-center text-pretty">
              Please wait while we process your upgrade. This may take a moment.
            </p>
          </div>
        ): (
          <>
            <div className="relative aspect-video border border-gray-200 w-full overflow-hidden rounded-lg bg-gray-50">
              <img
                src="/brand-asset-heart.png"
                className="h-full w-full object-cover"
                alt="payment success"
              />
            </div>
            
            <div className="mt-6 flex flex-col items-center gap-1 text-center">
              <p className="text-lg/7 tracking-tight font-medium text-pretty">Upgrade successful! 🎊</p>
              <p className="text-gray-600 text-sm/6 text-pretty">
                Thank you for upgrading to PRO and supporting PingPanda. Your account has been upgraded.
              </p>
            </div>

            <div className="mt-8 w-full">
              <Button
                onClick={handleClose}
                className="h-12 w-full"
              >
                <CheckIcon className="mr-2 size-5" />
                Go to dashboard
              </Button>
            </div>
          </>
        )}
      </div>
    </Modal>
  )
}