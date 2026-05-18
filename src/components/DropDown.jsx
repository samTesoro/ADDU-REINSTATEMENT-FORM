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
}) {

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
      <Select defaultValue="" className="">
        <SelectTrigger
          id="form-country"
          className="h-10! w-full border-black bg-transparent px-2.5 py-1 text-sm leading-normal data-placeholder:text-muted-foreground"
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
    </div>
  );
}