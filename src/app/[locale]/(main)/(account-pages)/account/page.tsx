"use client";

import React from "react";
import { trpc } from "@/providers/trpcProvider";
import toast from "react-hot-toast";

import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";

function AccountPage() {
  const { isLoading, data } = trpc.admin.getAllUsers.useQuery(
    {},
    {
      onError: (err) => toast.error(err.message),
      refetchOnWindowFocus: false
    }
  );

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* HEADING */}
      <h2 className="text-3xl font-semibold">Account infomation</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div className="flex flex-col md:flex-row">
        <div className="flex shrink-0 items-start">
          <div className="relative flex overflow-hidden rounded-full">
            <Avatar size="xl" />
            <div className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center bg-black bg-opacity-60 text-neutral-50">
              <span className="mt-1 text-xs">Change Image</span>
            </div>
            <input
              type="file"
              className="absolute inset-0 cursor-pointer opacity-0"
            />
          </div>
        </div>
        <div className="mt-10 max-w-3xl grow space-y-6 md:mt-0 md:pl-16">
          <div>
            <Label>Name</Label>
            <Input className="mt-1.5" defaultValue="Eden Tuan" />
          </div>
          {/* ---- */}
          <div>
            <Label>Gender</Label>
            <Select className="mt-1.5">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Select>
          </div>
          {/* ---- */}
          <div>
            <Label>Username</Label>
            <Input className="mt-1.5" defaultValue="@eden_tuan" />
          </div>
          {/* ---- */}
          <div>
            <Label>Email</Label>
            <Input className="mt-1.5" defaultValue="example@email.com" />
          </div>
          {/* ---- */}
          <div className="max-w-lg">
            <Label>Date of birth</Label>
            <Input className="mt-1.5" type="date" defaultValue="1990-07-22" />
          </div>
          {/* ---- */}
          <div>
            <Label>Addess</Label>
            <Input className="mt-1.5" defaultValue="New york, USA" />
          </div>
          {/* ---- */}
          <div>
            <Label>Phone number</Label>
            <Input className="mt-1.5" defaultValue="003 888 232" />
          </div>
          {/* ---- */}
          <div>
            <Label>About you</Label>
            <Textarea type="textarea" className="mt-1.5" defaultValue="..." />
          </div>
          <div className="pt-2">
            <Button>Update info</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
