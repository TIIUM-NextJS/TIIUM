import type { UserConfig } from "cz-git";

const TYPES = [
  { value: "feat", emoji: "✨", description: "새로운 기능 추가" },
  { value: "fix", emoji: "🐛", description: "버그 수정" },
  { value: "refactor", emoji: "♻️", description: "기능 변경 없이 코드 개선" },
  { value: "style", emoji: "💄", description: "코드 스타일 변경(로직 변경 X)" },
  { value: "test", emoji: "✅", description: "테스트 코드" },
  { value: "docs", emoji: "📝", description: "문서 수정" },
  { value: "chore", emoji: "🔧", description: "설정, 패키지, 빌드" },
] as const;

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    name: "conventional-changelog-conventionalcommits",
    parserOpts: {
      headerPattern: /^(\S+)\s(\w*)(?:\((.*)\))?!?:\s(.*)$/u,
      headerCorrespondence: ["emoji", "type", "scope", "subject"],
    },
  },
  rules: {
    "type-enum": [2, "always", TYPES.map((type) => type.value)],
    "subject-case": [0],
  },
  prompt: {
    useEmoji: true,
    emojiAlign: "center",
    alias: { fd: "docs: fix typos" },
    skipQuestions: ["scope"],
    messages: {
      type: "커밋할 변경 사항의 타입을 선택하세요:",
      subject: "변경 사항을 간단히 설명해주세요:\n",
      body: "상세한 설명을 입력하세요 (선택, 줄바꿈은 '|' 사용):\n",
      footerPrefixesSelect: "관련된 이슈 타입을 선택하세요 (선택):",
      customFooterPrefix: "이슈 프리픽스를 입력하세요:",
      footer: "관련된 이슈 번호를 입력하세요. 예: #31, #34 (선택):",
      confirmCommit: "위 내용으로 커밋하시겠습니까?",
    },
    types: TYPES.map(({ value, emoji, description }) => ({
      value,
      emoji,
      name: `${value}:`.padEnd(10) + `${emoji}  ${description}`,
    })),
  },
};

export default config;
