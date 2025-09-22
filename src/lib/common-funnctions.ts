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
    }
    // Case 2: Field-specific errors (e.g., email, password)
    else {
      for (const fieldName in errorResponse.data) {
        if (Array.isArray(errorResponse.data[fieldName])) {
          if (setError) {
            // Assuming the first error message is sufficient for the field
            setError(fieldName, {
              type: "server",
              message: errorResponse.data[fieldName][0],
            });
          }
        }
      }
    }
  } else {
    // Fallback for unexpected error structures
    if (showToastForGeneralError) {
      if(errorResponse?.detail){
        toast.error(errorResponse?.detail);
      }else {
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


export { getFileNameFromUrl, handleApiError, formatBytes, getPlainTextWithMentions, convertToUSD, milliToHumanize };
