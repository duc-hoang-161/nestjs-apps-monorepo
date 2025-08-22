export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
  timestamp: string;
}

export function createSuccessResponse<T>(data: T, message?: string): ApiResponse<T> {
  return {
    success: true,
    data,
    message,
    timestamp: new Date().toISOString(),
  };
}

export function createErrorResponse(message: string, errors?: string[]): ApiResponse {
  return {
    success: false,
    message,
    errors,
    timestamp: new Date().toISOString(),
  };
}

export interface PaginationOptions {
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export function createPaginatedResponse<T>(
  data: T[],
  totalItems: number,
  options: Required<PaginationOptions>,
  message?: string
): PaginatedResponse<T> {
  const totalPages = Math.ceil(totalItems / options.limit);
  
  return {
    success: true,
    data,
    message,
    timestamp: new Date().toISOString(),
    pagination: {
      currentPage: options.page,
      totalPages,
      totalItems,
      itemsPerPage: options.limit,
    },
  };
}