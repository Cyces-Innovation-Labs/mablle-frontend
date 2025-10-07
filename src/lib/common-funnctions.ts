import { toast } from "sonner";

const getFileNameFromUrl = (url: string) => {
  return url.split("/").pop();
};

const handleApiError = (
  error: any,
  setError?: any, // From useForm's setError
  showToastForGeneralError = true // Optional parameter, true by default
) => {
  let errorResponse = error?.response?.data;
  
  if (errorResponse && errorResponse.data) {
    // Case 1: General error (e.g., "Invalid Password")
    if (typeof errorResponse.data.error === "string") {
      if (showToastForGeneralError) {
        toast.error(errorResponse.data.error);
      }
      return;
    }
    
    // Helper function to get the first error message from nested structure
    const getFirstError = (errors: any): string | null => {
      for (const fieldName in errors) {
        const fieldError = errors[fieldName];
        
        // If it's an array of strings, return the first message
        if (Array.isArray(fieldError) && typeof fieldError[0] === "string") {
          return `${fieldName}: ${fieldError[0]}`;
        }
        
        // If it's an array of objects, recursively search
        if (Array.isArray(fieldError)) {
          for (const item of fieldError) {
            if (item && typeof item === "object") {
              const nestedError = getFirstError(item);
              if (nestedError) return nestedError;
            }
          }
        }
        
        // If it's a nested object, recursively search
        if (typeof fieldError === "object" && fieldError !== null && !Array.isArray(fieldError)) {
          const nestedError = getFirstError(fieldError);
          if (nestedError) return nestedError;
        }
      }
      return null;
    };
    
    // Case 2: If setError is provided, set field-specific errors
    if (setError) {
      const setNestedErrors = (errors: any, parentPath = "") => {
        for (const fieldName in errors) {
          const currentPath = parentPath ? `${parentPath}.${fieldName}` : fieldName;
          const fieldError = errors[fieldName];
          
          // Handle array of strings (error messages)
          if (Array.isArray(fieldError) && typeof fieldError[0] === "string") {
            setError(currentPath, {
              type: "server",
              message: fieldError[0],
            },{shouldFocus: true});
          } 
          // Handle array of objects (nested array errors)
          else if (Array.isArray(fieldError)) {
            fieldError.forEach((item: any, index: number) => {
              if (item && typeof item === "object" && Object.keys(item).length > 0) {
                setNestedErrors(item, `${currentPath}.${index}`);
              }
            });
          }
          // Handle nested objects recursively
          else if (typeof fieldError === "object" && fieldError !== null) {
            setNestedErrors(fieldError, currentPath);
          }
        }
      };
      
      setNestedErrors(errorResponse.data);
    } 
    // Case 3: If no setError, show toast with first error found
    else {
      const firstError = getFirstError(errorResponse.data);
      if (firstError && showToastForGeneralError) {
        toast.error(firstError);
      }
    }
  } 
  // Fallback for unexpected error structures
  else {
    if (showToastForGeneralError) {
      if (errorResponse?.detail) {
        toast.error(errorResponse.detail);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  }
};



function formatBytes(bytes: number, opts: { mode?: "IEC" | "SI", decimals?: number } = {}) {
  const { mode = "IEC", decimals = 2 } = opts;
  const thresh = mode === "SI" ? 1000 : 1024;
  if (!Number.isFinite(bytes)) return "NaN";
  if (Math.abs(bytes) < thresh) return `${bytes} B`;

  const units = mode === "SI"
    ? ["KB","MB","GB","TB","PB","EB","ZB","YB"]
    : ["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];

  let u = -1;
  let v = bytes;
  const r = 10 ** decimals;

  do {
    v /= thresh;
    u++;
  } while (Math.round(Math.abs(v) * r) / r >= thresh && u < units.length - 1);

  return `${v.toFixed(decimals)} ${units[u]}`;
}

function getPlainTextWithMentions(delta: any) {
  let plainText = "";
  delta.ops.forEach((op: any) => {
    if (typeof op.insert === "string") {
      plainText += op.insert;
    } else if (op.insert.mention) {
      // op.insert.mention.value holds the mention text
      plainText += `${op.insert.mention.value}`;
    }
  });
  return plainText.trim();
}

// number to USD
const convertToUSD = (amount: number) => {
  return  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

const milliToHumanize = (timestamp: number) =>{
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return  date.toLocaleString("en-IN", options).replace(",", "");
}

const mutatePhone = (phone: string, removeCountryCode = false) => {
  if (removeCountryCode) {
    return phone.slice(3);
  }
  return `+91${phone}`;
}


export { getFileNameFromUrl, handleApiError, formatBytes, getPlainTextWithMentions, convertToUSD, milliToHumanize, mutatePhone };
