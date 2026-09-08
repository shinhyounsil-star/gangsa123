"use client";
import { FormEvent } from "react";
import { siteData } from "./site-data";

export default function InquiryForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = ["강의 상담을 신청합니다.", "", ...["이름","연락처","기관명","인원","희망일","장소","예산","관심강의","문의내용"].map(k => `${k}: ${data.get(k) || "-"}`)].join("\n");
    window.location.href = `mailto:${siteData.email}?subject=${encodeURIComponent(`[강의 상담] ${data.get("기관명") || data.get("이름")}`)}&body=${encodeURIComponent(body)}`;
  }
  return (
    <form className="inquiry-form" onSubmit={submit}>
      <div className="form-grid">
        <label>이름 또는 담당자명 *<input name="이름" required placeholder="홍길동" /></label>
        <label>연락처 *<input name="연락처" required inputMode="tel" placeholder="010-0000-0000" /></label>
        <label>기관명<input name="기관명" placeholder="기관·회사명을 입력하세요" /></label>
        <label>예상 인원<input name="인원" placeholder="예: 20명" /></label>
        <label>희망일<input name="희망일" type="date" /></label>
        <label>강의 장소<input name="장소" placeholder="지역 또는 온라인" /></label>
        <label>예산 범위<input name="예산" placeholder="예: 50만원 내외" /></label>
        <label>관심 강의<select name="관심강의" defaultValue=""><option value="" disabled>강의를 선택하세요</option>{siteData.lectures.map(l => <option key={l.title}>{l.title}</option>)}<option>기타 / 맞춤 강의</option></select></label>
      </div>
      <label>문의 내용<textarea name="문의내용" rows={4} placeholder="교육 대상과 원하는 내용을 자유롭게 적어주세요." /></label>
      <p className="privacy-note">입력하신 내용은 상담과 견적 안내 목적으로만 사용됩니다.</p>
      <button type="submit">이메일로 상담 신청하기</button>
    </form>
  );
}
