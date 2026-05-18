import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "#components/ui/calendar"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "#components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "#components/ui/popover"

function formatDate(date) {
    if (!date) {
        return ""
    }
    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    })
}
export default function DatePicker({ fieldName, subFieldName, value, onChange, error }) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState(undefined)
  const [month, setMonth] = React.useState(undefined)
  const selectedDate = value ?? date
  const displayValue = formatDate(selectedDate)
  const errorClassName = error ? "border-red-500" : "border-black"
    
  return (<div>
        {/* Field Name */}
      <div className="pb-2">
        <h1 className="text-sm ">
          {fieldName}
          {subFieldName && (
            <span className="text-[10px] ml-2">{subFieldName}</span>
          )}
          <span className="text-[#E9222E] ml-2">*</span>
        </h1>
      </div>

      {/* Input */}
     <InputGroup className={`h-10 w-full min-w-0 rounded-lg border ${errorClassName} bg-transparent`}>
        <InputGroupInput
          id="date-required"
       value={displayValue}
          placeholder="June 01, 2025"
          readOnly
          className="h-10 w-full min-w-0 rounded-lg border-0 bg-transparent px-2.5 py-1 text-base outline-none placeholder:text-muted-foreground focus-visible:outline-none"
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpen(true)
            }
          }}
          onClick={() => setOpen(true)}
        />
        <InputGroupAddon align="inline-end">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <InputGroupButton id="date-picker" variant="ghost" size="icon-xs" aria-label="Select date">
                <CalendarIcon />
                <span className="sr-only">Select date</span>
              </InputGroupButton>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0 border border-black ring-0!"
              align="end"
              alignOffset={-8}
              sideOffset={10}
            >
              <Calendar 
                mode="single"
                selected={date}
                month={month}
                onMonthChange={setMonth}
                onSelect={(date) => {
                  setDate(date)
                  onChange?.(date)
                  setOpen(false)
                }}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>)
}