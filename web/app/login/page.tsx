'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { AuthTabSwitcher } from '@/components/auth/AuthTabSwitcher';
import { PhoneForm } from '@/components/auth/PhoneForm';
import { EmailForm } from '@/components/auth/EmailForm';
import { AuthTab } from '@/types/auth';

export default function LoginPage() {
  const [tab, setTab] = useState<AuthTab>(AuthTab.Phone);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePhoneSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: call send-OTP API
  }

  function handleEmailSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: call sign-in API
  }

  return (
    <div className="min-h-screen flex bg-[var(--background)]">
      {/* Left panel — desktop only */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col items-center justify-center p-12 overflow-hidden">
        <Star
          className="absolute top-10 left-10 fill-[var(--primary)] text-[var(--primary)]"
          size={40}
        />
        <div className="absolute bottom-20 right-16 w-10 h-10 bg-[var(--color-primary-light,#b5d96e)] rotate-45 rounded-sm opacity-70" />

        {/* Hero image oval — replace src with /images/hero.jpg */}
        <div className="relative w-72 h-96 rounded-[40%_40%_50%_50%/30%_30%_60%_60%] overflow-hidden border-4 border-white shadow-xl bg-[#c8d9a0] flex items-center justify-center text-[var(--primary)] text-sm font-medium">
          Hero image
        </div>

        <div className="absolute bottom-28 left-10 flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
          <span className="text-[var(--primary)] text-base">⛳</span>
          <div className="leading-tight">
            <p className="font-bold text-xs text-[var(--foreground)]">50+ Courts</p>
            <p className="text-[10px] text-[var(--muted-foreground)]">Across Kenya</p>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex flex-1 flex-col items-center justify-center p-6 lg:bg-white">
        {/* Mobile avatar */}
        <div className="lg:hidden mb-6 relative">
          <Star
            className="absolute -top-4 -right-8 fill-[var(--primary)] text-[var(--primary)]"
            size={28}
          />
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-[#c8d9a0] flex items-center justify-center text-[var(--primary)] text-xs">
            Photo
          </div>
        </div>

        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-black tracking-tight text-[var(--foreground)] mb-1 leading-tight">
            PLAY ANYTIME,{' '}
            <span className="text-[var(--primary)]">ANYWHERE</span>
          </h1>
          <p className="text-sm text-[var(--muted-foreground)] mb-6">
            Book your favourite padel court in Kenya with just a few taps.
          </p>

          <AuthTabSwitcher activeTab={tab} onChange={setTab} />

          {tab === AuthTab.Phone ? (
            <PhoneForm phone={phone} onChange={setPhone} onSubmit={handlePhoneSubmit} />
          ) : (
            <EmailForm
              email={email}
              password={password}
              onEmailChange={setEmail}
              onPasswordChange={setPassword}
              onSubmit={handleEmailSubmit}
            />
          )}

          <p className="mt-5 text-center text-[11px] text-[var(--muted-foreground)]">
            By continuing, you agree to our{' '}
            <a href="#" className="underline hover:text-[var(--foreground)]">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="underline hover:text-[var(--foreground)]">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}
