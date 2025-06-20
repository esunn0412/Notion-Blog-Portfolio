import { Briefcase, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contactItems = [
  {
    icon: Briefcase,
    title: 'Opportunities',
    description: 'For jobs, internships, or freelance roles.',
    mailto: {
      email: 'taeeunk1208@gmail.com',
      subject: '[Opportunity]',
      body: 'Position or Opportunity Type:\nCompany / Organization:\nDetails / Responsibilities:\nTimeline or Duration:',
    },
  },
  {
    icon: MessageSquare,
    title: 'Inquiries',
    description: 'For mentoring, study groups, events, or general questions.',
    mailto: {
      email: 'taeeunk1208@gmail.com',
      subject: '[General Inquiry]',
      body: 'Topic or Question:\nContext / Background:\nPreferred Timeline:\nOther Notes:',
    },
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="container mx-auto max-w-2xl scroll-mt-[var(--header-height)] py-20"
    >
      <Card className="bg-background caret-transparent shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl tracking-tight">Contact Me!</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {contactItems.map((item, index) => (
              <a
                key={index}
                href={`mailto:${item.mailto.email}?subject=${encodeURIComponent(
                  item.mailto.subject
                )}&body=${encodeURIComponent(item.mailto.body)}`}
                className="group bg-primary/5 hover:bg-muted flex items-start gap-4 rounded-lg p-3 transition-colors"
              >
                <div className="bg-primary/20 text-primary flex shrink-0 items-center justify-center rounded-md p-1.5">
                  <item.icon className="size-4" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
