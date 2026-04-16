import { ArrowRight } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EmailFormProps {
  email: string;
  password: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

export function EmailForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: EmailFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <Label htmlFor="email">Email Address</Label>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        placeholder="you@example.com"
        className="mb-4"
      />

      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        type="password"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        placeholder="••••••••"
        className="mb-4"
      />

      <Button type="submit" fullWidth>
        Sign In <ArrowRight size={16} />
      </Button>

      <div className="flex items-center gap-3 my-4">
        <div className="flex-1 h-px bg-[var(--border)]" />
        <span className="text-xs text-[var(--muted-foreground)]">or continue with</span>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="flex gap-3">
        <Button type="button" variant="outline" fullWidth className="font-medium normal-case tracking-normal">
          <FcGoogle size={18} /> Google
        </Button>
        <Button type="button" variant="outline" fullWidth className="font-medium normal-case tracking-normal">
          <FaFacebook size={18} className="text-[#1877F2]" /> Facebook
        </Button>
      </div>
    </form>
  );
}
