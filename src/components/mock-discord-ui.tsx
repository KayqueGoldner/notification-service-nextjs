import Image from "next/image";
import { PropsWithChildren } from "react";
import { 
  CogIcon,
  GiftIcon,
  HeadphonesIcon,
  HelpCircleIcon,
  InboxIcon, 
  MenuIcon, 
  MicIcon, 
  MoreVerticalIcon, 
  PhoneIcon, 
  PinIcon, 
  PlusCircleIcon, 
  SearchIcon, 
  SmileIcon, 
  StickerIcon, 
  UserCircleIcon,
  VideoIcon
} from "lucide-react";

import { Icons } from "./icons";
import { cn } from "@/lib/utils";

export const MockDiscordUI = ({
  children
}: PropsWithChildren) => {
  return (
    <div className="flex min-h-[800px] w-full max-w-[1200px] bg-discord-gray text-white rounded-lg overflow-hidden shadow-xl">
      {/* server list */}
      <div className="hidden sm:flex w-[72px] bg-[#202225] py-3 flex-col items-center">
        <div className="size-12 bg-discord-brand-color rounded-2xl flex items-center justify-center mb-2 hover:rounded-xl transition-all duration-200">
          <Icons.discord className="size-3/5 text-white" />
        </div>

        <div className="w-8 h-[2px] bg-discord-gray rounded-full my-2" />

        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="size-12 bg-discord-gray rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-discord-brand-color cursor-not-allowed"
          >
            <span className="text-lg font-semibold text-gray-400">
              {String.fromCharCode(65 + i)}
            </span>
          </div>
        ))}
        <div className="group mt-auto size-12 bg-discord-gray rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-[#3BA55C] cursor-not-allowed">
          <PlusCircleIcon className="text-[#3BA55C] group-hover:text-white" />
        </div>
      </div>

      {/* dm list */}
      <div className="hidden md:flex w-60 bg-[#2F3136] flex-col">
        <div className="px-4 h-16 border-b border-[#202225] flex items-center shadow-sm">
          <div className="w-full bg-[#202225] text-sm rounded px-2 h-8 flex items-center justify-center text-gray-500 cursor-not-allowed">
            Find or start a conversation
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pt-4">
          <div className="px-2 mb-4">
            <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393C43] text-[#DCDDDE] cursor-not-allowed">
              <UserCircleIcon className="mr-3 size-7 text-[#B9BBBE]" />
              <span className="font-medium text-sm">Friends</span>
            </div>
            <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393C43] text-[#DCDDDE] cursor-not-allowed">
              <InboxIcon className="mr-3 size-7 text-[#B9BBBE]" />
              <span className="font-medium text-sm">Nitro</span>
            </div>
          </div>

          <div className="px-2 mb-4">
            <h3 className="text-xs font-semibold text-[#8E9297] px-2 mb-2 uppercase">
              Direct Messages
            </h3>

            <div className="flex items-center px-2 py-1.5 rounded bg-[#393C43] text-white cursor-pointer">
              <div className="relative">
                <Image
                  src="/brand-asset-profile-picture.png"
                  alt="pingpanda avatar"
                  width={32}
                  height={32}
                  className="object-cover rounded-full mr-3"
                />
                <div className="absolute -bottom-px right-3 size-2.5 bg-green-500 rounded-full border-2 border-[#36393F]" />
              </div>
              <span className="font-medium">
                PingPanda
              </span>
            </div>

            <div className="my-1 space-y-px">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex items-center py-1.5 rounded text-gray-600 cursor-not-allowed",
                    i === 3 && "opacity-30",
                    i === 2 && "opacity-40",
                    i === 1 && "opacity-50",
                  )}
                >
                  <div className="shrink-0 size-8 rounded-full bg-discord-gray mr-2" />
                  <div className="h-8 flex-1 rounded-md bg-discord-gray" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-2 bg-[#292B2F] flex items-center">
          <div className="relative">
            <div className="size-8 rounded-full bg-brand-700 mr-2" />
            <div className="absolute -bottom-px right-2 size-3 bg-green-500 rounded-full border-2 border-[#36393F]" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">You</p>
            <p className="text-xs text-[#B9BBBE] flex items-center">@your_account</p>
          </div>

          <div className="flex items-center space-x-2">
            <MicIcon className="size-5 text-[#B9BBBE] hover:text-white cursor-pointer" />
            <HeadphonesIcon className="size-5 text-[#B9BBBE] hover:text-white cursor-pointer" />
            <CogIcon className="size-5 text-[#B9BBBE] hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="flex-1 flex flex-col">
        {/* dm header */}
        <div className="h-16 bg-[#36393F] flex items-center px-4 shadow-sm border-b border-[#202225]">
          <div className="md:hidden mr-4">
            <MenuIcon className="size-6 text-[#B9BBBE] hover:text-white cursor-pointer" />
          </div>

          <div className="flex items-center">
            <div className="relative">
              <Image
                src="/brand-asset-profile-picture.png"
                alt="pingpanda avatar"
                width={40}
                height={40}
                className="object-cover rounded-full mr-3"
              />
              <div className="absolute bottom-0 right-3 size-3 bg-green-500 rounded-full border-2 border-[#36393F]" />
            </div>

            <div className="flex flex-col -gap-3">
              <p className="font-semibold text-white leading-6">PingPanda</p>
              <span className="text-[#b9bbbe86] text-xs font-semibold tracking-wider">Online</span>
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-4 text-[#B9BBBE]">
            <PhoneIcon className="size-5 hover:text-white cursor-not-allowed hidden lg:block" />
            <VideoIcon className="size-5 hover:text-white cursor-not-allowed hidden lg:block" />
            <PinIcon className="size-5 hover:text-white cursor-not-allowed hidden lg:block" />
            <UserCircleIcon className="size-5 hover:text-white cursor-not-allowed hidden lg:block" />
            <SearchIcon className="size-5 hover:text-white cursor-not-allowed hidden lg:block" />
            <InboxIcon className="size-5 hover:text-white cursor-not-allowed hidden lg:block" />
            <HelpCircleIcon className="size-5 hover:text-white cursor-not-allowed hidden lg:block" />
            <MoreVerticalIcon className="size-5 hover:text-white cursor-not-allowed block lg:hidden" />
          </div>
        </div>

        {/* messages history */}
        <div className="flex-1 overflow-y-auto pb-4 px-4 bg-discord-gray flex flex-col-reverse">
          {children}
        </div>

        {/* message input */}
        <div className="p-4">
          <div className="flex items-center bg-[#40444B] rounded-lg p-1">
            <PlusCircleIcon className="mx-3 text-[#B9BBBE] hover:text-white cursor-not-allowed" />
            <input
              readOnly
              type="text"
              placeholder="Message @PingPanda"
              className="flex-1 bg-transparent py-2.5  px-1 text-white placeholder-[#72767D] focus:outline-none cursor-not-allowed"
            />
            <div className="flex items-center space-x-3 mx-3 text-[#B9BBBE]">
              <GiftIcon className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
              <StickerIcon className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
              <SmileIcon className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}