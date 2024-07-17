import React from 'react'
import { Card, CardContent } from "@/src/components/ui/card";
import { Clock } from 'lucide-react'

const Logs: React.FC = () => {
  return (
    <>
      <Card className='mt-10'>
        <CardContent>
          <div className="flex flex-col items-center justify-center text-center pt-20 pb-20">
            <Clock size={120} className='text-default-200'/>
            <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-default-400 mt-6">Coming Soon!</div>
            <div className="mt-3 text-default-400 text-sm md:text-base">
              This tab will be available soon once the module is finalized.
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default Logs
