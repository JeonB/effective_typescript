// lib/utils/type-guards.ts
// lib/types/section.types.ts

// 기본 회기 타입
export interface Section {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isVisible: boolean;
  order: number;
}

// Partial: 모든 필드를 선택적으로 만듦 (폼 초기값 등)
export type SectionFormData = Partial<Section>;

// Pick: 특정 필드만 선택
export type SectionPreview = Pick<Section, "id" | "title" | "imageUrl">;

// Omit: 특정 필드를 제외
export type SectionWithoutOrder = Omit<Section, "order">;

// Record: 키-값 타입 매핑
export type SectionMap = Record<string, Section>;

// 실제 사용 예시
function createSectionForm(initialData?: SectionFormData): SectionFormData {
  return {
    title: initialData?.title || "",
    description: initialData?.description || "",
    // ... 나머지 필드
  };
}

function getSectionPreviews(sections: Section[]): SectionPreview[] {
  return sections.map(({ id, title, imageUrl }) => ({ id, title, imageUrl }));
}
// 타입 가드 함수
export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number" && !isNaN(value);
}

// API 응답 타입 가드
interface ApiSuccessResponse<T> {
  success: true;
  data: T;
}

interface ApiErrorResponse {
  success: false;
  error: string;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export function isApiSuccess<T>(
  response: ApiResponse<T>
): response is ApiSuccessResponse<T> {
  return response.success === true;
}

// 사용 예시
async function fetchSectionData(id: string): Promise<Section | null> {
  const response: ApiResponse<Section> = await fetch(
    `/api/sections/${id}`
  ).then((res) => res.json());

  // Type Narrowing: TypeScript가 자동으로 타입을 좁혀줌
  if (isApiSuccess(response)) {
    // 여기서 response는 ApiSuccessResponse<Section> 타입
    return response.data; // 타입 안전
  } else {
    // 여기서 response는 ApiErrorResponse 타입
    console.error(response.error);
    return null;
  }
}
