import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Megaphone, HandshakeIcon } from 'lucide-react';

const contactItems = [
  {
    icon: Megaphone,
    title: '협업 / 프로젝트',
    description: '학생 프로젝트, 콘텐츠 제작, 홍보 협업',
    mailto: {
      email: 'taeeunk1208@gmail.com',
      subject: '[협업 제안]',
      body: '프로젝트/브랜드명:\n제안 내용:\n예상 기간:\n기대 효과:',
    },
  },
  {
    icon: BookOpen,
    title: '스터디 / 멘토링',
    description: '기술 스터디, 멘토링, 세미나 참여 요청',
    mailto: {
      email: 'taeeunk1208@gmail.com',
      subject: '[스터디/멘토링 문의]',
      body: '주제:\n인원/소속:\n희망 일정:\n기타 문의:',
    },
  },
  {
    icon: HandshakeIcon,
    title: '기타 문의',
    description: '인터뷰, 커리어 상담, 기타 제안',
    mailto: {
      email: 'taeeunk1208@gmail.com',
      subject: '[기타 문의]',
      body: '문의 종류:\n내용:\n관련 배경:',
    },
  },
];

export default function TagSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>문의하기</CardTitle>
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
  );
}
