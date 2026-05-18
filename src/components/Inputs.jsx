import { Input } from "#components/ui/input";

export default function Inputs({
  fieldName,
  subFieldName,
  placeholder,
  className = "",
  isTextarea = false,
  isSelect = false,
  options = [],
  value,
  onChange,
  onBlur,
  name,
  type = "text",
  error,
}) {
  const baseClassName = "w-full min-w-0 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50";
  const errorClassName = error ? "border-red-500 focus-visible:border-red-500" : "border-black focus-visible:border-black";

  return (
    <div className={className}>
      <div className="pb-2">
        <h1 className="text-sm">
          {fieldName}
          {subFieldName && (
            <span className="text-[10px] ml-2">{subFieldName}</span>
          )}
          <span className="text-[#E9222E] ml-2">*</span>
        </h1>
      </div>

      {isTextarea ? (
        <textarea
          placeholder={placeholder}
          rows={5}
          className={`${baseClassName} ${errorClassName} resize-none`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
      ) : isSelect ? (
        <select
          className={`h-10 ${baseClassName} ${errorClassName}`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <Input
          placeholder={placeholder}
          className={`h-10 ${errorClassName}`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          type={type}
        />
      )}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
