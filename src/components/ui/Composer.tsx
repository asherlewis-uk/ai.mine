import type { FormEvent, ReactNode, TextareaHTMLAttributes } from "react";
import { useId, useState } from "react";

import { cn } from "@/lib/cn";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

type ComposerProps = {
  ariaLabel?: string;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
  footerContent?: ReactNode;
  isSending?: boolean;
  leadingAccessory?: ReactNode;
  onSubmit?: () => void;
  placeholder?: string;
  submitLabel?: string;
  textareaProps?: Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "disabled" | "onChange" | "placeholder" | "value"
  >;
};

export function Composer({
  ariaLabel = "Compose message",
  className,
  disabled = false,
  footerContent,
  isSending = false,
  leadingAccessory,
  onSubmit,
  onValueChange,
  placeholder = "Start a local-first thought…",
  submitLabel = "Send",
  textareaProps,
  value,
}: ComposerProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hintId = useId();
  const isReady = value.trim().length > 0;

  const state = disabled
    ? "disabled"
    : isSending
      ? "sending"
      : isFocused
        ? isReady
          ? "ready"
          : "focused"
        : isReady
          ? "ready"
          : "idle";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!onSubmit || disabled || isSending || !isReady) {
      return;
    }

    onSubmit();
  }

  return (
    <form
      className={cn("glass-composer p-4 sm:p-5", className)}
      data-state={state}
      onSubmit={handleSubmit}
    >
      <div className="flex items-start gap-3">
        {leadingAccessory ? (
          <div className="pt-1 text-text-secondary">{leadingAccessory}</div>
        ) : null}
        <textarea
          aria-label={ariaLabel}
          aria-describedby={footerContent ? hintId : undefined}
          className="composer-input text-[0.98rem] leading-7"
          disabled={disabled}
          onBlur={() => setIsFocused(false)}
          onChange={(event) => onValueChange(event.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          value={value}
          {...textareaProps}
        />
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/8 pt-4">
        <div
          className="min-w-0 text-[0.72rem] uppercase tracking-[0.2em] text-text-tertiary"
          id={footerContent ? hintId : undefined}
        >
          {footerContent ?? "Composer"}
        </div>
        <PrimaryButton
          disabled={!isReady || disabled || isSending}
          emphasis={isReady || isSending ? "active" : "idle"}
          loading={isSending}
          type="submit"
        >
          {isSending ? "Sending" : submitLabel}
        </PrimaryButton>
      </div>
    </form>
  );
}
