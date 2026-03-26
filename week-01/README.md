## Week 01

### 1. Why React?
우리가 React를 배워야 하는 이유에 대해 알아봅니다.

웹페이지가 단순히 문서 몇 개 보여주는 수준일 때는 HTML, CSS, JavaScript만으로도 충분했습니다. 그런데 서비스가 커지면서 화면은 점점 더 복잡해졌고, 사용자와 상호작용하는 요소도 많아졌습니다.

이 복잡한 UI를 더 잘 관리하기 위해 등장한 방식 중 하나가 **React**입니다.

**React를 배우는 이유:**

1. **화면을 조립하듯 만들 수 있다**
    
    기존에는 하나의 큰 페이지를 직접 다루는 느낌이었다면, React에서는 UI를 작은 단위로 나눠 조립합니다. **네비게이션 바, 버튼, 카드 등을 각각 독립적으로 만들고, 이들을 재사용할 수 있는 것**입니다.
    
2. **상태에 따라 화면이 바뀌는 앱을 만들기 쉽다**
    
    **React는 상태에 맞는 UI를 선언적으로 그릴 수 있게 해준다**는 점에서 편리한 부분이 있습니다.
    
3. **협업과 유지보수에 유리하다**
    
    React는 화면을 여러 부분으로 나누어 관리하기 때문에, 역할 분리가 쉽고, 수정 범위가 명확하며, 결국 **협업과 유지보수에 훨씬 유리**합니다.

<br />

### 2. UI의 단위, 컴포넌트
React의 핵심 철학인 컴포넌트에 대해 알아봅니다.

React는 화면을 페이지 단위로 보기보다, **작은 UI 조각들의 집합**으로 봅니다. 그리고 그 **조각 하나하나를 컴포넌.트라고 부릅니다**.

<aside>

즉, **컴포넌트 = 재사용 가능한 UI 단위**

</aside>

컴포넌트를 통해

- 반복되는 UI를 재사용하고,
- 큰 화면을 작은 단위로 이해하며,
- 역할별로 코드를 분리할 수 있다는 장점이 있습니다.

<img width="1716" height="1356" alt="image" src="https://github.com/user-attachments/assets/ebcce287-4a61-4ea2-9761-4c40ee3dd05a" />

<br />
<br />

> **Q.** 너무 작은 단위까지 컴포넌트로 쪼개는 것이 항상 좋을까요?

<br />

### 3. 실습: 좋은 컴포넌트 설계하기

이번 세션에서는 아래 리스트 UI를 구현한 코드를 함께 살펴보고, 더 읽기 쉽고 관리하기 좋은 구조로 리팩토링해보겠습니다!

<img width="1889" height="900" alt="image" src="https://github.com/user-attachments/assets/61ad9d84-b392-4a73-98cf-4fb9298e6c94" />

<br />

#### [src/Home.jsx](./src/Home.jsx)

**아래 코드의 문제점**
- Home 안에 너무 많은 역할이 들어 있다
- 반복되는 UI에 이름이 없다
- 데이터가 컴포넌트 파일 안에 직접 들어 있다
- 반복되는 최상위 요소에 key가 빠져있다

```jsx
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
```

**개선해볼 수 있는 방향**
- `MemberCard`로 분리하기, props 설계를 고민해보기
- `members` 데이터를 별도 파일로 분리하기
- 작은 컴포넌트로 더 나눌 수 있는지 생각해보기 (Intro, SkillList 등)

<br />

### 4. 마무리
오늘은 리스트 UI를 리팩토링하며 컴포넌트를 나누는 기준을 살펴보았습니다.

컴포넌트 분리는 코드를 짧게 만드는 것이 아니라, 역할과 구조를 정리하는 과정입니다.

앞으로는 반복되는 UI, 책임 분리를 함께 고민하며 React를 학습해보면 좋겠습니다!
