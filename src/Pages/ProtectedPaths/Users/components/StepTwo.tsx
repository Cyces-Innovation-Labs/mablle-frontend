import type { UseFormReturn } from 'react-hook-form'
import AppInput from '@/components/Commmon/AppForm/AppInput'
import AppTextArea from '@/components/Commmon/AppForm/AppTextArea'
import AppText from '@/components/Commmon/AppText'

interface StepTwoProps {
  formUtils?: UseFormReturn
}

const StepTwo = ({ formUtils }: StepTwoProps) => {
  return (
    <div className="space-y-4">
      <AppText 
        text="Contact Information" 
        className="text-xl font-semibold mb-4" 
      />
      
      <AppInput
        name="phone"
        label="Phone Number"
        placeholder="Enter your phone number"
        formUtils={formUtils!}
      />
      
      <AppTextArea
        name="address"
        label="Address"
        placeholder="Enter your full address"
        formUtils={formUtils!}
      />
      
      <div className="grid grid-cols-2 gap-4">
        <AppInput
          name="city"
          label="City"
          placeholder="Enter your city"
          formUtils={formUtils!}
        />
        
        <AppInput
          name="zipCode"
          label="ZIP Code"
          placeholder="Enter ZIP code"
          formUtils={formUtils!}
        />
      </div>
    </div>
  )
}

export default StepTwo
