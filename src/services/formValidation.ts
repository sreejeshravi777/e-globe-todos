import { TodoFormErrors, TodoFormData } from "../types/type";


export const validateTodoForm = (formData: TodoFormData): { errors: TodoFormErrors; isValid: boolean } => {
    const errors: TodoFormErrors = { todo: '', userId: '' };
    let isValid = true;

    // Validate todo field
    if (!formData.todo.trim()) {
        errors.todo = 'Todo is required';
        isValid = false;
    } else if (formData.todo.trim().length < 3) {
        errors.todo = 'Todo must be at least 3 characters';
        isValid = false;
    }

    // Validate userId field
    if (!formData.userId.trim()) {
        errors.userId = 'User ID is required';
        isValid = false;
    } else if (isNaN(Number(formData.userId)) || Number(formData.userId) <= 0) {
        errors.userId = 'User ID must be a positive number';
        isValid = false;
    }

    return { errors, isValid };
};

export const clearFieldError = (fieldName: keyof TodoFormErrors, currentErrors: TodoFormErrors): TodoFormErrors => {
    return {
        ...currentErrors,
        [fieldName]: ''
    };
};
