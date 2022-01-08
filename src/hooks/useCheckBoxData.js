import React, { useEffect, useState } from "react";

export const useCheckBoxData = (data = [{}], {
	labelAlias = 'name of label attribute',
	nameAlias = 'attribute name',
}) => {
	const formatFunction = (item) => {
		return ({ value: false, name: item[nameAlias], label: item[labelAlias] });
	};

	const [checkBoxData, setCheckBoxData] = useState(data.map(formatFunction));

	return [checkBoxData, setCheckBoxData];
};
