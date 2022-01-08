import React from 'react';

import { CheckBoxOption, PickerOption } from '@seg-estetica/data';

export type FetchOptions = {
	useAPIBase: Bool,
	toJSON: Bool,
	maxAttempts: Integer,
	extern: Bool,
	headers: Object
};

export const useFetch = async (url: string, options: FetchOptions): Promise<Object | Response> => { };

export const useFormState = (initialData: Object, formValidator: (formState: Object) => (canOrNot: Bool, attribute: any) => Bool): [
	formState: Object,
	setPropOfState: Function,
	validated: Bool
] => { };

export const usePickerData = (data: Object[], mold: {
	valueAlias: String,
	labelAlias: String
}): PickerOption[] => { };

export const useCheckBoxData = (data: Object[], mold: {
	valueAlias: String,
	labelAlias: String
}): [checkBoxData: CheckBoxOption[], setCheckBoxData: Function] => { };
