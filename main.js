let currentChart = null;

document.addEventListener('DOMContentLoaded', () => {
    initPlannerChart();
    startRealTimeData();
});

function showView(view) {
    const grid = document.getElementById('dashboard-grid');
    const title = document.getElementById('view-title');
    const navItems = document.querySelectorAll('.nav-item');
    
    // UI 초기화
    navItems.forEach(item => item.classList.remove('active'));
    grid.innerHTML = '';

    if (view === 'planner') {
        title.innerText = "Global Strategy & Product Planning";
        renderPlanner(grid);
    } else if (view === 'developer') {
        title.innerText = "R&D Intelligence & BMS Telemetry";
        renderDeveloper(grid);
    } else if (view === 'producer') {
        title.innerText = "Global Giga-factory Production Status";
        renderProducer(grid);
    } else if (view === 'marketer') {
        title.innerText = "Brand Value & Customer Sentiment";
        renderMarketer(grid);
    }
}

// --- 각 직무별 렌더링 로직 ---

function renderPlanner(container) {
    container.innerHTML = `
        <div class="card"><h3>Lithium Price</h3><div class="value">$13.52/kg</div></div>
        <div class="card"><h3>Market Share</h3><div class="value">18.4%</div></div>
        <div class="card"><h3>Target Cost</h3><div class="value">$80.0</div></div>
        <div class="card half-width"><h3>Wh/kg Comparison</h3><canvas id="plannerChart"></canvas></div>
        <div class="card"><h3>Strategy Insight</h3><p style="font-size:0.8rem; color:#8E8E93;">"LMFP 보급형 라인업 확대로 중국 LFP 공세 대응 필요"</p></div>
    `;
    initPlannerChart();
}

function renderDeveloper(container) {
    container.innerHTML = `
        <div class="card"><h3>Avg Cell Temp</h3><div class="value" id="live-temp">32.4°C</div></div>
        <div class="card"><h3>Degradation Rate</h3><div class="value">0.02%/year</div></div>
        <div class="card"><h3>Safety Alert</h3><div class="value up">NORMAL</div></div>
        <div class="card full-width"><h3>Cell Voltage Distribution</h3><canvas id="devChart"></canvas></div>
    `;
    initDevChart();
}

function renderProducer(container) {
    container.innerHTML = `
        <div class="card"><h3>Avg Yield Rate</h3><div class="value" style="color:#5856D6;">96.8%</div></div>
        <div class="card"><h3>Scrap Cost</h3><div class="value down">-$12.4M</div></div>
        <div class="card"><h3>Daily Output</h3><div class="value">14.2 GWh</div></div>
        <div class="card half-width"><h3>Production Volume Trend</h3><canvas id="prodChart"></canvas></div>
        <div class="card"><h3>Factory Issues</h3><ul style="font-size:0.8rem;"><li>Line 04: Maintenance</li><li>Line 07: Speed Up</li></ul></div>
    `;
    initProdChart();
}

function renderMarketer(container) {
    container.innerHTML = `
        <div class="card"><h3>Residual Value Index</h3><div class="value">94.2%</div></div>
        <div class="card"><h3>Net Promoter Score</h3><div class="value">78</div></div>
        <div class="card"><h3>Ad Reach</h3><div class="value">4.2M</div></div>
        <div class="card full-width"><h3>Customer Sentiment Analysis</h3><canvas id="marketChart"></canvas></div>
    `;
    initMarketChart();
}

// --- Chart 초기화 함수들 (데이터 시뮬레이션) ---

function initPlannerChart() {
    const ctx = document.getElementById('plannerChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Our Co.', 'CATL', 'LGES', 'BYD'],
            datasets: [{
                label: 'Energy Density (Wh/kg)',
                data: [350, 280, 310, 260],
                backgroundColor: ['#007AFF', '#333', '#333', '#333']
            }]
        },
        options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: '#333' } } } }
    });
}

function initDevChart() {
    const ctx = document.getElementById('devChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'],
            datasets: [{
                label: 'Voltage (V)',
                data: [3.72, 3.71, 3.73, 3.72, 3.70, 3.72],
                borderColor: '#34C759',
                tension: 0.4
            }]
        },
        options: { scales: { y: { min: 3.6, max: 3.8, grid: { color: '#333' } } } }
    });
}

function initProdChart() {
    const ctx = document.getElementById('prodChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Yield (%)',
                data: [94, 95, 96.8, 96.5, 97.2],
                borderColor: '#5856D6',
                fill: true,
                backgroundColor: 'rgba(88, 86, 214, 0.2)'
            }]
        }
    });
}

function initMarketChart() {
    const ctx = document.getElementById('marketChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [{
                data: [75, 20, 5],
                backgroundColor: ['#34C759', '#8E8E93', '#FF3B30']
            }]
        }
    });
}

function startRealTimeData() {
    setInterval(() => {
        const tempEl = document.getElementById('live-temp');
        if (tempEl) {
            const newTemp = (32 + Math.random() * 1).toFixed(1);
            tempEl.innerText = `${newTemp}°C`;
        }
        const syncEl = document.getElementById('last-update');
        if (syncEl) {
            syncEl.innerText = `Last Sync: ${new Date().toLocaleTimeString()}`;
        }
    }, 3000);
}
