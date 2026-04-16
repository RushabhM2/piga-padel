import { Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export enum AuthTab {
  Phone = 'phone',
  Email = 'email',
}

interface AuthTabSwitcherProps {
  activeTab: AuthTab;
  onChange: (tab: AuthTab) => void;
}

const tabs: { id: AuthTab; label: string; Icon: typeof Phone }[] = [
  { id: AuthTab.Phone, label: 'Phone', Icon: Phone },
  { id: AuthTab.Email, label: 'Email', Icon: Mail },
];

export function AuthTabSwitcher({ activeTab, onChange }: AuthTabSwitcherProps) {
  return (
    <div className="flex bg-[var(--muted)] rounded-full p-1 mb-6">
      {tabs.map(({ id, label, Icon }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={cn(
            'flex flex-1 items-center justify-center gap-2 rounded-full py-2 text-sm font-medium transition-all',
            activeTab === id
              ? 'bg-white shadow text-[var(--foreground)]'
              : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
          )}
        >
          <Icon size={16} />
          {label}
        </button>
      ))}
    </div>
  );
}
