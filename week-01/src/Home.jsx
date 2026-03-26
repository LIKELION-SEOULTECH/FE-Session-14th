const members = [
  {
    id: "kim",
    name: "김멋사",
    role: "UI Core",
    bio: "안녕하세요 김멋사입니다!",
    skills: ["React", "TypeScript"],
  },
  {
    id: "park",
    name: "박멋사",
    role: "Frontend Core",
    bio: "안녕하세요 박멋사입니다!",
    skills: ["React", "Vue"],
  },
  {
    id: "lee",
    name: "임사자",
    role: "Frontend Core",
    bio: "안녕하세요 임사자입니다!",
    skills: ["Next.js", "Vue"],
  },
]

export default function Home() {
  return (
    <main className="page">
      <div className="page__inner">
        <header className="intro">
          <p className="intro__eyebrow">LIKELION SEOULTECH</p>
          <h1 className="intro__title">🖥️ 프론트엔드</h1>
        </header>

        <MemberList members={members} />
      </div>
    </main>
  )
}

function MemberList({ members }) {
  return (
    <section className="member-section" aria-label="스터디 멤버 목록">
      <div className="member-list">
        {members.map((member) => (
          <article className="member-card">
            <div className="member-card__main">
              <div className="member-card__identity">
                <span className="member-card__avatar" aria-hidden="true">
                  {member.name[0]}
                </span>

                <div>
                  <h3 className="member-card__name">{member.name}</h3>
                  <p className="member-card__role">{member.role}</p>
                </div>
              </div>

              <p className="member-card__bio">{member.bio}</p>
              <ul className="skill-list" aria-label="기술 스택">
                {member.skills.map((skill) => (
                  <li key={skill} className="skill-list__item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

