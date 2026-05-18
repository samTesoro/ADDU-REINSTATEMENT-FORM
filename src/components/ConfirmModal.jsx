import { Button } from "#components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "#components/ui/dialog";

export function DialogDemo({ onConfirm, triggerClassName }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onConfirm?.();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          style={{ backgroundColor: "#2F3590" }}
          className={triggerClassName ?? "text-white w-40 h-10"}
        >
          Submit
        </Button>
      </DialogTrigger>
  <DialogContent className="w-112.5 h-55 p-6.25 rounded-lg border-2 border-gray-300">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="mb-auto">
            <DialogTitle className="text-2xl font-semibold text-black">
              Confirmation
            </DialogTitle>
            <DialogDescription className="text-base text-gray-700">
              Are you sure you want to continue with this action? This action
              cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-between gap-2 bg-transparent mt-6">
            <DialogClose asChild>
              <Button variant="outline" className="px-6">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-blue-600 text-white px-6 hover:bg-blue-700"
            >
              Confirm
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
