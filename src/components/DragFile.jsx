import { Upload, X, File } from "lucide-react";
import { useState } from "react";
import { Button } from "#components/ui/button.jsx";

const DragFile = ({ maxFiles = 5, maxSize = 50 * 1024 * 1024 }) => {
  const [files, setFiles] = useState([]);
  const [isDragActive, setIsDragActive] = useState(false);

  // Format file size for display
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  // Handle drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    const droppedFiles = [...e.dataTransfer.files];
    handleFiles(droppedFiles);
  };

  // Handle file input change
  const handleChange = (e) => {
    const selectedFiles = [...e.target.files];
    handleFiles(selectedFiles);
  };

  // Validate and add files
  const handleFiles = (newFiles) => {
    const validFiles = newFiles.filter((file) => {
      // Check file size
      if (file.size > maxSize) {
        alert(`File "${file.name}" is too large. Max size is ${formatFileSize(maxSize)}`);
        return false;
      }
      return true;
    });

    // Check total file count
    if (files.length + validFiles.length > maxFiles) {
      alert(`Maximum ${maxFiles} files allowed. You have ${files.length} file(s) already.`);
      return;
    }

    setFiles([...files, ...validFiles]);
  };

  // Remove file
  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  // Clear all files
  const clearFiles = () => {
    setFiles([]);
  };

  return (
    <div className="w-full">
      {/* Dropzone */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`relative rounded-lg border-2 border-dashed transition-colors ${
          isDragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 bg-gray-50 hover:border-gray-400"
        }`}
      >
        <div className="flex flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
          <div className="rounded-full bg-blue-100 p-3 sm:p-4 mb-3 sm:mb-4">
            <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
          </div>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
            Upload your documents
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            Drag and drop your files here or click to browse
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Up to {maxFiles} file{maxFiles > 1 ? "s" : ""}, {formatFileSize(maxSize)} each
          </p>

          {/* Hidden input */}
          <input
            type="file"
            id="file-input"
            multiple
            onChange={handleChange}
            className="hidden"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.xlsx,.xls"
          />

          <label htmlFor="file-input" className="cursor-pointer">
            <Button 
              style={{ backgroundColor: "#2F3590" }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm sm:text-base"
            >
              Browse Files
            </Button>
          </label>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-4 sm:mt-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Selected files ({files.length}/{maxFiles})
          </h4>

          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <File className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFile(index)}
                  className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                  aria-label="Remove file"
                >
                  <X className="w-4 h-4 text-gray-600 hover:text-gray-900" />
                </button>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <Button
              onClick={clearFiles}
              variant="outline"
              className="flex-1"
            >
              Clear All
            </Button>
            <Button
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            >
              Upload Files
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DragFile;