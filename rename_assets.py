# -*- coding: utf-8 -*-
import os

BASE = r"D:\YimHome\.claude\worktrees\silly-bouman-a041f4\assets"

# ── 1. 최상위 폴더 이름 변경 ──────────────────────────────
old_series = os.path.join(BASE, "임_5개 시리즈")
new_series = os.path.join(BASE, "series")
if os.path.exists(old_series):
    os.rename(old_series, new_series)
    print(f"renamed: 임_5개 시리즈 → series")

# ── 2. 시리즈 서브폴더 이름 변경 ─────────────────────────
sub_renames = {
    "코스모스 cosmos": "cosmos",
    "페르소나 persona": "persona",
    "신화 mith":       "myth",
    "은둔자 hermits":  "hermits",
    "징후 vibes":      "vibes",
}
for old, new in sub_renames.items():
    src = os.path.join(new_series, old)
    dst = os.path.join(new_series, new)
    if os.path.exists(src):
        os.rename(src, dst)
        print(f"renamed: {old} → {new}")

# ── 3. 파일 이름 변경 맵 ─────────────────────────────────
file_map = {
    "cosmos": {
        "[크기변환][크기변환][포맷변환]1977 COSMOS #01.jpg":         "cosmos-1977-01.jpg",
        "[크기변환][크기변환][포맷변환]1976 COSMOS #02.jpg":         "cosmos-1976-02.jpg",
        "[크기변환][크기변환][포맷변환]1976 COSMOS #03.jpg":         "cosmos-1976-03.jpg",
        "[크기변환][크기변환][포맷변환]1977 COSMOS #17.jpg":         "cosmos-1977-17.jpg",
        "[크기변환][크기변환][포맷변환]1978 COSMOS #11-1.jpg":       "cosmos-1978-11.jpg",
        "[크기변환2]1978 COSMOS 15   Untitled 01-1.jpg":             "cosmos-1978-15.jpg",
        "[크기변환]IMGL3118-1 복사.jpg":                             "cosmos-IMGL3118.jpg",
        "[크기변환]IMG_0089-1-1.jpg":                                "cosmos-IMG0089.jpg",
        "[크기변환][포맷변환]IMG_2829-1.jpg":                        "cosmos-IMG2829.jpg",
        "[크기변환]대구IMGL5491 copy-1 copy-1.jpg":                  "cosmos-IMGL5491.jpg",
    },
    "persona": {
        "[크기변환]1980KATAYAMA #01 IMG_3686-1-1.jpg":   "persona-katayama-01.jpg",
        "[크기변환]1980KATAYAMA #02IMG_3684-1-1.jpg":    "persona-katayama-02.jpg",
        "[크기변환]1980KATAYAMA #03IMG_3691-1-1.jpg":    "persona-katayama-03.jpg",
        "[크기변환]27-3.jpg":                            "persona-27.jpg",
        "[크기변환]IMG_0833-1-1.jpg":                    "persona-IMG0833.jpg",
        "[크기변환]IMG_1149-1.jpg":                      "persona-IMG1149.jpg",
        "[크기변환]IMG_4399-1---1-1.jpg":                "persona-IMG4399.jpg",
        "[크기변환]IMG_5988-1-1.jpg":                    "persona-IMG5988.jpg",
        "[크기변환]IMG_9403-1--------.jpg":              "persona-IMG9403.jpg",
        "[크기변환][크기변환]IMG_4399-1---1-1.jpg":      "persona-IMG4399b.jpg",
        "[크기변환]마지막 수정-IMG_4290-1-1-1-1-1-1-1-1-1액자용-1.jpg": "persona-IMG4290.jpg",
        "[크기변환]임IMG_5817-1--.jpg":                  "persona-IMG5817.jpg",
        "크기변환  PSN#02     14-1-1-1-1-1.jpg":         "persona-psn02.jpg",
        "크기변환 임IMG_3465-1-2------1.jpg":            "persona-IMG3465.jpg",
    },
    "myth": {
        "[크기변환][크기변환]13 70-50 IMGL7861.jpg":                          "myth-IMGL7861.jpg",
        "[크기변환][크기변환]IMGL6453--1-1.jpg":                              "myth-IMGL6453.jpg",
        "[크기변환][크기변환]Myth #62 2013 IMG_0122-이미지원.jpg":             "myth-62.jpg",
        "[크기변환][크기변환][크기변환]신화 #12 IMG_0349 copy BW-1.jpg":      "myth-12.jpg",
        "[크기변환][크기변환]신화 #05  IMG_1242-1-1-1.jpg":                   "myth-05.jpg",
        "[크기변환][크기변환]신화 #20  IMG_0931 copy BW - 복사본--.jpg":       "myth-20.jpg",
        "[크기변환]신화 #04  P2290768 copy BW.jpg":                           "myth-04.jpg",
        "[크기변환]신화 #37  IMG_6891 copy BW-1-1.jpg":                       "myth-37.jpg",
        "[크기변환]신화 #43  IMGL3282 copy OK-1.jpg":                         "myth-43.jpg",
    },
    "hermits": {
        "[크기변환]4-2.jpg":                                  "hermits-04.jpg",
        "[크기변환]IMGL1322-1-1-1.jpg":                       "hermits-IMGL1322.jpg",
        "[크기변환]IMG_6192-1-1-1-1.jpg":                     "hermits-IMG6192.jpg",
        "[크기변환]IMG_6299 50-70.jpg":                       "hermits-IMG6299.jpg",
        "[크기변환][크기변환]09-1 70-50 IMG_0052.jpg":        "hermits-IMG0052.jpg",
        "[크기변환][크기변환]IMGL6546 수정 70-50.jpg":        "hermits-IMGL6546.jpg",
        "[크기변환][크기변환]IMGL7858 수정 70-50.jpg":        "hermits-IMGL7858.jpg",
        "[크기변환][크기변환]IMGL8902 수정 70-50.jpg":        "hermits-IMGL8902.jpg",
        "[크기변환][포맷변환]1-IMGL1321-1-1-1---1-1.jpg":     "hermits-IMGL1321.jpg",
        "[크기변환][포맷변환][크기변환]5-IMGL1961-1.jpg":     "hermits-IMGL1961.jpg",
        "[크기변환]강화도IMGL5245 복사1.jpg":                 "hermits-IMGL5245.jpg",
        "[크기변환]최종수정IMGL2883 1차-1.jpg":               "hermits-IMGL2883.jpg",
    },
    "vibes": {
        "[크기변환]19-1 (2).jpg":                             "vibes-19.jpg",
        "[크기변환]IMGL9074-1-1.jpg":                         "vibes-IMGL9074.jpg",
        "[크기변환]IMG_9154-1--1.jpg":                        "vibes-IMG9154.jpg",
        "[크기변환]IMG_9921-1 복사.jpg":                      "vibes-IMG9921.jpg",
        "[크기변환]P2160933-1-1.jpg":                         "vibes-P2160933.jpg",
        "[크기변환][크기변환]8-IMGL0348-1 복사.jpg":          "vibes-IMGL0348.jpg",
        "[크기변환][크기변환][포맷변환]IMGL6904-1.jpg":       "vibes-IMGL6904.jpg",
        "[크기변환][포맷변환]IMGL3184-1.jpg":                 "vibes-IMGL3184.jpg",
        "[크기변환][포맷변환]최종수정IMGL4692 복사.jpg":      "vibes-IMGL4692.jpg",
        "[포맷변환][크기변환]IMGL9701-1-1-1.jpg":             "vibes-IMGL9701.jpg",
    },
}

for folder, mapping in file_map.items():
    folder_path = os.path.join(new_series, folder)
    for old_name, new_name in mapping.items():
        src = os.path.join(folder_path, old_name)
        dst = os.path.join(folder_path, new_name)
        if os.path.exists(src):
            os.rename(src, dst)
            print(f"  [{folder}] {old_name[:50]!r} → {new_name}")
        else:
            print(f"  MISSING [{folder}]: {old_name!r}")

print("\n=== Done! ===")
