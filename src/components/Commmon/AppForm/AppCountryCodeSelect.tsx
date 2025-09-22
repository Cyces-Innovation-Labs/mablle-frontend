"use client";
import React, { useState, useMemo, useCallback } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { ChevronDown, CheckIcon, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useController, type Control } from "react-hook-form";

// Country interface
export interface CountryCode {
  label?: string;
  value?: string;
  id?: string | number;
  identity?: string;
  name?: string;
  icon?: React.ReactNode;
  image?: string;
}

// Dropdown props
interface AppCountryCodeSelectProps {
  options?: CountryCode[];
  onChange?: (country: CountryCode) => void;
  defaultValue?: string;
  disabled?: boolean;
  placeholder?: string;
  slim?: boolean;
  value?: CountryCode;
  control?: Control<any>;
  name: string;
}



const AppCountryCodeSelect = ({
  options = [],
  // onChange,
  name,
  disabled = false,
  placeholder = "Select a country",
  slim = false,
  control,
}: AppCountryCodeSelectProps) => {


  const { field: { value, onChange }, } = useController({
    control,
    name,
  });

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return options.filter(
      (opt) =>
        opt.label?.toLowerCase().includes(search.toLowerCase()) ||
        opt.value?.toLowerCase().includes(search.toLowerCase())
    );
  }, [options, search, value]);

  const handleSelect = useCallback(
    (country: CountryCode) => {
      onChange(country?.value);
      setOpen(false);
    },
    [onChange, setOpen]
  );

  const selectedCountry = useMemo(() => {
    return options.find((opt) => opt.value === (value?.value || value));
  }, [options, value]);

  const triggerClasses = cn(
    "flex h-[43px] w-fit items-center justify-between rounded-md border px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
    slim && "w-20"
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={triggerClasses} disabled={disabled}>
        {value ? (
          <div className="flex items-center gap-2 overflow-hidden">
            {selectedCountry?.image && (
              <img
                src={selectedCountry.image}
                alt={selectedCountry.value}
                className="w-4 h-4 rounded-full"
              />
            )}
            <span>({selectedCountry?.value})</span>
          </div>
        ) : (
          <span>{slim ? <Globe size={18} /> : placeholder}</span>
        )}
        <ChevronDown size={16} />
      </PopoverTrigger>
      <PopoverContent className="w-[260px] p-2 max-h-[300px] overflow-y-auto">
        <Input
          placeholder="Search country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-2"
        />
        {filtered.length === 0 ? (
          <div className="text-sm text-muted-foreground">No country found.</div>
        ) : (
          <div className="space-y-1">
            {filtered.map((opt) => (
              <div
              //@ts-expect-error TODO
                key={`${opt.value + opt.label}`}
                onClick={() => handleSelect(opt)}
                className={cn(
                  "flex items-center justify-between gap-2 p-2 rounded cursor-pointer hover:bg-accent",
                  value?.value === opt.value && "bg-accent"
                )}
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  {opt.image && (
                    <img
                      src={opt.image}
                      alt={opt.label}
                      className="w-4 h-4 rounded-full"
                    />
                  )}
                  <span className="truncate"> ({opt.value})</span>
                </div>
                {value?.value === opt.value && <CheckIcon className="w-4 h-4 text-primary" />}
              </div>
            ))}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default AppCountryCodeSelect;
