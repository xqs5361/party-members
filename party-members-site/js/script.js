// 党员信息查询系统 - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('党员信息查询系统已加载');

    // 从WPS加载数据
    loadWPSData();
});

// 从WPS加载数据
async function loadWPSData() {
    try {
        // 这里应该调用WPS API获取数据
        // 目前使用模拟数据
        const mockData = {
            'P001': {
                name: '张三',
                department: '技术部',
                position: '书记',
                phone: '138****1234',
                join_date: '2015-07-01'
            },
            'P002': {
                name: '李四',
                department: '市场部',
                position: '委员',
                phone: '139****5678',
                join_date: '2018-09-15'
            }
        };

        console.log('已加载党员数据:', mockData);

    } catch (error) {
        console.error('加载数据失败:', error);
    }
}