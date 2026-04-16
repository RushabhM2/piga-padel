'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface PhoneFormProps {
  phone: string;
  onChange: (value: string) => void;
}

export function PhoneForm({ phone, onChange }: PhoneFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/send-code`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone: `+254${phone}` }),
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message ?? 'Something went wrong');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <CheckCircle className="text-[var(--primary)]" size={40} />
        <p className="font-semibold text-[var(--foreground)]">You're in the system!</p>
        <p className="text-sm text-[var(--muted-foreground)]">
          OTP verification coming soon. Your number <span className="font-medium">+254{phone}</span> has been saved.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="phone">Phone Number</Label>
      <div className="flex gap-2 mb-4">
        <div className="flex items-center justify-center bg-white border border-[var(--border)] rounded-lg px-3 text-sm font-medium text-[var(--foreground)] select-none whitespace-nowrap">
          +254
        </div>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => onChange(e.target.value)}
          placeholder="712 345 678"
          disabled={status === 'loading'}
        />
      </div>

      {status === 'error' && (
        <p className="text-xs text-red-500 mb-3">{errorMessage}</p>
      )}

      <Button type="submit" fullWidth disabled={status === 'loading' || !phone}>
        {status === 'loading' ? (
          <><Loader2 size={16} className="animate-spin" /> Sending...</>
        ) : (
          <>Send Code <ArrowRight size={16} /></>
        )}
      </Button>
    </form>
  );
}
