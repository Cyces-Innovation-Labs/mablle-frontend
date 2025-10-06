import type { UseFormReturn } from 'react-hook-form'
import AppInput from '@/components/Commmon/AppForm/AppInput'
import AppText from '@/components/Commmon/AppText'

interface StepOneProps {
  formUtils?: UseFormReturn
}

const StepOne = ({ formUtils }: StepOneProps) => {
  return (
    <div className="space-y-4">
      <AppText 
        text="Basic Information" 
        className="text-xl font-semibold mb-4" 
      />
      
      <div className="grid grid-cols-2 gap-4">
        <AppInput
          name="firstName"
          label="First Name"
          placeholder="Enter your first name"
          formUtils={formUtils!}
        />
        
        <AppInput
          name="lastName"
          label="Last Name"
          placeholder="Enter your last name"
          formUtils={formUtils!}
        />
      </div>
      
      <AppInput
        name="email"
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        formUtils={formUtils!}
      />
    </div>
  )
}

export default StepOne