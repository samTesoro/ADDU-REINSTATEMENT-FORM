import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#components/ui/select";
export default function DropDown({
  fieldName,
  subFieldName,
  placeholder = "Select an option",
  options = [],
  value,
  onValueChange,
  error,
}) {
  const errorClassName = error ? "border-red-500 focus-visible:border-red-500" : "border-black focus-visible:border-black";

  return (
    <div>
      <div className="pb-2">
        <h1 className="text-sm">
          {fieldName}
          {subFieldName && (
            <span className="text-[10px] ml-2">{subFieldName}</span>
          )}
          <span className="text-[#E9222E] ml-2">*</span>
        </h1>
      </div>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger
          id="form-country"
          className={`h-10! w-full ${errorClassName} bg-transparent px-2.5 py-1 text-sm leading-normal data-placeholder:text-muted-foreground`}
        >
          <SelectValue placeholder={placeholder} className="text-sm" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}