export const tool = {
  "id": "E021",
  "title": "RL 시정수 계산기",
  "inputs_text": "인덕턴스 L [H], 전체 직렬 등가저항 R [Ω]",
  "formula": "τ = L / R",
  "output_text": "RL 시정수 τ [s]",
  "assumptions": "L,R>0. 인덕터 권선저항을 포함한 전체 저항을 사용한다. 포화·다중 극점이 없는 선형 1차 모델이다.",
  "purpose": "RL 시정수 계산 / 코일 전류 응답 실험",
  "sources": [
    {
      "label": "OpenStax · RL Circuits",
      "url": "https://openstax.org/books/university-physics-volume-2/pages/14-4-rl-circuits"
    }
  ],
  "slug": "eng-rl-time",
  "category": "전기",
  "result_label": "RL 시정수 τ",
  "result_dimension": "time",
  "fields": [
    {
      "key": "l",
      "label": "인덕턴스 L",
      "dimension": "inductance",
      "example": 0.1,
      "constraint": "positive",
      "display_unit": "mH",
      "display_value": "100"
    },
    {
      "key": "r",
      "label": "전체 직렬 등가저항 R",
      "dimension": "resistance",
      "example": 10,
      "constraint": "positive",
      "display_unit": "ohm",
      "display_value": "10"
    }
  ],
  "site": "https://nanalab.kr/eng-rl-time/",
  "repository": "https://github.com/NaNaCompany/eng-rl-time",
  "condition": "",
  "output_unit": "s"
};
