import { dateTime } from "./luxon.js";

export function diffDates(firstDate, secondDate) {
    firstDate = dateTime.fromISO(firstDate);
    secondDate = dateTime.fromISO(secondDate);

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

