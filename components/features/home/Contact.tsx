import ContactData from '@/data/ContactData';
import { ContactType } from '@/types';

// Unified contact item component
const ContactItem = ({ item, index }: { item: ContactType; index: number }) => {
  const Icon = item.icon;

  const getHref = () => {
    if (item.type === 'email' && item.mailto) {
      return `mailto:${item.mailto.email}?subject=${encodeURIComponent(
        item.mailto.subject
      )}&body=${encodeURIComponent(item.mailto.body)}`;
    }
    return item.href;
  };

  const linkProps = item.type === 'social' ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a
      key={index}
      href={getHref()}
      {...linkProps}
      className="group border-border flex flex-col gap-2 rounded-lg border p-4 transition-all hover:border-[var(--highlight)]/80"
    >
      <div className="text-primary flex items-center gap-2 group-hover:text-[var(--highlight)]/80">
        <Icon className="size-4" />
        <h3 className="font-medium">{item.title}</h3>
      </div>
      <p className="text-muted-foreground text-xs">{item.description}</p>
    </a>
  );
};

export default function Contact() {
  const emails = ContactData.filter((item) => item.type === 'email');
  const socials = ContactData.filter((item) => item.type === 'social');

  const ContactGrid = ({ items }: { items: ContactType[] }) => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item, index) => (
        <ContactItem key={index} item={item} index={index} />
      ))}
    </div>
  );

  return (
    <section
      id="contact"
      className="container mx-auto max-w-2xl scroll-mt-[var(--header-height)] py-20"
    >
      <h2 className="mb-8 text-2xl tracking-tight">Contact Me</h2>
      <div className="space-y-8">
        {/* Email Contacts */}
        <div className="space-y-4">
          <h4 className="text-muted-foreground text-sm font-semibold">Email</h4>
          <ContactGrid items={emails} />
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h4 className="text-muted-foreground text-sm font-semibold">Social Media</h4>
          <ContactGrid items={socials} />
        </div>
      </div>
    </section>
  );
}
