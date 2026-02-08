// 党员信息查询系统 - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('党员信息查询系统已加载');

    // 从本地数据文件加载数据
    loadMemberData();
});

// 加载党员数据
async function loadMemberData() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();

        console.log('已加载党员数据:', data);

        // 更新页面统计信息
        updateStats(data);

    } catch (error) {
        console.error('加载数据失败:', error);
        // 使用本地缓存数据
        const localData = localStorage.getItem('memberData');
        if (localData) {
            updateStats(JSON.parse(localData));
        }
    }
}

// 更新统计信息
function updateStats(data) {
    const stats = document.querySelectorAll('.stat-value');
    if (stats.length > 0 && data.count) {
        stats[0].textContent = data.count;
    }

    // 保存到本地存储
    localStorage.setItem('memberData', JSON.stringify(data));
}

// 搜索功能
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const term = e.target.value.toLowerCase();
            filterMembers(term);
        });
    }
}

// 筛选党员
function filterMembers(term) {
    const cards = document.querySelectorAll('.member-card');
    cards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        const dept = card.getAttribute('data-dept').toLowerCase();
        const id = card.getAttribute('data-member-id').toLowerCase();

        if (name.includes(term) || dept.includes(term) || id.includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 初始化
if (typeof setupSearch === 'function') {
    setupSearch();
}