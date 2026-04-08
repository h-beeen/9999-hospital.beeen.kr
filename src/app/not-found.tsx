import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center pt-[56px] lg:pt-[72px]">
      <Container>
        <div className="mx-auto max-w-md py-20 text-center">
          {/* 404 number */}
          <span className="text-[120px] font-extrabold leading-none text-border md:text-[160px]">
            404
          </span>

          <h1 className="mt-4 text-2xl font-bold text-primary md:text-3xl">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-secondary md:text-[15px]">
            요청하신 페이지가 존재하지 않거나,
            <br />
            이동되었을 수 있습니다.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="/" variant="primary" size="lg">
              홈으로 돌아가기
            </Button>
            <Button href="/departments" variant="secondary" size="lg">
              진료과목 보기
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
