export const getExperience = () => {
    const [y, m] = "2.10".split(".").map(Number);
    const nextYear = y + Math.floor((m + 1) / 12);
    const nextMonth = (m + 1) % 12;
    return `${nextYear}.${nextMonth}`;
  };
