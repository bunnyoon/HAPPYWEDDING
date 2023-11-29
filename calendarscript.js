function drawCalendar(year, month, specialDate) {
    const calendarContainer = document.getElementById('calendar');
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();

    const calendar = [];
    let currentRow = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
        currentRow.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        currentRow.push(day);

        if (currentRow.length === 7) {
            calendar.push(currentRow);
            currentRow = [];
        }
    }

    for (let i = currentRow.length; i < 7; i++) {
        currentRow.push(null);
    }

    calendar.push(currentRow);

    calendarContainer.innerHTML = ''; // Clear previous content

    for (const week of calendar) {
        for (const day of week) {
            const dayElement = document.createElement('div');
            dayElement.className = day === null ? 'day null-day' : 'day';
            dayElement.textContent = day === null ? '' : day;

            // Check if the current day is the special date
            if (day === specialDate.getDate() && month - 1 === specialDate.getMonth() && year === specialDate.getFullYear()) {
                dayElement.classList.add('special-date');
            }

            calendarContainer.appendChild(dayElement);
        }
    }
}

// 예시: 2023년 12월, 특정 날짜 15일 표시
const specialDate = new Date(2023, 11, 15); // 월은 0부터 시작하므로 12월은 11
drawCalendar(2023, 12, specialDate);