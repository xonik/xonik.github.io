import { useState, type FormEvent, type ReactNode } from 'react';

type ValidatorConfig = {
  [field: string]: {
    isRequired?: string;
    isEmail?: string;
    isNumber?: string;
    isMaxLength?: { message: string; length: number };
    isEqual?: (context: { fields: Record<string, any> }) => { message: string; value: any; validateIf?: boolean };
  };
};

export interface FormContext {
  fields: Record<string, any>;
  errors: Record<string, string>;
  isValid: boolean;
  submitted: boolean;
}

interface FormValidationProps {
  onSubmit: (context: FormContext) => void;
  config: ValidatorConfig;
  children: (context: FormContext & { submitted: boolean }) => ReactNode;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: Record<string, any>, config: ValidatorConfig): Record<string, string> {
  const errors: Record<string, string> = {};

  for (const [fieldName, rules] of Object.entries(config)) {
    const value = fields[fieldName];

    if (rules.isRequired && (value === undefined || value === null || value === '' || value === false)) {
      errors[fieldName] = rules.isRequired;
      continue;
    }

    if (rules.isEmail && value && !emailRegex.test(value)) {
      errors[fieldName] = rules.isEmail;
      continue;
    }

    if (rules.isNumber && value && isNaN(Number(value))) {
      errors[fieldName] = rules.isNumber;
      continue;
    }

    if (rules.isMaxLength && value && String(value).length > rules.isMaxLength.length) {
      errors[fieldName] = rules.isMaxLength.message;
      continue;
    }

    if (rules.isEqual) {
      const result = rules.isEqual({ fields });
      if (result.validateIf !== undefined && !result.validateIf) {
        continue;
      }
      if (value !== result.value) {
        errors[fieldName] = result.message;
        continue;
      }
    }
  }

  return errors;
}

export function FormValidation({ onSubmit, config, children }: FormValidationProps) {
  const [submitted, setSubmitted] = useState(false);
  const [fields, setFields] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    for (const key of Object.keys(config)) {
      initial[key] = '';
    }
    return initial;
  });

  const errors = validate(fields, config);
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmit({ fields, errors, isValid, submitted: true });
  };

  const handleChange = (e: any) => {
    const target = e.target;
    if (!target?.name) return;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFields(prev => ({ ...prev, [target.name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      {children({ fields, errors, isValid, submitted })}
    </form>
  );
}

