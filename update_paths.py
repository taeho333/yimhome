# -*- coding: utf-8 -*-
"""index.html 안의 구 이미지 경로를 새 clean 경로로 일괄 교체"""

HTML = r"D:\YimHome\.claude\worktrees\silly-bouman-a041f4\index.html"

replacements = [
    # ── cosmos ───────────────────────────────────────────────────
    ("assets/임_5개 시리즈/코스모스 cosmos/[크기변환][크기변환][포맷변환]1977 COSMOS #01.jpg",
     "assets/series/cosmos/cosmos-1977-01.jpg"),
    ("assets/임_5개 시리즈/코스모스 cosmos/[크기변환][크기변환][포맷변환]1976 COSMOS #02.jpg",
     "assets/series/cosmos/cosmos-1976-02.jpg"),
    ("assets/임_5개 시리즈/코스모스 cosmos/[크기변환][크기변환][포맷변환]1976 COSMOS #03.jpg",
     "assets/series/cosmos/cosmos-1976-03.jpg"),
    ("assets/임_5개 시리즈/코스모스 cosmos/[크기변환][크기변환][포맷변환]1977 COSMOS #17.jpg",
     "assets/series/cosmos/cosmos-1977-17.jpg"),
    ("assets/임_5개 시리즈/코스모스 cosmos/[크기변환][크기변환][포맷변환]1978 COSMOS #11-1.jpg",
     "assets/series/cosmos/cosmos-1978-11.jpg"),
    ("assets/임_5개 시리즈/코스모스 cosmos/[크기변환2]1978 COSMOS 15   Untitled 01-1.jpg",
     "assets/series/cosmos/cosmos-1978-15.jpg"),
    ("assets/임_5개 시리즈/코스모스 cosmos/[크기변환]IMGL3118-1 복사.jpg",
     "assets/series/cosmos/cosmos-IMGL3118.jpg"),
    ("assets/임_5개 시리즈/코스모스 cosmos/[크기변환]IMG_0089-1-1.jpg",
     "assets/series/cosmos/cosmos-IMG0089.jpg"),
    ("assets/임_5개 시리즈/코스모스 cosmos/[크기변환][포맷변환]IMG_2829-1.jpg",
     "assets/series/cosmos/cosmos-IMG2829.jpg"),
    ("assets/임_5개 시리즈/코스모스 cosmos/[크기변환]대구IMGL5491 copy-1 copy-1.jpg",
     "assets/series/cosmos/cosmos-IMGL5491.jpg"),

    # ── persona ──────────────────────────────────────────────────
    ("assets/임_5개 시리즈/페르소나 persona/[크기변환]1980KATAYAMA #01 IMG_3686-1-1.jpg",
     "assets/series/persona/persona-katayama-01.jpg"),
    ("assets/임_5개 시리즈/페르소나 persona/[크기변환]1980KATAYAMA #02IMG_3684-1-1.jpg",
     "assets/series/persona/persona-katayama-02.jpg"),
    ("assets/임_5개 시리즈/페르소나 persona/[크기변환]1980KATAYAMA #03IMG_3691-1-1.jpg",
     "assets/series/persona/persona-katayama-03.jpg"),
    ("assets/임_5개 시리즈/페르소나 persona/[크기변환]27-3.jpg",
     "assets/series/persona/persona-27.jpg"),
    ("assets/임_5개 시리즈/페르소나 persona/[크기변환]IMG_0833-1-1.jpg",
     "assets/series/persona/persona-IMG0833.jpg"),
    ("assets/임_5개 시리즈/페르소나 persona/[크기변환]IMG_1149-1.jpg",
     "assets/series/persona/persona-IMG1149.jpg"),
    ("assets/임_5개 시리즈/페르소나 persona/[크기변환]IMG_4399-1---1-1.jpg",
     "assets/series/persona/persona-IMG4399.jpg"),
    ("assets/임_5개 시리즈/페르소나 persona/[크기변환]IMG_5988-1-1.jpg",
     "assets/series/persona/persona-IMG5988.jpg"),
    ("assets/임_5개 시리즈/페르소나 persona/[크기변환]IMG_9403-1--------.jpg",
     "assets/series/persona/persona-IMG9403.jpg"),
    ("assets/임_5개 시리즈/페르소나 persona/[크기변환][크기변환]IMG_4399-1---1-1.jpg",
     "assets/series/persona/persona-IMG4399b.jpg"),
    ("assets/임_5개 시리즈/페르소나 persona/[크기변환]마지막 수정-IMG_4290-1-1-1-1-1-1-1-1-1액자용-1.jpg",
     "assets/series/persona/persona-IMG4290.jpg"),
    ("assets/임_5개 시리즈/페르소나 persona/[크기변환]임IMG_5817-1--.jpg",
     "assets/series/persona/persona-IMG5817.jpg"),
    ("assets/임_5개 시리즈/페르소나 persona/크기변환  PSN#02     14-1-1-1-1-1.jpg",
     "assets/series/persona/persona-psn02.jpg"),
    ("assets/임_5개 시리즈/페르소나 persona/크기변환 임IMG_3465-1-2------1.jpg",
     "assets/series/persona/persona-IMG3465.jpg"),

    # ── myth ─────────────────────────────────────────────────────
    ("assets/임_5개 시리즈/신화 mith/[크기변환][크기변환]13 70-50 IMGL7861.jpg",
     "assets/series/myth/myth-IMGL7861.jpg"),
    ("assets/임_5개 시리즈/신화 mith/[크기변환][크기변환]IMGL6453--1-1.jpg",
     "assets/series/myth/myth-IMGL6453.jpg"),
    ("assets/임_5개 시리즈/신화 mith/[크기변환][크기변환]Myth #62 2013 IMG_0122-이미지원.jpg",
     "assets/series/myth/myth-62.jpg"),
    ("assets/임_5개 시리즈/신화 mith/[크기변환][크기변환][크기변환]신화 #12 IMG_0349 copy BW-1.jpg",
     "assets/series/myth/myth-12.jpg"),
    ("assets/임_5개 시리즈/신화 mith/[크기변환][크기변환]신화 #05  IMG_1242-1-1-1.jpg",
     "assets/series/myth/myth-05.jpg"),
    ("assets/임_5개 시리즈/신화 mith/[크기변환][크기변환]신화 #20  IMG_0931 copy BW - 복사본--.jpg",
     "assets/series/myth/myth-20.jpg"),
    ("assets/임_5개 시리즈/신화 mith/[크기변환]신화 #04  P2290768 copy BW.jpg",
     "assets/series/myth/myth-04.jpg"),
    ("assets/임_5개 시리즈/신화 mith/[크기변환]신화 #37  IMG_6891 copy BW-1-1.jpg",
     "assets/series/myth/myth-37.jpg"),
    ("assets/임_5개 시리즈/신화 mith/[크기변환]신화 #43  IMGL3282 copy OK-1.jpg",
     "assets/series/myth/myth-43.jpg"),

    # ── hermits ──────────────────────────────────────────────────
    ("assets/임_5개 시리즈/은둔자 hermits/[크기변환][포맷변환]1-IMGL1321-1-1-1---1-1.jpg",
     "assets/series/hermits/hermits-IMGL1321.jpg"),
    ("assets/임_5개 시리즈/은둔자 hermits/[크기변환][크기변환]09-1 70-50 IMG_0052.jpg",
     "assets/series/hermits/hermits-IMG0052.jpg"),
    ("assets/임_5개 시리즈/은둔자 hermits/[크기변환][포맷변환][크기변환]5-IMGL1961-1.jpg",
     "assets/series/hermits/hermits-IMGL1961.jpg"),
    ("assets/임_5개 시리즈/은둔자 hermits/[크기변환][크기변환]IMGL6546 수정 70-50.jpg",
     "assets/series/hermits/hermits-IMGL6546.jpg"),
    ("assets/임_5개 시리즈/은둔자 hermits/[크기변환][크기변환]IMGL7858 수정 70-50.jpg",
     "assets/series/hermits/hermits-IMGL7858.jpg"),
    ("assets/임_5개 시리즈/은둔자 hermits/[크기변환][크기변환]IMGL8902 수정 70-50.jpg",
     "assets/series/hermits/hermits-IMGL8902.jpg"),
    ("assets/임_5개 시리즈/은둔자 hermits/[크기변환]IMGL1322-1-1-1.jpg",
     "assets/series/hermits/hermits-IMGL1322.jpg"),
    ("assets/임_5개 시리즈/은둔자 hermits/[크기변환]IMG_6192-1-1-1-1.jpg",
     "assets/series/hermits/hermits-IMG6192.jpg"),
    ("assets/임_5개 시리즈/은둔자 hermits/[크기변환]IMG_6299 50-70.jpg",
     "assets/series/hermits/hermits-IMG6299.jpg"),
    ("assets/임_5개 시리즈/은둔자 hermits/[크기변환]강화도IMGL5245 복사1.jpg",
     "assets/series/hermits/hermits-IMGL5245.jpg"),
    ("assets/임_5개 시리즈/은둔자 hermits/[크기변환]최종수정IMGL2883 1차-1.jpg",
     "assets/series/hermits/hermits-IMGL2883.jpg"),
    ("assets/임_5개 시리즈/은둔자 hermits/[크기변환]4-2.jpg",
     "assets/series/hermits/hermits-04.jpg"),

    # ── vibes ────────────────────────────────────────────────────
    ("assets/임_5개 시리즈/징후 vibes/[크기변환]19-1 (2).jpg",
     "assets/series/vibes/vibes-19.jpg"),
    ("assets/임_5개 시리즈/징후 vibes/[크기변환]IMGL9074-1-1.jpg",
     "assets/series/vibes/vibes-IMGL9074.jpg"),
    ("assets/임_5개 시리즈/징후 vibes/[크기변환]IMG_9154-1--1.jpg",
     "assets/series/vibes/vibes-IMG9154.jpg"),
    ("assets/임_5개 시리즈/징후 vibes/[크기변환]IMG_9921-1 복사.jpg",
     "assets/series/vibes/vibes-IMG9921.jpg"),
    ("assets/임_5개 시리즈/징후 vibes/[크기변환]P2160933-1-1.jpg",
     "assets/series/vibes/vibes-P2160933.jpg"),
    ("assets/임_5개 시리즈/징후 vibes/[크기변환][크기변환]8-IMGL0348-1 복사.jpg",
     "assets/series/vibes/vibes-IMGL0348.jpg"),
    ("assets/임_5개 시리즈/징후 vibes/[크기변환][크기변환][포맷변환]IMGL6904-1.jpg",
     "assets/series/vibes/vibes-IMGL6904.jpg"),
    ("assets/임_5개 시리즈/징후 vibes/[크기변환][포맷변환]IMGL3184-1.jpg",
     "assets/series/vibes/vibes-IMGL3184.jpg"),
    ("assets/임_5개 시리즈/징후 vibes/[크기변환][포맷변환]최종수정IMGL4692 복사.jpg",
     "assets/series/vibes/vibes-IMGL4692.jpg"),
    ("assets/임_5개 시리즈/징후 vibes/[포맷변환][크기변환]IMGL9701-1-1-1.jpg",
     "assets/series/vibes/vibes-IMGL9701.jpg"),
]

with open(HTML, encoding="utf-8") as f:
    content = f.read()

count = 0
for old, new in replacements:
    n = content.count(old)
    if n:
        content = content.replace(old, new)
        print(f"  {n}x  {old[-45:]!r:50} → {new}")
        count += n
    else:
        print(f"  NOT FOUND: {old[-45:]!r}")

with open(HTML, "w", encoding="utf-8") as f:
    f.write(content)

print(f"\n=== {count} replacements made ===")
