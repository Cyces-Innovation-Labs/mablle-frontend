
interface Step {
  title: string
  description?: string
}

interface AppStepperHeaderProps {
  steps: Step[]
  currentStep: number
  className?: string
  showConnectors?: boolean
  variant?: 'default' | 'compact' | 'minimal'
}

const AppStepperHeader = ({
  steps,
  currentStep,
  className = '',
  showConnectors = true,
  variant = 'default'
}: AppStepperHeaderProps) => {
  const getStepCircleClass = (index: number) => {
    const baseClass = 'w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors'
    
    if (index <= currentStep) {
      return `${baseClass} bg-primary text-primary-foreground`
    }
    
    return `${baseClass} bg-gray-200 text-gray-600`
  }

  const getConnectorClass = (index: number) => {
    const baseClass = 'flex-1 h-0.5 mx-4 transition-colors'
    
    if (index < currentStep) {
      return `${baseClass} bg-primary`
    }
    
    return `${baseClass} bg-gray-200`
  }

  const renderStep = (step: Step, index: number) => {
    if (variant === 'minimal') {
      return (
        <div key={index} className="flex items-center">
          <div
            className={getStepCircleClass(index)}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && showConnectors && (
            <div className={getConnectorClass(index)} />
          )}
        </div>
      )
    }

    if (variant === 'compact') {
      return (
        <div key={index} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={getStepCircleClass(index)}>
              {index + 1}
            </div>
            <div className="mt-1 text-center">
              <div className="text-xs font-medium">{step.title}</div>
            </div>
          </div>
          {index < steps.length - 1 && showConnectors && (
            <div className={getConnectorClass(index)} />
          )}
        </div>
      )
    }

    // Default variant
    return (
      <div key={index} className="flex items-center">
        <div className="flex flex-col items-center">
          <div className={getStepCircleClass(index)}>
            {index + 1}
          </div>
          <div className="mt-2 text-center">
            <div className="text-sm font-medium">{step.title}</div>
            {step.description && (
              <div className="text-xs text-gray-500 mt-1">{step.description}</div>
            )}
          </div>
        </div>
        {index < steps.length - 1 && showConnectors && (
          <div className={getConnectorClass(index)} />
        )}
      </div>
    )
  }

  const getContainerClass = () => {
    const baseClass = 'flex items-center justify-between px-[12%]'
    
    if (variant === 'minimal') {
      return `${baseClass} ${className}`
    }
    
    if (variant === 'compact') {
      return `${baseClass} rounded-lg border border-gray-200 p-3 ${className}`
    }
    
    // Default variant
    return `${baseClass} rounded-lg border border-gray-200 p-4 ${className}`
  }

  return (
    <div className={getContainerClass()}>
      {steps.map((step, index) => renderStep(step, index))}
    </div>
  )
}

export default AppStepperHeader
