import type { Movie } from '@/models/MovieDetails.model'

const movieYear = new Date('2004')
movieYear.setFullYear(2004)

export const movieMock: Movie = {
  id: 1,
  title: 'Pulp Fiction',
  vote_average: 8.9,
  genres: ['Action & Adventure'],
  release_date: '2004',
  runtime: 154,
  overview:
    'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
  poster_path:
    'https://s3-alpha-sig.figma.com/img/89fa/22b0/9af0f226591250d0c0dc45e952d8c0a6?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ilTkFisfeExnGDkLdPnDccr3IK6Sx78hlMJmdmeZcSPkCcKl9iGavw5ZVls4xWvrWwhIas2AmVTg-SiFT-wLdnF7ietyVh9whAARhkFcOwc4eTCrJ2Z~rW1pq39oe2lVWc7d-0lzcYEy6Y9Y78aEu63A4ew9LUhb6BZryHY2ycarnfNoai~0oh6te9tyiFsNEcV56iigvx-uMvaL5a0tnek3E9x-sikAPlmxEu5XtiYiMm7FmR1MI877kNKO9FGNfnjoKdiUl2ontm2aXbtyWGKM6vfjrRa-C93JxpPzVwyy~VjT5AaMNvMcAaNHzbZhBujM6Xkbl4xwa5w33KDGWQ__',
}
