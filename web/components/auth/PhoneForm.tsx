import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PhoneFormProps {
  phone: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

export function PhoneForm({ phone, onChange, onSubmit }: PhoneFormProps) {
  return (
    <form onSubmit={onSubmit}>
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
        />
      </div>
      <Button type="submit" fullWidth>
        Send Code <ArrowRight size={16} />
      </Button>
    </form>
  );
}
