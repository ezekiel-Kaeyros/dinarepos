import cookies from 'js-cookie';
import { FIRST_FORM, FORM_STEP, SECOND_FORM, USER_DATA,SHOW } from './cookies.d';

export const setUserCookies = (data: any) => {
  cookies.set(USER_DATA, JSON.stringify(data), { domain: '.dina.nrw' });
};

export const getUserCookies = () => {
  const data = cookies.get(USER_DATA);
  return data ? JSON.parse(data) : undefined;
};

export const removeUserCookies = () => {
  cookies.remove(USER_DATA, { domain: '.dina.nrw' });
};

export const setShow = (data: string) => {
  console.log('data', data);

  cookies.set(SHOW, data, { domain: '.dina.nrw' });
};
export const removeShow = () => {
  cookies.remove(SHOW, { domain: '.dina.nrw' });
};

// Setting FORM steps

export const getFormStep = (): number => {
  const step = cookies?.get(FORM_STEP);
  return step ? JSON?.parse(step) : 1;
};

export const setFormStep = (step: number): void => {
  cookies.set(FORM_STEP, JSON.stringify(step), { expires: 1 ,  domain: '.dina.nrw' });
};

export const clearFormStep = (): void => {
  cookies.remove(FORM_STEP, { domain: '.dina.nrw' });
};

// Form cookies

export const setFormCookies = (data: any, formData: string) => {
  cookies.set(formData, JSON.stringify(data), { expires: 7,domain: '.dina.nrw' });
};

export const getFormCookies = (formData: string) => {
  let data = cookies.get(formData);

  return data ? JSON.parse(data) : undefined;
};

export const clearFormCookies = () => {
  cookies.remove(FORM_STEP, { domain: '.dina.nrw' });
  cookies.remove(FIRST_FORM, { domain: '.dina.nrw' });
  cookies.remove(SECOND_FORM, { domain: '.dina.nrw' });
};
