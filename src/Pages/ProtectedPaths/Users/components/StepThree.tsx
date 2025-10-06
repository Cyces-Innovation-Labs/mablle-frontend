import type { UseFormReturn } from 'react-hook-form'
import AppSelect from '@/components/Commmon/AppForm/AppSelect'
import AppSwitch from '@/components/Commmon/AppForm/AppSwitch'
import AppText from '@/components/Commmon/AppText'

interface StepThreeProps {
  formUtils?: UseFormReturn
}

const StepThree = ({ formUtils }: StepThreeProps) => {
  const countryOptions = [
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
    { label: 'United Kingdom', value: 'UK' },
    { label: 'Germany', value: 'DE' },
    { label: 'France', value: 'FR' },
  ]

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
    { label: 'Prefer not to say', value: 'prefer_not_to_say' },
  ]

  return (
    <div className="space-y-4">
      <AppText 
        text="Additional Information" 
        className="text-xl font-semibold mb-4" 
      />
      
      <div className="grid grid-cols-2 gap-4">
        <AppSelect
          name="country"
          label="Country"
          placeholder="Select your country"
          options={countryOptions}
          formUtils={formUtils!}
        />
        
        <AppSelect
          name="gender"
          label="Gender"
          placeholder="Select your gender"
          options={genderOptions}
          formUtils={formUtils!}
        />
      </div>
      
      <AppSwitch
        name="newsletter"
        label="Subscribe to Newsletter"
        description="Receive updates and news via email"
        formUtils={formUtils!}
      />
      
      <AppSwitch
        name="terms"
        label="Accept Terms and Conditions"
        description="I agree to the terms and conditions"
        formUtils={formUtils!}
      />
    </div>
  )
}

export default StepThree
