import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/taeeunnkim/',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/esunn0412',
  },
  {
    icon: FileText,
    href: '/resume.pdf',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/taeeun.k__/',
  },
];

export default function ProfileSection() {
  return (
    <Card className="bg-background sticky top-[var(--sticky-top)] caret-transparent shadow-lg">
      <CardContent className="pt-6">
        <div className="space-y-4 caret-transparent">
          <div className="flex justify-center">
            <div className="bg-muted rounded-full p-2">
              <div className="h-36 w-36 overflow-hidden rounded-full">
                <Image
                  src="/images/tk.png"
                  alt="김태은"
                  width={144}
                  height={144}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold">김태은</h3>
            <p className="text-primary text-sm">Full Stack Developer</p>
          </div>

          <div className="flex justify-center gap-2">
            {socialLinks.map((item, index) => (
              <Button key={index} variant="ghost" className="bg-primary/10" size="icon" asChild>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <item.icon className="size-4" />
                </a>
              </Button>
            ))}
          </div>

          <p className="bg-primary/10 rounded p-2 text-center text-sm">2학년 학생 개발자</p>
        </div>
      </CardContent>
    </Card>
  );
}
