import { DateTime } from "./luxon.js";

export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate) {
        [firstDate, secondDate] = [secondDate, firstDate];
    }

    return secondDate.diff(firstDate, ['year', 'months', 'days']).toObject();
}

export const diffToHtml = diff => `
    <span>
        ${diff.years ? 'лет: ' + diff.years : ''}
        ${diff.months ? 'месяцев: ' + diff.months : ''}
        ${diff.days ? 'дней: ' + diff.days : ''}
    </span>
`;

