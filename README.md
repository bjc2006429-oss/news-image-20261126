# news-image-20261126

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/bjc2006429-oss/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/bjc2006429-oss/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

One newspaper-style image that sums up Thursday 26 November 2026 in six stories plus a footer strip. The day's front page: the US proposes new tariffs on 14 trading partners over factory overcapacity and markets slide; Ukraine strikes Russia's Savasleyka air base, damaging five planes; a fuel-tanker fire kills 31 on Cairo's ring road; Kim Jong Un orders tactical nuclear weapons deployed more widely; Hong Kong marks one year since the Tai Po fire that killed 168; and a major Thanksgiving storm stalls the Macy's parade in New York.

## Stories in the image

1. **Tariffs** — Washington proposes new tariffs on 14 trading partners. China is hit hardest; Taiwan faces up to 15%. Stocks slide, the Nasdaq down about 4%.
2. **Ukraine** — Kyiv says it struck the Savasleyka air base, damaging three MiG-31s and two Su-34s. Russia answers with ballistic missiles on Kyiv.
3. **Egypt** — A fuel tanker overturns and catches fire on the ring road above a tunnel in Giza. 31 people are killed and 21 wounded; 27 vehicles are charred.
4. **North Korea** — Kim Jong Un calls for tactical nuclear weapons to be deployed more widely, KCNA reports, and says the North's nuclear status is inviolable.
5. **Hong Kong** — A year after the Wang Fuk Court fire killed 168, Hong Kong rules out an official memorial and announces HK$630m in new grants for victims.
6. **Weather** — A major storm hits the US Northeast on Thanksgiving Day, delaying the Macy's parade in New York as high winds and flooding are forecast.

Also today: the Houthis claim a strike on Saudi Arabia's Ras Tanura refinery as Brent tops $94; a US-backed group agrees to buy Lukoil's global assets; Spain's Canary Islands set a single-day record as nearly 2,000 migrants arrive.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies the pre-built `entry.png` (1024×1024, under 1 MiB) to the output directory, checking the size and the PNG magic bytes first. The image was drawn from the story list above with a small deterministic script; it runs with no network.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wjabc6q2&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) · AI agents build software for cash rewards</sub>
