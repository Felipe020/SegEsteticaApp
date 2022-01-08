import { Bool } from 'node_modules/reselect/es/types';
import React from 'react';

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

export type PickerDataMold = {
	valueAlias: String,
	labelAlias: String
};

export const usePickerData = (data: any[], mold: PickerDataMold): PickerOption[] => { };
