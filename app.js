// 2025 JANG MART Executive Monitoring Script
const DASHBOARD_DATA = {
  "summary": {
    "net_sales": 2970996100,
    "gross_sales": 3699972600,
    "discount_amount": 740678400,
    "discount_rate": 19.72,
    "orders_count": 60079,
    "customers_count": 10000,
    "aov": 49451,
    "arpu": 297099,
    "order_freq": 6.01,
    "return_rate": 1.55,
    "return_amount": 43610700
  },
  "monthly": [
    {
      "월": 1,
      "매출": 180997700,
      "주문수": 3711,
      "할인액": 35411000
    },
    {
      "월": 2,
      "매출": 174381700,
      "주문수": 3575,
      "할인액": 37164400
    },
    {
      "월": 3,
      "매출": 212339200,
      "주문수": 4186,
      "할인액": 46556500
    },
    {
      "월": 4,
      "매출": 203646900,
      "주문수": 4134,
      "할인액": 47849400
    },
    {
      "월": 5,
      "매출": 219252900,
      "주문수": 4431,
      "할인액": 52646800
    },
    {
      "월": 6,
      "매출": 218655100,
      "주문수": 4512,
      "할인액": 53158500
    },
    {
      "월": 7,
      "매출": 229961900,
      "주문수": 4754,
      "할인액": 58403400
    },
    {
      "월": 8,
      "매출": 249646500,
      "주문수": 4950,
      "할인액": 62689500
    },
    {
      "월": 9,
      "매출": 295051300,
      "주문수": 6011,
      "할인액": 75923600
    },
    {
      "월": 10,
      "매출": 316174600,
      "주문수": 6396,
      "할인액": 82288500
    },
    {
      "월": 11,
      "매출": 326019600,
      "주문수": 6562,
      "할인액": 86273800
    },
    {
      "월": 12,
      "매출": 344868700,
      "주문수": 6857,
      "할인액": 90611100
    }
  ],
  "stores": [
    {
      "점포명": "온라인몰",
      "구매채널": "온라인",
      "매출": 1171828100,
      "주문수": 24802
    },
    {
      "점포명": "잠실점",
      "구매채널": "오프라인",
      "매출": 238872700,
      "주문수": 4453
    },
    {
      "점포명": "왕십리점",
      "구매채널": "오프라인",
      "매출": 229443900,
      "주문수": 4462
    },
    {
      "점포명": "수원점",
      "구매채널": "오프라인",
      "매출": 226079800,
      "주문수": 4525
    },
    {
      "점포명": "김포공항점",
      "구매채널": "오프라인",
      "매출": 224463900,
      "주문수": 4423
    },
    {
      "점포명": "서울역점",
      "구매채널": "오프라인",
      "매출": 224320900,
      "주문수": 4424
    },
    {
      "점포명": "청량리점",
      "구매채널": "오프라인",
      "매출": 223049900,
      "주문수": 4323
    },
    {
      "점포명": "영등포점",
      "구매채널": "오프라인",
      "매출": 218664300,
      "주문수": 4520
    },
    {
      "점포명": "강남점",
      "구매채널": "오프라인",
      "매출": 214272600,
      "주문수": 4147
    }
  ],
  "categories": [
    {
      "상품군": "소형가전",
      "매출": 731517400,
      "수량": 6243
    },
    {
      "상품군": "침구홈",
      "매출": 457007300,
      "수량": 7543
    },
    {
      "상품군": "신선식품",
      "매출": 315534000,
      "수량": 17138
    },
    {
      "상품군": "기초화장품",
      "매출": 300791800,
      "수량": 7922
    },
    {
      "상품군": "건강식품",
      "매출": 287789300,
      "수량": 11440
    },
    {
      "상품군": "주방용품",
      "매출": 284458800,
      "수량": 9746
    },
    {
      "상품군": "생활용품",
      "매출": 208250300,
      "수량": 15745
    },
    {
      "상품군": "욕실청소",
      "매출": 154078000,
      "수량": 11746
    },
    {
      "상품군": "가공식품",
      "매출": 142432200,
      "수량": 19472
    },
    {
      "상품군": "베이커리델리",
      "매출": 89137000,
      "수량": 12628
    }
  ],
  "payment": [
    {
      "결제수단": "간편결제",
      "건수": 25088,
      "매출": 839742700
    },
    {
      "결제수단": "신용카드",
      "건수": 50703,
      "매출": 1689500600
    },
    {
      "결제수단": "체크카드",
      "건수": 13483,
      "매출": 441752800
    }
  ],
  "dow": [
    {
      "요일": "월",
      "매출": 425790900
    },
    {
      "요일": "화",
      "매출": 409656700
    },
    {
      "요일": "수",
      "매출": 421802400
    },
    {
      "요일": "목",
      "매출": 420513900
    },
    {
      "요일": "금",
      "매출": 433266900
    },
    {
      "요일": "토",
      "매출": 434365100
    },
    {
      "요일": "일",
      "매출": 425600200
    }
  ],
  "top_products": [
    {
      "상품명": "다이슨 슈퍼소닉 뉴럴 헤어드라이어",
      "상품군": "소형가전",
      "매출": 155025800,
      "판매수량": 321
    },
    {
      "상품명": "파나소닉 나노케어 헤어드라이어 EH-NA0J",
      "상품군": "소형가전",
      "매출": 100090200,
      "판매수량": 311
    },
    {
      "상품명": "발뮤다 더 토스터 K05B",
      "상품군": "소형가전",
      "매출": 82142500,
      "판매수량": 302
    },
    {
      "상품명": "소프라움 구스 차렵이불 세트",
      "상품군": "침구홈",
      "매출": 74818100,
      "판매수량": 374
    },
    {
      "상품명": "닥스침구 모달 차렵이불 세트",
      "상품군": "침구홈",
      "매출": 59579000,
      "판매수량": 369
    },
    {
      "상품명": "에스티로더 수프림 플러스 유스 파워 크림 50ml",
      "상품군": "기초화장품",
      "매출": 59337800,
      "판매수량": 426
    },
    {
      "상품명": "알레르망 알러지케어 차렵이불 세트",
      "상품군": "침구홈",
      "매출": 51610600,
      "판매수량": 356
    },
    {
      "상품명": "키친에이드 1.25L 전기주전자 5KEK1222",
      "상품군": "소형가전",
      "매출": 47755100,
      "판매수량": 351
    },
    {
      "상품명": "이브자리 순면 차렵이불 세트",
      "상품군": "침구홈",
      "매출": 47661000,
      "판매수량": 375
    },
    {
      "상품명": "세사온라인 알러지케어 차렵이불 세트",
      "상품군": "침구홈",
      "매출": 43006000,
      "판매수량": 406
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  renderKPIs(DASHBOARD_DATA.summary);
  renderMonthlyTrendChart(DASHBOARD_DATA.monthly);
  renderChannelStoreChart(DASHBOARD_DATA.stores);
  renderCategoryDonutChart(DASHBOARD_DATA.categories);
  renderPaymentChart(DASHBOARD_DATA.payment);
  renderDowChart(DASHBOARD_DATA.dow);
  renderTopProductsTable(DASHBOARD_DATA.top_products, DASHBOARD_DATA.summary.net_sales);

  initEventListeners();
});

function formatWon(num) {
  return new Intl.NumberFormat('ko-KR').format(num) + '원';
}

function formatNumber(num) {
  return new Intl.NumberFormat('ko-KR').format(num);
}

function renderKPIs(summary) {
  document.getElementById('kpi-net-sales').innerHTML = (summary.net_sales / 100000000).toFixed(2) + '<span class="unit">억원</span>';
  document.getElementById('kpi-aov').innerHTML = formatNumber(summary.aov) + '<span class="unit">원</span>';
  document.getElementById('kpi-online-share').innerHTML = '39.4<span class="unit">%</span>';
  document.getElementById('kpi-top-cat').innerHTML = '7.32<span class="unit">억원</span>';
  document.getElementById('kpi-pay-share').innerHTML = '28.1<span class="unit">%</span>';
}

// 1. Monthly Trend Combo Chart
function renderMonthlyTrendChart(monthly) {
  const ctx = document.getElementById('monthlyTrendChart').getContext('2d');
  
  const labels = monthly.map(m => `${m.월}월`);
  const sales = monthly.map(m => m.매출 / 100000000); // 억원
  const orders = monthly.map(m => m.주문수);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          type: 'line',
          label: '주문건수 (건)',
          data: orders,
          borderColor: '#a855f7',
          backgroundColor: '#a855f7',
          borderWidth: 3,
          tension: 0.35,
          yAxisID: 'yOrders',
          pointRadius: 4,
          pointHoverRadius: 7,
          pointBackgroundColor: '#ffffff',
          pointBorderColor: '#a855f7',
        },
        {
          type: 'bar',
          label: '순매출액 (억원)',
          data: sales,
          backgroundColor: 'rgba(6, 182, 212, 0.75)',
          hoverBackgroundColor: 'rgba(6, 182, 212, 1)',
          borderRadius: 6,
          yAxisID: 'ySales'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(17, 24, 39, 0.95)',
          titleColor: '#ffffff',
          bodyColor: '#e5e7eb',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: function(ctx) {
              if (ctx.dataset.yAxisID === 'ySales') {
                return ` 순매출: ${ctx.raw.toFixed(2)}억원 (${formatWon(monthly[ctx.dataIndex].매출)})`;
              }
              return ` 주문수: ${formatNumber(ctx.raw)}건`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          ticks: { color: '#9ca3af', font: { family: 'Pretendard' } }
        },
        ySales: {
          type: 'linear',
          position: 'left',
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          ticks: {
            color: '#06b6d4',
            callback: value => value + '억'
          }
        },
        yOrders: {
          type: 'linear',
          position: 'right',
          grid: { drawOnChartArea: false },
          ticks: {
            color: '#c084fc',
            callback: value => formatNumber(value) + '건'
          }
        }
      }
    }
  });
}

// 2. Channel & Store Horizontal Bar
function renderChannelStoreChart(stores) {
  const ctx = document.getElementById('channelStoreChart').getContext('2d');
  
  const labels = stores.map(s => s.점포명);
  const sales = stores.map(s => (s.매출 / 100000000).toFixed(2));
  const colors = stores.map(s => s.구매채널 === '온라인' ? 'rgba(59, 130, 246, 0.85)' : 'rgba(16, 185, 129, 0.7)');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        data: sales,
        backgroundColor: colors,
        borderRadius: 5
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(17, 24, 39, 0.95)',
          padding: 10,
          callbacks: {
            label: ctx => ` 매출: ${ctx.raw}억원 (${stores[ctx.dataIndex].구매채널})`
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          ticks: { color: '#9ca3af', callback: v => v + '억' }
        },
        y: {
          grid: { display: false },
          ticks: { color: '#ffffff', font: { family: 'Pretendard', weight: '500' } }
        }
      }
    }
  });
}

// 3. Category Donut Chart
function renderCategoryDonutChart(categories) {
  const ctx = document.getElementById('categoryDonutChart').getContext('2d');
  
  const labels = categories.map(c => c.상품군);
  const data = categories.map(c => c.매출);
  const palette = [
    '#06b6d4', '#a855f7', '#3b82f6', '#10b981', '#f59e0b',
    '#ec4899', '#8b5cf6', '#14b8a6', '#64748b', '#f43f5e'
  ];

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: palette,
        borderColor: '#111827',
        borderWidth: 2,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: { color: '#9ca3af', boxWidth: 12, font: { family: 'Pretendard', size: 11 } }
        },
        tooltip: {
          backgroundColor: 'rgba(17, 24, 39, 0.95)',
          padding: 10,
          callbacks: {
            label: function(ctx) {
              const val = ctx.raw;
              const total = data.reduce((a, b) => a + b, 0);
              const pct = (val / total * 100).toFixed(1);
              return ` ${ctx.label}: ${(val / 100000000).toFixed(2)}억원 (${pct}%)`;
            }
          }
        }
      },
      cutout: '62%'
    }
  });
}

// 4. Payment Chart
function renderPaymentChart(payment) {
  const ctx = document.getElementById('paymentChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: payment.map(p => p.결제수단),
      datasets: [{
        data: payment.map(p => p.건수),
        backgroundColor: ['#3b82f6', '#f59e0b', '#10b981'],
        borderColor: '#111827',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#9ca3af', boxWidth: 12, font: { family: 'Pretendard', size: 12 } }
        },
        tooltip: {
          backgroundColor: 'rgba(17, 24, 39, 0.95)',
          padding: 10,
          callbacks: {
            label: function(ctx) {
              const val = ctx.raw;
              const total = payment.reduce((a, b) => a + b.건수, 0);
              const pct = (val / total * 100).toFixed(1);
              return ` ${ctx.label}: ${formatNumber(val)}건 (${pct}%)`;
            }
          }
        }
      }
    }
  });
}

// 5. Day of Week Chart
function renderDowChart(dow) {
  const ctx = document.getElementById('dowChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dow.map(d => d.요일 + '요일'),
      datasets: [{
        data: dow.map(d => (d.매출 / 100000000).toFixed(2)),
        backgroundColor: dow.map(d => (d.요일 === '토' || d.요일 === '일') ? '#ec4899' : '#06b6d4'),
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(17, 24, 39, 0.95)',
          callbacks: {
            label: ctx => ` 매출: ${ctx.raw}억원`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#9ca3af', font: { family: 'Pretendard' } }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          ticks: { color: '#9ca3af', callback: v => v + '억' }
        }
      }
    }
  });
}

// 6. Top Products Table
function renderTopProductsTable(products, totalSales) {
  const tbody = document.getElementById('top-products-body');
  tbody.innerHTML = '';

  products.forEach((p, idx) => {
    const rank = idx + 1;
    let rankClass = 'rank-other';
    if (rank === 1) rankClass = 'rank-1';
    else if (rank === 2) rankClass = 'rank-2';
    else if (rank === 3) rankClass = 'rank-3';

    const share = ((p.매출 / totalSales) * 100).toFixed(2);

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="rank-badge ${rankClass}">${rank}</span></td>
      <td><span class="prod-name">${p.상품명}</span></td>
      <td><span class="cat-badge">${p.상품군}</span></td>
      <td class="text-right">${formatNumber(p.판매수량)}개</td>
      <td class="text-right">${formatWon(p.매출)}</td>
      <td class="text-right">
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${Math.min(share * 10, 100)}%;"></div>
          </div>
          <span>${share}%</span>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function initEventListeners() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  const refreshBtn = document.getElementById('refresh-btn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      window.location.reload();
    });
  }
}
