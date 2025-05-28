import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>블로그 제목</CardTitle>
          <CardDescription>간단한 더미 블로그 설명입니다. </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
