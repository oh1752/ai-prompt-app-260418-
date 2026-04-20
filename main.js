const prompts = [
    // 📈 상품기획 (Planner) - 10개
    { category: 'planner', title: '경쟁사 벤치마킹 분석', content: 'CATL Shenxing 배터리와 당사 차세대 NCM 배터리를 에너지밀도(Wh/kg), 충전속도(C-rate), 가격($/kWh) 관점에서 상세 비교 분석해줘.', img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80' },
    { category: 'planner', title: 'LFP vs NCM 전략 시뮬레이션', content: '보급형 EV 시장 대응을 위해 LMFP(리튬망간인산철) 채택 시 기대되는 원가 절감 폭과 주행거리 손실률을 분석하고 최적의 제품 믹스를 제안해줘.', img: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80' },
    { category: 'planner', title: '유럽 배터리 여권 대응', content: '2027년 시행될 유럽 배터리 여권(Battery Passport)의 탄소 발자국 상한선 기준을 정리하고, 공급망 이력 관리를 위한 블록체인 도입 방안을 짜줘.', img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80' },
    { category: 'planner', title: '원통형 4680 전환 경제성', content: '2170 폼팩터에서 4680으로 전환 시 셀당 에너지 용량 증가분과 조립 공정 단순화에 따른 원가 절감 효과를 수치로 시뮬레이션해줘.', img: 'https://images.unsplash.com/photo-1620712943543-bcc4638d9f80?auto=format&fit=crop&w=1200&q=80' },
    { category: 'planner', title: '배터리 구독 서비스(BaaS)', content: '전기차 초기 구매가 장벽을 낮추기 위한 배터리 렌탈/구독 서비스 비즈니스 모델을 설계하고, 중고 배터리 회수 및 재사용 수익 구조를 분석해줘.', img: 'https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&w=1200&q=80' },
    { category: 'planner', title: '전고체 배터리 양산 로드맵', content: '전고체 배터리의 기술 성숙도(TRL)를 진단하고, 2029년 양산을 목표로 한 단계별 R&D 투자 및 시범 생산 라인 구축 계획을 수립해줘.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80' },
    { category: 'planner', title: 'SNE 리서치 데이터 해석', content: '최근 12개월간 글로벌 배터리 사용량 순위를 분석해 특정 지역에서 당사 점유율이 하락한 원인(보조금, 경쟁사 신모델 등)과 공격적 탈환 대책을 짜줘.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80' },
    { category: 'planner', title: '미국 IRA 세액 공제 최적화', content: '미국 IRA 혜택을 극대화하기 위해 핵심 광물(리튬, 니켈)의 FTA 체결국 소싱 비중을 어떻게 조정해야 하는지 공급망 최적화 시나리오를 작성해줘.', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80' },
    { category: 'planner', title: '폐배터리 ESS 재사용 사업', content: 'EV 폐배터리의 잔존 용량별(70-80%) 분류 기준을 설정하고, 가정용/산업용 ESS로 재제조 시 예상되는 경제적 이익과 기술적 허들을 리서치해줘.', img: 'https://images.unsplash.com/photo-1594818821932-9200542360ef?auto=format&fit=crop&w=1200&q=80' },
    { category: 'planner', title: '차세대 실리콘 음극재 도입', content: '흑연 음극재에 실리콘 첨가량을 5%에서 10%로 높일 때의 주행거리 연장 효과와 스웰링(Swelling) 문제 해결을 위한 바인더 기술 요구 수준을 정의해줘.', img: 'https://images.unsplash.com/photo-1532187875605-1ef6c817f14a?auto=format&fit=crop&w=1200&q=80' },

    // 🧠 R&D / BMS (Dev) - 10개
    { category: 'rd', title: '열폭주 조기 감지 알고리즘', content: '리튬이온 배터리 팩에서 열폭주 전조 증상인 dV/dt 급강하와 dT/dt 급상승을 실시간 감지하여 화재 10분 전 경고를 울리는 C++ 기반 BMS 로직을 설계해줘.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80' },
    { category: 'rd', title: 'AI 기반 SOH 추정 모델', content: '충방전 사이클 데이터를 활용해 머신러닝(랜덤포레스트/LSTM) 기반으로 배터리 잔여 수명(SOH)을 98% 정확도로 예측하는 특징 추출 방법을 알려줘.', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80' },
    { category: 'rd', title: '하이니켈 양극재 안정화', content: '니켈 함량 90% 이상 하이니켈(NCMA) 양극재의 표면 열화를 막기 위한 원자층 증착(ALD) 코팅 물질과 두께를 추천하고 그 원리를 설명해줘.', img: 'https://images.unsplash.com/photo-1532634896-26909d0d4b89?auto=format&fit=crop&w=1200&q=80' },
    { category: 'rd', title: '급속 충전 프로파일 최적화', content: '배터리 퇴화를 최소화하면서 15분 만에 80%를 충전하는 다단계 정전류(Multi-stage CC) 충전 프로토콜과 컷오프 전압 설정 방안을 제안해줘.', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80' },
    { category: 'rd', title: '능동형 셀 밸런싱 로직', content: '96개 직렬 연결 셀 간의 전압 편차를 줄이기 위해 에너지를 소모하지 않고 다른 셀로 전송하는 액티브 셀 밸런싱 제어 알고리즘을 작성해줘.', img: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80' },
    { category: 'rd', title: 'BMS 에지 컴퓨팅 TinyML', content: 'BMS 유닛 내부의 MCU 성능 제약 하에서 실시간 데이터를 처리하기 위한 경량화된 신경망(TinyML) 모델 구현 및 최적화 방안을 설계해줘.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80' },
    { category: 'rd', title: '저온 출력 프리히팅 로직', content: '영하 20도 극한 환경에서 배터리 출력을 유지하기 위해 히터를 가동하거나 잔여 에너지를 활용해 셀 온도를 급속히 높이는 알고리즘을 제안해줘.', img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80' },
    { category: 'rd', title: '내부 저항 EIS 진단법', content: '전기화학 임피던스 분광법(EIS) 데이터를 해석해 배터리 내부의 전해액 고갈이나 SEI 층 성장을 구분하여 진단하는 딥러닝 모델을 기획해줘.', img: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80' },
    { category: 'rd', title: '배터리 팩 경량화 설계', content: 'Cell-to-Pack(CTP) 기술을 적용해 모듈 케이스를 제거할 때의 구조 강도를 유지하기 위한 하부 충격 보호 설계 및 방열 시트 배치안을 제안해줘.', img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80' },
    { category: 'rd', title: 'OTA 보안 업데이트 프로세스', content: '차량 주행 중 BMS 로직을 업데이트할 때 발생할 수 있는 보안 취약점을 차단하고, 롤백 기능을 포함한 안정적인 업데이트 배포 절차를 설계해줘.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80' },

    // 🏭 생산공정 (Producer) - 10개
    { category: 'producer', title: '건식 전극 공정(Dry Electrode)', content: '용매 없이 전극을 코팅하는 건식 공정 도입 시 활물질 바인더의 결합력을 유지하기 위한 롤러 온도 및 압력 최적화 변수를 정의해줘.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80' },
    { category: 'producer', title: 'AI 비전 검사 시스템 구축', content: '분당 100m 속도로 흐르는 전극 코팅 라인에서 0.1mm 크기의 핀홀과 슬러리 뭉침을 실시간 감지하는 딥러닝 검사 모델 아키텍처를 짜줘.', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80' },
    { category: 'producer', title: '드라이룸 에너지 20% 절감', content: '전체 공장 전력의 40%를 차지하는 드라이룸(Dry Room)의 이슬점(-50도) 유지를 위해 공조 설비의 효율을 높이는 스마트 제어 방안을 알려줘.', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80' },
    { category: 'producer', title: '화성 공정 수율 저해 분석', content: '충방전(Formation) 공정에서 불량률이 급증했을 때, 상위 코팅/조립 공정 데이터와 결합해 근본 원인(Root Cause)을 찾는 상관관계 분석법을 제안해줘.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80' },
    { category: 'producer', title: 'AGV/AMR 물류 자동화', content: '기가팩토리 내에서 소재 반입부터 완성된 배터리 팩 출하까지 전 과정을 무인화하기 위한 AGV 이동 경로 최적화 및 상위 제어 시스템(MCS)을 설계해줘.', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80' },
    { category: 'producer', title: '초음파 탭 용접 품질 고도화', content: '동(Copper)과 알루미늄(Al) 탭 용접 시 발생하는 버(Burr)를 방지하고 용접 강도를 실시간으로 모니터링하는 센서 융합 기술을 추천해줘.', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80' },
    { category: 'producer', title: '그린 팩토리 탄소 추적', content: '배터리 셀 하나를 생산할 때 발생하는 Scope 1, 2 탄소 배출량을 실시간으로 집계하고 이를 배터리 여권에 자동 등록하는 시스템을 기획해줘.', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80' },
    { category: 'producer', title: '전해액 주입 속도 및 균일성', content: '셀 대형화에 따라 전해액 함침 시간이 늘어나는 문제를 해결하기 위한 진공 함침 공정 가속화 기술과 정밀 주입량 제어 방안을 설계해줘.', img: 'https://images.unsplash.com/photo-1532187875605-1ef6c817f14a?auto=format&fit=crop&w=1200&q=80' },
    { category: 'producer', title: '예지 보전(PdM) 모델 적용', content: '믹싱기(Mixer)의 모터 진동 및 전류 데이터를 분석해 베어링 고장이나 슬러리 점도 변화를 3일 전에 예측하는 고장 진단 모델을 제안해줘.', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80' },
    { category: 'producer', title: '디지털 트레이서빌리티 블록체인', content: '원재료 Lot 정보와 제조 공정 변수, 최종 셀 테스트 데이터를 매칭하여 10년 뒤에도 불량 원인을 추적할 수 있는 데이터 아키텍처를 설계해줘.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80' },

    // 📣 마케팅 (Marketer) - 10개
    { category: 'marketer', title: '배터리 안전성 안심 캠페인', content: '배터리 화재 불안을 겪는 3040 패밀리카 구매 예정자를 위해 당사의 "9중 안전 설계"와 "실시간 진단" 기술을 감성적으로 풀어나가는 60초 광고 시나리오를 써줘.', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80' },
    { category: 'marketer', title: '중고차 가치 보증 브랜딩', content: '배터리 수명 데이터를 투명하게 공개하여 5년 후 중고차 잔존 가치를 60% 이상 보장해주는 "Certified Battery" 인증 프로그램의 브랜드 네이밍과 마케팅 문구를 뽑아줘.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80' },
    { category: 'marketer', title: '에코 드라이빙 게이미피케이션', content: '운전자가 배터리를 효율적으로 사용하면 탄소 크레딧이나 충전 포인트를 보상으로 주는 차량 내 앱(In-car App) 서비스 기획안과 보상 로직을 설계해줘.', img: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=1200&q=80' },
    { category: 'marketer', title: '글로벌 OEM 제안용 Pitch-Deck', content: '포드나 VW 같은 글로벌 OEM 구매 담당자를 타겟으로, 우리 배터리의 "비용 효율성"과 "IRA 대응력"을 강조한 10슬라이드 발표 개요와 핵심 키워드를 작성해줘.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80' },
    { category: 'marketer', title: '배터리 전문가 협업 콘텐츠', content: '테크 유튜버나 배터리 공학자와 협업하여 우리 회사의 안전 테스트 과정을 투명하게 공개하는 라이브 방송 "Battery Open Day"의 타임라인과 주요 연출 포인트를 기획해줘.', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80' },
    { category: 'marketer', title: 'ESG 순환 경제 스토리텔링', content: '광산 채굴부터 폐배터리 재활용까지의 전 과정을 "Cradle to Cradle" 관점에서 브랜드화하고, 친환경 이미지를 극대화할 수 있는 인스타그램 캠페인 시각 가이드를 만들어줘.', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80' },
    { category: 'marketer', title: '초급속 충전 인프라 홍보 전략', content: '"10분 충전으로 300km 주행"이라는 메시지를 도시형 팝업 스토어와 숏폼 영상을 통해 MZ세대에게 효과적으로 전달할 수 있는 크리에이티브 전략을 짜줘.', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80' },
    { category: 'marketer', title: '배터리 화재 위기 관리 PR', content: '만약 특정 차종에서 배터리 결함 우려가 제기되었을 때, 선제적으로 데이터를 공개하고 보상안을 발표하여 고객 신뢰를 회복하기 위한 24시간 긴급 대응 매뉴얼을 작성해줘.', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80' },
    { category: 'marketer', title: 'B2B ESS 파트너십 확장', content: '전기차 시장 외에도 선박, 도심항공교통(UAM) 등 특수 배터리 시장에 진입하기 위한 맞춤형 브랜드 포지셔닝과 영업 전략을 제안해줘.', img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80' },
    { category: 'marketer', title: '사용자 친화적 HMI 가이드', content: '운전자가 주행 중 배터리 잔량이나 온도 정보를 보고 스트레스를 받지 않도록, "심리적 안정감"을 주는 인포테인먼트 시스템의 컬러 가이드와 UI 애니메이션을 기획해줘.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80' },
];

let activeCategory = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
    renderPrompts();
});

function renderPrompts() {
    const grid = document.getElementById('prompt-grid');
    grid.innerHTML = '';

    const filtered = prompts.filter(p => {
        const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             p.content.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    filtered.forEach((p) => {
        const card = document.createElement('div');
        card.className = 'prompt-card';
        card.onclick = () => openModal(p);
        card.innerHTML = `
            <div>
                <h4>${getCategoryIcon(p.category)} ${p.title}</h4>
                <p>${p.content.substring(0, 70)}...</p>
            </div>
            <div style="font-size: 0.7rem; color: var(--accent); margin-top: 15px; font-weight: bold;">자세히 보기 →</div>
        `;
        grid.appendChild(card);
    });
}

function getCategoryIcon(cat) {
    const icons = { planner: '📈', rd: '🧠', producer: '🏭', marketer: '📣' };
    return icons[cat] || '💡';
}

function filterCategory(cat, e) {
    activeCategory = cat;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    renderPrompts();
}

function handleSearch(val) {
    searchQuery = val;
    renderPrompts();
}

function toggleTheme() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) document.body.setAttribute('data-theme', savedTheme);

function openModal(prompt) {
    const modal = document.getElementById('prompt-modal');
    document.getElementById('modal-title').innerText = `${getCategoryIcon(prompt.category)} ${prompt.title}`;
    document.getElementById('modal-prompt').innerText = prompt.content;
    document.getElementById('modal-img').style.backgroundImage = `url(${prompt.img})`;
    modal.style.display = 'flex';
}

function closeModal(e) {
    if (!e || e.target.classList.contains('modal') || e.target.classList.contains('close-btn')) {
        document.getElementById('prompt-modal').style.display = 'none';
    }
}
