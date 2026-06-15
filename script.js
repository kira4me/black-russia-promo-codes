// All promo codes data
const promoCodes = {
    general: [
        { code: '#cheap', reward: 'Скин 89 на 12ч, 15000р, BMW M4 F84 на 12ч, кейс Макита на 12ч', status: 'active', server: 'новый сервер' },
        { code: '#RRFBR', reward: 'Машина', status: 'active' },
        { code: '#promobr', reward: 'Mercedes-Benz GT R на 12ч, очки-доллар на 12ч', status: 'active' },
        { code: '#bestik', reward: 'Lamborghini urus на 5ч', status: 'active' },
        { code: '#vkbr', reward: 'BMW Z4 M40i и скин 270 на 58ч', status: 'active' },
        { code: '#ytbr', reward: 'BMW X6M F16 на 3ч', status: 'active' },
        { code: '#friday13', reward: '3 скина, Raesr Tachyon 2019 на 2ч, VIP Gold на 8ч', status: 'active' },
        { code: '#MATIZZZ', reward: 'Daewoo Matiz Sport на 3ч', status: 'active' },
        { code: '#BRLOVEU', reward: 'BMW M5 F90 на 2ч, скидка 20% на 3ч, VIP Platinum на 1ч', status: 'active' },
        { code: '#8MAR', reward: 'BMW M8 F92 на 2ч, Ferrari 488 GTB на 2ч, Bentley на 2ч, VIP Platinum на 3ч', status: 'active' },
        { code: '#UPD1710', reward: 'Lamborghini Urus на 1ч, Mercedes E63S на 2ч, Tesla Model X на 3ч, x2 купон, VIP Platinum', status: 'active' },
        { code: '#BLACKMM', reward: 'Bugatti Chiron, Bentley, Ferrari, Mercedes G65, Rolls-Royce, VIP Platinum', status: 'active' },
        { code: '#BRVK', reward: 'VAZ 1111 на 12ч', status: 'active' },
        { code: '#900k', reward: 'VIP Gold на 6ч, 3 скина, BMW M3 E30 на 18ч, Nissan Skyline R34 на 20ч (уровень 3)', status: 'active' },
        { code: '#clown23', reward: 'VIP Platinum на 6ч, BMW X6M F16 на 6ч, 3 аксессуара (уровень 3)', status: 'active' },
        { code: '#creep', reward: 'GAZ 2402 Halloween, Lotus Exige Halloween на 7ч, скины, VIP Gold на 15ч (уровень 3)', status: 'active' },
    ],
    servers: {
        'RED': [
            { code: '#tawerbb', reward: '15000р' },
            { code: '#CROSS', reward: '15000р' },
            { code: '#stark', reward: '15000р' },
            { code: '#tramp', reward: '15000р' },
            { code: '#devon', reward: '15000р' },
            { code: '#young', reward: 'неизвестно' },
            { code: '#delace', reward: '15000р' },
            { code: '#Rama', reward: '2 очка опыта, 15000р, VIP Platinum на 6ч' },
            { code: '@Lewandowski', reward: '2 очка опыта, 15000р' },
        ],
        'GREEN': [
            { code: '#Aristocrat', reward: '15000р' },
            { code: '#dize', reward: '15000р' },
            { code: '@Dragon1', reward: '2 очка опыта, 15000р' },
            { code: '@agentfsb', reward: '4 очка опыта, 30000р' },
        ],
        'BLUE': [
            { code: '#water', reward: '15000р' },
            { code: '#larik', reward: '15000р' },
            { code: '#love', reward: '15000р' },
            { code: '#fromix', reward: '15000р' },
            { code: '#jetta', reward: 'BMW M3 E30 на 48ч' },
            { code: '#lamberto', reward: 'неизвестно' },
            { code: '#kile', reward: '2 очка опыта, 15000р' },
            { code: '#HYUGOVICH', reward: '2 очка опыта, 15000р' },
            { code: '@whygrach', reward: '2 очка опыта, 15000р' },
            { code: '@tiktoper', reward: '2 очка опыта, 15000р' },
            { code: '@Rolls', reward: '2 очка опыта, 15000р' },
            { code: '@chepss', reward: '2 очка опыта, 15000р' },
            { code: '@RA1NDER', reward: '2 очка опыта, 15000р' },
            { code: '@chess', reward: '2 очка опыта, 15000р' },
            { code: '@kratov', reward: '3 очка опыта, скин "Бархатные тяги" на 24ч' },
            { code: '@Beka', reward: '2 очка опыта, 15000р' },
        ],
        'YELLOW': [
            { code: '#zabr1k', reward: 'неизвестно' },
            { code: '#snap', reward: 'неизвестно' },
            { code: '#nochnik', reward: '2 очка опыта, 15000р' },
            { code: '@denis16', reward: '2 очка опыта, 15000р' },
        ],
        'ORANGE': [
            { code: '#lipton', reward: 'неизвестно' },
            { code: '#knire', reward: 'неизвестно' },
            { code: '#donny', reward: 'неизвестно' },
            { code: '#and', reward: '2 очка опыта, 15000р' },
            { code: '#Ibragim', reward: '2 очка опыта, 15000р' },
        ],
        'LIME': [
            { code: '#smouk', reward: 'неизвестно' },
            { code: '#eller', reward: '2 очка опыта, 15000р' },
            { code: '#afanasev', reward: 'BMW M5 F90 на 15ч, Gold VIP на 6ч (уровень 1)' },
            { code: '#Sleepy', reward: '15000р, Gold VIP на 6ч' },
        ],
        'BLACK': [
            { code: '#fromix', reward: 'неизвестно' },
            { code: '#joditramp', reward: 'неизвестно' },
            { code: '#stark', reward: '2 очка опыта, 15000р' },
            { code: '#ArsTOP', reward: '6 очков опыта, Gold VIP на 24ч, BMW M4 G82 на 48ч' },
            { code: '@Cream', reward: '4 очка опыта, BMW M3 E30 на 24ч, VIP Platinum' },
        ],
        'MOSCOW': [
            { code: '#ily', reward: '2 очка опыта, 15000р' },
            { code: '@Trampik', reward: '2 очка опыта, 15000р' },
            { code: '@Amin', reward: '2 очка опыта, 15000р' },
        ],
        'S.P.B': [
            { code: '#topkin', reward: 'деньги (уровень 1)' },
            { code: '#shein', reward: '2 очка опыта, 15000р' },
            { code: '@HungryTeam', reward: '2 очка опыта, 15000р' },
        ],
    }
};

let currentFilter = 'all';

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    renderGeneralCodes();
    renderServerCodes();
});

// Render general promo codes
function renderGeneralCodes() {
    const container = document.getElementById('general-codes');
    container.innerHTML = '';

    promoCodes.general.forEach(item => {
        const card = createCodeCard(item);
        container.appendChild(card);
    });
}

// Render server promo codes
function renderServerCodes() {
    const container = document.getElementById('servers-container');
    container.innerHTML = '';

    for (const [server, codes] of Object.entries(promoCodes.servers)) {
        const section = document.createElement('div');
        section.className = 'server-section';
        section.innerHTML = `<div class="server-name">${server}</div>`;
        
        const codesDiv = document.createElement('div');
        codesDiv.className = 'server-codes';
        
        codes.forEach(item => {
            const codeDiv = document.createElement('div');
            codeDiv.className = 'server-code-item';
            codeDiv.innerHTML = `
                <div>
                    <div class="server-code-name">${item.code}</div>
                    <div class="server-code-reward">${item.reward}</div>
                </div>
                <button class="mini-copy-btn" onclick="copyCode('${item.code}')" title="Скопировать">Копировать</button>
            `;
            codesDiv.appendChild(codeDiv);
        });
        
        section.appendChild(codesDiv);
        container.appendChild(section);
    }
}

// Create code card element
function createCodeCard(item) {
    const card = document.createElement('div');
    card.className = 'code-card';
    
    const statusClass = item.status === 'active' ? 'status-active' : item.status === 'unknown' ? 'unknown' : 'inactive';
    const statusText = item.status === 'active' ? '✓ Работает' : item.status === 'unknown' ? '? Неизвестно' : '✗ Не работает';
    
    card.innerHTML = `
        <div class="code-header">
            <div class="code-name">${item.code}</div>
            <div class="code-status ${statusClass}">${statusText}</div>
        </div>
        <div class="code-reward">🎁 ${item.reward}</div>
        ${item.server ? `<div class="code-reward" style="border-left-color: #4ecca3;">📍 ${item.server}</div>` : ''}
        <button class="copy-btn" onclick="copyCode('${item.code}')">Копировать код</button>
    `;
    
    return card;
}

// Copy to clipboard
function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        showToast(`✓ Код "${code}" скопирован в буфер обмена!`);
    });
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Filter functions
function filterCategory(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter display
    if (category === 'all') {
        document.getElementById('general-section').style.display = 'block';
        document.getElementById('servers-section').style.display = 'block';
    } else if (category === 'active') {
        document.getElementById('general-section').style.display = 'block';
        document.getElementById('servers-section').style.display = 'none';
    } else if (category === 'servers') {
        document.getElementById('general-section').style.display = 'none';
        document.getElementById('servers-section').style.display = 'block';
    }
}

// Search functionality
document.getElementById('searchInput').addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
        renderGeneralCodes();
        renderServerCodes();
        return;
    }
    
    // Search in general codes
    const filteredGeneral = promoCodes.general.filter(item => 
        item.code.toLowerCase().includes(searchTerm) ||
        item.reward.toLowerCase().includes(searchTerm)
    );
    
    const container = document.getElementById('general-codes');
    container.innerHTML = '';
    
    if (filteredGeneral.length === 0) {
        container.innerHTML = '<p style="color: #999;">Нет результатов...</p>';
    } else {
        filteredGeneral.forEach(item => {
            const card = createCodeCard(item);
            container.appendChild(card);
        });
    }
    
    // Search in server codes
    const serversContainer = document.getElementById('servers-container');
    serversContainer.innerHTML = '';
    
    for (const [server, codes] of Object.entries(promoCodes.servers)) {
        const filtered = codes.filter(item =>
            item.code.toLowerCase().includes(searchTerm) ||
            item.reward.toLowerCase().includes(searchTerm) ||
            server.toLowerCase().includes(searchTerm)
        );
        
        if (filtered.length > 0) {
            const section = document.createElement('div');
            section.className = 'server-section';
            section.innerHTML = `<div class="server-name">${server}</div>`;
            
            const codesDiv = document.createElement('div');
            codesDiv.className = 'server-codes';
            
            filtered.forEach(item => {
                const codeDiv = document.createElement('div');
                codeDiv.className = 'server-code-item';
                codeDiv.innerHTML = `
                    <div>
                        <div class="server-code-name">${item.code}</div>
                        <div class="server-code-reward">${item.reward}</div>
                    </div>
                    <button class="mini-copy-btn" onclick="copyCode('${item.code}')">Копировать</button>
                `;
                codesDiv.appendChild(codeDiv);
            });
            
            section.appendChild(codesDiv);
            serversContainer.appendChild(section);
        }
    }
});

// Download all codes
function downloadCodes() {
    let content = 'BLACK RUSSIA - ВСЕ РАБОЧИЕ ПРОМОКОДЫ\n';
    content += 'Источник: Willwiix\n';
    content += '===================================\n\n';
    
    content += 'ОСНОВНЫЕ ПРОМОКОДЫ:\n';
    content += '-----------------------------------\n';
    promoCodes.general.forEach(item => {
        content += `${item.code}\n${item.reward}\nСтатус: ${item.status === 'active' ? 'Работает' : 'Неизвестно'}\n\n`;
    });
    
    content += '\n\nПРОМОКОДЫ ПО СЕРВЕРАМ:\n';
    content += '===================================\n\n';
    
    for (const [server, codes] of Object.entries(promoCodes.servers)) {
        content += `\n${server}\n-----------------------------------\n`;
        codes.forEach(item => {
            content += `${item.code} - ${item.reward}\n`;
        });
    }
    
    // Create and download file
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', 'Black-Russia-Promo-Codes.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    showToast('✓ Все коды скачаны в файл!');
}