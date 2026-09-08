import InquiryForm from "./InquiryForm";
import { siteData } from "./site-data";

const careers = [
  ["학력", "고려대학교 전기공학 석사"],
  ["경영", "연세대학교 마케팅 최고경영자과정 수료"],
  ["기업", "LG전자 공조기사업부장 · Carrier 국내 영업담당 임원"],
  ["교육", "잠실 교연학원 원장 · 중앙덕음외듀원 원장"],
  ["현재", "해피드림 AI교육단장 · 한국음악교육협회 AI교육이사"],
  ["강의", "한국AI콘텐츠연구소 전임강사"],
];

const credentials = [
  "생성형 AI 활용전문가", "Gemini 공인 교육 전문가", "프롬프트엔지니어 1급",
  "ChatGPT 전문가 1급", "인공지능(AI)전문가 1급", "AI마케팅활용전문가 1급",
  "AI 지도사", "마케팅 지도사", "리크리에이션 강사", "색소폰 지도사 1·2급", "에어로폰 지도사 1·2급", "마술 지도사 2급",
];

const lecturesDone = [
  "한국음악협회 — AI 실무 및 AI 음악 활용법",
  "하남시 덕풍동 문화센터 — 시니어 AI 활용계획",
  "미사노인종합복지관 — 시니어 스마트폰 및 AI 활용계획",
  "서울시 강동구 새꿈교회 — 스마트폰 및 AI 활용 교육",
  "LG전자 전국 공조기 전문점 사장단 — 마케팅 실무 교육",
  "Carrier Dealer 사장단 — 마케팅 실무 교육",
  "해피드림뮤직 — AI 기초이론 강좌",
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top"><span>SHIN HYUN SIL</span>신현실 AI 교육</a>
      <nav aria-label="주요 메뉴"><a href="#programs">강의 프로그램</a><a href="#about">강사 소개</a><a href="#experience">강의 경력</a></nav>
      <a className="header-call" href="#contact">강의 문의</a>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">AI PRACTICAL EDUCATOR</p>
        <h1>기술은 쉽게,<br/>배움은 <em>가치 있게.</em></h1>
        <p className="hero-lead">AI와 데이터로 사람의 성장을 돕는 실전형 강사 신현실입니다. 복잡한 기술을 쉬운 언어로 풀어, 오늘 배운 내용을 업무와 일상에 바로 적용할 수 있게 안내합니다.</p>
        <div className="hero-actions"><a className="primary-button" href="#contact">강의 상담하기</a><a className="text-button" href="#programs">프로그램 살펴보기 <span>↗</span></a></div>
        <div className="proof"><div><strong>11+</strong><span>전문 자격</span></div><div><strong>3</strong><span>핵심 AI 과정</span></div><div><strong>기업·기관</strong><span>맞춤형 출강</span></div></div>
      </div>
      <div className="hero-visual"><div className="portrait-frame"><img src="/profile-main.png" alt="AI 실전 활용 전문강사 신현실" /></div><div className="floating-card"><span>한국AI콘텐츠연구소</span><strong>전임강사 신현실</strong><small>AI 실전 활용 · 콘텐츠 활용 전문</small></div></div>
    </section>

    <section className="promise"><p>“초보자도 바로 따라 할 수 있도록, 직접 경험하고 검증한 내용만 엄선해 전합니다.”</p><div><span>쉬운 설명</span><span>실무 중심</span><span>공감과 소통</span><span>지속 가능한 성장</span></div></section>

    <section className="section programs" id="programs">
      <div className="section-heading"><div><p className="section-kicker">SIGNATURE PROGRAMS</p><h2>배우고, 직접 해보고,<br/>내 것으로 만드는 강의</h2></div><p>기관의 교육 목적과 참여자의 디지털 활용 수준에 맞춰 내용과 난이도를 조정합니다. 기본 2시간 실습형 과정부터 맞춤형 연속 과정까지 상담 가능합니다.</p></div>
      <div className="lecture-grid">{siteData.lectures.map((lecture, i) => <article className="lecture-card" key={lecture.title}><div className="card-number">0{i+1}</div><span className="tag">{lecture.tag}</span><h3>{lecture.title}</h3><p>{lecture.description}</p><ul>{lecture.points.map(p => <li key={p}>{p}</li>)}</ul><a href="#contact">이 과정 문의하기 <span>→</span></a></article>)}</div>
      <div className="topic-strip"><strong>함께 다루는 주제</strong><span>프롬프트 활용법(PATS)</span><span>이미지 생성</span><span>글쓰기</span><span>심층 리서치</span><span>Canvas</span><span>AI 음악</span></div>
    </section>

    <section className="about" id="about">
      <div className="about-photo"><img src="/profile-career.png" alt="신현실 강사 프로필" /><p><strong>신현실</strong><span>해피드림뮤직 대표 · 한국AI콘텐츠연구소 전임강사</span></p></div>
      <div className="about-copy"><p className="section-kicker">ABOUT THE LECTURER</p><h2>기술과 사람 사이를<br/>따뜻하게 잇습니다.</h2><p className="about-lead">교사 연수, 학부모 교육, 시니어 디지털 교육과 기업 실무교육까지. 현장에서 바로 활용할 수 있는 교육을 설계합니다.</p><div className="career-list">{careers.map(([label, value]) => <div key={value}><span>{label}</span><p>{value}</p></div>)}</div></div>
    </section>

    <section className="credentials section"><div className="credentials-intro"><p className="section-kicker">CERTIFICATIONS</p><h2>배움을 멈추지 않는<br/>검증된 전문성</h2><p>AI부터 마케팅, 음악과 소통까지 다양한 전문성을 한 수업 안에 유기적으로 연결합니다.</p></div><div className="credential-grid">{credentials.map((item, i)=><div key={item}><b>{String(i+1).padStart(2,"0")}</b><span>{item}</span></div>)}</div></section>

    <section className="experience" id="experience"><div className="experience-head"><p className="section-kicker">LECTURE EXPERIENCE</p><h2>기업과 지역사회에서<br/>쌓아온 강의 경험</h2><p>수강생의 눈높이와 기관의 목적을 먼저 듣고, 가장 필요한 실습을 중심으로 구성합니다.</p></div><ol>{lecturesDone.map((item,i)=><li key={item}><span>{String(i+1).padStart(2,"0")}</span><p>{item}</p></li>)}</ol></section>

    <section className="process section"><p className="section-kicker">HOW IT WORKS</p><h2>문의부터 강의까지</h2><div className="steps">{[["01","상담 접수"],["02","대상·목적 확인"],["03","맞춤 제안·견적"],["04","강의 진행"],["05","피드백·정산"]].map(([n,s])=><div key={n}><b>{n}</b><span>{s}</span></div>)}</div></section>

    <section className="contact-section" id="contact"><div className="contact-copy"><p className="section-kicker">LECTURE INQUIRY</p><h2>우리 기관에 꼭 맞는<br/>AI 교육을 시작하세요.</h2><p>대상, 인원, 희망 일정과 관심 주제를 남겨주시면 확인 후 연락드리겠습니다.</p><div className="contact-links"><a href={`tel:${siteData.phone}`}><small>PHONE</small><strong>{siteData.phone}</strong></a><a href={`mailto:${siteData.email}`}><small>EMAIL</small><strong>{siteData.email}</strong></a><a href={siteData.kakao} target="_blank" rel="noreferrer"><small>KAKAO TALK</small><strong>오픈채팅으로 문의하기 ↗</strong></a></div></div><InquiryForm /></section>
    <footer><div><strong>신현실 AI 교육</strong><span>AI를 쉽게, 배움은 가치 있게.</span></div><p>© 2026 SHIN HYUN SIL. ALL RIGHTS RESERVED.</p><a href="#top">맨 위로 ↑</a></footer>
  </main>;
}
