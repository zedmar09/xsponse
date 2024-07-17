import React from 'react'
import { Button } from "@/src/components/xsponse/ui/button"
import Image from 'next/image'
import { User, Mail, Phone, Wallet, MonitorSmartphone } from 'lucide-react'
import { Badge } from "@/src/components/xsponse/ui/badge";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/xsponse/ui/tabs"

import Logs from './logs';
import Overview from './overview';
import MainLayout from './account-info/main-layout';
import Billing from './billing';

const ProfileApproved: React.FC = () => {
  return (
    <div className="p-6">
      <div className="relative bg-gradient-to-r from-gray-300 to-gray-300 h-20 rounded-t-lg">
        <div className="absolute left-6 -bottom-16">
          <div className="w-32 h-32 border-4 border-white overflow-hidden rounded-lg">
            <Image src="/images/avatar/avatar-8.jpg" alt="Profile" width={128} height={128} className="object-cover" />
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-b-lg pt-5 pb-6 px-6">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center space-x-4">
            <div className="ml-40">
              <h2 className="text-2xl font-bold mb-2">Edmar Sanchez <Badge color="success" className='ml-2'>Active</Badge></h2>
              <div className="flex items-center text-gray-500 space-x-4 flex-wrap">
                <div className="flex items-center space-x-1">
                  <Mail size={16} />
                  <span>dealeremail@gmail.com</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone size={16} />
                  <span>293-368-4079</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Wallet size={16} />
                  <span><strong className='text-primary'>$ 6,900.12</strong> Earnings</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MonitorSmartphone size={16} />
                  <span><strong className='text-primary'>23</strong> Device Sold</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User size={16} />
                  <span><strong className='text-primary'>30</strong> Customer(s)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Button className="ml-auto" color='secondary'>Impersonate</Button>
            <Button className="ml-auto" color='destructive' variant='soft'>Mark as Inactive</Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="account" className="w-full mt-5">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
          <TabsTrigger value="account" className="py-3">Account Information</TabsTrigger>
          <TabsTrigger value="billing" className="py-3">Billing Address</TabsTrigger>
          <TabsTrigger value="shipping" className="py-3">Shipping Address</TabsTrigger>
          <TabsTrigger value="payment" className="py-3">Payment Methods</TabsTrigger>
          <TabsTrigger value="overview" className="py-3">Overview</TabsTrigger>
          <TabsTrigger value="logs" className="py-3">Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <MainLayout />
        </TabsContent>
        <TabsContent value="billing">
          <Billing />
        </TabsContent>
        <TabsContent value="shipping">
          shipping
        </TabsContent>
        <TabsContent value="payment">
          payment
        </TabsContent>
        <TabsContent value="overview">
          <Overview />
        </TabsContent>
        <TabsContent value="logs">
          <Logs />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ProfileApproved
