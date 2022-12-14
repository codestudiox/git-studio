let themes = [
  {
    name: "다중지능",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "성격강점",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "직업 적성",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "핵심역량",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "기타...",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
]

export function getThemes() {
  return themes
}

export function getTheme(number) {
  return themes.find((theme) => theme.number === number)
}
