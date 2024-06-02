import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

const listeners: Set<(data: string) => void> = new Set();
export function toast({ data }: { data: string }) {
  listeners.forEach((fn) => fn.call(null, data));
}

export function Toast() {
  const [message, setMessage] = useState<string | undefined>(undefined);
  useEffect(() => {
    const fn = (data: string) => {
      setMessage(data);
    };
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  }, []);
  return (
    <Snackbar
      key={message}
      open={!!message}
      autoHideDuration={6000}
      onClose={() => {
        setMessage(undefined);
      }}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      message={message}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={() => {
            setMessage(undefined);
          }}
        >
          <CloseIcon />
        </IconButton>
      }
    />
  );
}
