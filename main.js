const PROMPTS = [
  // Marketer
  {
    role: 'marketer',
    title: '타겟 페르소나 분석',
    description: '제품의 잠재 고객을 상세하게 정의하고 분석합니다.',
    content: `[제품/서비스명]을 이용할 가상의 타겟 페르소나 3명을 작성해줘. 
각 페르소나에는 나이, 직업, 주요 관심사, 우리 제품을 사용해야 하는 페인 포인트(Pain Point), 그리고 가장 효과적인 마케팅 채널을 포함해줘.`
  },
  {
    role: 'marketer',
    title: 'SNS 광고 카피 작성',
    description: '클릭률을 높이는 감각적인 광고 문구를 생성합니다.',
    content: `[제품명]에 대한 인스타그램 광고 카피를 5가지 버전으로 작성해줘. 
하나는 공포 마케팅(문제를 해결하지 않았을 때의 손해), 하나는 혜택 강조, 하나는 호기심 유발, 하나는 사용자 리뷰 스타일, 마지막은 짧고 강렬한 슬로건 스타일로 작성해줘.`
  },
  {
    role: 'marketer',
    title: 'SEO 최적화 블로그 주제',
    description: '검색 엔진 노출에 유리한 콘텐츠 주제와 키워드를 제안합니다.',
    content: `[주제/산업분야]와 관련해서 구글 검색 결과 1페이지에 노출될 수 있는 블로그 포스팅 주제 5개를 추천해줘. 
각 주제별로 메인 키워드와 서브 키워드, 그리고 독자가 클릭할 수밖에 없는 매력적인 제목(Title Tag)을 같이 알려줘.`
  },
  {
    role: 'marketer',
    title: '뉴스레터 시리즈 기획',
    description: '구독자와의 관계를 강화하는 일주일 단위 뉴스레터 구성안입니다.',
    content: `신규 구독자를 위한 7일간의 웰컴 뉴스레터 시리즈를 기획해줘. 
1일차부터 7일차까지 각 메일의 제목과 핵심 내용을 요약해주고, 마지막에는 우리 서비스의 유료 결제를 유도하는 자연스러운 콜 투 액션(CTA)을 넣어줘.`
  },
  {
    role: 'marketer',
    title: '경쟁사 비교 분석',
    description: '시장 내 경쟁사 대비 우리 제품의 차별화 포인트를 도출합니다.',
    content: `[우리 제품명]과 경쟁사인 [경쟁사명]을 비교 분석해줘. 
기능, 가격, 디자인, 브랜드 이미지 관점에서 비교하고, 우리 제품이 시장에서 승리하기 위해 강조해야 할 '압도적 차별점' 3가지를 정리해줘.`
  },

  // Developer
  {
    role: 'developer',
    title: '코드 보안 및 최적화 리뷰',
    description: '작성한 코드의 취약점을 찾고 성능 개선안을 제안합니다.',
    content: `아래 제공하는 [언어/프레임워크] 코드를 리뷰해줘. 
보안상 위험한 부분(예: SQL 인젝션, XSS), 메모리 누수 가능성, 가독성이 떨어지는 부분을 찾아내고 더 효율적인 리팩토링 코드를 제안해줘.

[코드 입력]`
  },
  {
    role: 'developer',
    title: 'SQL 쿼리 성능 개선',
    description: '느린 쿼리를 분석하고 인덱스 전략을 포함한 튜닝안을 제시합니다.',
    content: `다음 SQL 쿼리의 실행 계획을 예측하고 성능을 개선해줘. 
데이터 양이 100만 건 이상이라고 가정할 때, 실행 속도를 줄이기 위한 인덱스 설정 방법과 쿼리 구조 변경안을 단계별로 설명해줘.

[쿼리 입력]`
  },
  {
    role: 'developer',
    title: 'Unit Test 자동 생성',
    description: '함수의 다양한 엣지 케이스를 고려한 테스트 코드를 작성합니다.',
    content: `아래 함수에 대해 [테스트 프레임워크명, 예: Jest]를 사용한 단위 테스트 코드를 작성해줘. 
정상적인 입력뿐만 아니라 null, undefined, 비정상적인 데이터 타입 등 발생 가능한 모든 엣지 케이스를 포함해서 테스트를 구성해줘.

[함수 코드]`
  },
  {
    role: 'developer',
    title: 'API 문서(README) 생성',
    description: '코드를 분석하여 상세한 API 명세 및 사용법 문서를 만듭니다.',
    content: `아래 엔드포인트 코드들을 분석해서 상세한 API 명세서를 Markdown 형식으로 작성해줘. 
URL, HTTP Method, Request Header, Request Body 파라미터(타입 포함), 그리고 성공/실패 시의 Response JSON 예시를 포함해야 해.

[코드]`
  },
  {
    role: 'developer',
    title: '정규표현식 생성기',
    description: '복잡한 문자열 패턴 매칭을 위한 정규표현식과 설명을 제공합니다.',
    content: `[조건, 예: 대문자 포함 8자 이상 비밀번호]를 검증하기 위한 정규표현식을 작성해줘. 
각 기호가 의미하는 바를 자세히 설명해주고, 해당 정규표현식이 통과하는 예시와 통과하지 않는 예시를 각각 3개씩 들어줘.`
  },

  // Designer
  {
    role: 'designer',
    title: 'UX 디자인 피드백',
    description: '현재 화면 설계안에 대해 사용성 관점의 개선점을 찾습니다.',
    content: `[서비스 종류]의 [특정 화면] 설계안에 대해 UX 관점에서 피드백을 줘. 
사용자가 목표를 달성하는 데 방해가 되는 요소가 있는지, 시각적 위계(Hierarchy)는 적절한지, 휴리스틱 평가 기준(제이콥 닐슨 등)에 비추어 개선할 점을 알려줘.`
  },
  {
    role: 'designer',
    title: '브랜드 컬러 팔레트 추천',
    description: '브랜드 가치를 담은 조화로운 색상 조합을 제안합니다.',
    content: `[브랜드 핵심 가치, 예: 신뢰, 혁신, 친근함]을 전달할 수 있는 디자인 컬러 팔레트를 제안해줘. 
메인 컬러, 서브 컬러, 강조 컬러의 HEX 코드를 알려주고, 각 색상이 사용자에게 어떤 심리적 영향을 주는지 설명해줘.`
  },
  {
    role: 'designer',
    title: '사용자 여정 지도(User Journey)',
    description: '사용자가 서비스를 이용하는 전체 과정을 시각화하여 분석합니다.',
    content: `[특정 서비스 기능]을 처음 발견하고 사용을 완료하기까지의 사용자 여정 지도(User Journey Map)를 작성해줘. 
사용자의 행동 단계, 각 단계에서의 감정 변화, 발생 가능한 문제점, 그리고 그 문제를 해결하기 위한 디자인 기회를 표 형식으로 정리해줘.`
  },
  {
    role: 'designer',
    title: '웹 접근성 체크리스트',
    description: '다양한 사용자를 고려한 포용적 디자인 요소를 점검합니다.',
    content: `[웹/앱] 디자인 시 반드시 지켜야 할 웹 접근성(WCAG) 체크리스트를 만들어줘. 
색상 대비, 폰트 크기, 버튼 크기, 대체 텍스트 등 디자이너가 실무에서 바로 점검할 수 있는 핵심 항목 위주로 정리해줘.`
  },
  {
    role: 'designer',
    title: '디자인 시스템 컴포넌트 구조',
    description: '효율적인 협업을 위한 기본 UI 컴포넌트의 가이드라인을 정의합니다.',
    content: `[버튼/입력창/카드] 컴포넌트에 대한 디자인 시스템 가이드를 작성해줘. 
다양한 상태(Default, Hover, Active, Disabled)에 따른 스타일 차이와 패딩, 마진, 폰트 크기 규칙을 정의해줘.`
  },

  // Planner
  {
    role: 'planner',
    title: 'PRD(제품 요구사항 정의서)',
    description: '신규 기능 개발을 위해 명확하고 구체적인 요구사항을 정의합니다.',
    content: `[기획할 기능명]에 대한 제품 요구사항 정의서(PRD) 초안을 작성해줘. 
기능의 목적, 핵심 사용자 시나리오, 주요 기능 리스트, 성공 지표(KPI), 그리고 예외 케이스 처리에 대한 내용을 포함해줘.`
  },
  {
    role: 'planner',
    title: '서비스 SWOT 분석',
    description: '강점, 약점, 기회, 위협 요인을 분석하여 전략을 수립합니다.',
    content: `[서비스명]에 대한 SWOT 분석을 실시하고 보고서 형식으로 작성해줘. 
현재 시장 상황과 경쟁사 동향을 반영해서 강점(S), 약점(W), 기회(O), 위협(T)을 각각 4개씩 도출하고, 이를 바탕으로 한 향후 전략 제안(SO/ST/WO/WT 전략)도 포함해줘.`
  },
  {
    role: 'planner',
    title: '사용자 스토리 및 수용 기준',
    description: '개발자와 소통하기 위한 에픽과 사용자 스토리 단위를 작성합니다.',
    content: `[특정 기능]에 대한 애자일 방식의 사용자 스토리와 수용 기준(Acceptance Criteria)을 작성해줘. 
'~로서, ~을 원한다, 그래야 ~할 수 있다' 형식을 사용하고, 개발이 완료되었음을 판단할 수 있는 체크리스트를 상세하게 적어줘.`
  },
  {
    role: 'planner',
    title: '주간 업무 보고서 템플릿',
    description: '성과와 계획을 명확하게 공유할 수 있는 효율적인 보고 형식을 제안합니다.',
    content: `팀장님과 이해관계자들에게 공유할 '주간 업무 보고서' 템플릿을 만들어줘. 
이번 주 진행 완료 사항, 다음 주 계획, 현재 발생한 이슈 및 리스크, 그리고 팀원들의 리소스 투입 현황을 한눈에 볼 수 있는 깔끔한 구조로 작성해줘.`
  },
  {
    role: 'planner',
    title: '유저 피드백 우선순위 결정',
    description: '수집된 다양한 의견 중 가장 임팩트 있는 기능을 선별합니다.',
    content: `사용자로부터 접수된 아래 5가지 피드백 중 어떤 것을 먼저 해결해야 할지 우선순위를 매겨줘. 
비즈니스 임팩트와 개발 난이도(ICE 프레임워크 등)를 기준으로 분석하고, 왜 그 순서가 적절한지 논리적인 이유를 설명해줘.

[피드백 리스트]`
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const promptGrid = document.getElementById('prompt-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('search-input');
  const toast = document.getElementById('toast');

  let currentFilter = 'all';
  let searchQuery = '';

  // Function to render prompts
  function renderPrompts() {
    promptGrid.innerHTML = '';
    
    const filteredPrompts = PROMPTS.filter(prompt => {
      const matchesFilter = currentFilter === 'all' || prompt.role === currentFilter;
      const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            prompt.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    if (filteredPrompts.length === 0) {
      promptGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">검색 결과가 없습니다.</div>';
      return;
    }

    filteredPrompts.forEach(prompt => {
      const card = document.createElement('article');
      card.className = 'prompt-card';
      card.innerHTML = `
        <div class="card-header">
          <span class="role-tag">${prompt.role}</span>
          <button class="copy-btn" title="복사하기" data-content="${prompt.content.replace(/"/g, '&quot;')}" aria-label="프롬프트 복사">
            <i class="ph ph-copy"></i>
          </button>
        </div>
        <h3 class="card-title">${prompt.title}</h3>
        <p class="card-desc">${prompt.description}</p>
        <div class="prompt-content">${prompt.content}</div>
      `;
      promptGrid.appendChild(card);
    });

    // Add copy events to new cards
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const content = btn.getAttribute('data-content');
        navigator.clipboard.writeText(content).then(() => {
          showToast();
        });
      });
    });
  }

  // Show Toast
  function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  }

  // Filter Event Listeners
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-role');
      renderPrompts();
    });
  });

  // Search Event Listener
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderPrompts();
  });

  // Initial Render
  renderPrompts();
});
